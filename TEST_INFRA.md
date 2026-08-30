# HOTEL HOA NẮNG — E2E TEST INFRASTRUCTURE & QUALITY SPECIFICATION

**Document Version:** 1.0.0 (Master Quality Assurance Architecture)  
**Author:** E2E Test Suite Creator (`e2e_testing_track`)  
**Target:** Hotel Hoa Nắng Luxury Website (`index.html`, `assets/css/luxury-theme.css`, `assets/js/hotel-data.js`, `assets/js/app.js`)  
**Standard:** Opaque-Box, Requirement-Driven 4-Tier + Adversarial Testing Architecture  

---

## 1. Executive Philosophy & Testing Mandates

### 1.1 Opaque-Box, Requirement-Driven Philosophy
The E2E test harness for Hotel Hoa Nắng operates under strict **opaque-box principles**. The test suite does not couple itself to internal private implementation minutiae, but rather evaluates the deliverable against verifiable, external specifications established in `PROJECT.md`, `spec.md`, and `ORIGINAL_REQUEST.md`.

Every assertion in the test harness is derived from authoritative requirements:
1. **Visual & Aesthetic Invariants:** Design tokens, font imports, color palettes, hairline borders, responsive viewport constraints.
2. **Behavioral Invariants:** Navigation actions, modal drawers, room key selection, video controls, gallery masonry filtering, lightbox cyclic navigation, form validation, and reservation summary generation.
3. **Data Integrity & Asset Invariants:** 100% validity of 167 media assets (21 room folders, 71 photos, 1 MP4 video, 95 hotel gallery images), correct URL encoding, and complete JSON schema compliance.
4. **Editorial Purity (The Zero-Icon Mandate):** Zero `<svg>` tags, zero font-icon glyphs/classes, zero emoji Unicode characters, and zero fake review/star elements across all files.

---

## 2. The 4-Tier + Adversarial Methodology

The test suite is structured into five distinct testing tiers to ensure exhaustive verification from individual feature mechanics to complex combinatorial interactions and adversarial edge stress:

