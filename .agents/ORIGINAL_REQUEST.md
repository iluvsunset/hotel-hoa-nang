# Original User Request

## 2026-08-29T16:11:13Z

Build an ultra-refined, editorial-grade luxury hotel website for **Hotel Hoa Nắng**, studying and synthesizing the design philosophies of world-renowned luxury hospitality icons (**Amanoi / Aman Resorts**, **Lotte Hotel Saigon**, **Cheval Blanc**, and **Capella**). The website will feature the property authentic 21 guest rooms across 4 floors (`P.001` through `P.304`), its extensive curated photo collection (`Ảnh Khách Sạn`), adhering strictly to factual information with zero artificial ratings, zero generic icons, and zero simulated commands.

Working directory: `/Users/iluvsunset/Hotel Hoa Nắng`
Integrity mode: `development`

---

## Luxury Benchmark Study Synthesis

1. **Aman Resorts (Amanoi, Aman Tokyo):** Uncluttered serene whitespace, calm warm-linen palette (`#FDFBF7`), high-fashion editorial serif typography (`Playfair Display` / `Cormorant Garamond`), asymmetric storytelling, and quiet restraint.
2. **Cheval Blanc (LVMH Hospitality):** Delicate hairline accents (`#A38954`), room-by-room architectural presentation, full-bleed cinematic imagery, and sophisticated modal drawers.
3. **Capella & Bvlgari Hotels:** Tactile luxury framing, high-contrast clarity, intuitive spatial navigation, and authentic room detail disclosure.
4. **Lotte Hotel Saigon:** Clear tiering of suites, reliable room specifications, and direct reservation inquiry mechanisms.

---

## Requirements

### R1. Design System & Luxury Editorial Aesthetic
Implement an ultra-high-end visual system inspired by Aman and Cheval Blanc:
- **Color Palette:** Warm Alabaster (`#FDFBF7`), Natural Linen (`#F5F0EB`), Deep Charcoal/Obsidian (`#141414`), Muted Champagne Bronze (`#A38954` / `#8C7343`), and Soft Stone Hairlines (`#E5DFD5`).
- **Typography:** Refined editorial serif for titles (*Playfair Display* / *Cormorant Garamond* with letter-spacing) paired with clean geometric sans for body text (*Plus Jakarta Sans* / *Inter*).
- **Strict Compliance (Zero Icons Across Entire Site):** ABSOLUTELY ZERO ICONS of any kind — NO SVG icons, NO icon libraries (Lucide, FontAwesome, Heroicons), NO emoji icons, and NO icon glyphs. All navigation, controls, buttons, amenities, and indicators MUST rely purely on refined typography (e.g. `[ CLOSE ]`, `[ PREVIOUS ]`, `[ NEXT ]`, `MENU`, `RESERVE`), delicate geometric hairline dividers, text labels, and authentic photography. ZERO fabricated rating stars or fake reviews, ZERO terminal/command simulations. 100% authentic, factual luxury presentation.

### R2. Curated Suite Categories & Detailed Room Gallery Exploration
Organize the 21 rooms into 4 elegant accommodation categories rather than a raw, cluttered room list:
1. **The Balcony Suites:** Upper-level suites with private outdoor balconies and elevated views (featuring Room P.207 with video).
2. **The Deluxe King Sanctuaries:** Spacious master king bedrooms designed for quiet retreat and deep rest.
3. **The Superior Double & Twin Rooms:** Generous accommodations with twin or double bedding for companions or families.
4. **The Ground Level Suites:** Quiet, serene rooms on Level 0 with seamless, step-free access.

- **Factual Room Gallery Selector:** Inside each suite category modal, guests can view the collection photos and optionally select any specific room key (`P.001` through `P.304`) to view its individual authentic photos.
- **Video Playback for Room P.207:** Seamlessly embed the HTML5 video player for `clip quay phòng có ban công.mp4`.

### R3. Curated Hotel Gallery & Media Experience
Showcase the hotel 95 authentic photos from `Ảnh Khách Sạn/`:
- Organized masonry layout with category filters (e.g., *All*, *Exterior & Architecture*, *Lobby & Common Spaces*, *Interiors & Corridors*).
- Fullscreen interactive lightbox viewer with pure text navigation (`[ PREV ]`, `[ NEXT ]`, `[ CLOSE ]`), keyboard navigation (Esc, Left/Right arrows), and image counter.

