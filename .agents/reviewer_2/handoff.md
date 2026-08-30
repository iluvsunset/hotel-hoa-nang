# Comprehensive Review & Adversarial Critique Report — Reviewer 2

**Project:** Hotel Hoa Nắng Luxury Website  
**Working Directory:** `/Users/iluvsunset/Hotel Hoa Nắng/.agents/reviewer_2`  
**Reviewer Role:** Reviewer 2 (Objective Reviewer & Adversarial Critic)  
**Date:** 2026-08-29T18:24:30+02:00  

---

## Review Summary

**Verdict: REQUEST_CHANGES**

| Dimension | Assessment | Status |
|---|---|---|
| **Design System & Zero-Icon Mandate** | Pure typography, zero `<svg>`, zero icon fonts, zero emojis, luxury palette | **PASS** |
| **Responsive Multi-Device Geometry** | Clean layouts across 375px (mobile), 768px (tablet), 1440px+ (desktop), `overflow-x: hidden` | **PASS** |
| **Accessibility (a11y)** | Semantic landmarks, ARIA dialog attributes, `<label for>` bindings, image alt text | **PASS** |
| **Room Media & Video (P.207)** | 71 room photos + 1 MP4 video in `P.207` load with valid paths and custom controls | **PASS** |
| **Curated Hotel Gallery Masonry & Lightbox** | Double URL encoding in `app.js` causes all 95 gallery images to fail with **HTTP 404** | **CRITICAL DEFECT** |
| **Test Runner Fidelity & Integrity** | `tests/e2e_runner.py` passed 168/168 tests due to synthetic URL testing rather than testing actual DOM runtime `img.src` outputs | **MAJOR FINDING (TEST BLIND SPOT)** |
| **Keyboard Navigation & DOM Lifecycle** | `Escape`, `ArrowLeft`, `ArrowRight` handled; modal scroll lock and video pause on dismiss | **PASS** (Minor a11y focus trap note) |
| **Bilingual Support (VI / EN)** | Full editorial Vietnamese default and English toggle with dictionary synchronization | **PASS** |

---

## 1. Findings & Issues

### [Critical Finding 1] Double URL Encoding Causes HTTP 404 on All 95 Gallery Masonry & Lightbox Images
- **Location:**
  - `assets/js/hotel-data.js`: Lines 1436, 1447, 1458, ... (all 95 gallery items have `"src": "%E1%BA%A2nh%20Kh%C3%A1ch%20S%E1%BA%A1n/..."`)
  - `assets/js/app.js`: Line 491-496 (`encodePath`), Line 1330 (`img.src = encodePath(item.src)`), Line 1480 (`imgEl.src = encodePath(current.src)`)
- **What Happens:**
  1. `hotel-data.js` defines gallery `src` strings that are *already percent-encoded*: e.g., `"%E1%BA%A2nh%20Kh%C3%A1ch%20S%E1%BA%A1n/z4873228195380_d529536454b998d3891cc2961f25a0b6.jpg"`.
  2. `app.js` defines `encodePath(raw)` which calls `encodeURIComponent(segment)`.
  3. When rendering the gallery masonry grid (`renderGalleryMasonry`) and lightbox (`updateLightboxStage`), `app.js` calls `encodePath(item.src)`.
  4. `encodeURIComponent` converts `%` into `%25`, resulting in:
     `"%25E1%25BA%25A2nh%2520Kh%25C3%25A1ch%2520S%25E1%25BA%25A1n/..."`.
  5. In any standard browser or HTTP server, requests for `/%25E1%25BA%25A2nh...` decode to `/%E1%BA%A2nh...` (a non-existent literal folder) and immediately return **HTTP 404 (Not Found)**.
  6. As a result, all 95 curated hotel photographs fail to load in the gallery and lightbox during real browser execution.
- **Why This Is Critical:**
  - Directly violates Requirement R3 / R5 and Task 2 ("Verify that all 167 media assets resolve with HTTP 200 / valid file paths and zero 404 errors").
  - Breaks the core gallery showcase and lightbox experience for end users.
- **Suggested Fix:**
  In `assets/js/app.js`, make `encodePath` decode any existing percent-encoding first before encoding, or ensure raw paths from `item.rawPath` or `decodeURI` are used:
  ```javascript
  function encodePath(raw) {
    if (!raw) return "";
    const decoded = decodeURIComponent(raw);
    return decoded.split("/").map(function (segment) {
      return encodeURIComponent(segment);
    }).join("/");
  }
  ```
  Or in `hotel-data.js`, standardize `item.src` as `"Ảnh Khách Sạn/..."` (or use `item.rawPath` when calling `encodePath`).

