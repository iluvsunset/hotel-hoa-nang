# HOTEL HOA NẮNG — LUXURY SPECIFICATION & ARCHITECTURAL REQUIREMENT DOCUMENT
**Document Version:** 1.0.0 (Production Release Specification)  
**Author:** Luxury Specification Miner (`survey_spec_miner_2`)  
**Target Property:** Hotel Hoa Nắng (21 Guest Rooms across 4 Levels, 95 Curated Media Assets)  
**Design Reference:** Aman Resorts (Amanoi, Aman Tokyo), Cheval Blanc (LVMH), Capella Saigon, Bvlgari Hotels  
**Integrity Mode:** Development & High-Fidelity Static Production  

---

## 1. Executive Summary & Design Philosophy

### 1.1 Brand Essence: "Quiet Luxury & Natural Sunlight"
Hotel Hoa Nắng ("Sunlight Flower Hotel") represents an architectural sanctuary of quiet, serene hospitality. The digital flagship must evoke the understated tranquility and restrained minimalism of world-class luxury resorts like Amanoi and Cheval Blanc St-Tropez.

The platform rejects flashy commercial clichés, popups, and fake social proof in favor of:
- **Serene White Space & Natural Linen Tones:** Breathing room, deliberate alignment, subtle stone gridlines.
- **High-Fashion Editorial Typography:** High-contrast serif headlines paired with ultra-clean geometric sans-serif metadata.
- **Pure Typographic Controls (Zero-Icon Mandate):** Total elimination of generic icon libraries, emojis, and vector glyphs. All interactions are articulated with explicit, poetic typographic labels and geometric brackets (e.g. `[ CLOSE ]`, `[ PREVIOUS ]`, `[ NEXT ]`, `RESERVE`, `MENU`).
- **100% Factual Integrity:** Direct presentation of all 21 actual guest rooms (`P.001` through `P.304`), actual room photos, actual property video, and genuine hotel amenities without simulated star counters, artificial countdown clocks, or fake reviews.

---

## 2. Global Design System & Token Specification

### 2.1 Color Palette & Token Definitions
The color system reflects natural stone, woven linen, warm alabaster, brushed champagne bronze, and deep obsidian charcoal.

| Design Token | Hex Code | RGB | HSL / CSS Var | Role & Usage | Contrast Ratio on Canvas |
|---|---|---|---|---|---|
| `color-canvas-alabaster` | `#FDFBF7` | `253, 251, 247` | `var(--c-alabaster)` | Main website background, modal backdrop base, card highlights | Base (1.0:1) |
| `color-surface-linen` | `#F5F0EB` | `245, 240, 235` | `var(--c-linen)` | Secondary card surfaces, drawer backgrounds, table stripes, form inputs | 1.1:1 on Alabaster |
| `color-charcoal-obsidian`| `#141414` | `20, 20, 20` | `var(--c-charcoal)` | Primary text, main titles, high-contrast button fills, dark modal backdrops | 18.2:1 (AAA) |
| `color-charcoal-muted`   | `#4A4641` | `74, 70, 65` | `var(--c-charcoal-muted)`| Body copy, subtitle descriptors, inactive tabs, captions | 8.9:1 (AAA) |
| `color-bronze-champagne` | `#A38954` | `163, 137, 84` | `var(--c-bronze)` | Primary luxury accent, active tab underlines, hover borders, badge outlines | 3.6:1 (Large text/Accents) |
| `color-bronze-deep`      | `#8C7343` | `140, 115, 67` | `var(--c-bronze-deep)` | Hover states on bronze accents, dark text on bronze containers | 4.8:1 (AA) |
| `color-hairline-stone`   | `#E5DFD5` | `229, 223, 213` | `var(--c-hairline)` | 1px delicate architectural borders, card outlines, table gridlines | Subtle Structure |
| `color-hairline-subtle`  | `rgba(20, 20, 20, 0.08)` | - | `var(--c-hairline-subtle)`| Semi-transparent separators over photography and dynamic surfaces | Dynamic Hairline |
| `color-overlay-dark`     | `rgba(20, 20, 20, 0.94)` | - | `var(--c-overlay-dark)`| Fullscreen lightbox background, cinematic video modal backdrop | 20.0:1 (AAA) |

### 2.2 Typography System & Font Pairings

The typographic hierarchy combines the timeless elegance of haute-couture editorial serifs with the hyper-legible geometric precision of modern sans-serifs.

#### Google Fonts Integration:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### Typographic Scales & Styles:

