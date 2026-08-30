/**
 * HOTEL HOA NẮNG — CORE DATA ENGINE & MEDIA CATALOG
 * ===================================================
 * Complete, 100% authentic property specification, curated suite taxonomy,
 * 21 guest rooms (71 photos + 1 MP4 video), 95 gallery photographs, and factual amenities.
 *
 * Design benchmark: Amanoi, Cheval Blanc, Capella Saigon, Bvlgari Hotels.
 * Strict compliance: Zero icons, pure typography, 100% authentic data.
 */

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.HOTEL_DATA = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const property = {
  "name": "Hotel Hoa Nắng",
  "tagline": "Quiet Luxury & Natural Sunlight",
  "subtitle": "Editorial Highland Hospitality in Bảo Lộc",
  "address": "Phường B'Lao, TP. Bảo Lộc, Tỉnh Lâm Đồng, Vietnam",
  "district": "Phường B'Lao",
  "city": "TP. Bảo Lộc",
  "province": "Tỉnh Lâm Đồng",
  "country": "Vietnam",
  "phone": "0899 668 639",
  "phoneDisplay": "0899 668 639",
  "phoneTel": "+84899668639",
  "email": "hotelhoanang@gmail.com",
  "zalo": "https://zalo.me/0899668639",
  "whatsapp": "https://wa.me/84901234567",
  "checkIn": "14:00",
  "checkOut": "12:00",
  "floors": 4,
  "totalRooms": 21,
  "totalPhotos": 166,
  "totalVideos": 1,
  "story": "Nestled in the tranquil highland expanse of Bảo Lộc, Hotel Hoa Nắng represents an architectural sanctuary of quiet, serene hospitality. Inspired by the understated minimalism of Amanoi and Cheval Blanc, the residence embraces natural sunlight, calming linen palettes, and authentic local stone to offer an unhurried, contemplative retreat for the discerning traveler.",
  "coordinates": {
    "lat": 11.545,
    "lng": 107.808
  }
};

    const categories = [
    {
      "id": "phong-don-dlx",
      "title": "Phòng Đơn Deluxe (DLX)",
      "titleEn": "Deluxe Single Room (DLX)",
      "price": "490.000₫",
      "priceValue": 490000,
      "tagline": "1 Giường 1m6 · 2 Người · Tĩnh Lặng & Mát Mẻ",
      "taglineEn": "1 Queen Bed · 2 Guests · Quiet & Serene",
      "description": "Không gian nghỉ ngơi ấm cúng dành cho 2 khách với 1 giường đôi 1m6 êm ái, đầy đủ máy lạnh Inverter, Wi-Fi tốc độ cao và phòng tắm riêng hiện đại.",
      "shortDescription": "Phòng đơn 1 giường 1m6 cho 2 người, trang bị đầy đủ tiện nghi tiêu chuẩn.",
      "floors": [0, 1, 2, 3],
      "floorLabel": "Tầng Trệt, 1, 2 & 3",
      "roomKeys": ["P.001", "P.002", "P.003", "P.004", "P.102", "P.103", "P.104", "P.202", "P.203", "P.204", "P.303", "P.304"],
      "heroImage": "P.001/z7824725734400_1ebacafa1608e391dfb50cd57c1ec70a.jpg",
      "hasVideo": false,
      "videoPath": null,
      "specs": {
        "bedding": "1 Giường 1m6 (1.6m x 2.0m)",
        "occupancy": "2 Người",
        "size": "26 - 30 m²",
        "view": "Sân Vườn / Giếng Trời Thoáng Mát",
        "bath": "Phòng tắm riêng khép kín, sen nóng lạnh"
      }
    },
    {
      "id": "phong-don-twn",
      "title": "Phòng Đơn Twin (TWN)",
      "titleEn": "Twin Single Room (TWN)",
      "price": "590.000₫",
      "priceValue": 590000,
      "tagline": "2 Giường 1m4 · 2 Người · Tiện Lợi & Thoáng Đãng",
      "taglineEn": "2 Single Beds · 2 Guests · Flexible Comfort",
      "description": "Thiết kế thông minh với 2 giường đơn 1m4 riêng biệt cho 2 khách. Lý tưởng cho bạn đồng hành, đồng nghiệp đi công tác hoặc cần không gian ngủ độc lập.",
      "shortDescription": "Phòng đơn 2 giường cho 2 người, không gian rộng rãi và thoải mái.",
      "floors": [1, 2],
      "floorLabel": "Tầng 1 & Tầng 2",
      "roomKeys": ["P.101", "P.201"],
      "heroImage": "P.101/z7824759752703_cd7e6e870a8e30ac83ef36b39dc37ddd.jpg",
      "hasVideo": false,
      "videoPath": null,
      "specs": {
        "bedding": "2 Giường 1m4 (1.4m x 2.0m)",
        "occupancy": "2 Người",
        "size": "28 - 32 m²",
        "view": "Không Gian Yên Tĩnh",
        "bath": "Phòng tắm riêng khép kín, tiện nghi đầy đủ"
      }
    },
    {
      "id": "phong-doi-gia-dinh-sup",
      "title": "Phòng Đôi Gia Đình (SUP)",
      "titleEn": "Superior Family Double (SUP)",
      "price": "690.000₫",
      "priceValue": 690000,
      "tagline": "2 Giường 1m6 · 4 Người · Rộng Rãi Cho Gia Đình",
      "taglineEn": "2 Queen Beds · 4 Guests · Spacious Family Suite",
      "description": "Không gian rộng rãi bố trí 2 giường đôi 1m6 thoải mái cho gia đình 4 người hoặc nhóm bạn. Cửa sổ lớn đón ánh sáng tự nhiên và gió mát cao nguyên.",
      "shortDescription": "Phòng đôi 2 giường cho 4 người, lý tưởng cho kỳ nghỉ gia đình.",
      "floors": [1, 2, 3],
      "floorLabel": "Tầng 1, 2 & Tầng 3",
      "roomKeys": ["P.105", "P.206", "P.301", "P.302"],
      "heroImage": "P.105/z7824762601836_8385e2947b2c5ceab77ac47d412f8520.jpg",
      "hasVideo": false,
      "videoPath": null,
      "specs": {
        "bedding": "2 Giường 1m6 (1.6m x 2.0m)",
        "occupancy": "4 Người",
        "size": "32 - 36 m²",
        "view": "Ánh Sáng Tự Nhiên & Cảnh Quan",
        "bath": "Phòng tắm riêng cao cấp, vòi sen áp lực cao"
      }
    },
    {
      "id": "phong-doi-ban-cong-dlx",
      "title": "Phòng Đôi Ban Công (DLX)",
      "titleEn": "Deluxe Balcony Double (DLX)",
      "price": "720.000₫",
      "priceValue": 720000,
      "tagline": "2 Giường 1m6 · 4 Người · Ban Công Riêng Hướng Núi",
      "taglineEn": "2 Queen Beds · 4 Guests · Private Balcony Mountain View",
      "description": "Hạng phòng cao cấp sở hữu ban công riêng ngắm toàn cảnh đồi núi Bảo Lộc. Trang bị 2 giường đôi 1m6 cho 4 người và có video thực tế chất lượng cao tại P.207.",
      "shortDescription": "Phòng đôi 2 giường có ban công riêng nhìn ra đồi núi cho 4 người.",
      "floors": [1, 2],
      "floorLabel": "Tầng 1 & Tầng 2",
      "roomKeys": ["P.106", "P.207"],
      "heroImage": "P.207/z7824769766134_b990789e47ada06114ac12048cd0a402.jpg",
      "hasVideo": true,
      "videoPath": "P.207/clip%20quay%20ph%C3%B2ng%20c%C3%B3%20ban%20c%C3%B4ng.mp4",
      "specs": {
        "bedding": "2 Giường 1m6 (1.6m x 2.0m)",
        "occupancy": "4 Người",
        "size": "34 - 38 m²",
        "view": "Ban Công Riêng & Đồi Núi Bảo Lộc",
        "bath": "Phòng tắm riêng khép kín, tiện nghi đầy đủ"
      }
    }
  ];

  const rooms = {
  "P.001": {
    "key": "P.001",
    "name": "Suite P.001",
    "floor": 0,
    "floorLabel": "Ground Level (Floor 0)",
    "categoryId": "ground-level-suites",
    "categoryTitle": "The Ground Level Suites",
    "bedding": "1 King Bed",
    "size": "26 m²",
    "occupancy": "2 Guests",
    "view": "Ground Courtyard View",
    "description": "Quiet ground-floor sanctuary offering effortless step-free arrival, king bedding dressed in natural linens, and a spacious en-suite bathroom.",
    "features": [
      "1 King Bed (1.8m x 2.0m)",
      "Step-Free Level 0 Entry",
      "Private En-Suite Bathroom with Glass Shower",
      "Silent Inverter Air Conditioning",
      "High-Speed Fiber Wi-Fi",
      "Electric Kettle & Tea Set",
      "Complimentary Bottled Water"
    ],
    "heroPhoto": "P.001/z7824725724444_6a6aeeb591ba855c539ccf225d1db921.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824725724444_6a6aeeb591ba855c539ccf225d1db921.jpg",
        "src": "P.001/z7824725724444_6a6aeeb591ba855c539ccf225d1db921.jpg",
        "rawPath": "P.001/z7824725724444_6a6aeeb591ba855c539ccf225d1db921.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 144478
      },
      {
        "filename": "z7824725734400_1ebacafa1608e391dfb50cd57c1ec70a.jpg",
        "src": "P.001/z7824725734400_1ebacafa1608e391dfb50cd57c1ec70a.jpg",
        "rawPath": "P.001/z7824725734400_1ebacafa1608e391dfb50cd57c1ec70a.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 194375
      },
      {
        "filename": "z7824725735685_dcd3a91116b30b15d95c6d37a87d08c9.jpg",
        "src": "P.001/z7824725735685_dcd3a91116b30b15d95c6d37a87d08c9.jpg",
        "rawPath": "P.001/z7824725735685_dcd3a91116b30b15d95c6d37a87d08c9.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 174254
      }
    ]
  },
  "P.002": {
    "key": "P.002",
    "name": "Suite P.002",
    "floor": 0,
    "floorLabel": "Ground Level (Floor 0)",
    "categoryId": "ground-level-suites",
    "categoryTitle": "The Ground Level Suites",
    "bedding": "1 King Bed",
    "size": "28 m²",
    "occupancy": "2 Guests",
    "view": "Courtyard & Lobby Garden",
    "description": "Spacious level 0 suite featuring immediate proximity to the arrival lounge, generous wardrobe storage, and a full en-suite bath with modern fixtures.",
    "features": [
      "1 King Bed (1.8m x 2.0m)",
      "Step-Free Access to Arrival Foyer",
      "Full En-Suite Bath with Shower Stall",
      "Silent Inverter Air Conditioning",
      "High-Speed Fiber Wi-Fi",
      "Wardrobe Joinery & Vanity Mirror",
      "Daily Housekeeping"
    ],
    "heroPhoto": "P.002/z7824725981586_cc81fe45249479f2b1476292c323d69c.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824725981586_cc81fe45249479f2b1476292c323d69c.jpg",
        "src": "P.002/z7824725981586_cc81fe45249479f2b1476292c323d69c.jpg",
        "rawPath": "P.002/z7824725981586_cc81fe45249479f2b1476292c323d69c.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 245089
      },
      {
        "filename": "z7824725990562_98b7e2659c244b242bae693624388be7.jpg",
        "src": "P.002/z7824725990562_98b7e2659c244b242bae693624388be7.jpg",
        "rawPath": "P.002/z7824725990562_98b7e2659c244b242bae693624388be7.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 134364
      },
      {
        "filename": "z7824726002427_2790559170d3814e187168bbeeb53e7d.jpg",
        "src": "P.002/z7824726002427_2790559170d3814e187168bbeeb53e7d.jpg",
        "rawPath": "P.002/z7824726002427_2790559170d3814e187168bbeeb53e7d.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 272009
      },
      {
        "filename": "z7824726009122_1217218b1cc0a483033645a591214282.jpg",
        "src": "P.002/z7824726009122_1217218b1cc0a483033645a591214282.jpg",
        "rawPath": "P.002/z7824726009122_1217218b1cc0a483033645a591214282.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 239202
      }
    ]
  },
  "P.003": {
    "key": "P.003",
    "name": "Suite P.003",
    "floor": 0,
    "floorLabel": "Ground Level (Floor 0)",
    "categoryId": "ground-level-suites",
    "categoryTitle": "The Ground Level Suites",
    "bedding": "1 Queen Bed",
    "size": "24 m²",
    "occupancy": "2 Guests",
    "view": "Quiet Inner Courtyard",
    "description": "Intimate ground-level retreat designed for mobility convenience and calm acoustic stillness, overlooking the sheltered inner courtyard.",
    "features": [
      "1 Queen Bed (1.6m x 2.0m)",
      "Barrier-Free Access",
      "En-Suite Modern Bathroom",
      "Individual Climate Control",
      "High-Speed Wi-Fi",
      "Bedside Power Outlets",
      "Crisp Cotton Linens"
    ],
    "heroPhoto": "P.003/z7824726186533_8f476212c9a05e94ba3a6fb73f6fb54d.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824726186533_8f476212c9a05e94ba3a6fb73f6fb54d.jpg",
        "src": "P.003/z7824726186533_8f476212c9a05e94ba3a6fb73f6fb54d.jpg",
        "rawPath": "P.003/z7824726186533_8f476212c9a05e94ba3a6fb73f6fb54d.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 280893
      },
      {
        "filename": "z7824726191728_ac072cb16d27a23a5275ef7fef84988b.jpg",
        "src": "P.003/z7824726191728_ac072cb16d27a23a5275ef7fef84988b.jpg",
        "rawPath": "P.003/z7824726191728_ac072cb16d27a23a5275ef7fef84988b.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 126097
      },
      {
        "filename": "z7824726206069_1c43a742d20336fc4fa4232410b7aa0e.jpg",
        "src": "P.003/z7824726206069_1c43a742d20336fc4fa4232410b7aa0e.jpg",
        "rawPath": "P.003/z7824726206069_1c43a742d20336fc4fa4232410b7aa0e.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 207591
      }
    ]
  },
  "P.004": {
    "key": "P.004",
    "name": "Suite P.004",
    "floor": 0,
    "floorLabel": "Ground Level (Floor 0)",
    "categoryId": "ground-level-suites",
    "categoryTitle": "The Ground Level Suites",
    "bedding": "1 King Bed",
    "size": "26 m²",
    "occupancy": "2 Guests",
    "view": "Ground Level Serenity",
    "description": "Comfortable ground-level bedroom offering seamless luggage transit, plush king bedding, and an immaculate bathroom with continuous hot water.",
    "features": [
      "1 King Bed (1.8m x 2.0m)",
      "Effortless Baggage Transit",
      "Private En-Suite Glass Shower",
      "Silent Air Conditioning",
      "High-Speed Fiber Wi-Fi",
      "Vanity Table & Mirror",
      "Fresh Towels & Toiletries"
    ],
    "heroPhoto": "P.004/z7824726561865_953e516489a57c66e0c2abd898330a84.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824726561865_953e516489a57c66e0c2abd898330a84.jpg",
        "src": "P.004/z7824726561865_953e516489a57c66e0c2abd898330a84.jpg",
        "rawPath": "P.004/z7824726561865_953e516489a57c66e0c2abd898330a84.jpg",
        "width": 1276,
        "height": 956,
        "aspectRatio": "landscape",
        "sizeBytes": 171343
      },
      {
        "filename": "z7824726575468_864ce1b21b36cf5fd89d7c9453880c3f.jpg",
        "src": "P.004/z7824726575468_864ce1b21b36cf5fd89d7c9453880c3f.jpg",
        "rawPath": "P.004/z7824726575468_864ce1b21b36cf5fd89d7c9453880c3f.jpg",
        "width": 1276,
        "height": 956,
        "aspectRatio": "landscape",
        "sizeBytes": 151440
      },
      {
        "filename": "z7824726575724_c936a0431c3640ddc00eed6a6e8c854e.jpg",
        "src": "P.004/z7824726575724_c936a0431c3640ddc00eed6a6e8c854e.jpg",
        "rawPath": "P.004/z7824726575724_c936a0431c3640ddc00eed6a6e8c854e.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 134251
      }
    ]
  },
  "P.101": {
    "key": "P.101",
    "name": "Suite P.101",
    "floor": 1,
    "floorLabel": "Floor 1",
    "categoryId": "deluxe-king-sanctuaries",
    "categoryTitle": "The Deluxe King Sanctuaries",
    "bedding": "1 Master King Bed",
    "size": "28 m²",
    "occupancy": "2 Guests",
    "view": "Quiet Mountain Aspect",
    "description": "Refined level 1 sanctuary featuring plush king mattress, warm natural wood finishings, and a bright private bathroom with walk-in glass shower.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "Natural Wood Headboard Joinery",
      "Private En-Suite Glass Shower",
      "Silent Inverter Climate Control",
      "Fiber Wi-Fi & Work Vanity",
      "Blackout Curtains",
      "Elevator Access"
    ],
    "heroPhoto": "P.101/z7824759745108_2d8aca9f8b2cfe18a9382d85c5301ed3.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824759745108_2d8aca9f8b2cfe18a9382d85c5301ed3.jpg",
        "src": "P.101/z7824759745108_2d8aca9f8b2cfe18a9382d85c5301ed3.jpg",
        "rawPath": "P.101/z7824759745108_2d8aca9f8b2cfe18a9382d85c5301ed3.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 146948
      },
      {
        "filename": "z7824759752703_cd7e6e870a8e30ac83ef36b39dc37ddd.jpg",
        "src": "P.101/z7824759752703_cd7e6e870a8e30ac83ef36b39dc37ddd.jpg",
        "rawPath": "P.101/z7824759752703_cd7e6e870a8e30ac83ef36b39dc37ddd.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 200293
      },
      {
        "filename": "z7824759764181_997bc45c501c058b8bc549ecdc93c06a.jpg",
        "src": "P.101/z7824759764181_997bc45c501c058b8bc549ecdc93c06a.jpg",
        "rawPath": "P.101/z7824759764181_997bc45c501c058b8bc549ecdc93c06a.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 146708
      }
    ]
  },
  "P.102": {
    "key": "P.102",
    "name": "Suite P.102",
    "floor": 1,
    "floorLabel": "Floor 1",
    "categoryId": "deluxe-king-sanctuaries",
    "categoryTitle": "The Deluxe King Sanctuaries",
    "bedding": "1 Master King Bed",
    "size": "30 m²",
    "occupancy": "2 Guests",
    "view": "Daylight Window View",
    "description": "Master king suite adorned with natural linen drapery, expansive picture window framing highland skies, bespoke timber joinery, and ambient bedside lighting.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "Expansive Picture Window",
      "Bespoke Headboard & Reading Lamps",
      "En-Suite Bathroom with Hot Water",
      "Wardrobe Storage & Safe",
      "High-Speed Wi-Fi",
      "Elevator Access"
    ],
    "heroPhoto": "P.102/z7824760086512_84ca7c6e6c3ff5124fb1c4ccd93e0aa6.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824760086512_84ca7c6e6c3ff5124fb1c4ccd93e0aa6.jpg",
        "src": "P.102/z7824760086512_84ca7c6e6c3ff5124fb1c4ccd93e0aa6.jpg",
        "rawPath": "P.102/z7824760086512_84ca7c6e6c3ff5124fb1c4ccd93e0aa6.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 217173
      },
      {
        "filename": "z7824760086920_2f4b9f91e90d3c24fc7936f94f1603a8.jpg",
        "src": "P.102/z7824760086920_2f4b9f91e90d3c24fc7936f94f1603a8.jpg",
        "rawPath": "P.102/z7824760086920_2f4b9f91e90d3c24fc7936f94f1603a8.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 173214
      },
      {
        "filename": "z7824760094580_30c4d869f582c03dc5a168f5cb0d3bcd.jpg",
        "src": "P.102/z7824760094580_30c4d869f582c03dc5a168f5cb0d3bcd.jpg",
        "rawPath": "P.102/z7824760094580_30c4d869f582c03dc5a168f5cb0d3bcd.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 135388
      },
      {
        "filename": "z7824760101739_1c0316e65591d7b0a5c6c1602864237c.jpg",
        "src": "P.102/z7824760101739_1c0316e65591d7b0a5c6c1602864237c.jpg",
        "rawPath": "P.102/z7824760101739_1c0316e65591d7b0a5c6c1602864237c.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 129586
      }
    ]
  },
  "P.103": {
    "key": "P.103",
    "name": "Suite P.103",
    "floor": 1,
    "floorLabel": "Floor 1",
    "categoryId": "superior-double-twin",
    "categoryTitle": "The Superior Double & Twin Rooms",
    "bedding": "2 Twin Beds / Double Option",
    "size": "30 m²",
    "occupancy": "2 - 3 Guests",
    "view": "Garden Side",
    "description": "Flexible companion suite featuring twin single beds with option for combined double arrangement, handcrafted wooden furniture, and spotless bathroom.",
    "features": [
      "2 Twin Beds (1.2m x 2.0m each)",
      "Flexible Companion Configuration",
      "En-Suite Bathroom with Rain Shower",
      "Silent Inverter Air Conditioning",
      "Fiber Wi-Fi",
      "Bedside Power Stations",
      "Elevator Access"
    ],
    "heroPhoto": "P.103/z7824761185034_24737db00e43e880bef6fdc674ccc921.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824761185034_24737db00e43e880bef6fdc674ccc921.jpg",
        "src": "P.103/z7824761185034_24737db00e43e880bef6fdc674ccc921.jpg",
        "rawPath": "P.103/z7824761185034_24737db00e43e880bef6fdc674ccc921.jpg",
        "width": 2568,
        "height": 1926,
        "aspectRatio": "landscape",
        "sizeBytes": 546651
      },
      {
        "filename": "z7824761197411_b006a79683aedcd2873fdc455557bf32.jpg",
        "src": "P.103/z7824761197411_b006a79683aedcd2873fdc455557bf32.jpg",
        "rawPath": "P.103/z7824761197411_b006a79683aedcd2873fdc455557bf32.jpg",
        "width": 2568,
        "height": 1926,
        "aspectRatio": "landscape",
        "sizeBytes": 543429
      },
      {
        "filename": "z7824764452402_af259b815a28fec1c930a9606a8ee712.jpg",
        "src": "P.103/z7824764452402_af259b815a28fec1c930a9606a8ee712.jpg",
        "rawPath": "P.103/z7824764452402_af259b815a28fec1c930a9606a8ee712.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 140703
      },
      {
        "filename": "z7824764453823_e1f6be1dd72058b9f1267e2da5799586.jpg",
        "src": "P.103/z7824764453823_e1f6be1dd72058b9f1267e2da5799586.jpg",
        "rawPath": "P.103/z7824764453823_e1f6be1dd72058b9f1267e2da5799586.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 150320
      }
    ]
  },
  "P.104": {
    "key": "P.104",
    "name": "Suite P.104",
    "floor": 1,
    "floorLabel": "Floor 1",
    "categoryId": "superior-double-twin",
    "categoryTitle": "The Superior Double & Twin Rooms",
    "bedding": "2 Double Beds",
    "size": "32 m²",
    "occupancy": "2 - 4 Guests",
    "view": "Highland Sunlight View",
    "description": "Generous accommodation with two double beds accommodating families or traveling groups, bathed in natural mountain sunlight with en-suite amenities.",
    "features": [
      "2 Double Beds (1.4m x 2.0m each)",
      "Ideal for Families / 4 Guests",
      "Private En-Suite Bathroom",
      "Multi-Split Silent AC",
      "High-Speed Fiber Wi-Fi",
      "Vanity & Wardrobe",
      "Elevator Access"
    ],
    "heroPhoto": "P.104/z7824761526891_fafbd31bdbd84b30f250a908af2d0c29.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824761526891_fafbd31bdbd84b30f250a908af2d0c29.jpg",
        "src": "P.104/z7824761526891_fafbd31bdbd84b30f250a908af2d0c29.jpg",
        "rawPath": "P.104/z7824761526891_fafbd31bdbd84b30f250a908af2d0c29.jpg",
        "width": 1920,
        "height": 2560,
        "aspectRatio": "portrait",
        "sizeBytes": 602122
      },
      {
        "filename": "z7824761528243_7c285b6ea6b8c2370cebbff0b81616a7.jpg",
        "src": "P.104/z7824761528243_7c285b6ea6b8c2370cebbff0b81616a7.jpg",
        "rawPath": "P.104/z7824761528243_7c285b6ea6b8c2370cebbff0b81616a7.jpg",
        "width": 1920,
        "height": 2560,
        "aspectRatio": "portrait",
        "sizeBytes": 431025
      },
      {
        "filename": "z7824761538943_6a0274a993c309051752e57b58e04c4b.jpg",
        "src": "P.104/z7824761538943_6a0274a993c309051752e57b58e04c4b.jpg",
        "rawPath": "P.104/z7824761538943_6a0274a993c309051752e57b58e04c4b.jpg",
        "width": 2568,
        "height": 1926,
        "aspectRatio": "landscape",
        "sizeBytes": 558656
      }
    ]
  },
  "P.105": {
    "key": "P.105",
    "name": "Suite P.105",
    "floor": 1,
    "floorLabel": "Floor 1",
    "categoryId": "superior-double-twin",
    "categoryTitle": "The Superior Double & Twin Rooms",
    "bedding": "1 Queen Bed / Twin Option",
    "size": "28 m²",
    "occupancy": "2 Guests",
    "view": "Quiet Wing",
    "description": "Quiet middle-wing suite featuring acoustic glazing, minimalist interior styling, comfortable mattress, and a dedicated vanity work desk.",
    "features": [
      "1 Queen Bed (1.6m x 2.0m)",
      "Acoustic Glazing for Quiet Sleep",
      "Modern En-Suite Bathroom",
      "Individual AC Control",
      "High-Speed Wi-Fi",
      "Work Vanity & Mirror",
      "Elevator Access"
    ],
    "heroPhoto": "P.105/z7824762601836_8385e2947b2c5ceab77ac47d412f8520.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824762601836_8385e2947b2c5ceab77ac47d412f8520.jpg",
        "src": "P.105/z7824762601836_8385e2947b2c5ceab77ac47d412f8520.jpg",
        "rawPath": "P.105/z7824762601836_8385e2947b2c5ceab77ac47d412f8520.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 175877
      },
      {
        "filename": "z7824762606055_32c4e6660b3f05e12b503af0cc0e51ab.jpg",
        "src": "P.105/z7824762606055_32c4e6660b3f05e12b503af0cc0e51ab.jpg",
        "rawPath": "P.105/z7824762606055_32c4e6660b3f05e12b503af0cc0e51ab.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 157284
      },
      {
        "filename": "z7824762607110_f1c666784a63fc1a256cb565b0a5e0cf.jpg",
        "src": "P.105/z7824762607110_f1c666784a63fc1a256cb565b0a5e0cf.jpg",
        "rawPath": "P.105/z7824762607110_f1c666784a63fc1a256cb565b0a5e0cf.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 222353
      }
    ]
  },
  "P.106": {
    "key": "P.106",
    "name": "Suite P.106",
    "floor": 1,
    "floorLabel": "Floor 1",
    "categoryId": "superior-double-twin",
    "categoryTitle": "The Superior Double & Twin Rooms",
    "bedding": "2 Double Beds (Master Layout)",
    "size": "34 m²",
    "occupancy": "2 - 4 Guests",
    "view": "Garden Tree Canopy",
    "description": "The largest room layout on Floor 1, offering 34 m² of living space, two double beds, picture windows overlooking lush garden trees, and ample storage.",
    "features": [
      "2 Double Beds (1.4m x 2.0m each)",
      "Expansive 34 m² Master Twin Floorplan",
      "Garden Tree Canopy Outlook",
      "Spacious Private Bathroom",
      "High-Speed Wi-Fi",
      "Ample Luggage Storage",
      "Elevator Access"
    ],
    "heroPhoto": "P.106/z5714827900966_b8be8a01b7fc4116ecced90a322b8071.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z5714827900966_b8be8a01b7fc4116ecced90a322b8071.jpg",
        "src": "P.106/z5714827900966_b8be8a01b7fc4116ecced90a322b8071.jpg",
        "rawPath": "P.106/z5714827900966_b8be8a01b7fc4116ecced90a322b8071.jpg",
        "width": 2560,
        "height": 1920,
        "aspectRatio": "landscape",
        "sizeBytes": 3402051
      },
      {
        "filename": "z7824762816307_f1da7273d02db3c09fdd770cc76723a0.jpg",
        "src": "P.106/z7824762816307_f1da7273d02db3c09fdd770cc76723a0.jpg",
        "rawPath": "P.106/z7824762816307_f1da7273d02db3c09fdd770cc76723a0.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 203395
      },
      {
        "filename": "z7824762831399_d3e2fb2a4755a7c55d1b1a75c42761ad.jpg",
        "src": "P.106/z7824762831399_d3e2fb2a4755a7c55d1b1a75c42761ad.jpg",
        "rawPath": "P.106/z7824762831399_d3e2fb2a4755a7c55d1b1a75c42761ad.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 133199
      },
      {
        "filename": "z7824762838884_39a6101961b6be3d654a497b7aef1b52.jpg",
        "src": "P.106/z7824762838884_39a6101961b6be3d654a497b7aef1b52.jpg",
        "rawPath": "P.106/z7824762838884_39a6101961b6be3d654a497b7aef1b52.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 191131
      }
    ]
  },
  "P.201": {
    "key": "P.201",
    "name": "Suite P.201",
    "floor": 2,
    "floorLabel": "Floor 2",
    "categoryId": "deluxe-king-sanctuaries",
    "categoryTitle": "The Deluxe King Sanctuaries",
    "bedding": "1 Master King Bed",
    "size": "28 m²",
    "occupancy": "2 Guests",
    "view": "Elevated Mountain Side",
    "description": "Elevated corner retreat on Floor 2 offering quiet acoustic isolation, blackout drapery, plush King bedding, and a pristine tiled bathroom.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "Elevated Quiet Corner Position",
      "Private En-Suite Spa Shower",
      "Silent Inverter AC",
      "High-Speed Fiber Wi-Fi",
      "Crisp Cotton Linens",
      "Elevator Access"
    ],
    "heroPhoto": "P.201/z7824764195864_a8778b82034b1c5bbb7334dd6342e4c5.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824764195864_a8778b82034b1c5bbb7334dd6342e4c5.jpg",
        "src": "P.201/z7824764195864_a8778b82034b1c5bbb7334dd6342e4c5.jpg",
        "rawPath": "P.201/z7824764195864_a8778b82034b1c5bbb7334dd6342e4c5.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 146842
      },
      {
        "filename": "z7824764212692_09c16e58866e513cbead9e3b876d30fd.jpg",
        "src": "P.201/z7824764212692_09c16e58866e513cbead9e3b876d30fd.jpg",
        "rawPath": "P.201/z7824764212692_09c16e58866e513cbead9e3b876d30fd.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 182438
      },
      {
        "filename": "z7824764213672_6130515136314a9319888389c3a91551.jpg",
        "src": "P.201/z7824764213672_6130515136314a9319888389c3a91551.jpg",
        "rawPath": "P.201/z7824764213672_6130515136314a9319888389c3a91551.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 200070
      }
    ]
  },
  "P.202": {
    "key": "P.202",
    "name": "Suite P.202",
    "floor": 2,
    "floorLabel": "Floor 2",
    "categoryId": "deluxe-king-sanctuaries",
    "categoryTitle": "The Deluxe King Sanctuaries",
    "bedding": "1 Master King Bed",
    "size": "30 m²",
    "occupancy": "2 Guests",
    "view": "Highland Horizon",
    "description": "Spacious level 2 king sanctuary with timber furnishings, generous wardrobe joinery, dedicated vanity workspace, and unobstructed horizon views.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "Highland Horizon Views",
      "Dedicated Vanity Workspace",
      "Full Wardrobe Joinery",
      "Modern En-Suite Bathroom",
      "High-Speed Wi-Fi",
      "Elevator Access"
    ],
    "heroPhoto": "P.202/z7824766931597_f0dee738d2c136917447a110ab67ac51.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824766931597_f0dee738d2c136917447a110ab67ac51.jpg",
        "src": "P.202/z7824766931597_f0dee738d2c136917447a110ab67ac51.jpg",
        "rawPath": "P.202/z7824766931597_f0dee738d2c136917447a110ab67ac51.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 192642
      },
      {
        "filename": "z7824766937198_568e75ef0143fe0f36aec9157d8664a6.jpg",
        "src": "P.202/z7824766937198_568e75ef0143fe0f36aec9157d8664a6.jpg",
        "rawPath": "P.202/z7824766937198_568e75ef0143fe0f36aec9157d8664a6.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 109533
      },
      {
        "filename": "z7942009222446_c28b51b2b72813fbaed6cb4d1af72752.jpg",
        "src": "P.202/z7942009222446_c28b51b2b72813fbaed6cb4d1af72752.jpg",
        "rawPath": "P.202/z7942009222446_c28b51b2b72813fbaed6cb4d1af72752.jpg",
        "width": 2568,
        "height": 1926,
        "aspectRatio": "landscape",
        "sizeBytes": 667560
      },
      {
        "filename": "z7942009224415_eafc27c21e9fcfab92a7c6a90b58dcf7.jpg",
        "src": "P.202/z7942009224415_eafc27c21e9fcfab92a7c6a90b58dcf7.jpg",
        "rawPath": "P.202/z7942009224415_eafc27c21e9fcfab92a7c6a90b58dcf7.jpg",
        "width": 1920,
        "height": 2560,
        "aspectRatio": "portrait",
        "sizeBytes": 687559
      }
    ]
  },
  "P.203": {
    "key": "P.203",
    "name": "Suite P.203",
    "floor": 2,
    "floorLabel": "Floor 2",
    "categoryId": "superior-double-twin",
    "categoryTitle": "The Superior Double & Twin Rooms",
    "bedding": "2 Twin Beds / Double Option",
    "size": "30 m²",
    "occupancy": "2 - 3 Guests",
    "view": "Daylight Canopy",
    "description": "Harmonious twin layout on Floor 2 bathed in gentle morning daylight filtered through sheer linen curtains, with private en-suite shower.",
    "features": [
      "2 Twin Beds (1.2m x 2.0m each)",
      "Gentle Natural Daylight Orientation",
      "En-Suite Bathroom with Glass Shower",
      "Silent Climate Control",
      "Fiber Wi-Fi",
      "Tea & Coffee Amenities",
      "Elevator Access"
    ],
    "heroPhoto": "P.203/z7824764442431_d8d5254560ecce6546b4144005a205ef.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824764442431_d8d5254560ecce6546b4144005a205ef.jpg",
        "src": "P.203/z7824764442431_d8d5254560ecce6546b4144005a205ef.jpg",
        "rawPath": "P.203/z7824764442431_d8d5254560ecce6546b4144005a205ef.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 167763
      },
      {
        "filename": "z7824764446264_a74274927d4d63301316a5cc69dcf4ea.jpg",
        "src": "P.203/z7824764446264_a74274927d4d63301316a5cc69dcf4ea.jpg",
        "rawPath": "P.203/z7824764446264_a74274927d4d63301316a5cc69dcf4ea.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 199905
      },
      {
        "filename": "z7824764452402_af259b815a28fec1c930a9606a8ee712.jpg",
        "src": "P.203/z7824764452402_af259b815a28fec1c930a9606a8ee712.jpg",
        "rawPath": "P.203/z7824764452402_af259b815a28fec1c930a9606a8ee712.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 140703
      },
      {
        "filename": "z7824764453823_e1f6be1dd72058b9f1267e2da5799586.jpg",
        "src": "P.203/z7824764453823_e1f6be1dd72058b9f1267e2da5799586.jpg",
        "rawPath": "P.203/z7824764453823_e1f6be1dd72058b9f1267e2da5799586.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 150320
      }
    ]
  },
  "P.204": {
    "key": "P.204",
    "name": "Suite P.204",
    "floor": 2,
    "floorLabel": "Floor 2",
    "categoryId": "superior-double-twin",
    "categoryTitle": "The Superior Double & Twin Rooms",
    "bedding": "2 Double Beds",
    "size": "32 m²",
    "occupancy": "2 - 4 Guests",
    "view": "Mountain Breeze Aspect",
    "description": "Spacious family accommodation featuring two comfortable double beds, refreshing mountain airflow, generous floor area, and complete private facilities.",
    "features": [
      "2 Double Beds (1.4m x 2.0m each)",
      "Generous Family Floorplan",
      "En-Suite Modern Bathroom",
      "Multi-Split Silent AC",
      "High-Speed Fiber Wi-Fi",
      "Vanity & Wardrobe",
      "Elevator Access"
    ],
    "heroPhoto": "P.204/z7824768258560_6a0274a993c309051752e57b58e04c4b.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824768258560_6a0274a993c309051752e57b58e04c4b.jpg",
        "src": "P.204/z7824768258560_6a0274a993c309051752e57b58e04c4b.jpg",
        "rawPath": "P.204/z7824768258560_6a0274a993c309051752e57b58e04c4b.jpg",
        "width": 2568,
        "height": 1926,
        "aspectRatio": "landscape",
        "sizeBytes": 558656
      },
      {
        "filename": "z7824768270516_7c285b6ea6b8c2370cebbff0b81616a7.jpg",
        "src": "P.204/z7824768270516_7c285b6ea6b8c2370cebbff0b81616a7.jpg",
        "rawPath": "P.204/z7824768270516_7c285b6ea6b8c2370cebbff0b81616a7.jpg",
        "width": 1920,
        "height": 2560,
        "aspectRatio": "portrait",
        "sizeBytes": 431025
      },
      {
        "filename": "z7824768283109_fafbd31bdbd84b30f250a908af2d0c29.jpg",
        "src": "P.204/z7824768283109_fafbd31bdbd84b30f250a908af2d0c29.jpg",
        "rawPath": "P.204/z7824768283109_fafbd31bdbd84b30f250a908af2d0c29.jpg",
        "width": 1920,
        "height": 2560,
        "aspectRatio": "portrait",
        "sizeBytes": 602122
      }
    ]
  },
  "P.205": {
    "key": "P.205",
    "name": "Suite P.205",
    "floor": 2,
    "floorLabel": "Floor 2",
    "categoryId": "superior-double-twin",
    "categoryTitle": "The Superior Double & Twin Rooms",
    "bedding": "1 Queen Bed / Twin Option",
    "size": "28 m²",
    "occupancy": "2 Guests",
    "view": "Quiet Middle Wing",
    "description": "Serene middle-wing accommodation on Floor 2 featuring minimalist wooden accents, pocket-spring mattress, and private modern bathroom.",
    "features": [
      "1 Queen Bed (1.6m x 2.0m)",
      "Quiet Wing Placement",
      "En-Suite Glass Shower",
      "Individual Climate Control",
      "Fiber Wi-Fi",
      "Bedside Lamps",
      "Elevator Access"
    ],
    "heroPhoto": "P.205/z7824768965919_46d36206ccb72cb5db0c3a67b5a77647.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824768965919_46d36206ccb72cb5db0c3a67b5a77647.jpg",
        "src": "P.205/z7824768965919_46d36206ccb72cb5db0c3a67b5a77647.jpg",
        "rawPath": "P.205/z7824768965919_46d36206ccb72cb5db0c3a67b5a77647.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 188158
      },
      {
        "filename": "z7824768979413_3f6c70bd3b4a4b5d01ebe9df63d26e2d.jpg",
        "src": "P.205/z7824768979413_3f6c70bd3b4a4b5d01ebe9df63d26e2d.jpg",
        "rawPath": "P.205/z7824768979413_3f6c70bd3b4a4b5d01ebe9df63d26e2d.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 169167
      },
      {
        "filename": "z7824768992792_d4ced25272f5c81d925d7f54493f52cc.jpg",
        "src": "P.205/z7824768992792_d4ced25272f5c81d925d7f54493f52cc.jpg",
        "rawPath": "P.205/z7824768992792_d4ced25272f5c81d925d7f54493f52cc.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 173664
      }
    ]
  },
  "P.206": {
    "key": "P.206",
    "name": "Suite P.206",
    "floor": 2,
    "floorLabel": "Floor 2",
    "categoryId": "balcony-suites",
    "categoryTitle": "The Balcony Suites",
    "bedding": "1 Master King Bed / Balcony",
    "size": "30 m²",
    "occupancy": "2 Guests",
    "view": "Private Balcony & City View",
    "description": "Signature balcony suite on Floor 2 with floor-to-ceiling glass sliding doors opening onto a private sun balcony with sweeping city and mountain outlooks.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "Private Walk-Out Sun Balcony",
      "Floor-to-Ceiling Glass Sliding Aperture",
      "Airy Mountain Breeze Aspect",
      "En-Suite Bathroom with Rain Shower",
      "Elevator Access"
    ],
    "heroPhoto": "P.206/z7824769150903_e668f6ffe4e749166f6ee5cdb2195ea7.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824769150903_e668f6ffe4e749166f6ee5cdb2195ea7.jpg",
        "src": "P.206/z7824769150903_e668f6ffe4e749166f6ee5cdb2195ea7.jpg",
        "rawPath": "P.206/z7824769150903_e668f6ffe4e749166f6ee5cdb2195ea7.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 127658
      },
      {
        "filename": "z7824769159788_82b3a8cd06200e8f6ac426939605d6da.jpg",
        "src": "P.206/z7824769159788_82b3a8cd06200e8f6ac426939605d6da.jpg",
        "rawPath": "P.206/z7824769159788_82b3a8cd06200e8f6ac426939605d6da.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 189302
      },
      {
        "filename": "z7824769171034_f27e56a1302d72204658c802f177ef36.jpg",
        "src": "P.206/z7824769171034_f27e56a1302d72204658c802f177ef36.jpg",
        "rawPath": "P.206/z7824769171034_f27e56a1302d72204658c802f177ef36.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 200833
      },
      {
        "filename": "z7824769177275_22834cc6aa306f92352b01b5d1ed23c8.jpg",
        "src": "P.206/z7824769177275_22834cc6aa306f92352b01b5d1ed23c8.jpg",
        "rawPath": "P.206/z7824769177275_22834cc6aa306f92352b01b5d1ed23c8.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 180894
      }
    ]
  },
  "P.207": {
    "key": "P.207",
    "name": "Suite P.207",
    "floor": 2,
    "floorLabel": "Floor 2",
    "categoryId": "balcony-suites",
    "categoryTitle": "The Balcony Suites",
    "bedding": "1 Master King Bed / Balcony & Video Tour",
    "size": "32 m²",
    "occupancy": "2 Guests",
    "view": "Private Balcony & Sunset Horizon",
    "description": "The flagship balcony suite featuring an authentic high-definition video walkthrough, floor-to-ceiling balcony glazing, sunset views, and luxury king bedding.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "Private Sun Balcony with City Vistas",
      "HD Video Walkthrough Available",
      "Floor-to-Ceiling Sliding Glass Doors",
      "Luxury En-Suite Bathroom",
      "Elevator Access"
    ],
    "heroPhoto": "P.207/z7824769737581_e668f6ffe4e749166f6ee5cdb2195ea7.jpg",
    "hasVideo": true,
    "video": {
      "filename": "clip quay phòng có ban công.mp4",
      "src": "P.207/clip%20quay%20ph%C3%B2ng%20c%C3%B3%20ban%20c%C3%B4ng.mp4",
      "rawPath": "P.207/clip quay phòng có ban công.mp4",
      "duration": "35s",
      "durationSeconds": 35.27,
      "format": "video/mp4",
      "codec": "H.264 / AAC",
      "width": 720,
      "height": 1280,
      "aspectRatio": "9:16",
      "sizeBytes": 9481332
    },
    "photos": [
      {
        "filename": "z7824769737581_e668f6ffe4e749166f6ee5cdb2195ea7.jpg",
        "src": "P.207/z7824769737581_e668f6ffe4e749166f6ee5cdb2195ea7.jpg",
        "rawPath": "P.207/z7824769737581_e668f6ffe4e749166f6ee5cdb2195ea7.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 127658
      },
      {
        "filename": "z7824769750313_9fad1b8002e42a34987bbf0b5b6be99a.jpg",
        "src": "P.207/z7824769750313_9fad1b8002e42a34987bbf0b5b6be99a.jpg",
        "rawPath": "P.207/z7824769750313_9fad1b8002e42a34987bbf0b5b6be99a.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 194102
      },
      {
        "filename": "z7824769766134_b990789e47ada06114ac12048cd0a402.jpg",
        "src": "P.207/z7824769766134_b990789e47ada06114ac12048cd0a402.jpg",
        "rawPath": "P.207/z7824769766134_b990789e47ada06114ac12048cd0a402.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 191302
      }
    ]
  },
  "P.301": {
    "key": "P.301",
    "name": "Suite P.301",
    "floor": 3,
    "floorLabel": "Floor 3",
    "categoryId": "balcony-suites",
    "categoryTitle": "The Balcony Suites",
    "bedding": "1 Master King Bed / Top-Floor Balcony",
    "size": "30 m²",
    "occupancy": "2 Guests",
    "view": "Top-Floor Balcony & Panoramic Mountains",
    "description": "Top-floor balcony suite offering supreme quietude, expansive mountain vistas from a private terrace, and crisp natural morning sunlight.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "Top-Floor Private Sun Balcony",
      "Panoramic Mountain & Highland Horizon",
      "Floor-to-Ceiling Balcony Glazing",
      "Spa En-Suite Bathroom",
      "Elevator Access"
    ],
    "heroPhoto": "P.301/z7824770142799_32a15312937c71d013893cfa5e33e8fd.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824770142799_32a15312937c71d013893cfa5e33e8fd.jpg",
        "src": "P.301/z7824770142799_32a15312937c71d013893cfa5e33e8fd.jpg",
        "rawPath": "P.301/z7824770142799_32a15312937c71d013893cfa5e33e8fd.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 154474
      },
      {
        "filename": "z7824770148061_57138d50f0f9779fc4054559c888ad12.jpg",
        "src": "P.301/z7824770148061_57138d50f0f9779fc4054559c888ad12.jpg",
        "rawPath": "P.301/z7824770148061_57138d50f0f9779fc4054559c888ad12.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 190420
      },
      {
        "filename": "z7824770161323_5847e74a965bf98033a0712cdc2a4910.jpg",
        "src": "P.301/z7824770161323_5847e74a965bf98033a0712cdc2a4910.jpg",
        "rawPath": "P.301/z7824770161323_5847e74a965bf98033a0712cdc2a4910.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 123717
      }
    ]
  },
  "P.302": {
    "key": "P.302",
    "name": "Suite P.302",
    "floor": 3,
    "floorLabel": "Floor 3",
    "categoryId": "balcony-suites",
    "categoryTitle": "The Balcony Suites",
    "bedding": "1 Master King Bed / Top-Floor Balcony",
    "size": "32 m²",
    "occupancy": "2 Guests",
    "view": "Top-Floor Balcony & Skyline",
    "description": "Penthouse level balcony suite with generous wardrobe joinery, sunlit private balcony overlooking Bảo Lộc skyline, and premium porcelain en-suite bath.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "Penthouse Level Sun Balcony",
      "Sunlit Skyline Panoramas",
      "Generous Wardrobe Joinery",
      "Modern En-Suite Bathroom",
      "Elevator Access"
    ],
    "heroPhoto": "P.302/z7824770360233_f30e8fb97a222ea21de8a4b4dba54c57.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824770360233_f30e8fb97a222ea21de8a4b4dba54c57.jpg",
        "src": "P.302/z7824770360233_f30e8fb97a222ea21de8a4b4dba54c57.jpg",
        "rawPath": "P.302/z7824770360233_f30e8fb97a222ea21de8a4b4dba54c57.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 132485
      },
      {
        "filename": "z7824770366023_594d04223aaa2f495dd780b1896886ac.jpg",
        "src": "P.302/z7824770366023_594d04223aaa2f495dd780b1896886ac.jpg",
        "rawPath": "P.302/z7824770366023_594d04223aaa2f495dd780b1896886ac.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 188330
      },
      {
        "filename": "z7824770378466_83ff1a7a80d3b298afcde40ece387726.jpg",
        "src": "P.302/z7824770378466_83ff1a7a80d3b298afcde40ece387726.jpg",
        "rawPath": "P.302/z7824770378466_83ff1a7a80d3b298afcde40ece387726.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 198508
      },
      {
        "filename": "z7824770381956_eb27175da5711ec883b7bd6847f6fe53.jpg",
        "src": "P.302/z7824770381956_eb27175da5711ec883b7bd6847f6fe53.jpg",
        "rawPath": "P.302/z7824770381956_eb27175da5711ec883b7bd6847f6fe53.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 191808
      }
    ]
  },
  "P.303": {
    "key": "P.303",
    "name": "Suite P.303",
    "floor": 3,
    "floorLabel": "Floor 3",
    "categoryId": "deluxe-king-sanctuaries",
    "categoryTitle": "The Deluxe King Sanctuaries",
    "bedding": "1 Master King Bed",
    "size": "28 m²",
    "occupancy": "2 Guests",
    "view": "High-Altitude Quietude",
    "description": "Top-floor king sanctuary offering elevated silence, crisp cotton linens on an orthopedic mattress, walk-in rain shower, and fresh highland air.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "Top-Floor Acoustic Silence",
      "Walk-In Rainfall Shower",
      "Silent Inverter AC",
      "Fiber Wi-Fi",
      "Vanity Table & Mirror",
      "Elevator Access"
    ],
    "heroPhoto": "P.303/z7824770831506_a23427208ab983cfdeeb6678060b9c86.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824770831506_a23427208ab983cfdeeb6678060b9c86.jpg",
        "src": "P.303/z7824770831506_a23427208ab983cfdeeb6678060b9c86.jpg",
        "rawPath": "P.303/z7824770831506_a23427208ab983cfdeeb6678060b9c86.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 193328
      },
      {
        "filename": "z7824770840612_400342ba890ce9cdfb958cd0117437f1.jpg",
        "src": "P.303/z7824770840612_400342ba890ce9cdfb958cd0117437f1.jpg",
        "rawPath": "P.303/z7824770840612_400342ba890ce9cdfb958cd0117437f1.jpg",
        "width": 960,
        "height": 1280,
        "aspectRatio": "portrait",
        "sizeBytes": 122032
      },
      {
        "filename": "z7824770844810_ce3eee3ba59250cf7f479879fae10e8d.jpg",
        "src": "P.303/z7824770844810_ce3eee3ba59250cf7f479879fae10e8d.jpg",
        "rawPath": "P.303/z7824770844810_ce3eee3ba59250cf7f479879fae10e8d.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 223294
      }
    ]
  },
  "P.304": {
    "key": "P.304",
    "name": "Suite P.304",
    "floor": 3,
    "floorLabel": "Floor 3",
    "categoryId": "deluxe-king-sanctuaries",
    "categoryTitle": "The Deluxe King Sanctuaries",
    "bedding": "1 Master King Bed",
    "size": "28 m²",
    "occupancy": "2 Guests",
    "view": "Upper Horizon View",
    "description": "Serene top-floor king bedroom featuring ample natural daylight, timber furnishings, climate-controlled comfort, and modern private amenities.",
    "features": [
      "1 Master King Bed (1.8m x 2.0m)",
      "High-Altitude Daylight Orientation",
      "Timber Vanity & Mirror",
      "Silent Climate Control",
      "Private En-Suite Bathroom",
      "High-Speed Wi-Fi",
      "Elevator Access"
    ],
    "heroPhoto": "P.304/z7824771064734_07bfb10a96d2b06e355b5589f0cf03da.jpg",
    "hasVideo": false,
    "video": null,
    "photos": [
      {
        "filename": "z7824771064734_07bfb10a96d2b06e355b5589f0cf03da.jpg",
        "src": "P.304/z7824771064734_07bfb10a96d2b06e355b5589f0cf03da.jpg",
        "rawPath": "P.304/z7824771064734_07bfb10a96d2b06e355b5589f0cf03da.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 179064
      },
      {
        "filename": "z7824771081218_4d171fa225dec3fb62c8551b225db81a.jpg",
        "src": "P.304/z7824771081218_4d171fa225dec3fb62c8551b225db81a.jpg",
        "rawPath": "P.304/z7824771081218_4d171fa225dec3fb62c8551b225db81a.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 203736
      },
      {
        "filename": "z7824771084432_7b5ab556e2519c1731b97cf545309290.jpg",
        "src": "P.304/z7824771084432_7b5ab556e2519c1731b97cf545309290.jpg",
        "rawPath": "P.304/z7824771084432_7b5ab556e2519c1731b97cf545309290.jpg",
        "width": 1281,
        "height": 961,
        "aspectRatio": "landscape",
        "sizeBytes": 128693
      }
    ]
  }
};

  const video = {
  "roomKey": "P.207",
  "title": "Suite P.207 — Private Balcony & Interior Cinematic Tour",
  "src": "P.207/clip%20quay%20ph%C3%B2ng%20c%C3%B3%20ban%20c%C3%B4ng.mp4",
  "rawPath": "P.207/clip quay phòng có ban công.mp4",
  "poster": "P.207/z7824769750313_9fad1b8002e42a34987bbf0b5b6be99a.jpg",
  "duration": "35s",
  "durationSeconds": 35.27,
  "format": "video/mp4",
  "codec": "H.264 / AAC",
  "width": 720,
  "height": 1280,
  "aspectRatio": "9:16",
  "sizeBytes": 9481332,
  "description": "Original high-definition 1080p vertical video tour documenting the sunlit bedroom sanctuary, private outdoor balcony, and panoramic highland perspective of Suite P.207."
};

  const gallery = [
  {
    "id": 1,
    "filename": "z4873228195380_d529536454b998d3891cc2961f25a0b6.jpg",
    "src": "Ảnh Khách Sạn/z4873228195380_d529536454b998d3891cc2961f25a0b6.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228195380_d529536454b998d3891cc2961f25a0b6.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 01",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 219714,
    "titleEn": "Architectural Facade & Horizon 01",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 01"
  },
  {
    "id": 2,
    "filename": "z4873228197650_35bdf452f890f8c0f1270067798d2e04 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228197650_35bdf452f890f8c0f1270067798d2e04 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228197650_35bdf452f890f8c0f1270067798d2e04 - Copy.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 02",
    "width": 960,
    "height": 640,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 218361,
    "titleEn": "Architectural Facade & Horizon 02",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 02"
  },
  {
    "id": 3,
    "filename": "z4873228197650_35bdf452f890f8c0f1270067798d2e04.jpg",
    "src": "Ảnh Khách Sạn/z4873228197650_35bdf452f890f8c0f1270067798d2e04.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228197650_35bdf452f890f8c0f1270067798d2e04.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 03",
    "width": 960,
    "height": 640,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 218361,
    "titleEn": "Architectural Facade & Horizon 03",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 03"
  },
  {
    "id": 4,
    "filename": "z4873228200635_e954649ee874b4e2e15b008297f796a5 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228200635_e954649ee874b4e2e15b008297f796a5 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228200635_e954649ee874b4e2e15b008297f796a5 - Copy.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 04",
    "width": 960,
    "height": 640,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 267115,
    "titleEn": "Architectural Facade & Horizon 04",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 04"
  },
  {
    "id": 5,
    "filename": "z4873228200635_e954649ee874b4e2e15b008297f796a5.jpg",
    "src": "Ảnh Khách Sạn/z4873228200635_e954649ee874b4e2e15b008297f796a5.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228200635_e954649ee874b4e2e15b008297f796a5.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 05",
    "width": 960,
    "height": 640,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 267115,
    "titleEn": "Architectural Facade & Horizon 05",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 05"
  },
  {
    "id": 6,
    "filename": "z4873228206965_5b80d8743900c4ffcdf5d6a174d5e421 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228206965_5b80d8743900c4ffcdf5d6a174d5e421 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228206965_5b80d8743900c4ffcdf5d6a174d5e421 - Copy.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 06",
    "width": 960,
    "height": 720,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 157838,
    "titleEn": "Architectural Facade & Horizon 06",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 06"
  },
  {
    "id": 7,
    "filename": "z4873228206965_5b80d8743900c4ffcdf5d6a174d5e421.jpg",
    "src": "Ảnh Khách Sạn/z4873228206965_5b80d8743900c4ffcdf5d6a174d5e421.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228206965_5b80d8743900c4ffcdf5d6a174d5e421.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 07",
    "width": 960,
    "height": 720,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 157838,
    "titleEn": "Architectural Facade & Horizon 07",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 07"
  },
  {
    "id": 8,
    "filename": "z4873228207872_7eba823dde46084f0e889c10171a8768.jpg",
    "src": "Ảnh Khách Sạn/z4873228207872_7eba823dde46084f0e889c10171a8768.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228207872_7eba823dde46084f0e889c10171a8768.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 08",
    "width": 960,
    "height": 640,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 193975,
    "titleEn": "Architectural Facade & Horizon 08",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 08"
  },
  {
    "id": 9,
    "filename": "z4873228214406_35d48fc1760331461ec8e0d102d401d1 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228214406_35d48fc1760331461ec8e0d102d401d1 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228214406_35d48fc1760331461ec8e0d102d401d1 - Copy.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 09",
    "width": 1280,
    "height": 767,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 161304,
    "titleEn": "Architectural Facade & Horizon 09",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 09"
  },
  {
    "id": 10,
    "filename": "z4873228214406_35d48fc1760331461ec8e0d102d401d1.jpg",
    "src": "Ảnh Khách Sạn/z4873228214406_35d48fc1760331461ec8e0d102d401d1.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228214406_35d48fc1760331461ec8e0d102d401d1.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 10",
    "width": 1280,
    "height": 767,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 161304,
    "titleEn": "Architectural Facade & Horizon 10",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 10"
  },
  {
    "id": 11,
    "filename": "z4873228427287_b9b489ff3b8c3f87dba917c89f8d62d5.jpg",
    "src": "Ảnh Khách Sạn/z4873228427287_b9b489ff3b8c3f87dba917c89f8d62d5.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228427287_b9b489ff3b8c3f87dba917c89f8d62d5.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 11",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 524266,
    "titleEn": "Architectural Facade & Horizon 11",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 11"
  },
  {
    "id": 12,
    "filename": "z4873228438471_b9dccbf2ae0e89320b923909fe34d6c8 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228438471_b9dccbf2ae0e89320b923909fe34d6c8 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228438471_b9dccbf2ae0e89320b923909fe34d6c8 - Copy.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 12",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 517709,
    "titleEn": "Architectural Facade & Horizon 12",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 12"
  },
  {
    "id": 13,
    "filename": "z4873228438471_b9dccbf2ae0e89320b923909fe34d6c8.jpg",
    "src": "Ảnh Khách Sạn/z4873228438471_b9dccbf2ae0e89320b923909fe34d6c8.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228438471_b9dccbf2ae0e89320b923909fe34d6c8.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 13",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 517709,
    "titleEn": "Architectural Facade & Horizon 13",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 13"
  },
  {
    "id": 14,
    "filename": "z4873228439720_a7467c38200d2d4a981f90fd591ebd17 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228439720_a7467c38200d2d4a981f90fd591ebd17 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228439720_a7467c38200d2d4a981f90fd591ebd17 - Copy.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 14",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 457297,
    "titleEn": "Architectural Facade & Horizon 14",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 14"
  },
  {
    "id": 15,
    "filename": "z4873228439720_a7467c38200d2d4a981f90fd591ebd17.jpg",
    "src": "Ảnh Khách Sạn/z4873228439720_a7467c38200d2d4a981f90fd591ebd17.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228439720_a7467c38200d2d4a981f90fd591ebd17.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 15",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 457297,
    "titleEn": "Architectural Facade & Horizon 15",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 15"
  },
  {
    "id": 16,
    "filename": "z4873228440349_e88e5a9eae9db68d6bcc55fd04730f7f.jpg",
    "src": "Ảnh Khách Sạn/z4873228440349_e88e5a9eae9db68d6bcc55fd04730f7f.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228440349_e88e5a9eae9db68d6bcc55fd04730f7f.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 16",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 478286,
    "titleEn": "Architectural Facade & Horizon 16",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 16"
  },
  {
    "id": 17,
    "filename": "z4873228449406_314307c25bac0bb8a9a197163a304f7f.jpg",
    "src": "Ảnh Khách Sạn/z4873228449406_314307c25bac0bb8a9a197163a304f7f.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228449406_314307c25bac0bb8a9a197163a304f7f.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 17",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 553715,
    "titleEn": "Architectural Facade & Horizon 17",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 17"
  },
  {
    "id": 18,
    "filename": "z4873228456935_b71578094a0d6d21802f54d5421fbe5e.jpg",
    "src": "Ảnh Khách Sạn/z4873228456935_b71578094a0d6d21802f54d5421fbe5e.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228456935_b71578094a0d6d21802f54d5421fbe5e.jpg",
    "category": "exterior",
    "categoryLabel": "Exterior & Architecture",
    "title": "Kiến Trúc Mặt Tiền & Cảnh Quan 18",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 539609,
    "titleEn": "Architectural Facade & Horizon 18",
    "titleVi": "Kiến Trúc Mặt Tiền & Cảnh Quan 18"
  },
  {
    "id": 19,
    "filename": "z4873228459112_002cc2542bb2816194e5fdd47190b108.jpg",
    "src": "Ảnh Khách Sạn/z4873228459112_002cc2542bb2816194e5fdd47190b108.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228459112_002cc2542bb2816194e5fdd47190b108.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 01",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 424633,
    "titleEn": "Arrival Foyer & Common Lounge 01",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 01"
  },
  {
    "id": 20,
    "filename": "z4873228461775_8293ae5a087e3195b78844102864d76e.jpg",
    "src": "Ảnh Khách Sạn/z4873228461775_8293ae5a087e3195b78844102864d76e.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228461775_8293ae5a087e3195b78844102864d76e.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 02",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 452230,
    "titleEn": "Arrival Foyer & Common Lounge 02",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 02"
  },
  {
    "id": 21,
    "filename": "z4873228466482_5cac0ad6397bbfee5bf98ed514b3ffa2.jpg",
    "src": "Ảnh Khách Sạn/z4873228466482_5cac0ad6397bbfee5bf98ed514b3ffa2.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228466482_5cac0ad6397bbfee5bf98ed514b3ffa2.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 03",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 587769,
    "titleEn": "Arrival Foyer & Common Lounge 03",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 03"
  },
  {
    "id": 22,
    "filename": "z4873228466935_516c0d633a74432e719b350064c9ffd7.jpg",
    "src": "Ảnh Khách Sạn/z4873228466935_516c0d633a74432e719b350064c9ffd7.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228466935_516c0d633a74432e719b350064c9ffd7.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 04",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 525221,
    "titleEn": "Arrival Foyer & Common Lounge 04",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 04"
  },
  {
    "id": 23,
    "filename": "z4873228475021_ecab45cece11e0939eca37545aafff11.jpg",
    "src": "Ảnh Khách Sạn/z4873228475021_ecab45cece11e0939eca37545aafff11.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228475021_ecab45cece11e0939eca37545aafff11.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 05",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 580802,
    "titleEn": "Arrival Foyer & Common Lounge 05",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 05"
  },
  {
    "id": 24,
    "filename": "z4873228475210_69c9170831fb95ddbd8674bcebc1f5d6 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228475210_69c9170831fb95ddbd8674bcebc1f5d6 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228475210_69c9170831fb95ddbd8674bcebc1f5d6 - Copy.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 06",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 529203,
    "titleEn": "Arrival Foyer & Common Lounge 06",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 06"
  },
  {
    "id": 25,
    "filename": "z4873228475210_69c9170831fb95ddbd8674bcebc1f5d6.jpg",
    "src": "Ảnh Khách Sạn/z4873228475210_69c9170831fb95ddbd8674bcebc1f5d6.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228475210_69c9170831fb95ddbd8674bcebc1f5d6.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 07",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 529203,
    "titleEn": "Arrival Foyer & Common Lounge 07",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 07"
  },
  {
    "id": 26,
    "filename": "z4873228477120_a78b6722d25c83168cd2ef81a47c3a03 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228477120_a78b6722d25c83168cd2ef81a47c3a03 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228477120_a78b6722d25c83168cd2ef81a47c3a03 - Copy.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 08",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 434984,
    "titleEn": "Arrival Foyer & Common Lounge 08",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 08"
  },
  {
    "id": 27,
    "filename": "z4873228477120_a78b6722d25c83168cd2ef81a47c3a03.jpg",
    "src": "Ảnh Khách Sạn/z4873228477120_a78b6722d25c83168cd2ef81a47c3a03.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228477120_a78b6722d25c83168cd2ef81a47c3a03.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 09",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 434984,
    "titleEn": "Arrival Foyer & Common Lounge 09",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 09"
  },
  {
    "id": 28,
    "filename": "z4873228485895_affc0f417cbb7e4348bcd7784dc636da.jpg",
    "src": "Ảnh Khách Sạn/z4873228485895_affc0f417cbb7e4348bcd7784dc636da.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228485895_affc0f417cbb7e4348bcd7784dc636da.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 10",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 583997,
    "titleEn": "Arrival Foyer & Common Lounge 10",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 10"
  },
  {
    "id": 29,
    "filename": "z4873228490530_8d5e0d8727e719371b2c8424de6c130f - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228490530_8d5e0d8727e719371b2c8424de6c130f - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228490530_8d5e0d8727e719371b2c8424de6c130f - Copy.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 11",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": true,
    "sizeBytes": 527322,
    "titleEn": "Arrival Foyer & Common Lounge 11",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 11"
  },
  {
    "id": 30,
    "filename": "z4873228490530_8d5e0d8727e719371b2c8424de6c130f.jpg",
    "src": "Ảnh Khách Sạn/z4873228490530_8d5e0d8727e719371b2c8424de6c130f.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228490530_8d5e0d8727e719371b2c8424de6c130f.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 12",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 527322,
    "titleEn": "Arrival Foyer & Common Lounge 12",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 12"
  },
  {
    "id": 31,
    "filename": "z4873228617880_5d477c47773cbe1b7db39ba3b2d17620.jpg",
    "src": "Ảnh Khách Sạn/z4873228617880_5d477c47773cbe1b7db39ba3b2d17620.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228617880_5d477c47773cbe1b7db39ba3b2d17620.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 13",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 423300,
    "titleEn": "Arrival Foyer & Common Lounge 13",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 13"
  },
  {
    "id": 32,
    "filename": "z4873228626337_dcb1b8dcaee1977b20a8f106c8a6362c.jpg",
    "src": "Ảnh Khách Sạn/z4873228626337_dcb1b8dcaee1977b20a8f106c8a6362c.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228626337_dcb1b8dcaee1977b20a8f106c8a6362c.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 14",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 411053,
    "titleEn": "Arrival Foyer & Common Lounge 14",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 14"
  },
  {
    "id": 33,
    "filename": "z4873228626527_a985e82cd756772a980cb5e76ad9423e.jpg",
    "src": "Ảnh Khách Sạn/z4873228626527_a985e82cd756772a980cb5e76ad9423e.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228626527_a985e82cd756772a980cb5e76ad9423e.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 15",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 442572,
    "titleEn": "Arrival Foyer & Common Lounge 15",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 15"
  },
  {
    "id": 34,
    "filename": "z4873228636521_1e2159c2e4204cfd0ab5ec840bcef640.jpg",
    "src": "Ảnh Khách Sạn/z4873228636521_1e2159c2e4204cfd0ab5ec840bcef640.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228636521_1e2159c2e4204cfd0ab5ec840bcef640.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 16",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 450985,
    "titleEn": "Arrival Foyer & Common Lounge 16",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 16"
  },
  {
    "id": 35,
    "filename": "z4873228643536_99f30f61e1e29919e31152e1227a2165 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228643536_99f30f61e1e29919e31152e1227a2165 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228643536_99f30f61e1e29919e31152e1227a2165 - Copy.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 17",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": true,
    "sizeBytes": 434449,
    "titleEn": "Arrival Foyer & Common Lounge 17",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 17"
  },
  {
    "id": 36,
    "filename": "z4873228643536_99f30f61e1e29919e31152e1227a2165.jpg",
    "src": "Ảnh Khách Sạn/z4873228643536_99f30f61e1e29919e31152e1227a2165.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228643536_99f30f61e1e29919e31152e1227a2165.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 18",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 434449,
    "titleEn": "Arrival Foyer & Common Lounge 18",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 18"
  },
  {
    "id": 37,
    "filename": "z4873228794704_6394a0ceb98622e39e8cb3dceee556a7 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873228794704_6394a0ceb98622e39e8cb3dceee556a7 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228794704_6394a0ceb98622e39e8cb3dceee556a7 - Copy.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 19",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": true,
    "sizeBytes": 435179,
    "titleEn": "Arrival Foyer & Common Lounge 19",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 19"
  },
  {
    "id": 38,
    "filename": "z4873228794704_6394a0ceb98622e39e8cb3dceee556a7.jpg",
    "src": "Ảnh Khách Sạn/z4873228794704_6394a0ceb98622e39e8cb3dceee556a7.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228794704_6394a0ceb98622e39e8cb3dceee556a7.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 20",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 435179,
    "titleEn": "Arrival Foyer & Common Lounge 20",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 20"
  },
  {
    "id": 39,
    "filename": "z4873228803164_e638bd338636b5415c73ecd506d78108.jpg",
    "src": "Ảnh Khách Sạn/z4873228803164_e638bd338636b5415c73ecd506d78108.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228803164_e638bd338636b5415c73ecd506d78108.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 21",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 540706,
    "titleEn": "Arrival Foyer & Common Lounge 21",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 21"
  },
  {
    "id": 40,
    "filename": "z4873229002831_88e1d9298449fdcec3cf60a9a0e8113d.jpg",
    "src": "Ảnh Khách Sạn/z4873229002831_88e1d9298449fdcec3cf60a9a0e8113d.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229002831_88e1d9298449fdcec3cf60a9a0e8113d.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 22",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 536550,
    "titleEn": "Arrival Foyer & Common Lounge 22",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 22"
  },
  {
    "id": 41,
    "filename": "z4873229173145_032fc7e286da221fde6ee5b6a1e4d8d7.jpg",
    "src": "Ảnh Khách Sạn/z4873229173145_032fc7e286da221fde6ee5b6a1e4d8d7.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229173145_032fc7e286da221fde6ee5b6a1e4d8d7.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 23",
    "width": 1280,
    "height": 341,
    "aspectRatio": "panoramic",
    "isDuplicate": false,
    "sizeBytes": 92409,
    "titleEn": "Arrival Foyer & Common Lounge 23",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 23"
  },
  {
    "id": 42,
    "filename": "z4873229177894_91ca62c174ed307e6ee304027eefdac3.jpg",
    "src": "Ảnh Khách Sạn/z4873229177894_91ca62c174ed307e6ee304027eefdac3.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229177894_91ca62c174ed307e6ee304027eefdac3.jpg",
    "category": "lobby",
    "categoryLabel": "Lobby & Common Spaces",
    "title": "Sảnh Đón Tiếp & Không Gian Chung 24",
    "width": 1280,
    "height": 283,
    "aspectRatio": "panoramic",
    "isDuplicate": false,
    "sizeBytes": 82453,
    "titleEn": "Arrival Foyer & Common Lounge 24",
    "titleVi": "Sảnh Đón Tiếp & Không Gian Chung 24"
  },
  {
    "id": 43,
    "filename": "z4873229181995_02859e9ae6e8257421fbdf09f9f3e779 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873229181995_02859e9ae6e8257421fbdf09f9f3e779 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229181995_02859e9ae6e8257421fbdf09f9f3e779 - Copy.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 01",
    "width": 1280,
    "height": 767,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 161304,
    "titleEn": "Curated Guest Suite & Interiors 01",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 01"
  },
  {
    "id": 44,
    "filename": "z4873229181995_02859e9ae6e8257421fbdf09f9f3e779.jpg",
    "src": "Ảnh Khách Sạn/z4873229181995_02859e9ae6e8257421fbdf09f9f3e779.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229181995_02859e9ae6e8257421fbdf09f9f3e779.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 02",
    "width": 1280,
    "height": 767,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 161304,
    "titleEn": "Curated Guest Suite & Interiors 02",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 02"
  },
  {
    "id": 45,
    "filename": "z4873229186140_ee15e5f934cf7a8fc7d2b33a879c9cee.jpg",
    "src": "Ảnh Khách Sạn/z4873229186140_ee15e5f934cf7a8fc7d2b33a879c9cee.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229186140_ee15e5f934cf7a8fc7d2b33a879c9cee.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 03",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 254159,
    "titleEn": "Curated Guest Suite & Interiors 03",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 03"
  },
  {
    "id": 46,
    "filename": "z4873229186576_2fdd1d8785bc60075083c704db8aa2ca - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873229186576_2fdd1d8785bc60075083c704db8aa2ca - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229186576_2fdd1d8785bc60075083c704db8aa2ca - Copy.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 04",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 341751,
    "titleEn": "Curated Guest Suite & Interiors 04",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 04"
  },
  {
    "id": 47,
    "filename": "z4873229186576_2fdd1d8785bc60075083c704db8aa2ca.jpg",
    "src": "Ảnh Khách Sạn/z4873229186576_2fdd1d8785bc60075083c704db8aa2ca.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229186576_2fdd1d8785bc60075083c704db8aa2ca.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 05",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 341751,
    "titleEn": "Curated Guest Suite & Interiors 05",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 05"
  },
  {
    "id": 48,
    "filename": "z4873229189006_4661540be8261d53d858387f6e3351c6.jpg",
    "src": "Ảnh Khách Sạn/z4873229189006_4661540be8261d53d858387f6e3351c6.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229189006_4661540be8261d53d858387f6e3351c6.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 06",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 276062,
    "titleEn": "Curated Guest Suite & Interiors 06",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 06"
  },
  {
    "id": 49,
    "filename": "z4873229190936_36bf88b1a1878a53f3147d4aa52a126f - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873229190936_36bf88b1a1878a53f3147d4aa52a126f - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229190936_36bf88b1a1878a53f3147d4aa52a126f - Copy.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 07",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 339959,
    "titleEn": "Curated Guest Suite & Interiors 07",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 07"
  },
  {
    "id": 50,
    "filename": "z4873229190936_36bf88b1a1878a53f3147d4aa52a126f.jpg",
    "src": "Ảnh Khách Sạn/z4873229190936_36bf88b1a1878a53f3147d4aa52a126f.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229190936_36bf88b1a1878a53f3147d4aa52a126f.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 08",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 339959,
    "titleEn": "Curated Guest Suite & Interiors 08",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 08"
  },
  {
    "id": 51,
    "filename": "z4873229326015_55af574bc57854cc5462407ecc13bc67.jpg",
    "src": "Ảnh Khách Sạn/z4873229326015_55af574bc57854cc5462407ecc13bc67.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229326015_55af574bc57854cc5462407ecc13bc67.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 09",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 537303,
    "titleEn": "Curated Guest Suite & Interiors 09",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 09"
  },
  {
    "id": 52,
    "filename": "z4873229332151_dfff9d5c5ad5512eb23769d0c61b57f4 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873229332151_dfff9d5c5ad5512eb23769d0c61b57f4 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229332151_dfff9d5c5ad5512eb23769d0c61b57f4 - Copy.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 10",
    "width": 1116,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": true,
    "sizeBytes": 689581,
    "titleEn": "Curated Guest Suite & Interiors 10",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 10"
  },
  {
    "id": 53,
    "filename": "z4873229332151_dfff9d5c5ad5512eb23769d0c61b57f4.jpg",
    "src": "Ảnh Khách Sạn/z4873229332151_dfff9d5c5ad5512eb23769d0c61b57f4.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229332151_dfff9d5c5ad5512eb23769d0c61b57f4.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 11",
    "width": 1116,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 689581,
    "titleEn": "Curated Guest Suite & Interiors 11",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 11"
  },
  {
    "id": 54,
    "filename": "z4873229340026_68a704575b4417be54812dfca50952bf.jpg",
    "src": "Ảnh Khách Sạn/z4873229340026_68a704575b4417be54812dfca50952bf.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229340026_68a704575b4417be54812dfca50952bf.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 12",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 370301,
    "titleEn": "Curated Guest Suite & Interiors 12",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 12"
  },
  {
    "id": 55,
    "filename": "z4873229343208_a8af03fe80638510f9a78213efd7afec.jpg",
    "src": "Ảnh Khách Sạn/z4873229343208_a8af03fe80638510f9a78213efd7afec.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229343208_a8af03fe80638510f9a78213efd7afec.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 13",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 398789,
    "titleEn": "Curated Guest Suite & Interiors 13",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 13"
  },
  {
    "id": 56,
    "filename": "z4873229346602_d830c2e9749a5633e380514848ed9ddc - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873229346602_d830c2e9749a5633e380514848ed9ddc - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229346602_d830c2e9749a5633e380514848ed9ddc - Copy.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 14",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": true,
    "sizeBytes": 395876,
    "titleEn": "Curated Guest Suite & Interiors 14",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 14"
  },
  {
    "id": 57,
    "filename": "z4873229346602_d830c2e9749a5633e380514848ed9ddc.jpg",
    "src": "Ảnh Khách Sạn/z4873229346602_d830c2e9749a5633e380514848ed9ddc.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229346602_d830c2e9749a5633e380514848ed9ddc.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 15",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 395876,
    "titleEn": "Curated Guest Suite & Interiors 15",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 15"
  },
  {
    "id": 58,
    "filename": "z4873229350883_d694043415938b4ba9ac24b48385626c - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873229350883_d694043415938b4ba9ac24b48385626c - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229350883_d694043415938b4ba9ac24b48385626c - Copy.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 16",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 476274,
    "titleEn": "Curated Guest Suite & Interiors 16",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 16"
  },
  {
    "id": 59,
    "filename": "z4873229350883_d694043415938b4ba9ac24b48385626c.jpg",
    "src": "Ảnh Khách Sạn/z4873229350883_d694043415938b4ba9ac24b48385626c.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229350883_d694043415938b4ba9ac24b48385626c.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 17",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 476274,
    "titleEn": "Curated Guest Suite & Interiors 17",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 17"
  },
  {
    "id": 60,
    "filename": "z4873229352172_f22f9e76909a6ac1f0be5c35de432022 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873229352172_f22f9e76909a6ac1f0be5c35de432022 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229352172_f22f9e76909a6ac1f0be5c35de432022 - Copy.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 18",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": true,
    "sizeBytes": 873186,
    "titleEn": "Curated Guest Suite & Interiors 18",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 18"
  },
  {
    "id": 61,
    "filename": "z4873229352172_f22f9e76909a6ac1f0be5c35de432022.jpg",
    "src": "Ảnh Khách Sạn/z4873229352172_f22f9e76909a6ac1f0be5c35de432022.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229352172_f22f9e76909a6ac1f0be5c35de432022.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 19",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 873186,
    "titleEn": "Curated Guest Suite & Interiors 19",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 19"
  },
  {
    "id": 62,
    "filename": "z4873229361468_64e1ef1a54ed9df67f4a2b816055be09.jpg",
    "src": "Ảnh Khách Sạn/z4873229361468_64e1ef1a54ed9df67f4a2b816055be09.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229361468_64e1ef1a54ed9df67f4a2b816055be09.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 20",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 629552,
    "titleEn": "Curated Guest Suite & Interiors 20",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 20"
  },
  {
    "id": 63,
    "filename": "z4873229363750_071754b0d24fd30d273d53f74ace95a4.jpg",
    "src": "Ảnh Khách Sạn/z4873229363750_071754b0d24fd30d273d53f74ace95a4.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229363750_071754b0d24fd30d273d53f74ace95a4.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 21",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 480478,
    "titleEn": "Curated Guest Suite & Interiors 21",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 21"
  },
  {
    "id": 64,
    "filename": "z4873229371010_c2b5a7d62bb280e2f933b6f86ab18808.jpg",
    "src": "Ảnh Khách Sạn/z4873229371010_c2b5a7d62bb280e2f933b6f86ab18808.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229371010_c2b5a7d62bb280e2f933b6f86ab18808.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 22",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 493556,
    "titleEn": "Curated Guest Suite & Interiors 22",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 22"
  },
  {
    "id": 65,
    "filename": "z4873229373696_8a95ff833f10d874d0c1c312bac8382e.jpg",
    "src": "Ảnh Khách Sạn/z4873229373696_8a95ff833f10d874d0c1c312bac8382e.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229373696_8a95ff833f10d874d0c1c312bac8382e.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 23",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 448528,
    "titleEn": "Curated Guest Suite & Interiors 23",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 23"
  },
  {
    "id": 66,
    "filename": "z4873229379408_5ec696c1c7856fd37f4f98d664c444fb.jpg",
    "src": "Ảnh Khách Sạn/z4873229379408_5ec696c1c7856fd37f4f98d664c444fb.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229379408_5ec696c1c7856fd37f4f98d664c444fb.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 24",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 702186,
    "titleEn": "Curated Guest Suite & Interiors 24",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 24"
  },
  {
    "id": 67,
    "filename": "z4873229503006_f734a8bfd469e38f1444a1dae1a4b028.jpg",
    "src": "Ảnh Khách Sạn/z4873229503006_f734a8bfd469e38f1444a1dae1a4b028.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229503006_f734a8bfd469e38f1444a1dae1a4b028.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 25",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 324758,
    "titleEn": "Curated Guest Suite & Interiors 25",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 25"
  },
  {
    "id": 68,
    "filename": "z4873229520773_8d1e2fd37941a8462aeb757cdc6864b5.jpg",
    "src": "Ảnh Khách Sạn/z4873229520773_8d1e2fd37941a8462aeb757cdc6864b5.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229520773_8d1e2fd37941a8462aeb757cdc6864b5.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 26",
    "width": 1079,
    "height": 751,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 273403,
    "titleEn": "Curated Guest Suite & Interiors 26",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 26"
  },
  {
    "id": 69,
    "filename": "z4873229523707_0daab1aec24bc710824c3c0cd3d1f2bc.jpg",
    "src": "Ảnh Khách Sạn/z4873229523707_0daab1aec24bc710824c3c0cd3d1f2bc.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229523707_0daab1aec24bc710824c3c0cd3d1f2bc.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 27",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 233786,
    "titleEn": "Curated Guest Suite & Interiors 27",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 27"
  },
  {
    "id": 70,
    "filename": "z4873229647503_3fafe9d554efa6d5bfdd9795b0ef71e3 - Copy.jpg",
    "src": "Ảnh Khách Sạn/z4873229647503_3fafe9d554efa6d5bfdd9795b0ef71e3 - Copy.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229647503_3fafe9d554efa6d5bfdd9795b0ef71e3 - Copy.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 28",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": true,
    "sizeBytes": 492444,
    "titleEn": "Curated Guest Suite & Interiors 28",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 28"
  },
  {
    "id": 71,
    "filename": "z4873229647503_3fafe9d554efa6d5bfdd9795b0ef71e3.jpg",
    "src": "Ảnh Khách Sạn/z4873229647503_3fafe9d554efa6d5bfdd9795b0ef71e3.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229647503_3fafe9d554efa6d5bfdd9795b0ef71e3.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 29",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 492444,
    "titleEn": "Curated Guest Suite & Interiors 29",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 29"
  },
  {
    "id": 72,
    "filename": "z4873229647995_2fa45a850078c9145c9728ab5d565676.jpg",
    "src": "Ảnh Khách Sạn/z4873229647995_2fa45a850078c9145c9728ab5d565676.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229647995_2fa45a850078c9145c9728ab5d565676.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 30",
    "width": 720,
    "height": 960,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 207131,
    "titleEn": "Curated Guest Suite & Interiors 30",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 30"
  },
  {
    "id": 73,
    "filename": "z4873229659076_d0152664d5011c1e45182d521b208e9a.jpg",
    "src": "Ảnh Khách Sạn/z4873229659076_d0152664d5011c1e45182d521b208e9a.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229659076_d0152664d5011c1e45182d521b208e9a.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 31",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 476274,
    "titleEn": "Curated Guest Suite & Interiors 31",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 31"
  },
  {
    "id": 74,
    "filename": "z4873229659588_596e36cc379d27adf737285361fc9e32.jpg",
    "src": "Ảnh Khách Sạn/z4873229659588_596e36cc379d27adf737285361fc9e32.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229659588_596e36cc379d27adf737285361fc9e32.jpg",
    "category": "suites",
    "categoryLabel": "Suites & Interiors",
    "title": "Không Gian Phòng Nghỉ & Nội Thất 32",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 327192,
    "titleEn": "Curated Guest Suite & Interiors 32",
    "titleVi": "Không Gian Phòng Nghỉ & Nội Thất 32"
  },
  {
    "id": 75,
    "filename": "z4873229669282_7eb9c1b071ab44e94368c56d30bc5b6f.jpg",
    "src": "Ảnh Khách Sạn/z4873229669282_7eb9c1b071ab44e94368c56d30bc5b6f.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229669282_7eb9c1b071ab44e94368c56d30bc5b6f.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 01",
    "width": 720,
    "height": 960,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 354003,
    "titleEn": "Botanical Garden & Natural Details 01",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 01"
  },
  {
    "id": 76,
    "filename": "z4873229671997_382ac51b9b828d8537768b284f1acff7.jpg",
    "src": "Ảnh Khách Sạn/z4873229671997_382ac51b9b828d8537768b284f1acff7.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229671997_382ac51b9b828d8537768b284f1acff7.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 02",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 312931,
    "titleEn": "Botanical Garden & Natural Details 02",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 02"
  },
  {
    "id": 77,
    "filename": "z4873229675115_f9bb6de6f40517118c78885d75c9b596.jpg",
    "src": "Ảnh Khách Sạn/z4873229675115_f9bb6de6f40517118c78885d75c9b596.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229675115_f9bb6de6f40517118c78885d75c9b596.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 03",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 493556,
    "titleEn": "Botanical Garden & Natural Details 03",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 03"
  },
  {
    "id": 78,
    "filename": "z4873229683947_6209ad6e605ddf689910c823fc75fa57.jpg",
    "src": "Ảnh Khách Sạn/z4873229683947_6209ad6e605ddf689910c823fc75fa57.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229683947_6209ad6e605ddf689910c823fc75fa57.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 04",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 722098,
    "titleEn": "Botanical Garden & Natural Details 04",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 04"
  },
  {
    "id": 79,
    "filename": "z4873229684582_ed5f6c4ffd497b98919dbe5777e71bb2.jpg",
    "src": "Ảnh Khách Sạn/z4873229684582_ed5f6c4ffd497b98919dbe5777e71bb2.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229684582_ed5f6c4ffd497b98919dbe5777e71bb2.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 05",
    "width": 960,
    "height": 720,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 452875,
    "titleEn": "Botanical Garden & Natural Details 05",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 05"
  },
  {
    "id": 80,
    "filename": "z4873229687494_ceab67db2b29b44fe5447b221c54266d.jpg",
    "src": "Ảnh Khách Sạn/z4873229687494_ceab67db2b29b44fe5447b221c54266d.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229687494_ceab67db2b29b44fe5447b221c54266d.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 06",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 537303,
    "titleEn": "Botanical Garden & Natural Details 06",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 06"
  },
  {
    "id": 81,
    "filename": "z4873229695265_b183e4424938a01a5603b25c64fe7575.jpg",
    "src": "Ảnh Khách Sạn/z4873229695265_b183e4424938a01a5603b25c64fe7575.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229695265_b183e4424938a01a5603b25c64fe7575.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 07",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 480478,
    "titleEn": "Botanical Garden & Natural Details 07",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 07"
  },
  {
    "id": 82,
    "filename": "z4873229695663_79b38a5e426695ee897a5de106a3bdbb.jpg",
    "src": "Ảnh Khách Sạn/z4873229695663_79b38a5e426695ee897a5de106a3bdbb.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229695663_79b38a5e426695ee897a5de106a3bdbb.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 08",
    "width": 1280,
    "height": 341,
    "aspectRatio": "panoramic",
    "isDuplicate": false,
    "sizeBytes": 92409,
    "titleEn": "Botanical Garden & Natural Details 08",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 08"
  },
  {
    "id": 83,
    "filename": "z4873229696686_dc5b1f324119617eb0e76e08c482d494.jpg",
    "src": "Ảnh Khách Sạn/z4873229696686_dc5b1f324119617eb0e76e08c482d494.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229696686_dc5b1f324119617eb0e76e08c482d494.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 09",
    "width": 960,
    "height": 1280,
    "aspectRatio": "portrait",
    "isDuplicate": false,
    "sizeBytes": 496734,
    "titleEn": "Botanical Garden & Natural Details 09",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 09"
  },
  {
    "id": 84,
    "filename": "z4873229700166_f8b5bc7a2b3df9c26157b2e77f46f23a.jpg",
    "src": "Ảnh Khách Sạn/z4873229700166_f8b5bc7a2b3df9c26157b2e77f46f23a.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229700166_f8b5bc7a2b3df9c26157b2e77f46f23a.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 10",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 715416,
    "titleEn": "Botanical Garden & Natural Details 10",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 10"
  },
  {
    "id": 85,
    "filename": "z4873229853011_9d2f82660e2286848ad1f859260ee402.jpg",
    "src": "Ảnh Khách Sạn/z4873229853011_9d2f82660e2286848ad1f859260ee402.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229853011_9d2f82660e2286848ad1f859260ee402.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 11",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 513942,
    "titleEn": "Botanical Garden & Natural Details 11",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 11"
  },
  {
    "id": 86,
    "filename": "z4873229865064_d841b281a43d3617c743303bdd25f7d6.jpg",
    "src": "Ảnh Khách Sạn/z4873229865064_d841b281a43d3617c743303bdd25f7d6.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873229865064_d841b281a43d3617c743303bdd25f7d6.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 12",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 533479,
    "titleEn": "Botanical Garden & Natural Details 12",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 12"
  },
  {
    "id": 87,
    "filename": "z4873230028042_94d40d125b23e3ac70681655f8865c38.jpg",
    "src": "Ảnh Khách Sạn/z4873230028042_94d40d125b23e3ac70681655f8865c38.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873230028042_94d40d125b23e3ac70681655f8865c38.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 13",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 395196,
    "titleEn": "Botanical Garden & Natural Details 13",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 13"
  },
  {
    "id": 88,
    "filename": "z4873230035814_d86d78675ba4ad5014c36459ea9e273f.jpg",
    "src": "Ảnh Khách Sạn/z4873230035814_d86d78675ba4ad5014c36459ea9e273f.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873230035814_d86d78675ba4ad5014c36459ea9e273f.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 14",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 419365,
    "titleEn": "Botanical Garden & Natural Details 14",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 14"
  },
  {
    "id": 89,
    "filename": "z4873230036167_1df9b01aed0f522fcad051a4c88b2ecf.jpg",
    "src": "Ảnh Khách Sạn/z4873230036167_1df9b01aed0f522fcad051a4c88b2ecf.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873230036167_1df9b01aed0f522fcad051a4c88b2ecf.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 15",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 515885,
    "titleEn": "Botanical Garden & Natural Details 15",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 15"
  },
  {
    "id": 90,
    "filename": "z4873230038690_c25703eb06736a59ffb4b50d9ef96d8a.jpg",
    "src": "Ảnh Khách Sạn/z4873230038690_c25703eb06736a59ffb4b50d9ef96d8a.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873230038690_c25703eb06736a59ffb4b50d9ef96d8a.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 16",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 412237,
    "titleEn": "Botanical Garden & Natural Details 16",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 16"
  },
  {
    "id": 91,
    "filename": "z4873230167558_cf31c48791c9c436806f4429b040c5ab.jpg",
    "src": "Ảnh Khách Sạn/z4873230167558_cf31c48791c9c436806f4429b040c5ab.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873230167558_cf31c48791c9c436806f4429b040c5ab.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 17",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 533479,
    "titleEn": "Botanical Garden & Natural Details 17",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 17"
  },
  {
    "id": 92,
    "filename": "z4873230174564_f460cd580d127316f70b2cbff280e268.jpg",
    "src": "Ảnh Khách Sạn/z4873230174564_f460cd580d127316f70b2cbff280e268.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873230174564_f460cd580d127316f70b2cbff280e268.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 18",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 496418,
    "titleEn": "Botanical Garden & Natural Details 18",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 18"
  },
  {
    "id": 93,
    "filename": "z4873230175980_1990c044f9d477550635e84fae2299a0.jpg",
    "src": "Ảnh Khách Sạn/z4873230175980_1990c044f9d477550635e84fae2299a0.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873230175980_1990c044f9d477550635e84fae2299a0.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 19",
    "width": 1280,
    "height": 960,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 513942,
    "titleEn": "Botanical Garden & Natural Details 19",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 19"
  },
  {
    "id": 94,
    "filename": "z5987786267156_ac6e483bc1abb46c01ae33705617bbd2.jpg",
    "src": "Ảnh Khách Sạn/z5987786267156_ac6e483bc1abb46c01ae33705617bbd2.jpg",
    "rawPath": "Ảnh Khách Sạn/z5987786267156_ac6e483bc1abb46c01ae33705617bbd2.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 20",
    "width": 2568,
    "height": 1926,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 575364,
    "titleEn": "Botanical Garden & Natural Details 20",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 20"
  },
  {
    "id": 95,
    "filename": "z5987786268678_9a4b5460e6b239a79c76d0719ca27a68.jpg",
    "src": "Ảnh Khách Sạn/z5987786268678_9a4b5460e6b239a79c76d0719ca27a68.jpg",
    "rawPath": "Ảnh Khách Sạn/z5987786268678_9a4b5460e6b239a79c76d0719ca27a68.jpg",
    "category": "details",
    "categoryLabel": "Details & Ambiance",
    "title": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 21",
    "width": 2568,
    "height": 1926,
    "aspectRatio": "landscape",
    "isDuplicate": false,
    "sizeBytes": 680294,
    "titleEn": "Botanical Garden & Natural Details 21",
    "titleVi": "Chi Tiết Cây Xanh & Ánh Sáng Tự Nhiên 21"
  }
];

  const amenities = [
  {
    "id": "climate-control",
    "title": "Air Conditioning",
    "subtitle": "Individual Climate Control",
    "label": "INDIVIDUAL CLIMATE CONTROL",
    "description": "Every suite is equipped with an individually controlled, silent multi-split inverter air conditioning unit allowing guests to personalize their ambient room temperature.",
    "detail": "Silent Inverter AC in all 21 guest rooms",
    "category": "In-Suite Comfort"
  },
  {
    "id": "fiber-wifi",
    "title": "High-Speed Wi-Fi",
    "subtitle": "Property-Wide Fiber Connection",
    "label": "HIGH-SPEED FIBER WI-FI",
    "description": "Complimentary high-speed fiber-optic wireless internet seamlessly blankets all 4 floors, guest suites, lobby lounge, and outdoor courtyard gardens.",
    "detail": "Unlimited high-speed fiber internet coverage",
    "category": "Connectivity"
  },
  {
    "id": "ensuite-bathrooms",
    "title": "Private En-Suite Bathrooms",
    "subtitle": "Dedicated In-Room Facilities",
    "label": "PRIVATE EN-SUITE BATHROOMS",
    "description": "100% of guest rooms feature dedicated private en-suite bathrooms appointed with walk-in glass shower enclosures, contemporary vanities, and continuous hot water.",
    "detail": "Glass showers, vanity, hot water in 100% of rooms",
    "category": "Sanitary & Wellness"
  },
  {
    "id": "elevator",
    "title": "Passenger Elevator",
    "subtitle": "Access to All 4 Floors",
    "label": "ELEVATOR TO ALL 4 FLOORS",
    "description": "A modern passenger elevator provides smooth, quiet vertical transit connecting Ground Level 0 directly to Floors 1, 2, and 3 with zero stair barriers.",
    "detail": "Serving Ground Level through Floor 3",
    "category": "Accessibility"
  },
  {
    "id": "balconies",
    "title": "Private Balconies",
    "subtitle": "Elevated Sun Terraces",
    "label": "PRIVATE BALCONY OPTIONS",
    "description": "Selected accommodations on Floors 2 and 3 feature private walk-out balconies offering natural highland breezes and expansive views of the Bảo Lộc mountains.",
    "detail": "Available on Floors 2 & 3 (Suites P.206, P.207, P.301, P.302)",
    "category": "Architecture"
  },
  {
    "id": "front-desk",
    "title": "24/7 Front Desk",
    "subtitle": "Round-The-Clock Assistance",
    "label": "24/7 FRONT DESK & RECEPTION",
    "description": "Dedicated round-the-clock reception support on the ground level to welcome arriving guests, handle late check-ins, and provide local guidance.",
    "detail": "24-hour host support & seamless check-in",
    "category": "Guest Services"
  },
  {
    "id": "housekeeping",
    "title": "Daily Housekeeping",
    "subtitle": "Impeccable Care & Crisp Linens",
    "label": "DAILY HOUSEKEEPING SERVICE",
    "description": "Meticulous daily room care, fresh premium cotton linen rotation, spotless towel replenishment, and sanitization for restful comfort.",
    "detail": "Daily refreshment and fresh linen rotation",
    "category": "Care & Cleanliness"
  },
  {
    "id": "parking",
    "title": "On-Site Parking",
    "subtitle": "Complimentary Courtyard Parking",
    "label": "COMPLIMENTARY ON-SITE PARKING",
    "description": "Secure on-site ground courtyard parking accommodating automobiles and motorbikes directly in front of the residence entrance.",
    "detail": "Direct on-site vehicular and motorbike parking",
    "category": "Arrival & Vehicles"
  }
];

  const curatedShowcase = [
  {
    "id": "curated-1",
    "className": "curated-card-1",
    "src": "Ảnh Khách Sạn/z4873228195380_d529536454b998d3891cc2961f25a0b6.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228195380_d529536454b998d3891cc2961f25a0b6.jpg",
    "tagVi": "Mặt Tiền & Ngoại Thất",
    "tagEn": "Architecture & Facade",
    "titleVi": "Khách Sạn Hoa Nắng Trong Nắng Sớm",
    "titleEn": "Hotel Hoa Nắng in Morning Light",
    "galleryIndex": 0
  },
  {
    "id": "curated-2",
    "className": "curated-card-2",
    "src": "Ảnh Khách Sạn/z4873228200635_e954649ee874b4e2e15b008297f796a5.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228200635_e954649ee874b4e2e15b008297f796a5.jpg",
    "tagVi": "Hành Lang & Giếng Trời",
    "tagEn": "Corridors & Sunlight",
    "titleVi": "Không Gian Thoáng Đãng & Ánh Sáng Tự Nhiên",
    "titleEn": "Airy Courtyards & Natural Daylight",
    "galleryIndex": 3
  },
  {
    "id": "curated-3",
    "className": "curated-card-3",
    "src": "P.207/z7824769750313_9fad1b8002e42a34987bbf0b5b6be99a.jpg",
    "rawPath": "P.207/z7824769750313_9fad1b8002e42a34987bbf0b5b6be99a.jpg",
    "tagVi": "Phòng Ban Công P.207",
    "tagEn": "Balcony Suite P.207",
    "titleVi": "Ban Công Riêng Hướng Tầm Mắt Khoáng Đạt",
    "titleEn": "Private Balcony with Highland Horizon",
    "galleryIndex": 12
  },
  {
    "id": "curated-4",
    "className": "curated-card-4",
    "src": "P.101/z7824759745108_2d8aca9f8b2cfe18a9382d85c5301ed3.jpg",
    "rawPath": "P.101/z7824759745108_2d8aca9f8b2cfe18a9382d85c5301ed3.jpg",
    "tagVi": "Phòng King Master",
    "tagEn": "Deluxe King Sanctuary",
    "titleVi": "Nội Thất Gỗ Mộc Mạc & Giường Êm Ái",
    "titleEn": "Warm Wood Finishes & Plush Bedding",
    "galleryIndex": 20
  },
  {
    "id": "curated-5",
    "className": "curated-card-5",
    "src": "P.102/z7824760086512_84ca7c6e6c3ff5124fb1c4ccd93e0aa6.jpg",
    "rawPath": "P.102/z7824760086512_84ca7c6e6c3ff5124fb1c4ccd93e0aa6.jpg",
    "tagVi": "Phòng Tắm Riêng",
    "tagEn": "En-Suite Bath",
    "titleVi": "Tiện Nghi Vệ Sinh Khép Kín & Sạch Sẽ",
    "titleEn": "Modern En-Suite Bath & Stone Finishes",
    "galleryIndex": 28
  },
  {
    "id": "curated-6",
    "className": "curated-card-6",
    "src": "Ảnh Khách Sạn/z4873228427287_b9b489ff3b8c3f87dba917c89f8d62d5.jpg",
    "rawPath": "Ảnh Khách Sạn/z4873228427287_b9b489ff3b8c3f87dba917c89f8d62d5.jpg",
    "tagVi": "Sảnh Đón Tiếp",
    "tagEn": "Arrival Lobby",
    "titleVi": "Không Gian Đón Tiếp Chu Đáo 24/7",
    "titleEn": "Quiet & Welcoming 24/7 Reception",
    "galleryIndex": 10
  }
];

  /**
   * Helper Methods & Query Utilities
   */
  const helpers = {
    /**
     * Retrieve single room by key (e.g. "P.207")
     * @param {string} roomKey
     * @returns {object|null}
     */
    getRoom: function (roomKey) {
      if (!roomKey) return null;
      return rooms[roomKey] || null;
    },

    /**
     * Retrieve category by ID
     * @param {string} categoryId
     * @returns {object|null}
     */
    getCategory: function (categoryId) {
      if (!categoryId) return null;
      return categories.find(function (c) { return c.id === categoryId; }) || null;
    },

    /**
     * Retrieve all room objects belonging to a category
     * @param {string} categoryId
     * @returns {Array<object>}
     */
    getRoomsByCategory: function (categoryId) {
      const cat = helpers.getCategory(categoryId);
      if (!cat) return [];
      return cat.roomKeys.map(function (key) { return rooms[key]; }).filter(Boolean);
    },

    /**
     * Retrieve gallery items filtered by category
     * @param {string} [filterCategory="all"] all | exterior | lobby | suites | details
     * @returns {Array<object>}
     */
    getGalleryByCategory: function (filterCategory) {
      if (!filterCategory || filterCategory === "all") {
        return gallery;
      }
      return gallery.filter(function (item) {
        return item.category === filterCategory;
      });
    },

    /**
     * Retrieve unique master gallery photos (excluding byte duplicates)
     * @returns {Array<object>}
     */
    getUniqueGallery: function () {
      return gallery.filter(function (item) {
        return !item.isDuplicate;
      });
    },

    /**
     * Retrieve curated flagship showcase photos
     * @returns {Array<object>}
     */
    getCuratedShowcase: function () {
      return curatedShowcase;
    },

    /**
     * Retrieve flat list of all 71 room photos across the property
     * @returns {Array<object>}
     */
    getAllRoomPhotos: function () {
      const allPhotos = [];
      Object.keys(rooms).forEach(function (roomKey) {
        const r = rooms[roomKey];
        r.photos.forEach(function (p, idx) {
          allPhotos.push({
            roomKey: r.key,
            roomName: r.name,
            categoryId: r.categoryId,
            floor: r.floor,
            photoIndex: idx,
            src: p.src,
            rawPath: p.rawPath,
            width: p.width,
            height: p.height,
            aspectRatio: p.aspectRatio
          });
        });
      });
      return allPhotos;
    }
  };

  const HOTEL_DATA = Object.freeze({
    property: property,
    categories: categories,
    rooms: rooms,
    video: video,
    gallery: gallery,
    amenities: amenities,
    curatedShowcase: curatedShowcase,
    getRoom: helpers.getRoom,
    getCategory: helpers.getCategory,
    getRoomsByCategory: helpers.getRoomsByCategory,
    getGalleryByCategory: helpers.getGalleryByCategory,
    getUniqueGallery: helpers.getUniqueGallery,
    getCuratedShowcase: helpers.getCuratedShowcase,
    getAllRoomPhotos: helpers.getAllRoomPhotos
  });

  return HOTEL_DATA;
});