### R4. Factual Amenities & Direct Booking / Inquiry System
- **Amenities:** Clean typographic grid detailing factual features (Air Conditioning, High-speed Wi-Fi, Private En-suite Bathrooms, Elevator to all 4 Floors, Balcony Options, Daily Housekeeping, 24/7 Front Desk).
- **Interactive Reservation Inquiry Modal:** Form capturing Check-In date, Check-Out date, Room preference, Guest count, Contact Name, Phone/Email, and Special Requests with validation and instant confirmation feedback.
- **Direct Contact:** Prominently featured direct hotline, WhatsApp/Zalo links, and location address.

### R5. Production-Ready Standalone Architecture
- Self-contained, blazing-fast web application (`index.html`, `assets/css/luxury-theme.css`, `assets/js/app.js`) with responsive layout across mobile (375px), tablet (768px), and desktop (1440px+).
- Validated local asset references ensuring zero 404 errors for all 21 room folders and hotel photos.

---

## Acceptance Criteria

### Visual & Architectural Design
- [ ] Website adheres to Aman/Cheval Blanc luxury editorial aesthetic with serif typography and warm alabaster/stone color scheme.
- [ ] Contains ABSOLUTELY ZERO ICONS of any type (No SVGs, No icon fonts, No emojis, No icon badges) — pure typographic controls and labels only.
- [ ] Contains ZERO fake review stars, ZERO fabricated ratings, and ZERO simulated commands.
- [ ] Responsive layout renders cleanly across mobile (375px), tablet (768px), and desktop (1440px+) without horizontal overflow.

### Room Showcase & Media
- [ ] Accommodations are grouped into the 4 curated categories (Balcony Suites, Deluxe King Sanctuaries, Superior Twin/Double, Ground Level Suites).
- [ ] Room modal loads and displays all corresponding images for any selected category or specific room key (`P.001` - `P.304`).
- [ ] Room `P.207` includes working HTML5 video playback for its balcony clip.
- [ ] Curated hotel gallery masonry renders images from `Ảnh Khách Sạn/` with working fullscreen lightbox.

### Interactive Inquiries & Verification
- [ ] Booking inquiry modal allows date selection, room selection, and generates a formatted inquiry summary.
- [ ] All local image and video paths resolve with HTTP 200 / valid file paths without broken links.
- [ ] Tested and verified under a local server.

---

## Follow-up — 2026-08-29T16:18:50Z

USER REQUIREMENT UPDATE:
The user specifically requested that this website is for Vietnamese guests!
Please ensure that:
1. The website content is presented in refined, high-end editorial Vietnamese (inspired by Amanoi's Vietnamese edition: e.g., Khách Sạn Hoa Nắng, Bộ Sưu Tập Phòng Nghỉ, Kho Ảnh Thực Tế, Tiện Nghi Thực Tế, Liên Hệ & Đặt Phòng Trực Tiếp, etc.).
2. Include an elegant luxury language switcher (VI / EN) or make Vietnamese the primary default language with full support so Vietnamese guests have a world-class luxury editorial experience.
3. Maintain all strict constraints: ZERO ICONS, ZERO fake ratings/reviews/commands, pure typography and authentic photography.

---

## Follow-up — 2026-08-29T16:20:43Z

USER DESIGN ENHANCEMENT:
The user specifically requested to incorporate Apple's design philosophy into the site's aesthetics and interactions:
1. Apple-grade typography precision, high-contrast headline hierarchy, and spacious breathing room.
2. Fluid micro-interactions and transitions (smooth cubic-bezier curves `cubic-bezier(0.16, 1, 0.3, 1)`, subtle hover scales, smooth scroll reveal).
3. Frosted glass header (`backdrop-filter: blur(20px)` with translucent warm alabaster/stone background).
4. Cinematic suite showcase (treating each suite like an architectural masterpiece with crisp specs grid).
5. Maintain ZERO ICONS, ZERO fake ratings, pure typography, and full VI/EN bilingual support.