| Typographic Level | Font Family | Size (Desktop / Mobile) | Weight | Line Height | Letter Spacing (Tracking) | Text Transform | Usage |
|---|---|---|---|---|---|---|---|
| **Display Title (Hero)** | *Playfair Display* / *Cormorant* | 4.5rem (72px) / 2.75rem (44px) | 400 Regular / 500 Medium | 1.1 | `-0.02em` | Sentence case | Main Hero statement, Section Hero banners |
| **H1 Section Heading** | *Playfair Display* / *Cormorant* | 3.0rem (48px) / 2.0rem (32px) | 400 Regular | 1.2 | `-0.01em` | Normal / Editorial | Suite titles, Gallery title, Story header |
| **H2 Category / Card Title** | *Playfair Display* | 2.0rem (32px) / 1.5rem (24px) | 500 Medium | 1.25 | `0.00em` | Normal | Category cards, Modal titles, Room keys |
| **H3 Subsection Title** | *Playfair Display* | 1.35rem (21px) / 1.2rem (19px) | 600 SemiBold | 1.3 | `0.02em` | Normal | Amenities groups, form step titles |
| **Eyebrow / Category Tag** | *Plus Jakarta Sans* | 0.75rem (12px) / 0.70rem (11px) | 600 SemiBold | 1.4 | `0.25em` (3px) | `uppercase` | Section pre-headers, badges, room numbers |
| **Body Primary** | *Plus Jakarta Sans* | 1.0rem (16px) / 0.95rem (15px) | 300 Light / 400 Regular | 1.7 | `0.01em` | Normal | Descriptive paragraphs, room features |
| **Body Secondary / Muted** | *Plus Jakarta Sans* | 0.875rem (14px) / 0.825rem (13px) | 400 Regular | 1.6 | `0.02em` | Normal | Captions, metadata, disclaimer notes |
| **Button / Interactive Control** | *Plus Jakarta Sans* | 0.8125rem (13px) / 0.75rem (12px)| 600 SemiBold | 1.0 | `0.20em` (2.5px)| `uppercase` | CTA buttons, bracket controls (`[ CLOSE ]`) |
| **Numerics / Room Keys** | *Playfair Display* / *Jakarta* | 1.125rem (18px) / 1.0rem (16px) | 500 Medium | 1.0 | `0.10em` | `uppercase` | `P.001` - `P.304`, Image counter `01 / 95` |

---

## 3. The ZERO-ICON MANDATE: Specification & Enforcement

### 3.1 Strict Anti-Icon Rules
To maintain uncompromised editorial purity, **no graphic icons of any type are permitted anywhere on the website**:
1. **NO SVG Icons:** No `<svg>` icons, paths, or icon sprites.
2. **NO Font Icon Libraries:** Total prohibition of FontAwesome, Lucide, Heroicons, Material Icons, Feather, Feather-Icons, Ionicons, etc.
3. **NO Emojis:** Zero emojis in text, buttons, alerts, or metadata (e.g. no ⭐️, 📞, 📍, 🚪, 🛁, 🏊, ✈️, 🛎️, ✉️).
4. **NO Simulated Glyph Badges:** No unicode decorative symbols posing as icon art (e.g. ❖, ✦, ✪, ★).

### 3.2 Pure Typographic Replacement Matrix

Every interaction point, state toggle, and informational indicator must be rendered purely via refined typography, delicate hairline frames, and textual clarity:

