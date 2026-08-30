#!/usr/bin/env python3
import os
import sys
import json
import re
import urllib.parse
import http.server
import socketserver
import threading
import urllib.request

base_dir = "/Users/iluvsunset/Hotel Hoa Nắng"
os.chdir(base_dir)

report = {
    "media_assets": {},
    "responsive_css": {},
    "accessibility": {},
    "code_quality_dom": {},
    "zero_icon_compliance": {},
    "integrity_check": {}
}

# ============================================================================
# 1. MEDIA ASSETS VERIFICATION
# ============================================================================
room_dirs = [f"P.{i:03d}" for i in [1,2,3,4, 101,102,103,104,105,106, 201,202,203,204,205,206,207, 301,302,303,304]]
room_photos = []
room_videos = []
for r in room_dirs:
    rp = os.path.join(base_dir, r)
    if os.path.isdir(rp):
        for f in os.listdir(rp):
            if f.startswith("."): continue
            fp = os.path.join(rp, f)
            sz = os.path.getsize(fp)
            if f.endswith(".mp4"):
                room_videos.append((f"{r}/{f}", sz))
            elif f.endswith(".jpg") or f.endswith(".png"):
                room_photos.append((f"{r}/{f}", sz))

gallery_photos = []
gp_dir = os.path.join(base_dir, "Ảnh Khách Sạn")
if os.path.isdir(gp_dir):
    for f in os.listdir(gp_dir):
        if f.startswith("."): continue
        fp = os.path.join(gp_dir, f)
        sz = os.path.getsize(fp)
        gallery_photos.append((f"Ảnh Khách Sạn/{f}", sz))

report["media_assets"]["room_count"] = len(room_dirs)
report["media_assets"]["room_photos_count"] = len(room_photos)
report["media_assets"]["room_videos_count"] = len(room_videos)
report["media_assets"]["gallery_photos_count"] = len(gallery_photos)
report["media_assets"]["total_media_count"] = len(room_photos) + len(room_videos) + len(gallery_photos)

# Test live HTTP server
class SilentHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

server = socketserver.TCPServer(("127.0.0.1", 0), SilentHandler)
port = server.server_address[1]
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()

http_failures = []
for path, sz in (room_photos + room_videos + gallery_photos):
    encoded = urllib.parse.quote(path)
    url = f"http://127.0.0.1:{port}/{encoded}"
    try:
        req = urllib.request.Request(url, method="GET")
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = resp.read()
            if resp.status != 200 or len(data) != sz:
                http_failures.append((path, resp.status, len(data), sz))
    except Exception as e:
        http_failures.append((path, str(e), 0, sz))

report["media_assets"]["http_200_count"] = report["media_assets"]["total_media_count"] - len(http_failures)
report["media_assets"]["http_failures"] = http_failures

# ============================================================================
# 2. RESPONSIVE CSS & OVERFLOW SAFETY
# ============================================================================
with open("assets/css/luxury-theme.css", "r", encoding="utf-8") as f:
    css_content = f.read()

has_375 = "@media (max-width: 375px)" in css_content or "@media (max-width: 360px)" in css_content
has_768 = "@media (max-width: 768px)" in css_content
has_1024 = "@media (max-width: 1024px)" in css_content
has_reduced_motion = "@media (prefers-reduced-motion: reduce)" in css_content
has_overflow_x_hidden = "overflow-x: hidden" in css_content
has_box_sizing = "box-sizing: border-box" in css_content

# Check for fixed pixel widths that could cause overflow on mobile (>320px)
fixed_large_widths = re.findall(r"(?<!max-)(?<!min-)width:\s*([4-9]\d{2}|[1-9]\d{3,})px", css_content)

report["responsive_css"] = {
    "has_375px_breakpoint": has_375,
    "has_768px_breakpoint": has_768,
    "has_1024px_breakpoint": has_1024,
    "has_reduced_motion": has_reduced_motion,
    "has_overflow_x_hidden": has_overflow_x_hidden,
    "has_box_sizing_reset": has_box_sizing,
    "fixed_large_widths_found": fixed_large_widths
}

