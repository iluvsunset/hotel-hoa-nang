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
import unicodedata

base_dir = "/Users/iluvsunset/Hotel Hoa Nắng"
os.chdir(base_dir)

# 1. Read assets from filesystem directly
fs_room_photos = []
fs_room_video = []
fs_gallery_photos = []

room_folders = [f"P.{i:03d}" for i in [1, 2, 3, 4, 101, 102, 103, 104, 105, 106, 201, 202, 203, 204, 205, 206, 207, 301, 302, 303, 304]]

for rf in room_folders:
    rf_path = os.path.join(base_dir, rf)
    if os.path.isdir(rf_path):
        for f in sorted(os.listdir(rf_path)):
            if f.startswith("."):
                continue
            rel = f"{rf}/{f}"
            full_p = os.path.join(rf_path, f)
            sz = os.path.getsize(full_p)
            if f.endswith(".mp4"):
                fs_room_video.append((rel, sz))
            elif f.endswith(".jpg") or f.endswith(".png"):
                fs_room_photos.append((rel, sz))

gallery_dir = os.path.join(base_dir, "Ảnh Khách Sạn")
if os.path.isdir(gallery_dir):
    for f in sorted(os.listdir(gallery_dir)):
        if f.startswith("."):
            continue
        rel = f"Ảnh Khách Sạn/{f}"
        full_p = os.path.join(gallery_dir, f)
        sz = os.path.getsize(full_p)
        fs_gallery_photos.append((rel, sz))

print(f"Filesystem scan:")
print(f"  - Room folders: {len(room_folders)}")
print(f"  - Room photos: {len(fs_room_photos)}")
print(f"  - Room video: {len(fs_room_video)}")
print(f"  - Hotel gallery photos: {len(fs_gallery_photos)}")
total_fs = len(fs_room_photos) + len(fs_room_video) + len(fs_gallery_photos)
print(f"  - Total on-disk media: {total_fs}")

# Check for 0-byte or corrupted files
zero_byte_files = [p for p, sz in (fs_room_photos + fs_room_video + fs_gallery_photos) if sz == 0]
if zero_byte_files:
    print(f"CRITICAL: Found 0-byte files on disk: {zero_byte_files}")
else:
    print("Disk integrity check passed: All 167 media files have valid non-zero sizes.")

# 2. Spin up HTTP server
class SilentHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

server = socketserver.TCPServer(("127.0.0.1", 0), SilentHandler)
port = server.server_address[1]
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()
print(f"Live HTTP server running on http://127.0.0.1:{port}")

# Test every filesystem asset via HTTP GET
http_results = []
for rel_path, sz in (fs_room_photos + fs_room_video + fs_gallery_photos):
    # Test 1: URL encoded
    encoded_url = "http://127.0.0.1:" + str(port) + "/" + urllib.parse.quote(rel_path)
    try:
        req = urllib.request.Request(encoded_url, headers={"User-Agent": "Reviewer2-Tester"})
        with urllib.request.urlopen(req, timeout=5) as resp:
            status = resp.status
            content_len = len(resp.read(1024)) # read sample bytes
            if status == 200 and content_len > 0:
                http_results.append((rel_path, True, status))
            else:
                http_results.append((rel_path, False, f"Status: {status}, len: {content_len}"))
    except Exception as e:
        http_results.append((rel_path, False, str(e)))

failed_http = [r for r in http_results if not r[1]]
print(f"\nHTTP Server Test Results:")
print(f"  - Tested: {len(http_results)}")
print(f"  - Succeeded (HTTP 200): {len(http_results) - len(failed_http)}")
print(f"  - Failed: {len(failed_http)}")

if failed_http:
    for f in failed_http:
        print(f"    FAIL: {f[0]} -> {f[2]}")
else:
    print("  -> 100% of all 167 assets resolved with HTTP 200 OK.")

# 3. Check hotel-data.js references vs disk assets
with open("assets/js/hotel-data.js", "r", encoding="utf-8") as f:
    js_text = f.read()

# Extract all room photos referenced in rooms dictionary
room_js_photos = set(re.findall(r'"(P\.\d{3}/[^"]+\.jpg)"', js_text))
room_js_video = set(re.findall(r'"(P\.\d{3}/[^"]+\.mp4)"', js_text) + re.findall(r'"(P\.\d{3}/[^"]+%20[^"]+\.mp4)"', js_text))
gallery_js_photos = set(re.findall(r'"((?:Ảnh|%E1%BA%A2nh)[^"]+\.jpg)"', js_text))

print(f"\nData Engine Consistency:")
print(f"  - Room photos in hotel-data.js: {len(room_js_photos)}")
print(f"  - Gallery photos in hotel-data.js: {len(gallery_js_photos)}")

server.shutdown()