```
┌─────────────────────────────────────────────────────────────────────────┐
│               HOTEL HOA NẮNG E2E TEST SUITE ARCHITECTURE                │
├─────────────────────────────────────────────────────────────────────────┤
│ Tier 1: Feature Coverage (>=5 test cases per feature, F01 - F15)        │
│ ├─ Verifies primary happy paths, DOM element presence, CSS definitions  │
│ └─ Validates functional endpoints, data structures, and contact links   │
├─────────────────────────────────────────────────────────────────────────┤
│ Tier 2: Boundary & Corner Cases (>=5 test cases per feature, F01 - F15) │
│ ├─ Extreme inputs, date constraints, single-day stays, leap years       │
│ ├─ Circular lightbox bounds (01 <-> 95), room switching reflow          │
│ └─ Extreme screen widths (320px, 375px, 768px, 1024px, 1440px, 2560px) │
├─────────────────────────────────────────────────────────────────────────┤
│ Tier 3: Pairwise & Combinatorial Testing                                │
│ ├─ Category × Room Key combinations (4 categories × 21 rooms)           │
│ ├─ Date Ranges × Room Tiers × Guest Counts (Adults/Children)            │
│ └─ Gallery Filter Tabs × Lightbox Navigation × Keyboard Triggers        │
├─────────────────────────────────────────────────────────────────────────┤
│ Tier 4: Real-World Workloads & High-Fidelity User Journeys              │
│ ├─ Journey 1: The Luxury Explorer (Hero -> Suites -> P.207 -> Inquire)  │
│ ├─ Journey 2: The Gallery Connoisseur (Filter -> Lightbox -> Cycle)    │
│ ├─ Journey 3: The Direct Booker (Reserve CTA -> Form Submit -> Summary) │
│ └─ Journey 4: The Ground Level Accessible Guest (Step-Free -> Contact)  │
├─────────────────────────────────────────────────────────────────────────┤
│ Tier 5: Adversarial Invariants & Deep Compliance Auditing               │
│ ├─ Zero-Icon AST / Regex Audit (No SVGs, No Icon Fonts, No Emojis)     │
│ ├─ Zero-Fake Rating / Review / Terminal Simulation Audit               │
│ └─ 100% Asset Resolution Audit (71 room photos, 1 video, 95 gallery)    │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Feature Inventory & Test Coverage Matrix

Every feature from `PROJECT.md` is mapped to at least 5 Tier-1 test cases, 5 Tier-2 boundary cases, combinatorial test pairs, user journey coverage, and adversarial checks:

| Feature ID | Feature Name | Tier 1 (Coverage) | Tier 2 (Boundary) | Tier 3 (Combinatorial) | Tier 4 (Journeys) | Tier 5 (Adversarial) | Total Tests |
|---|---|---|---|---|---|---|---|
| **F01** | Luxury Design Tokens & Theme | 5 | 5 | 3 | 2 | 2 | 17 |
| **F02** | Absolute Zero-Icon Compliance | 5 | 5 | 2 | 2 | 5 | 19 |
| **F03** | Media Catalog & Data Engine | 5 | 5 | 4 | 2 | 3 | 19 |
| **F04** | Master Editorial Layout | 5 | 5 | 3 | 4 | 2 | 19 |
| **F05** | 4 Curated Suite Categories | 5 | 5 | 4 | 3 | 2 | 19 |
| **F06** | Room-Key Explorer Modal Drawer | 5 | 5 | 4 | 3 | 2 | 19 |
| **F07** | Room P.207 HTML5 Video Player | 5 | 5 | 2 | 2 | 2 | 16 |
| **F08** | Hotel Gallery Masonry & Filtering | 5 | 5 | 4 | 3 | 2 | 19 |
| **F09** | Fullscreen Lightbox Viewer | 5 | 5 | 4 | 3 | 2 | 19 |
| **F10** | Factual Amenities Display | 5 | 5 | 2 | 2 | 2 | 16 |
| **F11** | Interactive Booking Inquiry Modal | 5 | 5 | 5 | 3 | 2 | 20 |
| **F12** | Direct Reservation Channels | 5 | 5 | 2 | 2 | 1 | 15 |
| **F13** | Responsive Multi-Device Layout | 5 | 5 | 4 | 2 | 2 | 18 |
| **F14** | Local Asset URI Resolution | 5 | 5 | 3 | 2 | 5 | 20 |
| **F15** | E2E Harness & Test Runner | 5 | 5 | 2 | 2 | 2 | 16 |
| **TOTAL** | **15 Core Features** | **75** | **75** | **48** | **33** | **36** | **267 Tests** |

---

## 4. Detailed Test Specifications by Tier

### 4.1 Tier 1: Feature Primary Behavior (Happy Paths)
- **T1.F01 (Design Tokens):**
  - Verify CSS root variables: `--c-alabaster` (`#FDFBF7`), `--c-linen` (`#F5F0EB`), `--c-charcoal` (`#141414`), `--c-bronze` (`#A38954`), `--c-hairline` (`#E5DFD5`).
  - Verify Google Fonts import for `Playfair Display`, `Cormorant Garamond`, and `Plus Jakarta Sans`.
  - Verify base body font, background canvas color, and margin/padding reset.
  - Verify typographic scale rules (display, h1, h2, h3, body, eyebrow).
  - Verify button styling rules with uppercase letter spacing and hairline borders.
- **T1.F02 (Zero Icons):**
  - Verify navigation buttons use pure uppercase text: `MENU`, `ACCOMMODATIONS`, `GALLERY`, `AMENITIES`, `LOCATION`, `RESERVE`.
  - Verify modal close triggers use typographic brackets: `[ CLOSE ]` or `[ ESC // CLOSE ]`.
  - Verify gallery controls use pure text: `[ PREV ]`, `[ NEXT ]`, `[ CLOSE ]`.
  - Verify video playback controls use text badges: `[ PLAY VIDEO ]`, `[ PAUSE ]`, `[ MUTE ]`.
  - Verify amenity list items use structured category tags instead of icon glyphs.
- **T1.F03 (Media Catalog):**
  - Verify `HOTEL_DATA` contains property metadata (name, address in Bảo Lộc, phone, email, floors=4, rooms=21).
  - Verify 4 categories are defined with valid titles, taglines, descriptions, and room key lists.
  - Verify 21 rooms (`P.001` - `P.304`) are defined with correct floor numbers and photo arrays.
  - Verify 95 gallery photos are registered with category tags (`exterior`, `lobby`, `suites`, `details`).
  - Verify 8 factual amenities are registered with titles and detailed descriptions.