| Standard UI Pattern | Prohibited Icon Approach | Mandatory Typographic Pattern (Hotel Hoa Nắng) | CSS Styling & Behavioral Specification |
|---|---|---|---|
| **Modal / Lightbox Close** | `✕` SVG / Lucide `X` | `[ CLOSE ]` or `[ ESC // CLOSE ]` | `font-family: 'Plus Jakarta Sans'; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; border: 1px solid var(--c-hairline); padding: 0.5rem 1rem; cursor: pointer; transition: all 0.3s ease;` |
| **Gallery / Slider Next** | `→` or `chevron-right` SVG | `[ NEXT ]` or `NEXT →` (pure text) | Text button with subtle hover slide (`letter-spacing: 0.25em; text-transform: uppercase; font-weight: 600;`) |
| **Gallery / Slider Previous** | `←` or `chevron-left` SVG | `[ PREVIOUS ]` or `[ PREV ]` | Text button with subtle hover slide (`letter-spacing: 0.25em; text-transform: uppercase; font-weight: 600;`) |
| **Video Play Control** | Play triangle SVG / `▶` | `[ PLAY VIDEO ]` / `[ PAUSE ]` | Solid stone/charcoal badge with uppercase text, switching state dynamically upon video playback |
| **Video Audio Toggle** | Speaker SVG / Mute SVG | `[ SOUND ON ]` / `[ MUTE ]` | Typographic text toggle displaying current audio status |
| **Mobile Menu Trigger** | Hamburger 3-line SVG | `MENU` / `[ MENU ]` / `[ CLOSE MENU ]` | Understated uppercase label that flips to `[ CLOSE ]` when navigation drawer is active |
| **Reservation / Booking CTA** | Calendar SVG + "Book" | `RESERVE A SUITE` / `[ INQUIRE NOW ]` | High-contrast Charcoal button with bronze hairline border and letter-spaced text |
| **Room Modal Trigger** | Eye SVG / Magnifier SVG | `[ EXPLORE SUITE ]` / `[ VIEW 4 ROOMS ]` | Architectural hairline button with smooth hover background transition |
| **Category Filter Tabs** | Grid/List icon toggles | `ALL MEDIA // 95`, `EXTERIOR`, `LOBBY` | Clean text tabs separated by editorial double slashes `//` or hairline underlines |
| **Image Counter** | Dot pagination indicators | `01 / 95` or `ARCHIVE 12 OF 95` | Serene monospace/tabular numerals with muted charcoal finish |
| **Room Amenities Indicators** | Bed/Shower/Wifi icons | Explicit Labeled Rows with Category Prefix | Structured 2-column typographic list: `BEDDING // King Size Luxury Mattress`, `BATH // En-Suite Private Marble Bath` |
| **Location & Contact** | Phone / Map pin icons | `HOTLINE // +84 ...`, `ADDRESS // ...` | Distinct uppercase descriptor followed by verified factual contact info |
| **Form Validation States** | Checkmark / Warning icons | `[ REQUIRED FIELD ]` / `[ INVALID FORMAT ]` | Delicate red/bronze typographic alert message directly below input |

---

## 4. Accommodation Architecture: The 4 Curated Categories & 21 Rooms

The 21 rooms are distributed across 4 vertical floors. Rather than presenting a chaotic flat list of 21 cards, the accommodations are organized into **4 Curated Categories** that reflect guest intent, architectural orientation, and spatial design.

### 4.1 Accommodation Master Taxonomy

```
HOTEL HOA NẮNG (21 GUEST ROOMS)
│
├── CATEGORY 1: The Balcony Suites (Upper Floor View Accommodations)
│   ├── P.206 (Floor 2, 4 photos)
│   ├── P.207 (Floor 2, 3 photos + HD Video "clip quay phòng có ban công.mp4")
│   ├── P.301 (Floor 3, 3 photos)
│   └── P.302 (Floor 3, 4 photos)
│
├── CATEGORY 2: The Deluxe King Sanctuaries (Master King Suites for Rest & Solitude)
│   ├── P.101 (Floor 1, 3 photos)
│   ├── P.102 (Floor 1, 4 photos)
│   ├── P.201 (Floor 2, 3 photos)
│   ├── P.202 (Floor 2, 4 photos)
│   ├── P.303 (Floor 3, 3 photos)
│   └── P.304 (Floor 3, 3 photos)
│
├── CATEGORY 3: The Superior Double & Twin Rooms (Companion & Family Layouts)
│   ├── P.103 (Floor 1, 4 photos)
│   ├── P.104 (Floor 1, 3 photos)
│   ├── P.105 (Floor 1, 3 photos)
│   ├── P.106 (Floor 1, 4 photos)
│   ├── P.203 (Floor 2, 4 photos)
│   ├── P.204 (Floor 2, 3 photos)
│   └── P.205 (Floor 2, 3 photos)
│
└── CATEGORY 4: The Ground Level Suites (Step-Free Courtyard & Garden Access)
    ├── P.001 (Level 0, 3 photos)
    ├── P.002 (Level 0, 4 photos)
    ├── P.003 (Level 0, 3 photos)
    └── P.004 (Level 0, 3 photos)
```

### 4.2 Detailed Specifications of the 4 Categories

#### Category 1: The Balcony Suites (Level 2 & Level 3)
- **Tagline:** "Elevated Perspectives & Private Open-Air Balconies"
- **Architectural Essence:** Situated on the upper levels of the residence, these suites feature floor-to-ceiling glass apertures that open directly onto private sun balconies. Ideal for guests seeking morning sunlight, natural breeze, and scenic orientation.
- **Featured Highlight:** **Room P.207**, featuring an integrated cinematic HTML5 video walk-through documenting the interior sanctuary and open-air balcony experience.
- **Assigned Rooms:** `P.206`, `P.207`, `P.301`, `P.302`.
- **Key Specifications:**
  - Bedding: Master King or Queen Plush Bedding
  - Outdoor: Private Walkout Sun Balcony with Architectural Railing
  - Level: Floor 2 & Floor 3 (Serviced by Elevator)
  - Bath: En-Suite Spa Shower with Stone Vanities
  - Media: High-definition balcony walk-through video (P.207)

