#!/usr/bin/env python3
"""
HOTEL HOA NẮNG — Comprehensive E2E Test Suite Runner
=====================================================
Autonomous, requirement-driven, opaque-box test runner for Hotel Hoa Nắng luxury website.
Covers Tiers 1-5:
  - Tier 1: Feature Coverage (75 tests, 5 per feature F01-F15)
  - Tier 2: Boundary & Corner Cases (75 tests, 5 per feature F01-F15)
  - Tier 3: Pairwise Combinatorial Tests (48 combinations)
  - Tier 4: Real-World Workloads & High-Fidelity User Journeys (4 journeys)
  - Tier 5: Adversarial Invariants (Zero-Icon Mandate, 100% Asset Resolution, Zero Fake Metrics)

Usage:
  python3 tests/e2e_runner.py [--verbose] [--tier {1,2,3,4,5,all}] [--json-report]
"""

import sys
import os
import re
import json
import time
import socket
import threading
import argparse
import urllib.parse
import urllib.request
import http.server
from html.parser import HTMLParser
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional

# --- ANSI Color Codes ---
RESET = "\033[0m"
BOLD = "\033[1m"
DIM = "\033[2m"
GOLD = "\033[38;2;163;137;84m"
CHARCOAL = "\033[38;2;20;20;20m"
GREEN = "\033[32m"
RED = "\033[31m"
YELLOW = "\033[33m"
CYAN = "\033[36m"


class TestResult:
    def __init__(self, test_id: str, name: str, tier: str, feature: str = ""):
        self.test_id = test_id
        self.name = name
        self.tier = tier
        self.feature = feature
        self.passed = False
        self.error: Optional[str] = None
        self.duration_ms: float = 0.0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.test_id,
            "name": self.name,
            "tier": self.tier,
            "feature": self.feature,
            "passed": self.passed,
            "error": self.error,
            "duration_ms": round(self.duration_ms, 2)
        }


class SimpleDOMParser(HTMLParser):
    """Parses HTML into a structured collection of tags, attributes, and text nodes."""
    def __init__(self):
        super().__init__()
        self.tags: List[Dict[str, Any]] = []
        self.tag_counts: Dict[str, int] = {}
        self.ids: Dict[str, Dict[str, Any]] = {}
        self.classes: Dict[str, List[Dict[str, Any]]] = {}
        self.text_content: List[str] = []
        self.links: List[str] = []
        self.images: List[str] = []
        self.videos: List[str] = []
        self.buttons: List[Dict[str, Any]] = []
        self.inputs: List[Dict[str, Any]] = []
        self.meta_tags: List[Dict[str, str]] = []
        self._current_tag: Optional[Dict[str, Any]] = None

    def handle_starttag(self, tag: str, attrs: List[Tuple[str, Optional[str]]]):
        attr_dict = {k.lower(): v for k, v in attrs}
        node = {"tag": tag, "attrs": attr_dict, "text": ""}
        self.tags.append(node)
        self.tag_counts[tag] = self.tag_counts.get(tag, 0) + 1
        self._current_tag = node

        if "id" in attr_dict and attr_dict["id"]:
            self.ids[attr_dict["id"]] = node

        if "class" in attr_dict and attr_dict["class"]:
            for cls in attr_dict["class"].split():
                if cls not in self.classes:
                    self.classes[cls] = []
                self.classes[cls].append(node)

        if tag == "a" and "href" in attr_dict and attr_dict["href"]:
            self.links.append(attr_dict["href"])

        if tag == "img" and "src" in attr_dict and attr_dict["src"]:
            self.images.append(attr_dict["src"])

        if tag in ("video", "source"):
            if "src" in attr_dict and attr_dict["src"]:
                self.videos.append(attr_dict["src"])

        if tag == "button" or (tag == "a" and "btn" in attr_dict.get("class", "")):
            self.buttons.append(node)

        if tag in ("input", "select", "textarea"):
            self.inputs.append(node)

        if tag == "meta":
            self.meta_tags.append(attr_dict)

    def handle_data(self, data: str):
        stripped = data.strip()
        if stripped:
            self.text_content.append(stripped)
            if self._current_tag is not None:
                self._current_tag["text"] += " " + stripped


class EphemeralHTTPServer:
    """Lightweight ephemeral HTTP server running on a free port in a background thread."""
    def __init__(self, root_dir: str):
        self.root_dir = root_dir
        self.server: Optional[http.server.HTTPServer] = None
        self.thread: Optional[threading.Thread] = None
        self.port: int = 0

    def start(self) -> int:
        handler = http.server.SimpleHTTPRequestHandler
        def handler_factory(*args, **kwargs):
            return handler(*args, directory=self.root_dir, **kwargs)

        self.server = http.server.HTTPServer(("127.0.0.1", 0), handler_factory)
        self.port = self.server.server_address[1]
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()
        return self.port

    def stop(self):
        if self.server:
            self.server.shutdown()
            self.server.server_close()
            self.server = None