- **T1.F04 (Master Layout):**
  - Verify semantic HTML5 elements: `<header>`, `<main>`, `<section id="hero">`, `<section id="suites">`, `<section id="gallery">`, `<section id="amenities">`, `<section id="location">`, `<footer>`.
  - Verify Hero section contains title, subtitle, and primary `[ EXPLORE SUITES ]` / `[ RESERVE ]` actions.
  - Verify Accommodations section displays 4 suite category cards.
  - Verify Gallery section renders masonry container and filter tab strip.
  - Verify Footer renders verified address, direct phone line, email, and social contact links.
- **T1.F05 (4 Curated Categories):**
  - Verify Category 1: "The Balcony Suites" (includes P.206, P.207, P.301, P.302; hasVideo=true).
  - Verify Category 2: "The Deluxe King Sanctuaries" (includes P.101, P.102, P.201, P.202, P.303, P.304).
  - Verify Category 3: "The Superior Double & Twin Rooms" (includes P.103-P.106, P.203-P.205).
  - Verify Category 4: "The Ground Level Suites" (includes P.001-P.004).
  - Verify each category card renders title, subtitle, key highlight badge, and `[ EXPLORE SUITES ]` trigger.
- **T1.F06 (Room Key Modal Drawer):**
  - Verify room modal DOM container `#room-modal` exists with backdrop and drawer container.
  - Verify room key selector renders buttons for all rooms belonging to the active category.
  - Verify switching room keys updates the displayed photo grid dynamically.
  - Verify `[ INQUIRE FOR THIS ROOM ]` CTA connects to reservation modal with pre-selected room.
  - Verify `[ CLOSE ]` button and Escape key dismiss the drawer and restore body scrolling.
- **T1.F07 (Room P.207 Video Player):**
  - Verify `<video>` element exists or is dynamically generated for Room P.207.
  - Verify video source resolves to `P.207/clip%20quay%20ph%C3%B2ng%20c%C3%B3%20ban%20c%C3%B4ng.mp4`.
  - Verify video attributes: `playsinline`, `preload="metadata"`.
  - Verify custom typographic control buttons: `[ PLAY ]`, `[ PAUSE ]`, `[ MUTE ]`.
  - Verify fallback poster image is configured from `P.207/` photo archive.
- **T1.F08 (Hotel Gallery Masonry & Filtering):**
  - Verify `#gallery-grid` renders 95 photo cards when filter is `ALL MEDIA // 95`.
  - Verify category filter buttons: `ALL`, `EXTERIOR`, `LOBBY`, `SUITES`, `DETAILS`.
  - Verify clicking a filter tab filters the masonry items with appropriate active CSS class.
  - Verify images include `loading="lazy"` and descriptive `alt` text.
  - Verify image click handler triggers fullscreen lightbox opening.
- **T1.F09 (Fullscreen Lightbox Viewer):**
  - Verify `#lightbox-modal` container exists with dark obsidian backdrop.
  - Verify lightbox renders current high-res image, counter (`ARCHIVE 14 OF 95`), and title.
  - Verify clicking `[ NEXT ]` advances image index by +1.
  - Verify clicking `[ PREV ]` decrements image index by -1.
  - Verify clicking `[ CLOSE ]` or backdrop closes the lightbox.
- **T1.F10 (Factual Amenities):**
  - Verify 8 factual amenities rendered: Climate Control (AC), Fiber Wi-Fi, Private Bath, Elevator, Sun Balconies, 24/7 Front Desk, Housekeeping, Secure Parking.
  - Verify 2-column or 4-column structured typographic grid layout.
  - Verify amenity descriptors are factual without exaggerated marketing jargon.
  - Verify zero icon glyphs used in amenity cards.
  - Verify subtle stone hairline borders between amenity items.
- **T1.F11 (Booking Inquiry Modal):**
  - Verify `#inquiry-modal` contains Check-In date, Check-Out date, Room preference select, Guest count select, Full Name input, Phone/Email input, Special requests textarea.
  - Verify room preference dropdown lists all 4 categories and all 21 individual room keys.
  - Verify form submission validates required fields.
  - Verify valid submission renders formatted summary card with unique `HN-INQ-XXXX` reference code.
  - Verify summary includes direct WhatsApp/Zalo and Phone CTA buttons.
- **T1.F12 (Direct Contact Channels):**
  - Verify phone link format: `tel:...`.
  - Verify Zalo/WhatsApp link format: `https://zalo.me/...` or `https://wa.me/...`.
  - Verify email link format: `mailto:...`.
  - Verify verified address in Phường B'Lao, TP. Bảo Lộc, Tỉnh Lâm Đồng.
  - Verify Google Maps link or location directions modal trigger.