#### Category 2: The Deluxe King Sanctuaries (Level 1, Level 2, Level 3)
- **Tagline:** "Generous Spatial Proportions & Uninterrupted Serenity"
- **Architectural Essence:** Designed as pure retreats for rest and contemplative focus. Each suite is anchored by an oversized King-size bed dressed in crisp natural linens, minimalist acoustic wall paneling, and warm ambient backlighting.
- **Assigned Rooms:** `P.101`, `P.102`, `P.201`, `P.202`, `P.303`, `P.304`.
- **Key Specifications:**
  - Bedding: 1.8m x 2.0m King Luxury Bed
  - Level: Floors 1, 2, and 3
  - Spatial Focus: Deep Acoustic Silence, Expansive Floor Area, Dedicated Workspace Vanity
  - Bath: En-Suite Modern Bathroom with Rainfall Water Flow

#### Category 3: The Superior Double & Twin Rooms (Level 1 & Level 2)
- **Tagline:** "Harmonious Flexibility for Companions & Families"
- **Architectural Essence:** Intelligent spatial arrangements providing dual-bed configurations or spacious double-bed layouts. Tailored for traveling pairs, family members, or long-stay corporate guests needing multi-zone comfort.
- **Assigned Rooms:** `P.103`, `P.104`, `P.105`, `P.106`, `P.203`, `P.204`, `P.205`.
- **Key Specifications:**
  - Bedding: Twin Single Beds (1.2m x 2) or Superior Double Bed
  - Level: Floors 1 and 2
  - Climate: Multi-Zone Silent Inverter Air Conditioning
  - Amenities: Wardrobe, High-Speed Wi-Fi, Electric Kettle, Mini Bar Refrigerator

#### Category 4: The Ground Level Suites (Level 0)
- **Tagline:** "Effortless Step-Free Accessibility & Cool Ambient Stone"
- **Architectural Essence:** Positioned on the ground floor with zero threshold barriers. Ideal for guests desiring immediate access to the arrival lounge, baggage convenience, or those with mobility preferences.
- **Assigned Rooms:** `P.001`, `P.002`, `P.003`, `P.004`.
- **Key Specifications:**
  - Bedding: Comfortable Queen/King Configurations
  - Accessibility: 100% Step-Free Level 0 Entry, Direct Courtyard Access
  - Atmosphere: Cool, Quiet, Grounded Serenity
  - Bath: Ergonomic En-Suite Bathroom with Walk-In Shower

---

## 5. Interactive Components & Functional Workflows

### 5.1 Room Key Explorer & Modal Drawer Specification
Each Category Card features an interactive `[ EXPLORE SUITES & ROOM KEYS ]` trigger that summons an editorial luxury drawer/modal:
1. **Modal Header:** Category Title, Level indicator, Category description, and `[ CLOSE ]` typographic button.
2. **Room Key Selector Bar:** A horizontal tab strip rendering exact room keys (e.g. `[ ALL CATEGORY PHOTOS ]`, `[ KEY P.206 ]`, `[ KEY P.207 ]`, `[ KEY P.301 ]`, `[ KEY P.302 ]`).
3. **Dynamic Media Stage:**
   - When a specific room key is activated, the modal updates instantly to display only the authentic photographs belonging to that specific room folder.
   - For **Room P.207**, the media stage prominently embeds the HTML5 Video Player above the photo gallery with full playback controls (`[ PLAY ]`, `[ PAUSE ]`, `[ MUTE ]`, `[ FULLSCREEN ]`).
4. **Room Inquire Direct CTA:** A sticky or prominent footer button `[ INQUIRE FOR THIS ROOM ]` that automatically opens the Reservation Modal with the specific room pre-selected in the form dropdown.