---

### [Major Finding 2] E2E Test Suite Blind Spot in `tests/e2e_runner.py` (T5.08)
- **Location:** `tests/e2e_runner.py`: Lines 1223-1238 (`t5_08`)
- **What Happens:**
  - Test `T5.08` asserts HTTP 200 resolution for asset paths over an ephemeral HTTP server.
  - However, `t5_08` constructs only 3 synthetic URLs directly using Python's `urllib.parse.quote("Ảnh Khách Sạn")`, rather than checking the actual `src` attributes produced by `app.js` or checking the catalog strings in `hotel-data.js`.
  - Because of this synthetic shortcut, `e2e_runner.py` reported 100% PASS (168/168 tests passed) despite the fact that all 95 gallery images in the web application fail with HTTP 404 in actual execution.
- **Why This Is Major:**
  - This is a testing blind spot where self-certifying tests give a false sense of security while a critical bug exists in production code.
- **Suggested Fix:**
  Update `tests/e2e_runner.py` to extract all asset `src` values from `HOTEL_DATA` and verify that `encodePath` transforms produce valid HTTP 200 URLs for all 95 gallery items and 71 room photos.

---

### [Minor Finding 3] Modal Focus Trapping for Screen Reader / Keyboard-Only Users
- **Location:** `assets/js/app.js`: Lines 1056 (`openRoomModal`), 1438 (`showLightbox`)
- **What Happens:**
  - While `Escape`, `ArrowLeft`, and `ArrowRight` keyboard handlers are cleanly implemented, opening `roomExplorerModal` or `lightboxModal` does not move DOM focus into the active dialog (`modalCloseBtn.focus()`), nor does it trap `Tab` navigation within the open dialog.
- **Suggested Fix:**
  When opening a modal, call `.focus()` on the close button or first interactive element, and return focus to the trigger element when closed.

---

## 2. Five-Component Handoff Report

### 1. Observation
- **Disk Asset Inventory:**
  - 21 Room Directories (`P.001` through `P.304`): Confirmed present.
  - 71 Room Photos (.jpg): Confirmed present, non-zero file sizes (ranging from 120KB to 2.4MB).
  - 1 Room Video (`P.207/clip quay phòng có ban công.mp4`): Confirmed present (9.48MB, vertical HD MP4).
  - 95 Hotel Gallery Photos in `Ảnh Khách Sạn/`: Confirmed present, non-zero file sizes.
  - Total Media Assets on Disk: **167 assets**.
- **Double Encoding Bug Reproduction:**
  - In `assets/js/hotel-data.js` line 1436: `src: "%E1%BA%A2nh%20Kh%C3%A1ch%20S%E1%BA%A1n/z4873228195380_d529536454b998d3891cc2961f25a0b6.jpg"`.
  - In `assets/js/app.js` line 491: `encodePath("%E1%BA%A2nh%20Kh%C3%A1ch%20S%E1%BA%A1n/...")` yields `"%25E1%25BA%25A2nh%2520Kh%25C3%25A1ch%2520S%25E1%25BA%25A1n/..."`.
  - Terminal Command Executed:
    `python3 -c 'import urllib.request; urllib.request.urlopen("http://127.0.0.1:<PORT>/%25E1%25BA%25A2nh%2520Kh%25C3%25A1ch%2520S%25E1%25BA%25A1n/z4873228195380_d529536454b998d3891cc2961f25a0b6.jpg")'`
  - Verbatim Output: `HTTP Error 404: File not found`.
- **CSS Geometry & Responsive Layout:**
  - Viewport Meta: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
  - Box-Sizing Reset: `*, *::before, *::after { box-sizing: border-box; }`.
  - Horizontal Overflow Safety: `html, body { overflow-x: hidden; }`.
  - Media Queries: 1024px (tablet reflow), 768px (mobile single-column + menu overlay), 375px (compact title font-size scaling).
  - Fixed Pixel Breaking Widths (>320px): 0 instances found.
