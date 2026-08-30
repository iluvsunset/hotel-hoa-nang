# Project: Hotel Hoa Nắng Luxury Editorial Website

## Architecture
A standalone, high-performance, editorial-grade luxury website inspired by Amanoi and Cheval Blanc luxury hospitality benchmarks.
- **Frontend Core**: Semantic HTML5 (`index.html`), Vanilla CSS3 with luxury design tokens (`assets/css/luxury-theme.css`), Modular Vanilla ES6 JavaScript (`assets/js/hotel-data.js`, `assets/js/app.js`).
- **Data Model**: `assets/js/hotel-data.js` containing typed JSON-like data structures for 21 guest rooms (71 photos, 1 MP4 video), 95 gallery photos across 4 categories, 4 curated suite collections, factual amenities, and property metadata.
- **Interactive Layers**:
  1. Responsive Editorial Header & Navigation (`MENU`, `ACCOMMODATIONS`, `GALLERY`, `AMENITIES`, `LOCATION`, `RESERVE`).
  2. Hero Cinematic Stage with atmospheric backdrop and subtle serif title.
  3. Curated Accommodations Suite Explorer with category cards, detailed modal drawer, interactive room-key selector (`P.001` to `P.304`), and HTML5 video tour player for `P.207`.
  4. Curated Hotel Gallery with category filtering (Exterior, Lobby, Interiors, Garden/Ambiance) and fullscreen lightbox viewer with pure typographic navigation (`[ PREV ]`, `[ NEXT ]`, `[ CLOSE ]`, counter, keyboard navigation).
  5. Factual Amenities Grid & Property Story.
  6. Interactive Reservation Inquiry Modal with live date calculations, room selector, validation, and formatted inquiry summary generation.
  7. Editorial Footer & Direct Contact channels (Phone, Zalo/WhatsApp, Address in Bảo Lộc, Lâm Đồng).
- **Strict Compliance**: ABSOLUTE ZERO ICONS across the entire site (no SVGs, no icon fonts, no emojis, no icon glyphs). Pure typography, geometric hairlines, and authentic photography only. Zero fake ratings, zero fake reviews, zero simulated terminal commands.