### 5.2 HTML5 Video Player Specification (Room P.207)
- **Asset Path:** `P.207/clip quay phòng có ban công.mp4` (URL Encoded: `P.207/clip%20quay%20ph%C3%B2ng%20c%C3%B3%20ban%20c%C3%B4ng.mp4`).
- **Video Attributes:** `playsinline`, `preload="metadata"`, `controls` (or custom luxury typographic UI with `[ PLAY ]`, `[ PAUSE ]`, `[ SOUND ]`).
- **Aspect Ratio:** Responsive 16:9 or native 9:16 mobile portrait ratio with dark letterboxing and stone hairline borders.
- **Fallback Behavior:** If video fails or is unsupported, displays a poster image from `P.207/z7824769750313_9fad1b8002e42a34987bbf0b5b6be99a.jpg` with a typographic retry button.

### 5.3 Curated Hotel Gallery & Fullscreen Lightbox
The hotel archive contains **95 authentic photographs** in `Ảnh Khách Sạn/`.
- **Filter Tabs:**
  1. `[ ALL MEDIA // 95 ]` — Comprehensive collection
  2. `[ ARCHITECTURE & EXTERIOR ]` — Building facade, street entrance, sunlight terraces
  3. `[ LOBBY & RECEPTION ]` — Welcome desk, lounge seating, check-in foyer
  4. `[ SUITES & LIVING SPACES ]` — Room interiors, bedding details, bathrooms
  5. `[ DETAILS & ATMOSPHERE ]` — Hallways, lighting, textures, signage
- **Masonry Layout:** Responsive CSS Columns or CSS Grid with staggered image heights, lazy loading (`loading="lazy"`), and subtle smooth hover zoom (`transform: scale(1.02); transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`).
- **Fullscreen Lightbox State Machine:**
  - Clicking any image opens the high-resolution lightbox with dark obsidian backdrop (`rgba(20, 20, 20, 0.95)`).
  - Navigation: Typographic `[ PREV ]` and `[ NEXT ]` buttons, current image counter (`ARCHIVE 14 OF 95`), and `[ ESC // CLOSE ]`.
  - Keyboard Listeners: `ArrowLeft` -> Previous, `ArrowRight` -> Next, `Escape` -> Close Lightbox.
  - Touch Listeners: Touch swipe left/right for mobile viewports.

### 5.4 Factual Hotel Amenities Specification
The amenities section presents 100% verified, factual hotel features organized into a clean, editorial 2-column or 4-column typographic grid without any generic vector icons or artificial star ratings:
1. **Climate Control:** Individual multi-zone silent inverter air conditioning in every room.
2. **High-Speed Connectivity:** Complimentary high-speed fiber-optic Wi-Fi covering all rooms and common areas.
3. **Private Sanitarium:** Modern en-suite private bathrooms with hot water showers and premium toiletries.
4. **Vertical Access:** Modern passenger elevator serving all 4 floors (Level 0 through Level 3).
5. **Private Sun Balconies:** Select upper-level suites featuring private walk-out balconies.
6. **24/7 Front Desk & Concierge:** Round-the-clock reception support for late check-in and local recommendations.
7. **Daily Housekeeping:** Impeccable linen changes, room refreshment, and sanitization.
8. **Secure Parking & Drop-Off:** Convenient vehicle drop-off zone and monitored parking for motorbikes/cars.