- **Zero-Icon Compliance & Editorial Purity:**
  - `<svg>` Tags: 0 matches across `index.html`, `luxury-theme.css`, `app.js`.
  - Icon Font Classes (`fa-`, `lucide`, `heroicon`, `material-icons`, etc.): 0 matches.
  - Emoji Unicode Codepoints: 0 matches.
  - Fake Stars / Reviews / Terminal Prompts: 0 matches.
- **E2E Test Runner Execution:**
  - `python3 tests/e2e_runner.py`: Executed 168 tests in 79.8ms, reported 168 PASS / 0 FAIL.

### 2. Logic Chain
1. **Premise 1:** The user and project specifications require all 167 media assets to resolve with HTTP 200 without broken links (zero 404s).
2. **Observation 1:** `assets/js/hotel-data.js` pre-encodes the gallery image `src` strings with percent-encoding (`%E1%BA%A2nh%20Kh%C3%A1ch%20S%E1%BA%A1n/`).
3. **Observation 2:** `assets/js/app.js` runs `encodePath()` on `item.src` and `current.src` before setting `img.src`.
4. **Deduction 1:** Applying `encodeURIComponent` to an already percent-encoded string replaces every `%` character with `%25`, resulting in double-encoding (`%25E1%25BA%25A2nh%2520...`).
5. **Observation 3:** When tested against a live HTTP server, the double-encoded URL produces an immediate `HTTP Error 404: File not found`.
6. **Deduction 2:** In any browser, rendering the gallery masonry or opening the fullscreen lightbox results in broken image icons / 404 errors for all 95 hotel gallery images.
7. **Observation 4:** `tests/e2e_runner.py` (T5.08) tested synthetic Python-constructed URLs rather than testing `encodePath(item.src)` output, masking this defect.
8. **Conclusion:** The project cannot be approved in its current state because the core gallery and lightbox features are broken at runtime. The verdict is **REQUEST_CHANGES**.

### 3. Caveats
- No changes to implementation code were made, in strict adherence to the Reviewer role constraints.
- Room photos (`P.001` - `P.304`) and Room `P.207` video in `index.html` and room modals are single-encoded/ASCII and do resolve with HTTP 200 OK. The issue is specific to the 95 gallery photos in `hotel-data.js` and `app.js`.

### 4. Conclusion
The website demonstrates exceptional typographic craftsmanship, responsive layout geometry, zero-icon compliance, and thorough bilingual Vietnamese/English integration. However, the double URL encoding bug breaks the loading of all 95 gallery photos in the gallery masonry and lightbox.

**Verdict: REQUEST_CHANGES**

Required fixes:
1. Update `encodePath` in `assets/js/app.js` to decode before encoding (`decodeURIComponent(raw)`), or use unencoded `item.rawPath`.
2. Update `tests/e2e_runner.py` (T5.08) to test all 95 gallery paths using the exact transformation applied by `app.js`.

### 5. Verification Method
To reproduce and verify the defect independently:
1. Run Node.js to observe double encoding:
   ```bash
   node -e '
   function encodePath(raw) { return raw.split("/").map(encodeURIComponent).join("/"); }
   console.log(encodePath("%E1%BA%A2nh%20Kh%C3%A1ch%20S%E1%BA%A1n/sample.jpg"));
   '
   # Output: %25E1%25BA%25A2nh%2520Kh%25C3%25A1ch%2520S%25E1%25BA%25A1n/sample.jpg
   ```
2. Run live HTTP server request test:
   ```bash
   python3 -c '
   import http.server, socketserver, threading, urllib.request, os
   os.chdir("/Users/iluvsunset/Hotel Hoa Nắng")
   server = socketserver.TCPServer(("127.0.0.1", 0), http.server.SimpleHTTPRequestHandler)
   port = server.server_address[1]
   threading.Thread(target=server.serve_forever, daemon=True).start()
   try:
       urllib.request.urlopen(f"http://127.0.0.1:{port}/%25E1%25BA%25A2nh%2520Kh%25C3%25A1ch%2520S%25E1%25BA%25A1n/z4873228195380_d529536454b998d3891cc2961f25a0b6.jpg")
   except urllib.error.HTTPError as e:
       print("Failed with HTTP Error:", e.code)
   server.shutdown()
   '
   # Output: Failed with HTTP Error: 404
   ```
3. Run reviewer verification script:
   ```bash
   python3 "/Users/iluvsunset/Hotel Hoa Nắng/.agents/reviewer_2/verify_all.py"
   ```

---
*Report filed by Reviewer 2 (Reviewer & Adversarial Critic)*