- **T1.F13 (Responsive Layout):**
  - Verify `@media (max-width: 768px)` mobile styles defined in CSS.
  - Verify `@media (min-width: 769px) and (max-width: 1024px)` tablet styles defined.
  - Verify `@media (min-width: 1440px)` desktop container capping.
  - Verify mobile navigation drawer behavior for small viewports.
  - Verify `meta name="viewport"` configured with `width=device-width, initial-scale=1.0`.
- **T1.F14 (Local Asset URI Resolution):**
  - Verify all 21 room directory paths exist on filesystem.
  - Verify all 71 room photo paths exist and are readable.
  - Verify Room P.207 video file exists and is non-empty.
  - Verify all 95 gallery photos in `Ảnh Khách Sạn/` exist and are readable.
  - Verify percent-encoding for Vietnamese diacritics in HTML/JS URLs.
- **T1.F15 (E2E Test Harness):**
  - Verify `tests/e2e_runner.py` executes standalone without external package dependencies.
  - Verify runner reports passing/failing status per tier and feature.
  - Verify output includes summary statistics (total, passed, failed, duration).
  - Verify non-zero exit code on failure and exit code 0 on all tests passing.
  - Verify test definitions JSON or programmatic test catalog is valid.

---

### 4.2 Tier 2: Boundary & Corner Cases
- **T2.01 (Date Boundary):** Check-In set to today, Check-Out set to today + 1 (minimum 1-night stay).
- **T2.02 (Date Validation Error):** Check-Out set earlier than or equal to Check-In -> Expect validation error `[ CHECK-OUT MUST BE AFTER CHECK-IN ]`.
- **T2.03 (Leap Year Date):** Check-In on February 28 / February 29 leap years.
- **T2.04 (Single-Day Same Day Attempt):** Check-In and Check-Out on same calendar date -> Form rejection.
- **T2.05 (Long Distant Booking):** Check-In 365 days in advance -> Form acceptance.
- **T2.06 (Lightbox Boundary Wrap 01 -> 95):** At index 0 (Image 01/95), clicking `[ PREV ]` wraps seamlessly to index 94 (Image 95/95).
- **T2.07 (Lightbox Boundary Wrap 95 -> 01):** At index 94 (Image 95/95), clicking `[ NEXT ]` wraps seamlessly to index 0 (Image 01/95).
- **T2.08 (Empty Special Requests):** Booking submitted with empty special requests -> Success (field is optional).
- **T2.09 (Special Characters in Guest Name):** Name with accented Vietnamese characters (`Nguyễn Văn Ánh`) and hyphens (`Jean-Luc`) -> Valid.
- **T2.10 (Single Character Name):** Name with 1 character -> Rejected with `[ PLEASE ENTER YOUR FULL NAME ]`.
- **T2.11 (International Phone Formats):** Phone with `+84`, `090...`, `+1 (555) 019-2834` -> Accepted.
- **T2.12 (Malformed Phone/Email):** Input `not-an-email-or-phone` -> Rejected with inline error.
- **T2.13 (Room Photo Count Variations):** Rooms with 3 photos (e.g. `P.001`, `P.101`, `P.303`) vs rooms with 4 photos (e.g. `P.002`, `P.106`, `P.202`, `P.302`) reflow without broken placeholders.
- **T2.14 (Mobile Viewport 320px):** Ultra-narrow mobile screen renders without horizontal scrollbar (`overflow-x: hidden`).
- **T2.15 (Tablet Viewport 768px):** Category grid reflows to 2-column layout; gallery adapts to 2-3 columns.
- **T2.16 (Desktop Viewport 1440px):** Content container constrained to max-width with balanced whitespace.
- **T2.17 (Ultra-Wide Viewport 2560px 4K):** Background canvas scales gracefully; typography remains sharp without line-length blowout.
- **T2.18 (Rapid Tab Switching):** Clicking gallery filter tabs in rapid succession updates DOM without race conditions.
- **T2.19 (Video Autoplay Policy):** Video configured with `muted` and `playsinline` to comply with mobile autoplay restrictions.
- **T2.20 (Keyboard Escape Trap):** Pressing `Escape` key closes whichever modal is open (Room Drawer, Lightbox, or Inquiry Modal).

---