### 5.5 Interactive Reservation Inquiry System & Validation
An editorial reservation modal designed to capture guest inquiries with zero friction:
- **Form Fields & Validation Rules:**
  1. **Check-In Date:** `<input type="date">`, `min="YYYY-MM-DD"` (today), Required.
  2. **Check-Out Date:** `<input type="date">`, `min="CheckInDate + 1"`, Required.
  3. **Accommodation Preference:** `<select>` with options:
     - `General Inquiry / Any Available Suite`
     - `The Balcony Suites (P.206, P.207, P.301, P.302)`
     - `The Deluxe King Sanctuaries (P.101, P.102, P.201, P.202, P.303, P.304)`
     - `The Superior Double & Twin (P.103 - P.106, P.203 - P.205)`
     - `The Ground Level Suites (P.001 - P.004)`
     - `Specific Room Key (Dropdown option for all 21 rooms)`
  4. **Guest Count:** Number of Adults / Children (1 Guest, 2 Guests, 3 Guests, 4+ Guests).
  5. **Guest Full Name:** Text input, minimum 2 characters, Required.
  6. **Phone Number / Email:** Tel/Email input with regex validation (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/` or `/(84|0[3|5|7|8|9])+([0-9]{8})\b/`), Required.
  7. **Special Requests & Arrival Time:** Textarea for personalized requests (e.g. early check-in, high floor preference).
- **Interactive Feedback State:**
  - Client-side validation prevents empty submissions and displays elegant inline typographic errors (`[ PLEASE SPECIFY CHECK-IN DATE ]`).
  - Upon valid submission, renders an **Inquiry Confirmation Summary Drawer** displaying:
    - Unique Reference Code: `HN-INQ-XXXX`
    - Summary of selected dates, room preference, guest count, and contact info
    - Direct Contact Action: `[ CONNECT VIA WHATSAPP / ZALO ]` / `[ CALL FRONT DESK ]`
    - `[ PRINT SUMMARY ]` / `[ CLOSE ]`

---

## 6. Comprehensive Media Asset Catalog

### 6.1 Guest Rooms Photo & Video Inventory (21 Rooms)

| Room ID | Floor Level | Curated Category | Photo Count | Video Count | File Names |
|---|---|---|---|---|---|
| **P.001** | Level 0 | Ground Level Suites | 3 | 0 | `z7824725724444_...jpg`, `z7824725734400_...jpg`, `z7824725735685_...jpg` |
| **P.002** | Level 0 | Ground Level Suites | 4 | 0 | `z7824725981586_...jpg`, `z7824725990562_...jpg`, `z7824726002427_...jpg`, `z7824726009122_...jpg` |
| **P.003** | Level 0 | Ground Level Suites | 3 | 0 | `z7824726186533_...jpg`, `z7824726191728_...jpg`, `z7824726206069_...jpg` |
| **P.004** | Level 0 | Ground Level Suites | 3 | 0 | `z7824726561865_...jpg`, `z7824726575468_...jpg`, `z7824726575724_...jpg` |
| **P.101** | Floor 1 | Deluxe King Sanctuaries | 3 | 0 | `z7824759745108_...jpg`, `z7824759752703_...jpg`, `z7824759764181_...jpg` |
| **P.102** | Floor 1 | Deluxe King Sanctuaries | 4 | 0 | `z7824760086512_...jpg`, `z7824760086920_...jpg`, `z7824760094580_...jpg`, `z7824760101739_...jpg` |
| **P.103** | Floor 1 | Superior Double & Twin | 4 | 0 | `z7824761185034_...jpg`, `z7824761197411_...jpg`, `z7824764452402_...jpg`, `z7824764453823_...jpg` |
| **P.104** | Floor 1 | Superior Double & Twin | 3 | 0 | `z7824761526891_...jpg`, `z7824761528243_...jpg`, `z7824761538943_...jpg` |
| **P.105** | Floor 1 | Superior Double & Twin | 3 | 0 | `z7824762601836_...jpg`, `z7824762606055_...jpg`, `z7824762607110_...jpg` |
| **P.106** | Floor 1 | Superior Double & Twin | 4 | 0 | `z5714827900966_...jpg`, `z7824762816307_...jpg`, `z7824762831399_...jpg`, `z7824762838884_...jpg` |
| **P.201** | Floor 2 | Deluxe King Sanctuaries | 3 | 0 | `z7824764195864_...jpg`, `z7824764212692_...jpg`, `z7824764213672_...jpg` |
| **P.202** | Floor 2 | Deluxe King Sanctuaries | 4 | 0 | `z7824766931597_...jpg`, `z7824766937198_...jpg`, `z7942009222446_...jpg`, `z7942009224415_...jpg` |
| **P.203** | Floor 2 | Superior Double & Twin | 4 | 0 | `z7824764442431_...jpg`, `z7824764446264_...jpg`, `z7824764452402_...jpg`, `z7824764453823_...jpg` |
| **P.204** | Floor 2 | Superior Double & Twin | 3 | 0 | `z7824768258560_...jpg`, `z7824768270516_...jpg`, `z7824768283109_...jpg` |
| **P.205** | Floor 2 | Superior Double & Twin | 3 | 0 | `z7824768965919_...jpg`, `z7824768979413_...jpg`, `z7824768992792_...jpg` |
| **P.206** | Floor 2 | The Balcony Suites | 4 | 0 | `z7824769150903_...jpg`, `z7824769159788_...jpg`, `z7824769171034_...jpg`, `z7824769177275_...jpg` |
| **P.207** | Floor 2 | The Balcony Suites | 3 | 1 | `clip quay phòng có ban công.mp4`, `z7824769737581_...jpg`, `z7824769750313_...jpg`, `z7824769766134_...jpg` |
| **P.301** | Floor 3 | The Balcony Suites | 3 | 0 | `z7824770142799_...jpg`, `z7824770148061_...jpg`, `z7824770161323_...jpg` |
| **P.302** | Floor 3 | The Balcony Suites | 4 | 0 | `z7824770360233_...jpg`, `z7824770366023_...jpg`, `z7824770378466_...jpg`, `z7824770381956_...jpg` |
| **P.303** | Floor 3 | Deluxe King Sanctuaries | 3 | 0 | `z7824770831506_...jpg`, `z7824770840612_...jpg`, `z7824770844810_...jpg` |
| **P.304** | Floor 3 | Deluxe King Sanctuaries | 3 | 0 | `z7824771064734_...jpg`, `z7824771081218_...jpg`, `z7824771084432_...jpg` |
| **TOTAL** | **4 Floors** | **4 Categories** | **71 Photos** | **1 Video** | **72 Total Room Media Assets** |

### 6.2 Hotel Curated Archive Inventory (`Ảnh Khách Sạn/`)
- Total Images: **95 authentic photograph files**
- Formats: High-resolution `.jpg`
- Path Handling: Must be URL-encoded in HTML/CSS/JS as `Ảnh%20Kh%C3%A1ch%20S%E1%BA%A1n/<filename>` to prevent 404 errors across different web servers.

---

## 7. Features Discovered & Specification Matrix

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|---|---|---|---|---|---|---|
| 1 | Design System | Luxury Palette & CSS Tokens | 5-tier luxury color scheme (Alabaster, Linen, Obsidian, Bronze, Stone Hairlines) | CSS Variables | Harmonious luxury visual aesthetic | Fallback to hex literals | `ORIGINAL_REQUEST.md` R1 |
| 2 | Typography | Editorial Font Pairing | Playfair/Cormorant Garamond serifs paired with Plus Jakarta Sans / Inter | Google Fonts API | High-fashion editorial readability | System serif/sans fallback | `ORIGINAL_REQUEST.md` R1 |
| 3 | Compliance | ZERO-ICON Mandate | Complete ban on SVGs, font icons, emojis, glyphs; 100% typographic controls | User interaction | Pure typographic labels (`[ CLOSE ]`, `MENU`, `RESERVE`) | Validation error if any SVG/icon font is injected | `ORIGINAL_REQUEST.md` R1 |
| 4 | Compliance | Factual Luxury Presentation | Strict prohibition of fake stars, fabricated reviews, simulated terminal commands | Property data | Authentic, verified presentation | Reject synthetic ratings | `ORIGINAL_REQUEST.md` R1 |
| 5 | Accommodation | 4 Curated Categories | Structural grouping of 21 rooms into Balcony Suites, Deluxe King, Superior Twin/Double, Ground Level | Category tab selection | Filtered category view with room rosters | Defaults to Balcony Suites | `ORIGINAL_REQUEST.md` R2 |
| 6 | Accommodation | Room Key Modal Drawer | Architectural drawer allowing room key filtering (`P.001` - `P.304`) and specific photo inspection | Click `[ EXPLORE SUITE ]` or Room Key | Modal drawer displaying specific room photos | Graceful empty state or fallback to category | `ORIGINAL_REQUEST.md` R2 |
| 7 | Media | Room P.207 Video Player | Embedded HTML5 video player for `clip quay phòng có ban công.mp4` with custom controls | Play/Pause click, Video load | Responsive HD video playback with audio toggle | Poster image fallback if video blocked | `ORIGINAL_REQUEST.md` R2 & `P.207/` |
| 8 | Gallery | 95-Photo Masonry Grid | Staggered editorial masonry layout for all 95 photos in `Ảnh Khách Sạn/` | Filter tag clicks | Filtered masonry image grid with smooth transitions | Displays full collection if filter empty | `ORIGINAL_REQUEST.md` R3 & `Ảnh Khách Sạn/` |
| 9 | Gallery | Fullscreen Lightbox | Fullscreen dark viewer with `[ PREV ]`, `[ NEXT ]`, `[ CLOSE ]`, counter, keyboard navigation | Click photo, Arrow keys, Esc | Fullscreen high-res image modal | Closes gracefully on Esc / backdrop click | `ORIGINAL_REQUEST.md` R3 |
| 10 | Amenities | Factual Amenities Matrix | Labeled typographic list detailing Air Conditioning, Wi-Fi, Private Bath, Elevator, Balconies, 24/7 Front Desk | Static render | Clean, structured 2-column feature breakdown | None (Static factual data) | `ORIGINAL_REQUEST.md` R4 |
| 11 | Booking | Interactive Inquiry Modal | Date range selector, room dropdown, guest counter, name/phone validation | Form input data | Instant client validation + formatted Inquiry Summary Drawer | Inline typographic error banners | `ORIGINAL_REQUEST.md` R4 |
| 12 | Contact | Direct Contact Channels | Prominent hotline, WhatsApp/Zalo direct links, verified property address | User click | Triggers tel: / whatsapp: / maps: protocols | Tooltip instructions if app not installed | `ORIGINAL_REQUEST.md` R4 |
| 13 | Architecture | Self-Contained Frontend Stack | Vanilla semantic HTML5, CSS3 with custom variables, vanilla modular JS | Browser viewport | Zero-dependency, ultra-fast render (<100ms) | Responsive degrade down to 320px | `ORIGINAL_REQUEST.md` R5 |

---

## 8. Edge Cases & Resilience Engineering

| # | Feature / Area | Edge Case Input / Scenario | Expected Observed Behavior & Mitigation |
|---|---|---|---|
| 1 | File Paths | Vietnamese diacritics & spaces in folder names (`Ảnh Khách Sạn`, `clip quay phòng có ban công.mp4`) | Must use strict percent-encoding (`%E1%BA%A2nh%20Kh%C3%A1ch%20S%E1%BA%A1n/`, `%20`) to guarantee 100% 200 OK asset resolution across Apache, Nginx, and Python HTTP servers. |
| 2 | Video Playback | Autoplay blocked by modern mobile browsers (iOS Safari, Android Chrome) | Video element configured with `muted`, `playsinline`, and custom typographic `[ PLAY ]` overlay for manual explicit guest activation. |
| 3 | Screen Viewports | Ultra-compact mobile screen (320px - 375px) vs Ultra-wide 4K monitor (2560px+) | Mobile: Horizontal scroll prevented with `overflow-x: hidden`, modal drawer converts to full-width sheet, touch tap targets >= 44px. Desktop: Max content container capped at `1440px` with centered margins. |
| 4 | Booking Form | Check-Out date selected earlier than or equal to Check-In date | Form validation dynamically updates `min` attribute of Check-Out date upon Check-In selection and displays typographic error: `[ CHECK-OUT MUST BE AFTER CHECK-IN ]`. |
| 5 | Booking Form | Malformed phone number or email address | Real-time regex validation checks format and flags field with `[ PLEASE ENTER A VALID PHONE OR EMAIL ]` before submission. |
| 6 | Lightbox Navigation | Guest reaches first image (01) and presses `[ PREV ]`, or reaches last image (95) and presses `[ NEXT ]` | Seamless infinite circular cycling (01 `[ PREV ]` -> 95, 95 `[ NEXT ]` -> 01) with smooth image fade transition. |
| 7 | Keyboard Accessibility | Guest opens modal drawer or lightbox and presses `Escape` or `Tab` | Modal captures focus, trap focus inside active dialog, `Escape` key immediately closes modal and restores background scroll. |
| 8 | Room Selector | Guest selects room with 3 photos (e.g. P.001) then switches to room with 4 photos (e.g. P.002) | Gallery grid fluidly reflows image layout without layout jitter or broken image placeholders. |
| 9 | Duplicate Photo Names | Some filenames in `Ảnh Khách Sạn/` have duplicate suffixes (e.g. `... - Copy.jpg`) | Asset mapper indexes all unique valid image files cleanly without runtime errors or broken links. |

---

## 9. Verification & Quality Acceptance Checklist

### 9.1 Visual & Aesthetic Standards
- [ ] Palette adheres strictly to `#FDFBF7`, `#F5F0EB`, `#141414`, `#A38954`, `#E5DFD5`.
- [ ] Zero icons present: No `<svg>`, no FontAwesome/Lucide/Heroicons, no emojis, no star rating icons.
- [ ] Typography renders Cormorant/Playfair Display for headlines and Plus Jakarta Sans for body copy.
- [ ] Hairline stone borders (`1px solid #E5DFD5`) provide crisp architectural definition.

### 9.2 Content & Room Accuracy
- [ ] All 4 Curated Categories clearly presented with accurate room rosters.
- [ ] All 21 Room Keys (`P.001` - `P.304`) fully accessible and mapped to authentic photos.
- [ ] Room `P.207` embedded video plays smoothly with audio and fullscreen support.
- [ ] Gallery loads all 95 photos from `Ảnh Khách Sạn/` with category filtering and interactive lightbox.

### 9.3 Interactive Inquiries & Robustness
- [ ] Booking inquiry modal enforces required fields, date coherence, and phone/email validation.
- [ ] Instant summary confirmation card generates unique reference code and direct contact links.
- [ ] 100% of local image and video paths resolve with HTTP 200 (Zero 404 errors).
- [ ] Tested responsive performance across 375px, 768px, 1024px, and 1440px+.

---
*End of Luxury Specification Document*