---

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F01 | Luxury Design Tokens & Theme | Palette (#FDFBF7, #F5F0EB, #141414, #A38954, #E5DFD5), typography, hairlines, responsive grids | M1 | survey |
| F02 | Absolute Zero-Icon Compliance | Pure typographic controls (`[ CLOSE ]`, `[ PREVIOUS ]`, `[ NEXT ]`, `MENU`, `RESERVE`, etc.), zero SVG/icon fonts/emojis | M1, M3, M4, M5 | survey |
| F03 | Media Catalog & Data Engine | Complete dataset for 21 rooms (71 photos + P.207 video), 95 hotel photos, 4 suite categories, amenities | M2 | survey |
| F04 | Master Editorial Layout | Header, Hero, Curated Suites, Gallery, Amenities, Location/Story, Inquiry CTA, Editorial Footer | M1 | survey |
| F05 | 4 Curated Suite Categories | The Balcony Suites, The Deluxe King Sanctuaries, The Superior Double & Twin Rooms, The Ground Level Suites | M3 | survey |
| F06 | Room-Key Explorer Modal Drawer | Detailed modal displaying category overview, individual room selector (`P.001` - `P.304`), full photo gallery per room | M3 | survey |
| F07 | Room P.207 HTML5 Video Player | Vertical HD video playback (`clip quay phòng có ban công.mp4`) with custom typographic controls | M3 | survey |
| F08 | Hotel Gallery Masonry & Filtering | 95 authentic photos in `Ảnh Khách Sạn/` with category filters (All, Exterior, Lobby, Interiors, Garden) | M4 | survey |
| F09 | Fullscreen Lightbox Viewer | High-res modal lightbox with pure text navigation (`[ PREV ]`, `[ NEXT ]`, `[ CLOSE ]`), keyboard nav, counter | M4 | survey |
| F10 | Factual Amenities Display | Editorial grid of 8 verified amenities (AC, Wi-Fi, En-suite, Elevator, 24/7 Desk, Housekeeping, Balconies, Parking) | M5 | survey |
| F11 | Interactive Booking Inquiry Modal | Date range selector, room picker, guest count, contact details, live validation, summary generation | M5 | survey |
| F12 | Direct Reservation & Location Channels | Verified phone line, Zalo/WhatsApp link, email, address in Bảo Lộc | M5 | survey |
| F13 | Responsive Multi-Device Perfection | Flawless rendering on mobile (375px), tablet (768px), and desktop (1440px+) with zero horizontal overflow | M1, M6 | survey |
| F14 | Local Asset URI Resolution | 100% valid HTTP 200 paths for all 167 media assets with proper URL encoding for diacritics and spaces | M2, M6 | survey |
| F15 | E2E Test Suite & Adversarial Hardening | Comprehensive test harness covering Tiers 1-5 (Feature, Boundary, Combinatorial, Real-world, Adversarial) | E2E Track, M6 | survey |

---

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| E2E | E2E Testing Track | Requirement-driven test suite (Tiers 1-4), test runner, and `TEST_READY.md` publication | None | IN_PROGRESS |
| M1 | Luxury Design System & Foundation | CSS variables, typography imports, reset, header/footer, base layout structure | None | PLANNED |
| M2 | Data Engine & Asset Catalog | `assets/js/hotel-data.js` indexing 21 rooms, 71 photos, P.207 video, 95 gallery photos, amenities | None | PLANNED |
| M3 | Curated Accommodations & Room Explorer | Suite category cards, modal drawer, room-key selector (`P.001`-`P.304`), P.207 video player | M1, M2 | PLANNED |
| M4 | Curated Hotel Gallery & Lightbox | 95-photo masonry grid, category filtering tabs, fullscreen lightbox with pure typographic controls | M1, M2 | PLANNED |
| M5 | Amenities, Inquiry Modal & Contact | Factual amenities grid, interactive booking modal with validation, direct contact channels | M1, M2 | PLANNED |
| M6 | E2E Verification & Adversarial Coverage | Run full test suite (Tiers 1-4), fix any regressions, Tier 5 adversarial hardening | M3, M4, M5, E2E | PLANNED |

---

## Code Layout
```
/Users/iluvsunset/Hotel Hoa Nắng/
├── index.html                     # Main luxury editorial entry point
├── assets/
│   ├── css/
│   │   └── luxury-theme.css       # Design tokens, typography, layout, modals, gallery, responsive styles
│   └── js/
│       ├── hotel-data.js          # Complete catalog of 21 rooms, 95 photos, categories, amenities
│       └── app.js                 # UI interactions, drawer modals, lightbox, video controls, inquiry validation
├── tests/
│   ├── e2e_runner.py              # Automated HTTP / asset / DOM verification test runner
│   └── test_cases.json            # Tiers 1-4 test definitions & invariants
├── Ảnh Khách Sạn/                 # 95 general hotel photos
├── P.001/ ... P.304/              # 21 room directories with 71 photos
│   └── P.207/clip quay phòng có ban công.mp4
├── PROJECT.md                     # Global architecture & milestone tracking
├── TEST_INFRA.md                  # E2E Test Suite specification
├── TEST_READY.md                  # Test suite ready signal
└── .agents/                       # Agent metadata & logs only
```

---

## Interface Contracts

### Data Contract (`assets/js/hotel-data.js` -> `assets/js/app.js`)
```javascript
window.HOTEL_DATA = {
  property: {
    name: "Hotel Hoa Nắng",
    tagline: "Editorial Luxury Hospitality",
    address: "Phường B'Lao, TP. Bảo Lộc, Tỉnh Lâm Đồng, Vietnam",
    phone: "0901 234 567",
    email: "hotelhoanang@gmail.com",
    zalo: "https://zalo.me/...",
    floors: 4,
    totalRooms: 21
  },
  categories: [
    {
      id: "balcony-suites",
      title: "The Balcony Suites",
      tagline: "Elevated Private Balconies & Panoramic Horizons",
      description: "...",
      roomKeys: ["P.206", "P.207", "P.301", "P.302"],
      heroImage: "P.207/...",
      hasVideo: true,
      videoPath: "P.207/clip%20quay%20ph%C3%B2ng%20c%C3%B3%20ban%20c%C3%B4ng.mp4"
    },
    // ... 4 categories total
  ],
  rooms: {
    "P.001": { floor: 0, categoryId: "ground-level-suites", photos: [...] },
    // ... 21 rooms total (P.001 to P.304)
  },
  gallery: [
    { id: 1, category: "exterior", title: "...", src: "Ảnh%20Khách%20Sạn/..." },
    // ... 95 photos total
  ],
  amenities: [
    { id: "ac", title: "Air Conditioning", description: "Individual climate control in every suite" },
    // ... 8 amenities
  ]
};
```

### UI Interaction Contracts
- **Modal Open/Close**: `openRoomModal(categoryId, selectedRoomKey)`, `closeRoomModal()`
- **Lightbox Open/Close/Nav**: `openLightbox(photoIndex)`, `closeLightbox()`, `nextLightbox()`, `prevLightbox()`
- **Video Playback**: `toggleVideoPlayback(containerElement)`
- **Inquiry Submission**: `handleInquirySubmit(formData)` -> generates structured reservation summary