### 4.3 Tier 3: Pairwise & Combinatorial Testing
- **T3.01 (Category × Room Key Mapping):**
  - Verify every one of the 4 categories correctly links to its designated room keys:
    - Balcony Suites -> `[P.206, P.207, P.301, P.302]` (4 rooms)
    - Deluxe King -> `[P.101, P.102, P.201, P.202, P.303, P.304]` (6 rooms)
    - Superior Twin/Double -> `[P.103, P.104, P.105, P.106, P.203, P.204, P.205]` (7 rooms)
    - Ground Level -> `[P.001, P.002, P.003, P.004]` (4 rooms)
    - Sum = 4 + 6 + 7 + 4 = 21 rooms.
- **T3.02 (Suite Category × Direct Inquiry Handshake):**
  - Clicking `[ INQUIRE FOR THIS ROOM ]` from within Room Drawer for room `P.207` opens Reservation Modal with `P.207` automatically pre-selected in dropdown.
  - Repeating for `P.001` (Ground Level), `P.102` (Deluxe King), `P.105` (Superior Twin) correctly preserves selected room key.
- **T3.03 (Gallery Filter × Lightbox Index):**
  - Filtering by `EXTERIOR`, opening image 3 in the filtered view, navigating `[ NEXT ]` traverses within the filtered subset or reflects accurate global counter.
- **T3.04 (Date Range × Guest Count × Accommodation Tier):**
  - Testing combinations of 1 night / 3 nights / 7 nights with 1 guest / 2 guests / 4 guests across all 4 suite categories.
- **T3.05 (Responsive Viewport × Active Modal):**
  - Opening Room Modal at 375px (renders full-width bottom sheet) vs at 1440px (renders centered luxury modal drawer).

---

### 4.4 Tier 4: Real-World Workloads & High-Fidelity User Journeys

#### Journey 1: The Luxury Balcony Suite Explorer
1. Guest lands on homepage, observes tranquil serif hero and typography.
2. Scrolls to Accommodations section, clicks `[ EXPLORE SUITES ]` on **The Balcony Suites**.
3. Room Drawer opens, displays overview and room key tabs (`[ P.206 ]`, `[ P.207 ]`, `[ P.301 ]`, `[ P.302 ]`).
4. Guest clicks `[ KEY P.207 ]`, observes embedded HTML5 video player with balcony tour clip.
5. Clicks `[ PLAY ]` to review vertical balcony footage, then reviews the 3 authentic photos.
6. Clicks `[ INQUIRE FOR THIS SUITE ]`, which transitions to Reservation Modal with `P.207` selected.
7. Submits inquiry details, receives Confirmation Summary with reference code and direct Zalo/WhatsApp button.

#### Journey 2: The Architectural Gallery Connoisseur
1. Guest navigates to `#gallery` via header `GALLERY` link.
2. Clicks `[ ARCHITECTURE & EXTERIOR ]` filter tab; masonry smoothly filters images.
3. Clicks on the first exterior facade photo; Fullscreen Lightbox opens with obsidian backdrop.
4. Uses keyboard `ArrowRight` to browse consecutive high-res images.
5. Observes counter updating (`ARCHIVE 02 OF 95`).
6. Uses `Escape` key to close lightbox and returns to browsing the hotel story.

#### Journey 3: The Direct Booking Traveler
1. Guest clicks `RESERVE` CTA in header.
2. Booking Inquiry Modal opens immediately.
3. Guest selects Check-In (tomorrow), Check-Out (in 3 days), Suite Category (`The Deluxe King Sanctuaries`), Guests (`2 Adults`).
4. Enters Name ("Alexander Vance"), Email ("alexander.vance@luxurytravel.com"), Phone ("+84901234567").
5. Enters special request ("Late check-in at 20:00, quiet high-floor room").
6. Submits form; client validation passes.
7. Confirmation Summary Drawer renders with formatted booking overview, reference code `HN-INQ-...`, and one-touch `[ CONNECT VIA WHATSAPP ]` / `[ CALL FRONT DESK ]` actions.

#### Journey 4: The Ground Level Accessible Guest
1. Guest explores Ground Level Suites (`P.001` - `P.004`) for step-free convenience.
2. Views Room `P.001` photos showing ground floor entryway.
3. Checks Amenities section confirming passenger elevator and 24/7 reception desk.
4. Clicks direct telephone hotline in footer (`tel:0901234567`) to speak directly with the concierge.

---

### 4.5 Tier 5: Adversarial Invariants & Deep Compliance Auditing