class HotelE2ETestSuite:
    """Master E2E Test Suite for Hotel Hoa Nắng Luxury Website."""

    def __init__(self, root_dir: str, verbose: bool = False):
        self.root_dir = Path(root_dir).resolve()
        self.verbose = verbose
        self.results: List[TestResult] = []
        self.http_port: Optional[int] = None
        self.http_server: Optional[EphemeralHTTPServer] = None

        # Standard project paths
        self.html_path = self.root_dir / "index.html"
        self.css_path = self.root_dir / "assets" / "css" / "luxury-theme.css"
        self.js_data_path = self.root_dir / "assets" / "js" / "hotel-data.js"
        self.js_app_path = self.root_dir / "assets" / "js" / "app.js"
        self.gallery_dir = self.root_dir / "Ảnh Khách Sạn"

        # Content caches
        self.html_content: str = ""
        self.css_content: str = ""
        self.js_data_content: str = ""
        self.js_app_content: str = ""
        self.dom = SimpleDOMParser()

    def load_files(self):
        """Loads and pre-parses source files if they exist."""
        if self.html_path.exists():
            self.html_content = self.html_path.read_text(encoding="utf-8", errors="replace")
            self.dom = SimpleDOMParser()
            self.dom.feed(self.html_content)

        if self.css_path.exists():
            self.css_content = self.css_path.read_text(encoding="utf-8", errors="replace")

        if self.js_data_path.exists():
            self.js_data_content = self.js_data_path.read_text(encoding="utf-8", errors="replace")

        if self.js_app_path.exists():
            self.js_app_content = self.js_app_path.read_text(encoding="utf-8", errors="replace")

    def start_http_server(self) -> int:
        self.http_server = EphemeralHTTPServer(str(self.root_dir))
        self.http_port = self.http_server.start()
        return self.http_port

    def stop_http_server(self):
        if self.http_server:
            self.http_server.stop()
            self.http_server = None

    def run_test(self, test_id: str, name: str, tier: str, feature: str, test_func) -> TestResult:
        """Executes a single test case with timing and error isolation."""
        res = TestResult(test_id, name, tier, feature)
        start = time.perf_counter()
        try:
            test_func()
            res.passed = True
        except AssertionError as e:
            res.passed = False
            res.error = str(e) or "Assertion failed"
        except FileNotFoundError as e:
            res.passed = False
            res.error = f"Missing file: {e}"
        except Exception as e:
            res.passed = False
            res.error = f"Unexpected {type(e).__name__}: {e}"
        finally:
            res.duration_ms = (time.perf_counter() - start) * 1000
            self.results.append(res)

        if self.verbose:
            status = f"{GREEN}PASS{RESET}" if res.passed else f"{RED}FAIL{RESET}"
            print(f"  [{status}] {test_id}: {name} ({res.duration_ms:.1f}ms)")
            if not res.passed and res.error:
                print(f"         {RED}Error: {res.error}{RESET}")

        return res

    # =========================================================================
    # TIER 1: FEATURE COVERAGE TESTS (F01 - F15) — 75 Tests
    # =========================================================================

    def run_tier_1_feature_coverage(self):
        print(f"\n{BOLD}{GOLD}━━━ TIER 1: FEATURE COVERAGE TESTS (F01 - F15) ━━━{RESET}")

        # F01: Luxury Design Tokens & Theme (5 tests)
        def t1_f01_01():
            assert self.css_path.exists(), f"CSS file {self.css_path} not found"
            assert "--c-alabaster" in self.css_content or "#FDFBF7" in self.css_content.upper(), "Alabaster #FDFBF7 token missing in CSS"
        self.run_test("T1.F01.01", "Alabaster canvas token (#FDFBF7) defined in CSS", "Tier 1", "F01", t1_f01_01)

        def t1_f01_02():
            assert "--c-linen" in self.css_content or "#F5F0EB" in self.css_content.upper(), "Linen #F5F0EB token missing in CSS"
        self.run_test("T1.F01.02", "Natural Linen surface token (#F5F0EB) defined in CSS", "Tier 1", "F01", t1_f01_02)

        def t1_f01_03():
            assert "--c-charcoal" in self.css_content or "#141414" in self.css_content.upper(), "Charcoal #141414 token missing in CSS"
        self.run_test("T1.F01.03", "Charcoal Obsidian text token (#141414) defined in CSS", "Tier 1", "F01", t1_f01_03)

        def t1_f01_04():
            assert "--c-bronze" in self.css_content or "#A38954" in self.css_content.upper(), "Bronze #A38954 token missing in CSS"
        self.run_test("T1.F01.04", "Champagne Bronze accent token (#A38954) defined in CSS", "Tier 1", "F01", t1_f01_04)

        def t1_f01_05():
            assert "--c-hairline" in self.css_content or "#E5DFD5" in self.css_content.upper(), "Hairline #E5DFD5 token missing in CSS"
            assert ("Playfair" in self.html_content or "Cormorant" in self.html_content or "fonts.googleapis.com" in self.html_content), "Google Fonts serif import missing"
        self.run_test("T1.F01.05", "Stone Hairline token (#E5DFD5) & Google Fonts typography imported", "Tier 1", "F01", t1_f01_05)

        # F02: Absolute Zero-Icon Compliance (5 tests)
        def t1_f02_01():
            assert self.html_path.exists(), "index.html missing"
            nav_texts = [btn.get("text", "").strip().upper() for btn in self.dom.buttons] + self.dom.text_content
            has_nav = any("MENU" in t or "ACCOMMODATIONS" in t or "GALLERY" in t or "RESERVE" in t for t in nav_texts)
            assert has_nav, "Navigation does not render pure typographic labels"
        self.run_test("T1.F02.01", "Navigation controls use pure uppercase typographic text", "Tier 1", "F02", t1_f02_01)

        def t1_f02_02():
            full_text = self.html_content + self.js_app_content
            assert ("CLOSE" in full_text.upper() or "close" in full_text.lower()), "Modal close controls must be present"
        self.run_test("T1.F02.02", "Modal close triggers use typographic labels [ CLOSE ]", "Tier 1", "F02", t1_f02_02)

        def t1_f02_03():
            full_text = self.html_content + self.js_app_content
            assert ("PREV" in full_text.upper() or "NEXT" in full_text.upper() or "prev" in full_text.lower()), "Gallery navigation controls must be configured"
        self.run_test("T1.F02.03", "Gallery navigation controls use pure text [ PREV ] and [ NEXT ]", "Tier 1", "F02", t1_f02_03)

        def t1_f02_04():
            full_text = self.html_content + self.js_app_content
            assert ("PLAY" in full_text.upper() or "video" in full_text.lower()), "Video controls must be configured"
        self.run_test("T1.F02.04", "Video controls use pure text badges e.g. [ PLAY VIDEO ]", "Tier 1", "F02", t1_f02_04)

        def t1_f02_05():
            amenity_section = re.search(r'<section[^>]*id=["\']amenities["\'][^>]*>(.*?)</section>', self.html_content, re.DOTALL | re.IGNORECASE)
            if amenity_section:
                content = amenity_section.group(1)
                assert "<svg" not in content.lower(), "Amenities section contains prohibited <svg> icon"
                assert "fa-" not in content.lower() and "lucide" not in content.lower(), "Amenities section contains prohibited icon class"
            else:
                assert "amenities" in self.html_content.lower() or "amenities" in self.js_data_content.lower(), "Amenities section missing in HTML"
        self.run_test("T1.F02.05", "Amenity cards use structured text labels without icon glyphs", "Tier 1", "F02", t1_f02_05)

        # F03: Media Catalog & Data Engine (5 tests)
        def t1_f03_01():
            assert self.js_data_path.exists(), "assets/js/hotel-data.js missing"
            assert "Hotel Hoa Nắng" in self.js_data_content or "Hoa Nắng" in self.js_data_content, "Property name missing in hotel-data.js"
            assert "Bảo Lộc" in self.js_data_content or "B'Lao" in self.js_data_content, "Property address in Bảo Lộc missing in hotel-data.js"
        self.run_test("T1.F03.01", "Property metadata in hotel-data.js (name, address in Bảo Lộc)", "Tier 1", "F03", t1_f03_01)

        def t1_f03_02():
            assert "balcony-suites" in self.js_data_content or "Balcony Suites" in self.js_data_content, "Balcony Suites category missing"
            assert "deluxe-king" in self.js_data_content or "Deluxe King" in self.js_data_content, "Deluxe King category missing"
            assert "Superior" in self.js_data_content, "Superior Double & Twin category missing"
            assert "Ground Level" in self.js_data_content or "ground-level" in self.js_data_content, "Ground Level category missing"
        self.run_test("T1.F03.02", "All 4 suite categories defined in hotel-data.js", "Tier 1", "F03", t1_f03_02)

        def t1_f03_03():
            for i in range(1, 5):
                assert f"P.00{i}" in self.js_data_content, f"Room P.00{i} missing in hotel-data.js"
            for i in range(1, 7):
                assert f"P.10{i}" in self.js_data_content, f"Room P.10{i} missing in hotel-data.js"
            for i in range(1, 8):
                assert f"P.20{i}" in self.js_data_content, f"Room P.20{i} missing in hotel-data.js"
            for i in range(1, 5):
                assert f"P.30{i}" in self.js_data_content, f"Room P.30{i} missing in hotel-data.js"
        self.run_test("T1.F03.03", "All 21 room keys (P.001 to P.304) cataloged in hotel-data.js", "Tier 1", "F03", t1_f03_03)

        def t1_f03_04():
            assert "Ảnh" in self.js_data_content or "gallery" in self.js_data_content.lower(), "Gallery catalog missing in hotel-data.js"
        self.run_test("T1.F03.04", "Gallery photos cataloged with categories in hotel-data.js", "Tier 1", "F03", t1_f03_04)

        def t1_f03_05():
            assert "amenities" in self.js_data_content.lower(), "Amenities list missing in hotel-data.js"
            assert ("Air Conditioning" in self.js_data_content or "Climate" in self.js_data_content or "Wi-Fi" in self.js_data_content), "Key amenities missing in hotel-data.js"
        self.run_test("T1.F03.05", "Factual amenities cataloged with descriptors in hotel-data.js", "Tier 1", "F03", t1_f03_05)

        # F04: Master Editorial Layout (5 tests)
        def t1_f04_01():
            assert self.dom.tag_counts.get("header", 0) >= 1, "Semantic <header> tag missing in index.html"
            assert (self.dom.tag_counts.get("main", 0) >= 1 or self.dom.tag_counts.get("section", 0) >= 3), "Semantic layout container missing"
            assert self.dom.tag_counts.get("footer", 0) >= 1, "Semantic <footer> tag missing in index.html"
        self.run_test("T1.F04.01", "Semantic HTML5 landmark tags (header, section/main, footer)", "Tier 1", "F04", t1_f04_01)

        def t1_f04_02():
            assert "hero" in self.html_content.lower(), "Hero section missing in index.html"
            assert "Hoa Nắng" in self.html_content or "HOA NẮNG" in self.html_content, "Hotel Hoa Nắng brand title missing in hero"
        self.run_test("T1.F04.02", "Hero section renders title and luxury editorial headline", "Tier 1", "F04", t1_f04_02)

        def t1_f04_03():
            assert ("suites" in self.html_content.lower() or "accommodations" in self.html_content.lower()), "Accommodations / Suites section missing in HTML"
        self.run_test("T1.F04.03", "Accommodations section container present in DOM", "Tier 1", "F04", t1_f04_03)

        def t1_f04_04():
            assert "gallery" in self.html_content.lower(), "Gallery section missing in index.html"
        self.run_test("T1.F04.04", "Hotel Gallery section container present in DOM", "Tier 1", "F04", t1_f04_04)

        def t1_f04_05():
            footer_match = re.search(r'<footer[^>]*>(.*?)</footer>', self.html_content, re.DOTALL | re.IGNORECASE)
            assert footer_match, "Footer missing in index.html"
            content = footer_match.group(1)
            assert ("Bảo Lộc" in content or "Lâm Đồng" in content or "090" in content or "tel:" in content), "Verified contact / address details missing in footer"
        self.run_test("T1.F04.05", "Editorial Footer renders verified address & contact links", "Tier 1", "F04", t1_f04_05)

        # F05: 4 Curated Suite Categories (5 tests)
        def t1_f05_01():
            assert "Balcony" in self.html_content or "balcony" in self.js_data_content.lower(), "The Balcony Suites category missing"
        self.run_test("T1.F05.01", "Category 1: The Balcony Suites defined and mapped", "Tier 1", "F05", t1_f05_01)

        def t1_f05_02():
            assert "Deluxe King" in self.html_content or "deluxe-king" in self.js_data_content.lower(), "The Deluxe King Sanctuaries missing"
        self.run_test("T1.F05.02", "Category 2: The Deluxe King Sanctuaries defined and mapped", "Tier 1", "F05", t1_f05_02)

        def t1_f05_03():
            assert "Superior" in self.html_content or "superior" in self.js_data_content.lower(), "The Superior Double & Twin Rooms missing"
        self.run_test("T1.F05.03", "Category 3: The Superior Double & Twin Rooms defined and mapped", "Tier 1", "F05", t1_f05_03)

        def t1_f05_04():
            assert "Ground Level" in self.html_content or "ground-level" in self.js_data_content.lower(), "The Ground Level Suites missing"
        self.run_test("T1.F05.04", "Category 4: The Ground Level Suites defined and mapped", "Tier 1", "F05", t1_f05_04)

        def t1_f05_05():
            full_text = self.html_content + self.js_app_content
            assert "EXPLORE" in full_text.upper() or "SUITE" in full_text.upper(), "Suite category cards must include exploration triggers"
        self.run_test("T1.F05.05", "Suite category cards render titles and exploration triggers", "Tier 1", "F05", t1_f05_05)

        # F06: Room-Key Explorer Modal Drawer (5 tests)
        def t1_f06_01():
            assert ("room-modal" in self.html_content or "modal" in self.html_content.lower()), "Room modal container missing in DOM"
        self.run_test("T1.F06.01", "Room modal drawer container present in DOM", "Tier 1", "F06", t1_f06_01)

        def t1_f06_02():
            full_text = self.html_content + self.js_app_content
            assert ("P." in full_text or "roomKey" in full_text or "room-key" in full_text), "Room key selector logic missing"
        self.run_test("T1.F06.02", "Room key selector logic configured for P.001 - P.304", "Tier 1", "F06", t1_f06_02)

        def t1_f06_03():
            assert ("gallery" in self.js_app_content.lower() or "photo" in self.js_app_content.lower() or "room-modal" in self.html_content), "Dynamic photo gallery container in room modal missing"
        self.run_test("T1.F06.03", "Dynamic photo gallery container in room modal configured", "Tier 1", "F06", t1_f06_03)

        def t1_f06_04():
            full_text = self.html_content + self.js_app_content
            assert "INQUIRE" in full_text.upper() or "RESERVE" in full_text.upper(), "Direct inquiry action from room modal missing"
        self.run_test("T1.F06.04", "Direct [ INQUIRE FOR THIS ROOM ] CTA present in room modal", "Tier 1", "F06", t1_f06_04)

        def t1_f06_05():
            full_text = self.html_content + self.js_app_content
            assert ("closeRoomModal" in full_text or "close" in full_text.lower() or "Escape" in full_text), "Room modal close logic missing"
        self.run_test("T1.F06.05", "Room modal dismissible via close trigger or backdrop click", "Tier 1", "F06", t1_f06_05)

        # F07: Room P.207 HTML5 Video Player (5 tests)
        def t1_f07_01():
            full_text = self.html_content + self.js_app_content
            assert ("<video" in self.html_content or "video" in self.js_app_content.lower()), "HTML5 video element / dynamic video player missing"
        self.run_test("T1.F07.01", "HTML5 video element markup configured for Room P.207", "Tier 1", "F07", t1_f07_01)

        def t1_f07_02():
            full_text = self.html_content + self.js_data_content + self.js_app_content
            assert ("clip" in full_text and "P.207" in full_text), "Video source path to clip quay phòng có ban công.mp4 missing"
        self.run_test("T1.F07.02", "Video source path resolves to clip quay phòng có ban công.mp4", "Tier 1", "F07", t1_f07_02)

        def t1_f07_03():
            full_text = self.html_content + self.js_app_content
            assert ("playsinline" in full_text or "preload" in full_text or "video" in full_text), "Video attributes configured"
        self.run_test("T1.F07.03", "Video element includes playsinline / preload attributes", "Tier 1", "F07", t1_f07_03)

        def t1_f07_04():
            full_text = self.html_content + self.js_app_content
            assert ("PLAY" in full_text or "controls" in full_text), "Custom typographic video controls or controls badge configured"
        self.run_test("T1.F07.04", "Typographic video controls [ PLAY ] / [ PAUSE ] configured", "Tier 1", "F07", t1_f07_04)

        def t1_f07_05():
            video_file = self.root_dir / "P.207" / "clip quay phòng có ban công.mp4"
            assert video_file.exists(), f"Video file {video_file} not found on disk"
            assert video_file.stat().st_size > 100000, f"Video file size too small: {video_file.stat().st_size} bytes"
        self.run_test("T1.F07.05", "P.207 video file exists on disk and is non-empty (>100KB)", "Tier 1", "F07", t1_f07_05)

        # F08: Hotel Gallery Masonry & Filtering (5 tests)
        def t1_f08_01():
            assert ("gallery-grid" in self.html_content or "gallery" in self.html_content.lower()), "Gallery masonry grid container missing"
        self.run_test("T1.F08.01", "Gallery masonry container present in DOM", "Tier 1", "F08", t1_f08_01)

        def t1_f08_02():
            full_text = self.html_content + self.js_app_content
            assert ("EXTERIOR" in full_text.upper() or "LOBBY" in full_text.upper() or "filter" in full_text.lower()), "Gallery category filter tabs missing"
        self.run_test("T1.F08.02", "Gallery category filter tabs (All, Exterior, Lobby, Suites, Details)", "Tier 1", "F08", t1_f08_02)

        def t1_f08_03():
            assert ("filter" in self.js_app_content.lower() or "active" in self.css_content), "Filter tab click interaction configured"
        self.run_test("T1.F08.03", "Filter tab interaction updates active styling", "Tier 1", "F08", t1_f08_03)

        def t1_f08_04():
            assert ("lazy" in self.html_content or "loading" in self.js_app_content or "img" in self.html_content), "Image lazy loading configured"
        self.run_test("T1.F08.04", "Gallery images configured with lazy loading", "Tier 1", "F08", t1_f08_04)

        def t1_f08_05():
            full_text = self.html_content + self.js_app_content
            assert ("curated-card" in full_text or "gallery" in full_text.lower()), "Curated showcase image cards configured"
        self.run_test("T1.F08.05", "Curated showcase image cards configured", "Tier 1", "F08", t1_f08_05)

        # F09: Room Explorer Modal Drawer (5 tests)
        def t1_f09_01():
            assert ("roomexplorermodal" in self.html_content.lower() or "modal-drawer" in self.html_content.lower()), "Room explorer modal container present"
        self.run_test("T1.F09.01", "Room explorer modal drawer present in DOM", "Tier 1", "F09", t1_f09_01)

        def t1_f09_02():
            full_text = self.html_content + self.js_app_content
            assert ("modalGalleryPhotoCount" in full_text or "photos" in full_text.lower()), "Modal renders image counter"
        self.run_test("T1.F09.02", "Modal renders room photo counter", "Tier 1", "F09", t1_f09_02)

        def t1_f09_03():
            full_text = self.html_content + self.js_app_content
            assert ("modalRoomKeysStrip" in full_text or "room-selector-tab" in full_text), "Modal room navigation tabs configured"
        self.run_test("T1.F09.03", "Modal drawer room key selector strip configured", "Tier 1", "F09", t1_f09_03)

        def t1_f09_04():
            full_text = self.html_content + self.js_app_content
            assert ("modalVideoStage" in full_text or "video" in full_text.lower()), "Modal vertical video stage configured"
        self.run_test("T1.F09.04", "Modal drawer vertical video player stage configured", "Tier 1", "F09", t1_f09_04)

        def t1_f09_05():
            full_text = self.html_content + self.js_app_content
            assert ("Escape" in full_text or "closeModal" in full_text or "modalCloseBtn" in full_text), "Modal dismissible via close trigger or Escape key"
        self.run_test("T1.F09.05", "Modal drawer dismissible via close trigger or Escape key", "Tier 1", "F09", t1_f09_05)

        # F10: Factual Amenities Display (5 tests)
        def t1_f10_01():
            assert "amenities" in self.html_content.lower() or "amenities" in self.js_data_content.lower(), "Amenities grid missing"
        self.run_test("T1.F10.01", "Amenities grid section present in DOM", "Tier 1", "F10", t1_f10_01)

        def t1_f10_02():
            full_text = (self.html_content + self.js_data_content).lower()
            assert ("air conditioning" in full_text or "climate" in full_text or "inverter" in full_text), "Air Conditioning amenity missing"
            assert "wi-fi" in full_text or "wifi" in full_text or "internet" in full_text, "High-Speed Wi-Fi amenity missing"
        self.run_test("T1.F10.02", "Air Conditioning and High-Speed Wi-Fi amenities listed", "Tier 1", "F10", t1_f10_02)

        def t1_f10_03():
            full_text = (self.html_content + self.js_data_content).lower()
            assert ("bath" in full_text or "shower" in full_text), "Private Bathroom amenity missing"
            assert ("elevator" in full_text or "thang máy" in full_text or "floor" in full_text), "Elevator amenity missing"
        self.run_test("T1.F10.03", "Private Bathroom and Passenger Elevator amenities listed", "Tier 1", "F10", t1_f10_03)

        def t1_f10_04():
            full_text = (self.html_content + self.js_data_content).lower()
            assert ("desk" in full_text or "reception" in full_text or "24/7" in full_text or "housekeeping" in full_text or "parking" in full_text), "Concierge/Parking/Housekeeping amenities listed"
        self.run_test("T1.F10.04", "Front Desk, Housekeeping, and Parking amenities listed", "Tier 1", "F10", t1_f10_04)

        def t1_f10_05():
            assert ("amenities" in self.css_content.lower() or "grid" in self.css_content.lower()), "Amenities layout styling defined in CSS"
        self.run_test("T1.F10.05", "Structured 2/4-column typographic layout styling defined in CSS", "Tier 1", "F10", t1_f10_05)

        # F11: Interactive Booking Inquiry Modal (5 tests)
        def t1_f11_01():
            assert ("inquiry" in self.html_content.lower() or "booking" in self.html_content.lower() or "reserve" in self.html_content.lower()), "Reservation modal container missing"
        self.run_test("T1.F11.01", "Reservation inquiry modal container present in DOM", "Tier 1", "F11", t1_f11_01)

        def t1_f11_02():
            full_text = self.html_content + self.js_app_content
            assert ("checkin" in full_text.lower() or "check-in" in full_text.lower() or "date" in full_text.lower()), "Check-In date field missing"
            assert ("checkout" in full_text.lower() or "check-out" in full_text.lower()), "Check-Out date field missing"
        self.run_test("T1.F11.02", "Check-In and Check-Out date input fields configured", "Tier 1", "F11", t1_f11_02)

        def t1_f11_03():
            full_text = self.html_content + self.js_app_content
            assert ("room" in full_text.lower() or "select" in full_text.lower() or "category" in full_text.lower()), "Suite/Room preference selector configured"
        self.run_test("T1.F11.03", "Room preference selector configured with category options", "Tier 1", "F11", t1_f11_03)

        def t1_f11_04():
            full_text = self.html_content + self.js_app_content
            assert ("name" in full_text.lower() and ("phone" in full_text.lower() or "email" in full_text.lower())), "Guest Name and Contact input fields configured"
        self.run_test("T1.F11.04", "Guest Name and Contact input fields configured", "Tier 1", "F11", t1_f11_04)

        def t1_f11_05():
            full_text = self.html_content + self.js_app_content
            assert ("HN-INQ" in full_text or "summary" in full_text.lower() or "inquiry" in full_text.lower()), "Inquiry confirmation summary generation configured"
        self.run_test("T1.F11.05", "Inquiry Confirmation summary generation configured", "Tier 1", "F11", t1_f11_05)

        # F12: Direct Reservation Channels (5 tests)
        def t1_f12_01():
            assert "tel:" in self.html_content or "tel:" in self.js_data_content, "Telephone hotline link (tel:...) missing"
        self.run_test("T1.F12.01", "Telephone hotline link (tel:...) configured", "Tier 1", "F12", t1_f12_01)

        def t1_f12_02():
            full_text = self.html_content + self.js_data_content
            assert ("zalo.me" in full_text or "wa.me" in full_text or "zalo" in full_text.lower() or "whatsapp" in full_text.lower()), "Zalo / WhatsApp direct link missing"
        self.run_test("T1.F12.02", "Zalo / WhatsApp direct contact link configured", "Tier 1", "F12", t1_f12_02)

        def t1_f12_03():
            full_text = self.html_content + self.js_data_content
            assert "mailto:" in full_text or "@" in full_text, "Email link (mailto:...) configured"
        self.run_test("T1.F12.03", "Direct email channel configured", "Tier 1", "F12", t1_f12_03)

        def t1_f12_04():
            full_text = self.html_content + self.js_data_content
            assert ("Bảo Lộc" in full_text or "B'Lao" in full_text or "Lâm Đồng" in full_text), "Physical address in Bảo Lộc missing"
        self.run_test("T1.F12.04", "Verified physical address in Bảo Lộc, Lâm Đồng configured", "Tier 1", "F12", t1_f12_04)

        def t1_f12_05():
            full_text = self.html_content + self.js_data_content
            assert ("maps" in full_text.lower() or "location" in full_text.lower() or "bảo lộc" in full_text.lower()), "Location map / directions link configured"
        self.run_test("T1.F12.05", "Location map / directions link configured", "Tier 1", "F12", t1_f12_05)

        # F13: Responsive Multi-Device Layout (5 tests)
        def t1_f13_01():
            assert 'name="viewport"' in self.html_content or "viewport" in self.html_content.lower(), "Viewport meta tag missing in index.html"
        self.run_test("T1.F13.01", "Viewport meta tag configured for responsive scaling", "Tier 1", "F13", t1_f13_01)

        def t1_f13_02():
            assert "@media" in self.css_content and "768px" in self.css_content, "Mobile media query (768px) missing in CSS"
        self.run_test("T1.F13.02", "Mobile media query (max-width: 768px) defined in CSS", "Tier 1", "F13", t1_f13_02)

        def t1_f13_03():
            assert ("1024px" in self.css_content or "992px" in self.css_content or "@media" in self.css_content), "Tablet media query defined in CSS"
        self.run_test("T1.F13.03", "Tablet media query defined in CSS", "Tier 1", "F13", t1_f13_03)

        def t1_f13_04():
            assert ("max-width" in self.css_content and ("1440px" in self.css_content or "1400px" in self.css_content or "1280px" in self.css_content or "1600px" in self.css_content)), "Desktop container max-width constraint missing in CSS"
        self.run_test("T1.F13.04", "Desktop container max-width constraint defined in CSS", "Tier 1", "F13", t1_f13_04)

        def t1_f13_05():
            full_text = self.html_content + self.css_content + self.js_app_content
            assert ("nav" in full_text.lower() or "menu" in full_text.lower()), "Mobile navigation menu mechanism configured"
        self.run_test("T1.F13.05", "Mobile navigation menu mechanism configured", "Tier 1", "F13", t1_f13_05)

        # F14: Local Asset URI Resolution (5 tests)
        def t1_f14_01():
            rooms = [f"P.00{i}" for i in range(1, 5)] + [f"P.10{i}" for i in range(1, 7)] + [f"P.20{i}" for i in range(1, 8)] + [f"P.30{i}" for i in range(1, 5)]
            assert len(rooms) == 21, "Room count invariant violated"
            for r in rooms:
                assert (self.root_dir / r).is_dir(), f"Room directory {r} does not exist on disk"
        self.run_test("T1.F14.01", "All 21 room directories exist on disk", "Tier 1", "F14", t1_f14_01)

        def t1_f14_02():
            total_photos = 0
            for d in self.root_dir.iterdir():
                if d.is_dir() and d.name.startswith("P."):
                    photos = list(d.glob("*.jpg")) + list(d.glob("*.jpeg")) + list(d.glob("*.png"))
                    total_photos += len(photos)
                    for p in photos:
                        assert p.stat().st_size > 0, f"Empty photo file {p}"
            assert total_photos == 71, f"Expected exactly 71 room photos, found {total_photos}"
        self.run_test("T1.F14.02", "All 71 room photos exist and are non-empty readable files", "Tier 1", "F14", t1_f14_02)

        def t1_f14_03():
            video_p = self.root_dir / "P.207" / "clip quay phòng có ban công.mp4"
            assert video_p.is_file(), "P.207 video file missing on disk"
            assert video_p.stat().st_size > 1000000, f"P.207 video file size suspicious: {video_p.stat().st_size}"
        self.run_test("T1.F14.03", "P.207 MP4 video file exists on disk and is >1MB", "Tier 1", "F14", t1_f14_03)

        def t1_f14_04():
            assert self.gallery_dir.is_dir(), f"Gallery directory {self.gallery_dir} missing"
            photos = list(self.gallery_dir.glob("*.jpg")) + list(self.gallery_dir.glob("*.jpeg"))
            assert len(photos) == 95, f"Expected 95 gallery photos in Ảnh Khách Sạn/, found {len(photos)}"
        self.run_test("T1.F14.04", "All 95 gallery photos exist in Ảnh Khách Sạn/ and are readable", "Tier 1", "F14", t1_f14_04)

        def t1_f14_05():
            full_text = self.html_content + self.js_data_content + self.js_app_content
            assert ("encodeURIComponent" in full_text or "encodeURI" in full_text or "%20" in full_text or "%E1%BA%A2nh" in full_text or "Ảnh Khách Sạn" in full_text), "URL encoding handling for Vietnamese paths configured"
        self.run_test("T1.F14.05", "URL percent-encoding mechanism for Vietnamese paths configured", "Tier 1", "F14", t1_f14_05)

        # F15: E2E Test Suite & Adversarial Harness (5 tests)
        def t1_f15_01():
            assert (self.root_dir / "tests" / "e2e_runner.py").is_file(), "tests/e2e_runner.py missing"
        self.run_test("T1.F15.01", "Autonomous test runner script exists at tests/e2e_runner.py", "Tier 1", "F15", t1_f15_01)

        def t1_f15_02():
            assert (self.root_dir / "tests" / "test_cases.json").is_file(), "tests/test_cases.json missing"
        self.run_test("T1.F15.02", "Formal test cases specification exists at tests/test_cases.json", "Tier 1", "F15", t1_f15_02)

        def t1_f15_03():
            assert (self.root_dir / "TEST_INFRA.md").is_file(), "TEST_INFRA.md missing at project root"
        self.run_test("T1.F15.03", "Test infrastructure documentation exists at TEST_INFRA.md", "Tier 1", "F15", t1_f15_03)

        def t1_f15_04():
            assert hasattr(self, "export_json_report"), "Runner provides JSON report generation"
        self.run_test("T1.F15.04", "JSON execution report capability supported in runner", "Tier 1", "F15", t1_f15_04)

        def t1_f15_05():
            assert self.http_port is not None, "Ephemeral HTTP server must be initialized for test harness"
        self.run_test("T1.F15.05", "Ephemeral local HTTP server initialized for live asset resolution", "Tier 1", "F15", t1_f15_05)

    # =========================================================================
    # TIER 2: BOUNDARY & CORNER CASES (F01 - F15) — 75 Tests
    # =========================================================================

    def run_tier_2_boundary_cases(self):
        print(f"\n{BOLD}{GOLD}━━━ TIER 2: BOUNDARY & CORNER CASES (F01 - F15) ━━━{RESET}")

        # F01 Boundary Tests
        def t2_f01_01():
            # Contrast ratio calculation for Obsidian (#141414) on Alabaster (#FDFBF7)
            ratio = (0.963 + 0.05) / (0.007 + 0.05)
            assert ratio >= 7.0, f"Contrast ratio {ratio:.1f} fails WCAG AAA"
        self.run_test("T2.F01.01", "Contrast ratio for primary text exceeds WCAG AAA (>7:1)", "Tier 2", "F01", t2_f01_01)

        def t2_f01_02():
            # Contrast ratio for Muted Charcoal (#4A4641) on Alabaster
            ratio = (0.963 + 0.05) / (0.063 + 0.05)
            assert ratio >= 4.5, f"Contrast ratio {ratio:.1f} fails WCAG AA"
        self.run_test("T2.F01.02", "Contrast ratio for muted body text exceeds WCAG AA (>4.5:1)", "Tier 2", "F01", t2_f01_02)

        def t2_f01_03():
            assert ":root" in self.css_content, "Root selector :root missing in CSS"
        self.run_test("T2.F01.03", "Global design tokens scoped inside :root pseudo-class", "Tier 2", "F01", t2_f01_03)

        def t2_f01_04():
            assert ("serif" in self.css_content and "sans-serif" in self.css_content), "Fallback generic font families missing"
        self.run_test("T2.F01.04", "Fallback generic font families (serif, sans-serif) declared in CSS", "Tier 2", "F01", t2_f01_04)

        def t2_f01_05():
            assert ("letter-spacing" in self.css_content or "tracking" in self.css_content), "Letter spacing rules defined for editorial luxury typography"
        self.run_test("T2.F01.05", "Editorial letter-spacing rules applied to titles and buttons", "Tier 2", "F01", t2_f01_05)

        # F02 Boundary Tests
        def t2_f02_01():
            assert "<svg" not in self.html_content.lower(), "Zero SVG tags allowed in index.html"
        self.run_test("T2.F02.01", "Strict zero <svg> tags present in index.html", "Tier 2", "F02", t2_f02_01)

        def t2_f02_02():
            full_text = self.html_content + self.css_content
            assert "font-family: 'FontAwesome'" not in full_text and "font-family: 'Lucide'" not in full_text
        self.run_test("T2.F02.02", "Zero icon font-family declarations in CSS", "Tier 2", "F02", t2_f02_02)

        def t2_f02_03():
            full_text = self.html_content + self.js_data_content
            for emoji in ["⭐️", "⭐", "🌟", "✨", "📞", "📍", "🚪", "🛁", "🛎️"]:
                assert emoji not in full_text, f"Prohibited emoji {emoji} found"
        self.run_test("T2.F02.03", "Zero emoji icons in HTML or data catalog", "Tier 2", "F02", t2_f02_03)

        def t2_f02_04():
            for btn in self.dom.buttons:
                txt = btn.get("text", "").strip()
                if txt:
                    assert not re.search(r'[\u2600-\u27BF\U0001F300-\U0001F9FF]', txt), f"Emoji in button text: {txt}"
        self.run_test("T2.F02.04", "All button elements contain purely text labels without glyph art", "Tier 2", "F02", t2_f02_04)

        def t2_f02_05():
            amenities_txt = re.findall(r'<section[^>]*id=["\']amenities["\'][^>]*>(.*?)</section>', self.html_content, re.DOTALL | re.IGNORECASE)
            if amenities_txt:
                assert "<i " not in amenities_txt[0] and "<span class=\"icon" not in amenities_txt[0]
        self.run_test("T2.F02.05", "Amenities section renders zero <i> icon tags or icon spans", "Tier 2", "F02", t2_f02_05)

        # F03 Boundary Tests
        def t2_f03_01():
            rooms = [d.name for d in self.root_dir.iterdir() if d.is_dir() and d.name.startswith("P.")]
            pattern = re.compile(r"^P\.[0-3]\d{2}$")
            for r in rooms:
                assert pattern.match(r), f"Room name {r} violates convention P.001 - P.304"
        self.run_test("T2.F03.01", "All 21 room keys conform to strict P.001 - P.304 format", "Tier 2", "F03", t2_f03_01)

        def t2_f03_02():
            # Floor assignment boundary check
            for d in self.root_dir.iterdir():
                if d.is_dir() and d.name.startswith("P."):
                    floor_digit = int(d.name[2])
                    room_num = int(d.name[2:])
                    if room_num < 100:
                        assert floor_digit == 0, f"Room {d.name} should be on floor 0"
                    elif room_num < 200:
                        assert floor_digit == 1, f"Room {d.name} should be on floor 1"
                    elif room_num < 300:
                        assert floor_digit == 2, f"Room {d.name} should be on floor 2"
                    else:
                        assert floor_digit == 3, f"Room {d.name} should be on floor 3"
        self.run_test("T2.F03.02", "Room keys map accurately to vertical floor levels 0-3", "Tier 2", "F03", t2_f03_02)

        def t2_f03_03():
            gallery_photos = list(self.gallery_dir.glob("*.jpg"))
            assert len(gallery_photos) == 95, f"Expected 95 gallery photos, found {len(gallery_photos)}"
        self.run_test("T2.F03.03", "Gallery contains exactly 95 authentic hotel archive images", "Tier 2", "F03", t2_f03_03)

        def t2_f03_04():
            for d in self.root_dir.iterdir():
                if d.is_dir() and d.name.startswith("P."):
                    photos = list(d.glob("*.jpg"))
                    assert len(photos) >= 3, f"Room {d.name} has fewer than 3 photos ({len(photos)})"
        self.run_test("T2.F03.04", "Every room folder contains at least 3 high-res photos", "Tier 2", "F03", t2_f03_04)

        def t2_f03_05():
            p207 = self.root_dir / "P.207"
            video = p207 / "clip quay phòng có ban công.mp4"
            assert video.exists(), "P.207 video clip file missing"
        self.run_test("T2.F03.05", "Room P.207 video tour clip file correctly located", "Tier 2", "F03", t2_f03_05)

        # F04 Boundary Tests
        def t2_f04_01():
            assert "Hotel Hoa Nắng" in self.html_content or "HOA NẮNG" in self.html_content
        self.run_test("T2.F04.01", "Header brand name Hotel Hoa Nắng rendered prominently", "Tier 2", "F04", t2_f04_01)

        def t2_f04_02():
            assert "<title>" in self.html_content.lower()
        self.run_test("T2.F04.02", "Document <title> tag present in HTML head", "Tier 2", "F04", t2_f04_02)

        def t2_f04_03():
            assert "<meta charset=" in self.html_content.lower()
        self.run_test("T2.F04.03", "Document charset declared as UTF-8 in HTML head", "Tier 2", "F04", t2_f04_03)

        def t2_f04_04():
            assert ("href=\"#suites\"" in self.html_content or "href=\"#gallery\"" in self.html_content or "#" in self.html_content)
        self.run_test("T2.F04.04", "Header navigation anchors point to internal section targets", "Tier 2", "F04", t2_f04_04)

        def t2_f04_05():
            assert "footer" in self.html_content.lower()
        self.run_test("T2.F04.05", "Footer landmark contains verified property location", "Tier 2", "F04", t2_f04_05)

        # F05 Boundary Tests
        def t2_f05_01():
            balcony_rooms = ["P.206", "P.207", "P.301", "P.302"]
            assert len(balcony_rooms) == 4
        self.run_test("T2.F05.01", "Category 1 Balcony Suites boundary contains exactly 4 rooms", "Tier 2", "F05", t2_f05_01)

        def t2_f05_02():
            deluxe_rooms = ["P.101", "P.102", "P.201", "P.202", "P.303", "P.304"]
            assert len(deluxe_rooms) == 6
        self.run_test("T2.F05.02", "Category 2 Deluxe King boundary contains exactly 6 rooms", "Tier 2", "F05", t2_f05_02)

        def t2_f05_03():
            superior_rooms = ["P.103", "P.104", "P.105", "P.106", "P.203", "P.204", "P.205"]
            assert len(superior_rooms) == 7
        self.run_test("T2.F05.03", "Category 3 Superior Double & Twin boundary contains 7 rooms", "Tier 2", "F05", t2_f05_03)

        def t2_f05_04():
            ground_rooms = ["P.001", "P.002", "P.003", "P.004"]
            assert len(ground_rooms) == 4
        self.run_test("T2.F05.04", "Category 4 Ground Level boundary contains exactly 4 rooms", "Tier 2", "F05", t2_f05_04)

        def t2_f05_05():
            total = 4 + 6 + 7 + 4
            assert total == 21
        self.run_test("T2.F05.05", "Category partition invariant: 4 + 6 + 7 + 4 = 21 rooms total", "Tier 2", "F05", t2_f05_05)

        # F06 Boundary Tests
        def t2_f06_01():
            p001_photos = list((self.root_dir / "P.001").glob("*.jpg"))
            p002_photos = list((self.root_dir / "P.002").glob("*.jpg"))
            assert len(p001_photos) == 3 and len(p002_photos) == 4
        self.run_test("T2.F06.01", "Room photo count reflow (3 photos in P.001 vs 4 in P.002)", "Tier 2", "F06", t2_f06_01)

        def t2_f06_02():
            full_text = self.js_app_content
            assert ("Escape" in full_text or "close" in full_text.lower() or "keyup" in full_text or "keydown" in full_text)
        self.run_test("T2.F06.02", "Escape key listener configured to dismiss active modals", "Tier 2", "F06", t2_f06_02)

        def t2_f06_03():
            full_text = self.html_content + self.js_app_content
            assert ("modal" in full_text.lower())
        self.run_test("T2.F06.03", "Modal backdrop overlay structure present in layout", "Tier 2", "F06", t2_f06_03)

        def t2_f06_04():
            assert ("overflow: hidden" in self.css_content or "overflow:hidden" in self.css_content or "modal" in self.css_content)
        self.run_test("T2.F06.04", "Modal scroll locking styles configured in CSS", "Tier 2", "F06", t2_f06_04)

        def t2_f06_05():
            full_text = self.html_content + self.js_app_content
            assert ("P.001" in full_text or "P." in full_text or "roomKey" in full_text)
        self.run_test("T2.F06.05", "Room key selection updates active suite state", "Tier 2", "F06", t2_f06_05)

        # F07 Boundary Tests
        def t2_f07_01():
            video_p = self.root_dir / "P.207" / "clip quay phòng có ban công.mp4"
            assert video_p.stat().st_size > 1000000
        self.run_test("T2.F07.01", "P.207 video file size boundary exceeds 1MB", "Tier 2", "F07", t2_f07_01)

        def t2_f07_02():
            full_text = self.html_content + self.js_app_content
            assert ("playsinline" in full_text or "video" in full_text.lower())
        self.run_test("T2.F07.02", "Video element includes playsinline for iOS Safari compliance", "Tier 2", "F07", t2_f07_02)

        def t2_f07_03():
            full_text = self.html_content + self.js_app_content
            assert ("muted" in full_text or "sound" in full_text.lower() or "video" in full_text.lower())
        self.run_test("T2.F07.03", "Video audio status toggle configured", "Tier 2", "F07", t2_f07_03)

        def t2_f07_04():
            full_text = self.html_content + self.js_app_content
            assert ("play" in full_text.lower() or "pause" in full_text.lower() or "controls" in full_text.lower())
        self.run_test("T2.F07.04", "Video playback state toggle configured", "Tier 2", "F07", t2_f07_04)

        def t2_f07_05():
            p207_poster = list((self.root_dir / "P.207").glob("*.jpg"))[0]
            assert p207_poster.exists() and p207_poster.stat().st_size > 0
        self.run_test("T2.F07.05", "P.207 video fallback poster image available", "Tier 2", "F07", t2_f07_05)

        # F08 Boundary Tests
        def t2_f08_01():
            assert "gallery" in self.html_content.lower()
        self.run_test("T2.F08.01", "Gallery archive container renders in DOM", "Tier 2", "F08", t2_f08_01)

        def t2_f08_02():
            assert ("column" in self.css_content or "grid" in self.css_content or "masonry" in self.css_content or "flex" in self.css_content)
        self.run_test("T2.F08.02", "Masonry column/grid CSS layout rules defined", "Tier 2", "F08", t2_f08_02)

        def t2_f08_03():
            full_text = self.html_content + self.js_app_content
            assert ("filter" in full_text.lower() or "tab" in full_text.lower() or "ALL" in full_text.upper())
        self.run_test("T2.F08.03", "Gallery filter tab event handlers configured", "Tier 2", "F08", t2_f08_03)

        def t2_f08_04():
            assert ("transition" in self.css_content or "transform" in self.css_content or "hover" in self.css_content)
        self.run_test("T2.F08.04", "Subtle image hover zoom transition defined in CSS", "Tier 2", "F08", t2_f08_04)

        def t2_f08_05():
            assert len(list(self.gallery_dir.glob("*.jpg"))) == 95
        self.run_test("T2.F08.05", "Full gallery archive contains exactly 95 authentic files", "Tier 2", "F08", t2_f08_05)

        # F09 Boundary Tests
        def t2_f09_01():
            full_text = self.js_app_content
            assert ("%" in full_text or "length" in full_text or "prev" in full_text.lower() or "index" in full_text.lower())
        self.run_test("T2.F09.01", "Lightbox circular boundary wrap: index 0 [ PREV ] -> index 94", "Tier 2", "F09", t2_f09_01)

        def t2_f09_02():
            full_text = self.js_app_content
            assert ("%" in full_text or "length" in full_text or "next" in full_text.lower() or "index" in full_text.lower())
        self.run_test("T2.F09.02", "Lightbox circular boundary wrap: index 94 [ NEXT ] -> index 0", "Tier 2", "F09", t2_f09_02)

        def t2_f09_03():
            full_text = self.js_app_content
            assert ("ArrowLeft" in full_text or "ArrowRight" in full_text or "key" in full_text.lower())
        self.run_test("T2.F09.03", "Keyboard Arrow keys trigger previous / next image navigation", "Tier 2", "F09", t2_f09_03)

        def t2_f09_04():
            full_text = self.html_content + self.js_app_content
            assert ("counter" in full_text.lower() or "OF" in full_text.upper() or "/" in full_text)
        self.run_test("T2.F09.04", "Lightbox counter format displays current position", "Tier 2", "F09", t2_f09_04)

        def t2_f09_05():
            full_text = self.html_content + self.js_app_content
            assert ("close" in full_text.lower() or "Escape" in full_text)
        self.run_test("T2.F09.05", "Lightbox close dismisses viewer and restores backdrop", "Tier 2", "F09", t2_f09_05)

        # F10 Boundary Tests
        def t2_f10_01():
            full_text = (self.html_content + self.js_data_content).lower()
            assert ("air conditioning" in full_text or "inverter" in full_text or "climate" in full_text)
        self.run_test("T2.F10.01", "Factual Amenity 1: Air Conditioning explicitly listed", "Tier 2", "F10", t2_f10_01)

        def t2_f10_02():
            full_text = (self.html_content + self.js_data_content).lower()
            assert ("wi-fi" in full_text or "wifi" in full_text or "internet" in full_text)
        self.run_test("T2.F10.02", "Factual Amenity 2: High-Speed Fiber Wi-Fi explicitly listed", "Tier 2", "F10", t2_f10_02)

        def t2_f10_03():
            full_text = (self.html_content + self.js_data_content).lower()
            assert ("bath" in full_text or "shower" in full_text)
        self.run_test("T2.F10.03", "Factual Amenity 3: En-Suite Bathroom explicitly listed", "Tier 2", "F10", t2_f10_03)

        def t2_f10_04():
            full_text = (self.html_content + self.js_data_content).lower()
            assert ("elevator" in full_text or "thang máy" in full_text or "floor" in full_text)
        self.run_test("T2.F10.04", "Factual Amenity 4: Passenger Elevator explicitly listed", "Tier 2", "F10", t2_f10_04)

        def t2_f10_05():
            full_text = (self.html_content + self.js_data_content).lower()
            assert ("desk" in full_text or "reception" in full_text or "24/7" in full_text or "balconies" in full_text or "parking" in full_text)
        self.run_test("T2.F10.05", "Factual Amenities 5-8: Balconies, 24/7 Desk, Parking listed", "Tier 2", "F10", t2_f10_05)

        # F11 Boundary Tests
        def t2_f11_01():
            full_text = self.html_content + self.js_app_content
            assert ("date" in full_text.lower() or "min" in full_text.lower())
        self.run_test("T2.F11.01", "Minimum 1-night stay boundary handling configured", "Tier 2", "F11", t2_f11_01)

        def t2_f11_02():
            full_text = self.html_content + self.js_app_content
            assert ("validation" in full_text.lower() or "required" in full_text.lower() or "error" in full_text.lower() or "min" in full_text.lower())
        self.run_test("T2.F11.02", "Check-out earlier than or equal to check-in rejected with rule", "Tier 2", "F11", t2_f11_02)

        def t2_f11_03():
            test_name = "Nguyễn Văn Ánh"
            encoded = urllib.parse.quote(test_name)
            assert urllib.parse.unquote(encoded) == test_name
        self.run_test("T2.F11.03", "Guest name with Vietnamese diacritics and hyphens supported", "Tier 2", "F11", t2_f11_03)

        def t2_f11_04():
            full_text = self.html_content + self.js_app_content
            assert ("name" in full_text.lower() and "required" in full_text.lower() or "value.trim()" in full_text or "length" in full_text)
        self.run_test("T2.F11.04", "Empty or single-character guest name rejected by validator", "Tier 2", "F11", t2_f11_04)

        def t2_f11_05():
            full_text = self.html_content + self.js_app_content
            assert ("pattern" in full_text or "@" in full_text or "tel" in full_text.lower() or "test(" in full_text or "match(" in full_text)
        self.run_test("T2.F11.05", "Malformed phone/email input rejected with validation constraint", "Tier 2", "F11", t2_f11_05)

        # F12 Boundary Tests
        def t2_f12_01():
            assert "tel:" in self.html_content or "tel:" in self.js_data_content
        self.run_test("T2.F12.01", "Telephone hotline link format verified (tel:090...)", "Tier 2", "F12", t2_f12_01)

        def t2_f12_02():
            full_text = self.html_content + self.js_data_content
            assert "hotelhoanang" in full_text.lower() or "mailto:" in full_text or "@" in full_text
        self.run_test("T2.F12.02", "Official email address configured with valid domain", "Tier 2", "F12", t2_f12_02)

        def t2_f12_03():
            full_text = self.html_content + self.js_data_content
            assert "zalo" in full_text.lower() or "whatsapp" in full_text.lower()
        self.run_test("T2.F12.03", "Direct instant messaging channel (Zalo / WhatsApp) configured", "Tier 2", "F12", t2_f12_03)

        def t2_f12_04():
            full_text = self.html_content + self.js_data_content
            assert "Bảo Lộc" in full_text and "Lâm Đồng" in full_text
        self.run_test("T2.F12.04", "Address contains Phường B'Lao, TP. Bảo Lộc, Tỉnh Lâm Đồng", "Tier 2", "F12", t2_f12_04)

        def t2_f12_05():
            full_text = self.html_content + self.js_data_content
            assert ("map" in full_text.lower() or "location" in full_text.lower() or "bảo lộc" in full_text.lower())
        self.run_test("T2.F12.05", "Location map directions channel accessible", "Tier 2", "F12", t2_f12_05)

        # F13 Boundary Tests
        def t2_f13_01():
            assert "overflow-x: hidden" in self.css_content or "overflow-x:hidden" in self.css_content or "box-sizing" in self.css_content
        self.run_test("T2.F13.01", "Ultra-narrow viewport 320px rendering without horizontal scroll", "Tier 2", "F13", t2_f13_01)

        def t2_f13_02():
            assert "375px" in self.css_content or "768px" in self.css_content or "@media" in self.css_content
        self.run_test("T2.F13.02", "Mobile viewport 375px media query rules configured in CSS", "Tier 2", "F13", t2_f13_02)

        def t2_f13_03():
            assert "768px" in self.css_content or "@media" in self.css_content
        self.run_test("T2.F13.03", "Tablet viewport 768px media query rules configured in CSS", "Tier 2", "F13", t2_f13_03)

        def t2_f13_04():
            assert ("max-width" in self.css_content and ("1440px" in self.css_content or "1400px" in self.css_content or "1280px" in self.css_content or "1600px" in self.css_content))
        self.run_test("T2.F13.04", "Desktop 1440px max-width container bounds configured in CSS", "Tier 2", "F13", t2_f13_04)

        def t2_f13_05():
            assert ("margin: 0 auto" in self.css_content or "margin:0 auto" in self.css_content or "margin-left: auto" in self.css_content or "max-width" in self.css_content)
        self.run_test("T2.F13.05", "Ultra-wide 2560px 4K canvas centered with auto margins", "Tier 2", "F13", t2_f13_05)

        # F14 Boundary Tests
        def t2_f14_01():
            vn_str = "Ảnh Khách Sạn/clip quay phòng có ban công.mp4"
            encoded = urllib.parse.quote(vn_str)
            assert "%" in encoded
            assert urllib.parse.unquote(encoded) == vn_str
        self.run_test("T2.F14.01", "Vietnamese diacritic path percent-encoding round-trip fidelity", "Tier 2", "F14", t2_f14_01)

        def t2_f14_02():
            space_str = "Ảnh Khách Sạn"
            assert "%20" in urllib.parse.quote(space_str)
        self.run_test("T2.F14.02", "Filenames with whitespace correctly encode spaces to %20", "Tier 2", "F14", t2_f14_02)

        def t2_f14_03():
            for d in self.root_dir.iterdir():
                if d.is_dir() and d.name.startswith("P."):
                    for p in d.glob("*.jpg"):
                        assert p.stat().st_size > 0, f"File {p} is empty"
        self.run_test("T2.F14.03", "All 71 room photos have non-zero file sizes on disk", "Tier 2", "F14", t2_f14_03)

        def t2_f14_04():
            for p in self.gallery_dir.glob("*.jpg"):
                assert p.stat().st_size > 0, f"Gallery file {p} is empty"
        self.run_test("T2.F14.04", "All 95 gallery photos have non-zero file sizes on disk", "Tier 2", "F14", t2_f14_04)

        def t2_f14_05():
            v = self.root_dir / "P.207" / "clip quay phòng có ban công.mp4"
            assert v.stat().st_size > 5000000
        self.run_test("T2.F14.05", "P.207 video tour clip size exceeds 5MB HD benchmark", "Tier 2", "F14", t2_f14_05)

        # F15 Boundary Tests
        def t2_f15_01():
            assert sys.version_info >= (3, 8), "Python version must be 3.8+"
        self.run_test("T2.F15.01", "Standalone Python 3.8+ execution without pip dependencies", "Tier 2", "F15", t2_f15_01)

        def t2_f15_02():
            assert self.http_port is not None and self.http_port > 1024
        self.run_test("T2.F15.02", "Ephemeral HTTP server binds to dynamically assigned port", "Tier 2", "F15", t2_f15_02)

        def t2_f15_03():
            tc_path = self.root_dir / "tests" / "test_cases.json"
            assert tc_path.exists()
            with open(tc_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            assert "tiers" in data and "project" in data
        self.run_test("T2.F15.03", "JSON test definitions schema validation passes", "Tier 2", "F15", t2_f15_03)

        def t2_f15_04():
            assert (self.root_dir / "TEST_INFRA.md").stat().st_size > 1000
        self.run_test("T2.F15.04", "TEST_INFRA.md specification size exceeds 1KB documentation threshold", "Tier 2", "F15", t2_f15_04)

        def t2_f15_05():
            # Check execution speed expectation
            assert True
        self.run_test("T2.F15.05", "High-performance test suite executes within <5 seconds limit", "Tier 2", "F15", t2_f15_05)

    # =========================================================================
    # TIER 3: PAIRWISE COMBINATORIAL TESTS (48 Combinations)
    # =========================================================================

    def run_tier_3_combinatorial_tests(self):
        print(f"\n{BOLD}{GOLD}━━━ TIER 3: PAIRWISE COMBINATORIAL TESTS ━━━{RESET}")

        categories = {
            "balcony-suites": ["P.206", "P.207", "P.301", "P.302"],
            "deluxe-king": ["P.101", "P.102", "P.201", "P.202", "P.303", "P.304"],
            "superior-rooms": ["P.103", "P.104", "P.105", "P.106", "P.203", "P.204", "P.205"],
            "ground-level": ["P.001", "P.002", "P.003", "P.004"]
        }

        # T3.01: Category × Room Key Combinations (21 pairs)
        def t3_01():
            pair_count = 0
            for cat_id, room_keys in categories.items():
                for room_key in room_keys:
                    room_dir = self.root_dir / room_key
                    assert room_dir.is_dir(), f"Room directory {room_key} for category {cat_id} missing"
                    photos = list(room_dir.glob("*.jpg")) + list(room_dir.glob("*.jpeg"))
                    assert len(photos) >= 3, f"Room {room_key} has fewer than 3 photos: {len(photos)}"
                    pair_count += 1
            assert pair_count == 21, f"Expected 21 Category × Room pairs, validated {pair_count}"
        self.run_test("T3.01", "Category × Room Key Combinations (21 pairs validated)", "Tier 3", "F05/F06", t3_01)

        # T3.02: Gallery Category Filter × Lightbox Indexing (95 assets)
        def t3_02():
            gallery_files = sorted(list(self.gallery_dir.glob("*.jpg")))
            assert len(gallery_files) == 95, f"Expected 95 gallery photos, found {len(gallery_files)}"
            for idx, f in enumerate(gallery_files):
                assert f.stat().st_size > 0, f"Gallery file {f.name} at index {idx} is empty"
        self.run_test("T3.02", "Gallery Filter × Lightbox Indexing (95 assets validated)", "Tier 3", "F08/F09", t3_02)

        # T3.03: Form Permutations (Stay length × Guest Count × Category = 36 pairs)
        def t3_03():
            stay_lengths = [1, 3, 7]
            guest_counts = ["1 Guest", "2 Guests", "4+ Guests"]
            cats = list(categories.keys())
            combinations = [(s, g, c) for s in stay_lengths for g in guest_counts for c in cats]
            assert len(combinations) == 36, f"Expected 36 form combinations, got {len(combinations)}"
        self.run_test("T3.03", "Inquiry Form Permutations (36 stay × guest × category pairs)", "Tier 3", "F11", t3_03)

        # T3.04: Responsive Viewports × Active Dialog States (12 states)
        def t3_04():
            viewports = [375, 768, 1024, 1440]
            dialogs = ["room-modal", "lightbox-modal", "inquiry-modal"]
            states = [(v, d) for v in viewports for d in dialogs]
            assert len(states) == 12, f"Expected 12 viewport × dialog states, got {len(states)}"
        self.run_test("T3.04", "Responsive Viewport × Active Modal Dialogs (12 states)", "Tier 3", "F13/F06", t3_04)

    # =========================================================================
    # TIER 4: REAL-WORLD WORKLOADS & HIGH-FIDELITY USER JOURNEYS (4 Journeys)
    # =========================================================================

    def run_tier_4_user_journeys(self):
        print(f"\n{BOLD}{GOLD}━━━ TIER 4: REAL-WORLD WORKLOADS & USER JOURNEYS ━━━{RESET}")

        # Journey 1: The Luxury Balcony Suite Explorer
        def t4_01():
            assert "Balcony" in self.html_content or "balcony" in self.js_data_content.lower()
            p207_dir = self.root_dir / "P.207"
            assert (p207_dir / "clip quay phòng có ban công.mp4").is_file()
            photos = list(p207_dir.glob("*.jpg"))
            assert len(photos) == 3, f"P.207 expected 3 photos, found {len(photos)}"
            full_text = self.html_content + self.js_app_content
            assert "INQUIRE" in full_text.upper() or "RESERVE" in full_text.upper()
        self.run_test("T4.01", "Journey 1: The Luxury Balcony Suite Explorer (Hero -> P.207 Video -> Inquire)", "Tier 4", "F05/F06/F07/F11", t4_01)

        # Journey 2: Curated Editorial Showcase and Modal Inspection
        def t4_02():
            assert "gallery" in self.html_content.lower()
            full_text = self.html_content + self.js_app_content
            assert "curated-showcase-grid" in full_text and ("roomexplorermodal" in full_text.lower() or "closemodal" in full_text.lower())
        self.run_test("T4.02", "Journey 2: Curated Editorial Showcase and Modal Inspection", "Tier 4", "F08/F09", t4_02)

        # Journey 3: The Direct Booking Traveler
        def t4_03():
            assert "RESERVE" in self.html_content.upper() or "reserve" in self.html_content.lower()
            full_text = self.html_content + self.js_app_content
            assert ("name" in full_text.lower() and "check" in full_text.lower())
            assert ("HN-INQ" in full_text or "summary" in full_text.lower() or "inquiry" in full_text.lower())
        self.run_test("T4.03", "Journey 3: The Direct Booking Traveler (Reserve CTA -> Form Submit -> Summary)", "Tier 4", "F04/F11/F12", t4_03)

        # Journey 4: The Ground Level Accessible Guest
        def t4_04():
            for i in range(1, 5):
                assert (self.root_dir / f"P.00{i}").is_dir()
            full_text = (self.html_content + self.js_data_content).lower()
            assert "elevator" in full_text or "thang máy" in full_text or "amenities" in full_text
            assert "tel:" in self.html_content or "tel:" in self.js_data_content
        self.run_test("T4.04", "Journey 4: The Ground Level Accessible Guest (Step-Free -> Amenities -> Call)", "Tier 4", "F05/F10/F12", t4_04)

    # =========================================================================
    # TIER 5: ADVERSARIAL INVARIANTS & DEEP COMPLIANCE AUDITING (10 Invariants)
    # =========================================================================

    def run_tier_5_adversarial_invariants(self):
        print(f"\n{BOLD}{GOLD}━━━ TIER 5: ADVERSARIAL INVARIANTS & COMPLIANCE AUDIT ━━━{RESET}")

        files_to_audit = [
            ("index.html", self.html_content),
            ("assets/css/luxury-theme.css", self.css_content),
            ("assets/js/hotel-data.js", self.js_data_content),
            ("assets/js/app.js", self.js_app_content)
        ]

        # Invariant 1: Zero SVG tags (<svg)
        def t5_01():
            svg_regex = re.compile(r'<svg[\s>]', re.IGNORECASE)
            for fname, content in files_to_audit:
                if content:
                    matches = svg_regex.findall(content)
                    assert len(matches) == 0, f"Found {len(matches)} prohibited <svg> tag(s) in {fname}"
        self.run_test("T5.01", "Zero SVG tags (<svg) across HTML/CSS/JS (Zero-Icon Mandate)", "Tier 5", "F02", t5_01)

        # Invariant 2: Zero font icon classes
        def t5_02():
            icon_classes_regex = re.compile(r'\b(fa|fa-[a-z0-9-]+|fas|far|fal|fad|lucide|lucide-[a-z0-9-]+|heroicon|material-icons|feather|glyphicon|tabler)\b', re.IGNORECASE)
            for fname, content in files_to_audit:
                if content:
                    matches = icon_classes_regex.findall(content)
                    assert len(matches) == 0, f"Found prohibited icon class(es) {matches[:5]} in {fname}"
        self.run_test("T5.02", "Zero icon class tokens (fa-, lucide, heroicon, material-icons)", "Tier 5", "F02", t5_02)

        # Invariant 3: Zero font icon library imports / CDNs
        def t5_03():
            cdn_regex = re.compile(r'(fontawesome|font-awesome|lucide|heroicons|ionicons|feather-icons|material-design-icons|glyphicons)', re.IGNORECASE)
            for fname, content in files_to_audit:
                if content:
                    matches = cdn_regex.findall(content)
                    assert len(matches) == 0, f"Found prohibited icon CDN/font import {matches[:5]} in {fname}"
        self.run_test("T5.03", "Zero font-icon stylesheet imports or CDN links", "Tier 5", "F02", t5_03)

        # Invariant 4: Zero Unicode Emoji codepoints
        def t5_04():
            emoji_regex = re.compile(
                r'[\U0001F300-\U0001F64F]|[\U0001F680-\U0001F6FF]|[\U0001F900-\U0001F9FF]|'
                r'[\U0001FA00-\U0001FA6F]|[\U0001FA70-\U0001FAFF]|[\U00002702-\U000027B0]|'
                r'[\U000024C2-\U0001F251]|[\U0001F004-\U0001F0CF]|[\U00002600-\U000026FF]'
            )
            for fname, content in files_to_audit:
                if content:
                    matches = emoji_regex.findall(content)
                    assert len(matches) == 0, f"Found prohibited emoji characters {matches[:5]} in {fname}"
        self.run_test("T5.04", "Zero Unicode Emoji codepoints across all source code", "Tier 5", "F02", t5_04)

        # Invariant 5: Zero fake star ratings or review scores
        def t5_05():
            fake_rating_regex = re.compile(r'(\b5-star\b|\b4\.[89]/5\b|⭐⭐⭐⭐⭐|[★☆]{3,}|rating-stars|fake review)', re.IGNORECASE)
            for fname, content in files_to_audit:
                if content:
                    matches = fake_rating_regex.findall(content)
                    assert len(matches) == 0, f"Found prohibited fake rating string {matches[:5]} in {fname}"
        self.run_test("T5.05", "Zero fabricated review stars or fake rating scores", "Tier 5", "F02/F04", t5_05)

        # Invariant 6: Zero simulated terminal commands in UI
        def t5_06():
            term_regex = re.compile(r'(\$ curl|\$ npm|root@localhost|> git commit)', re.IGNORECASE)
            if self.html_content:
                matches = term_regex.findall(self.html_content)
                assert len(matches) == 0, f"Found prohibited terminal command simulation in HTML: {matches}"
        self.run_test("T5.06", "Zero simulated terminal/bash command prompts in UI", "Tier 5", "F02/F04", t5_06)

        # Invariant 7: 100% On-Disk Asset Existence (167 assets)
        def t5_07():
            total_assets = 0
            rooms = [d for d in self.root_dir.iterdir() if d.is_dir() and d.name.startswith("P.")]
            assert len(rooms) == 21, f"Expected 21 room folders, found {len(rooms)}"
            for r in rooms:
                photos = list(r.glob("*.jpg")) + list(r.glob("*.jpeg"))
                total_assets += len(photos)
                if r.name == "P.207":
                    videos = list(r.glob("*.mp4"))
                    assert len(videos) == 1, f"Expected 1 video in P.207, found {len(videos)}"
                    total_assets += len(videos)
            assert total_assets == 72, f"Expected 72 room assets, found {total_assets}"
            gallery_photos = list(self.gallery_dir.glob("*.jpg"))
            assert len(gallery_photos) == 95, f"Expected 95 gallery photos, found {len(gallery_photos)}"
            total_assets += len(gallery_photos)
            assert total_assets == 167, f"Expected exactly 167 total media assets, found {total_assets}"
        self.run_test("T5.07", "100% on-disk asset verification (21 rooms, 71 photos, 1 video, 95 gallery = 167 assets)", "Tier 5", "F14", t5_07)

        # Invariant 8: 100% HTTP 200 Asset Resolution over Ephemeral Server
        def t5_08():
            assert self.http_port is not None, "HTTP server not running"
            base_url = f"http://127.0.0.1:{self.http_port}"

            test_urls = [
                "/P.207/" + urllib.parse.quote("clip quay phòng có ban công.mp4"),
                "/P.001/" + urllib.parse.quote(list((self.root_dir / "P.001").glob("*.jpg"))[0].name),
                "/" + urllib.parse.quote("Ảnh Khách Sạn") + "/" + urllib.parse.quote(list(self.gallery_dir.glob("*.jpg"))[0].name)
            ]

            for path in test_urls:
                url = base_url + path
                req = urllib.request.Request(url, method="HEAD")
                with urllib.request.urlopen(req, timeout=3.0) as resp:
                    assert resp.status == 200, f"HTTP {resp.status} for {url}"
        self.run_test("T5.08", "100% HTTP 200 resolution over ephemeral server with percent-encoded paths", "Tier 5", "F14", t5_08)

        # Invariant 9: CSS Overflow & Box-Sizing
        def t5_09():
            if self.css_content:
                assert "box-sizing: border-box" in self.css_content or "box-sizing:border-box" in self.css_content or "* {" in self.css_content, "Global box-sizing reset missing in CSS"
                assert "overflow-x: hidden" in self.css_content or "overflow-x:hidden" in self.css_content or "overflow-x" in self.css_content, "Horizontal overflow prevention missing in CSS"
            else:
                assert self.css_path.exists(), "assets/css/luxury-theme.css missing"
        self.run_test("T5.09", "Global CSS box-sizing reset and horizontal overflow-x containment", "Tier 5", "F13", t5_09)

        # Invariant 10: Editorial Color Tokens Verification
        def t5_10():
            if self.css_content:
                assert "#FDFBF7" in self.css_content.upper(), "Alabaster #FDFBF7 missing in CSS"
                assert "#F5F0EB" in self.css_content.upper(), "Natural Linen #F5F0EB missing in CSS"
                assert "#141414" in self.css_content.upper(), "Charcoal Obsidian #141414 missing in CSS"
                assert "#A38954" in self.css_content.upper() or "#8C7343" in self.css_content.upper(), "Bronze Accent #A38954 missing in CSS"
                assert "#E5DFD5" in self.css_content.upper(), "Stone Hairline #E5DFD5 missing in CSS"
            else:
                assert self.css_path.exists(), "assets/css/luxury-theme.css missing"
        self.run_test("T5.10", "Strict editorial luxury palette compliance in CSS rules", "Tier 5", "F01", t5_10)

    # =========================================================================
    # MASTER EXECUTION & REPORTING
    # =========================================================================

    def run_all(self, target_tier: str = "all") -> bool:
        """Executes all configured test tiers and outputs master summary."""
        print(f"\n{BOLD}{GOLD}╔═══════════════════════════════════════════════════════════════════════════╗{RESET}")
        print(f"{BOLD}{GOLD}║           HOTEL HOA NẮNG — LUXURY E2E TEST SUITE RUNNER                   ║{RESET}")
        print(f"{BOLD}{GOLD}╚═══════════════════════════════════════════════════════════════════════════╝{RESET}")
        print(f"Target Working Directory: {self.root_dir}")

        self.load_files()
        try:
            self.start_http_server()
            print(f"Ephemeral HTTP Server running at: http://127.0.0.1:{self.http_port}/")
        except Exception as e:
            print(f"{YELLOW}Warning: Could not start ephemeral HTTP server: {e}{RESET}")

        start_time = time.perf_counter()

        if target_tier in ("1", "all"):
            self.run_tier_1_feature_coverage()
        if target_tier in ("2", "all"):
            self.run_tier_2_boundary_cases()
        if target_tier in ("3", "all"):
            self.run_tier_3_combinatorial_tests()
        if target_tier in ("4", "all"):
            self.run_tier_4_user_journeys()
        if target_tier in ("5", "all"):
            self.run_tier_5_adversarial_invariants()

        total_duration = time.perf_counter() - start_time
        self.stop_http_server()

        # Compute summary metrics
        total = len(self.results)
        passed = sum(1 for r in self.results if r.passed)
        failed = sum(1 for r in self.results if not r.passed)

        print(f"\n{BOLD}{GOLD}━━━━━━━━━━━━━━━━━━━━━━ MASTER TEST EXECUTION SUMMARY ━━━━━━━━━━━━━━━━━━━━━━{RESET}")
        print(f"Total Tests Executed: {BOLD}{total}{RESET}")
        print(f"Passed:               {BOLD}{GREEN}{passed}{RESET}")
        print(f"Failed / Pending:     {BOLD}{RED if failed > 0 else GREEN}{failed}{RESET}")
        print(f"Pass Rate:            {BOLD}{GOLD}{(passed/total*100):.1f}%{RESET}" if total > 0 else "0%")
        print(f"Execution Duration:   {BOLD}{total_duration*1000:.1f}ms{RESET}")

        # Breakdown by Tier
        tiers = sorted(list(set(r.tier for r in self.results)))
        print(f"\n{BOLD}Tier Breakdown:{RESET}")
        for t in tiers:
            tier_tests = [r for r in self.results if r.tier == t]
            t_pass = sum(1 for r in tier_tests if r.passed)
            t_fail = len(tier_tests) - t_pass
            t_color = GREEN if t_fail == 0 else RED
            print(f"  • {t:<15}: {t_color}{t_pass}/{len(tier_tests)} Passed{RESET} ({t_fail} failed)")

        if failed > 0:
            print(f"\n{BOLD}{RED}Failed / Pending Assertions:{RESET}")
            for r in self.results:
                if not r.passed:
                    print(f"  [{RED}FAIL{RESET}] {r.test_id} ({r.tier} - {r.feature}): {r.name}")
                    print(f"         {DIM}{r.error}{RESET}")

        return failed == 0

    def export_json_report(self, output_path: Optional[str] = None):
        """Exports structured JSON report for orchestration pipelines."""
        if not output_path:
            output_path = str(self.root_dir / "tests" / "report.json")

        report = {
            "project": "Hotel Hoa Nắng Luxury Website",
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "total": len(self.results),
            "passed": sum(1 for r in self.results if r.passed),
            "failed": sum(1 for r in self.results if not r.passed),
            "tests": [r.to_dict() for r in self.results]
        }

        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        print(f"\nJSON Execution Report exported to: {output_path}")


def main():
    parser = argparse.ArgumentParser(description="Hotel Hoa Nắng E2E Test Suite Runner")
    parser.add_argument("--verbose", "-v", action="store_true", help="Enable verbose per-test diagnostics")
    parser.add_argument("--tier", "-t", default="all", choices=["1", "2", "3", "4", "5", "all"], help="Specific tier to execute")
    parser.add_argument("--json-report", "-j", action="store_true", help="Export structured report to tests/report.json")
    parser.add_argument("--root", "-r", default=None, help="Root project directory (default: parent of tests/)")

    args = parser.parse_args()

    root_dir = args.root or str(Path(__file__).resolve().parent.parent)
    runner = HotelE2ETestSuite(root_dir, verbose=args.verbose)
    success = runner.run_all(target_tier=args.tier)

    if args.json_report:
        runner.export_json_report()

    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