# ============================================================================
# 3. ACCESSIBILITY & SEMANTIC STRUCTURE
# ============================================================================
with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

has_viewport = '<meta name="viewport" content="width=device-width, initial-scale=1.0">' in html_content
has_lang = '<html lang=' in html_content
has_header = "<header" in html_content
has_main_or_sections = "<section" in html_content
has_footer = "<footer" in html_content
has_aria_modals = html_content.count('aria-modal="true"')
has_role_dialog = html_content.count('role="dialog"')
has_aria_labels = html_content.count('aria-label=')

# Check images alt tags in index.html
img_tags = re.findall(r"<img[^>]+>", html_content)
imgs_missing_alt = [img for img in img_tags if 'alt=' not in img]

report["accessibility"] = {
    "has_viewport_meta": has_viewport,
    "has_lang_attr": has_lang,
    "has_header_landmark": has_header,
    "has_footer_landmark": has_footer,
    "aria_modal_count": has_aria_modals,
    "role_dialog_count": has_role_dialog,
    "aria_label_count": has_aria_labels,
    "total_html_images": len(img_tags),
    "images_missing_alt": len(imgs_missing_alt)
}

# ============================================================================
# 4. CODE QUALITY, DOM LIFECYCLE & KEYBOARD NAVIGATION
# ============================================================================
with open("assets/js/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

has_escape_key = 'e.key === "Escape"' in app_js or "keyCode === 27" in app_js
has_left_arrow = 'e.key === "ArrowLeft"' in app_js or "keyCode === 37" in app_js
has_right_arrow = 'e.key === "ArrowRight"' in app_js or "keyCode === 39" in app_js
has_modal_lock = 'document.body.classList.add("modal-locked")' in app_js
has_modal_unlock = 'document.body.classList.remove("modal-locked")' in app_js
has_video_pause_on_close = "video.pause()" in app_js

report["code_quality_dom"] = {
    "has_escape_key_listener": has_escape_key,
    "has_left_arrow_key_listener": has_left_arrow,
    "has_right_arrow_key_listener": has_right_arrow,
    "has_modal_scroll_lock": has_modal_lock and has_modal_unlock,
    "has_video_pause_on_close": has_video_pause_on_close
}

# ============================================================================
# 5. ZERO-ICON COMPLIANCE & FACTUAL PRESENTATION
# ============================================================================
svg_matches = re.findall(r"<svg[\s>]", html_content + css_content + app_js, re.I)
icon_classes = re.findall(r"\b(fa|fa-[a-z0-9-]+|lucide|lucide-[a-z0-9-]+|heroicon|material-icons|feather|glyphicon)\b", html_content + css_content + app_js, re.I)
emoji_matches = re.findall(r"[\U0001F300-\U0001F6FF\U0001F900-\U0001F9FF\U00002600-\U000026FF\U00002700-\U000027BF]", html_content + css_content + app_js)
fake_star_matches = re.findall(r"[★☆⭐️]|5-star|4\.9/5|rating-stars", html_content + app_js, re.I)
fake_command_matches = re.findall(r"\$\s*(?:curl|npm|git|bash)|root@server", html_content + app_js, re.I)

report["zero_icon_compliance"] = {
    "svg_count": len(svg_matches),
    "icon_class_count": len(icon_classes),
    "emoji_count": len(emoji_matches),
    "fake_stars_count": len(fake_star_matches),
    "fake_commands_count": len(fake_command_matches)
}

# ============================================================================
# 6. INTEGRITY AUDIT
# ============================================================================
# Check e2e_runner.py for hardcoded test results or facades
with open("tests/e2e_runner.py", "r", encoding="utf-8") as f:
    runner_code = f.read()

# Look for stubbed passes like "return True" without assertion
stubs = re.findall(r"def test_[a-zA-Z0-9_]+\([^)]*\):\s*(?:pass|return True)", runner_code)

report["integrity_check"] = {
    "runner_size_bytes": len(runner_code),
    "stubbed_empty_tests": len(stubs)
}

server.shutdown()

print(json.dumps(report, indent=2, ensure_ascii=False))