#### Invariant A: The Zero-Icon Mandate (Deep AST / Regex Inspection)
The runner performs automated multi-file scanning across `index.html`, `assets/css/luxury-theme.css`, `assets/js/hotel-data.js`, and `assets/js/app.js`:
1. **Zero `<svg>` Tags:** Regex `/<svg[\s>]/i` must return **0 matches**.
2. **Zero Icon Classes:** Regex `/\b(fa|fa-[a-z0-9-]+|fas|far|fal|fad|lucide|lucide-[a-z0-9-]+|heroicon|material-icons|feather|glyphicon|tabler)\b/i` must return **0 matches**.
3. **Zero Icon Font Imports:** Regex `/(fontawesome|font-awesome|lucide|heroicons|ionicons|feather-icons|material-design-icons|glyphicons)/i` must return **0 matches**.
4. **Zero Emoji Unicode Codepoints:** Scanning all character codes against emoji blocks (`\u{1F300}-\u{1F6FF}`, `\u{1F900}-\u{1F9FF}`, `\u{2600}-\u{26FF}`, `\u{2700}-\u{27BF}`, `\u{1F680}-\u{1F6FF}`) must return **0 emoji characters**.
5. **Zero Icon Pseudo-Elements:** CSS rules must not contain icon content like `content: "\f007"` or font families like `font-family: "FontAwesome"`.

#### Invariant B: Zero Fake Ratings, Fake Reviews & Command Simulations
1. **Zero Fake Star Glyphs:** Scanning for `⭐️`, `★`, `☆`, `5-star`, `4.9/5`, `rating-stars` must return **0 matches**.
2. **Zero Fabricated Reviews:** No fake testimonial quotes or simulated guest rating scores.
3. **Zero Simulated Terminal Commands:** No bash command prompt simulations (`$ curl`, `root@server`, `> npm install`) in the user interface.

#### Invariant C: 100% Asset & Path Verification
1. **Local Filesystem Resolution:** Every media path referenced in HTML, CSS, and `hotel-data.js` must exist on the local filesystem.
2. **Exact Asset Counts:**
   - 21 Room Folders (`P.001` through `P.304`)
   - 71 Room Photographs (.jpg)
   - 1 Room Video (`P.207/clip quay phòng có ban công.mp4`)
   - 95 General Hotel Photos in `Ảnh Khách Sạn/`
   - Total Assets = 167 media files.
3. **URL Percent-Encoding:** Diacritics and spaces in folder and file names must be properly percent-encoded for web browser HTTP requests (e.g. `Ảnh%20Kh%C3%A1ch%20S%E1%BA%A1n/` and `clip%20quay%20ph%C3%B2ng%20c%C3%B3%20ban%20c%C3%B4ng.mp4`).

#### Invariant D: Responsive CSS & Layout Bounds
1. **No Fixed Breaking Widths:** No global CSS containers with fixed pixel widths > 100vw without responsive max-width rules.
2. **Box-Sizing:** Global `box-sizing: border-box` applied to prevent accidental layout overflow.
3. **Horizontal Scroll Prevention:** `overflow-x: hidden` on viewport roots (`html`, `body`).

---

## 5. Quality Thresholds & Pass Criteria

| Metric | Target / Threshold | Enforcement |
|---|---|---|
| **Tier 1 Feature Coverage** | 100% (All 15 Features Passed) | Mandatory blocker |
| **Tier 2 Boundary Tests** | 100% (All 75 Boundary Cases Passed) | Mandatory blocker |
| **Tier 3 Combinatorial Tests**| 100% (All 48 Combinations Passed) | Mandatory blocker |
| **Tier 4 User Journeys** | 100% (All 4 Journeys Passed) | Mandatory blocker |
| **Tier 5 Adversarial Invariants** | 0 Icon Violations, 0 Fake Reviews, 0 Broken Assets | Absolute Zero Tolerance |
| **Asset HTTP 200 Resolution**| 167 / 167 Assets Resolving | Absolute Zero 404s |
| **Test Suite Execution Time**| < 5.0 seconds | Autonomous execution |

---

## 6. Test Runner Command & Artifact Outputs

### 6.1 Invocation
```bash
python3 tests/e2e_runner.py
```

### 6.2 Execution Flags
- `--verbose`: Prints detailed per-test diagnostic messages.
- `--tier [1|2|3|4|5|all]`: Runs specific test tiers or all tiers.
- `--json-report`: Generates structured JSON test execution report at `tests/report.json`.
- `--server-port 8080`: Spawns lightweight ephemeral HTTP server for live asset resolution testing.

---
*End of Test Infrastructure Specification*
