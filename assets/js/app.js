/**
 * HOTEL HOA NẮNG — MASTER BILINGUAL APPLICATION ENGINE
 * Inspired by Amanoi, Cheval Blanc & Apple Design
 * 100% Zero-Icon, No Bracket Clutter, Zero Layout Shift
 */

(function () {
  "use strict";

  const APP_STATE = {
    currentLang: localStorage.getItem("hhn_lang") || "vi",
    activeCategory: "phong-don-dlx",
    activeRoomKey: null,
    videoPlaying: false,
    videoMuted: false
  };

  const I18N = {
    vi: {
      brand: {
        name: "Hotel Hoa Nắng",
        sub: "Bảo Lộc // Lâm Đồng"
      },
      nav: {
        accommodations: "Phòng Nghỉ",
        gallery: "Hình Ảnh",
        amenities: "Tiện Nghi",
        story: "Kiến Trúc",
        location: "Vị Trí",
        reserve: "Đặt Phòng",
        reserveSuite: "Đặt Phòng Ngay",
        menu: "MENU",
        closeMenu: "Đóng Menu"
      },
      hero: {
        eyebrow: "Tĩnh Lặng & Ánh Sáng Tự Nhiên",
        title: "Khách Sạn Hoa Nắng",
        subtitle: "Không gian nghỉ ngơi yên bình ngập tràn ánh nắng và ban công hướng núi tại Bảo Lộc.",
        exploreBtn: "Xem Bảng Giá & Phòng",
        inquireBtn: "Zalo: 0899 668 639",
        stats: {
          suitesLabel: "Bảng Giá Phòng",
          suitesVal: "Từ 490.000₫ / đêm",
          levelsLabel: "Quy Mô",
          levelsVal: "4 Tầng // Thang Máy",
          photosLabel: "Hotline & Zalo",
          photosVal: "0899 668 639",
          sanctuaryLabel: "Địa Chỉ",
          sanctuaryVal: "Bảo Lộc // Lâm Đồng"
        }
      },
      story: {
        eyebrow: "Giới Thiệu",
        title: "Không Gian Hài Hòa, Bình Yên Cao Nguyên",
        lead: "Tọa lạc tại vùng cao nguyên trong lành Bảo Lộc, Khách Sạn Hoa Nắng mang đến chốn nghỉ ngơi thanh tịnh, xua tan nhịp sống hối hả nơi phố thị.",
        p1: "Được kiến tạo trên bốn tầng lầu với thang máy êm ái, khách sạn trang bị đầy đủ điều hòa không khí, Wi-Fi cáp quang, phòng tắm riêng khép kín và bãi đỗ xe an ninh.",
        p2: "Quý khách có thể lựa chọn từ phòng đơn 1 giường, phòng đơn 2 giường, phòng đôi gia đình rộng rãi cho đến phòng đôi có ban công ngắm nhìn trọn vẹn cảnh sắc núi đồi Bảo Lộc.",
        quote: "Sự hài lòng của quý khách đến từ không gian nghỉ ngơi yên bình, sự sạch sẽ chu đáo và lòng hiếu khách chân thành.",
        quoteAuthor: "Khách Sạn Hoa Nắng // Bảo Lộc",
        specs: {
          totalLabel: "Giá Phòng Niêm Yết",
          totalVal: "490.000₫ – 720.000₫ / đêm",
          transitLabel: "Thang Máy",
          transitVal: "Phục Vụ Cả 4 Tầng",
          balconyLabel: "Phòng Ban Công",
          balconyVal: "Các Phòng P.106 & P.207",
          receptionLabel: "Lễ Tân & Zalo",
          receptionVal: "0899 668 639 (Trực 24/7)"
        }
      },
      accommodations: {
        eyebrow: "Bảng Giá & Hạng Phòng",
        title: "Danh Mục Phòng Nghỉ",
        intro: "Bảng giá niêm yết minh bạch, hỗ trợ đặt phòng trực tiếp qua Hotline/Zalo hoặc các kênh Booking.com, Traveloka.",
        exploreKeysBtn: "Xem Ảnh Từng Phòng",
        inquireText: "Đặt Phòng",
        assignedKeysLabel: "Mã Phòng Trong Hạng Mục:",
        videoTourAvailable: "Ban Công + Video",
        categories: {
          "phong-don-dlx": {
            title: "Phòng Đơn Deluxe (DLX)",
            price: "490.000₫",
            unit: "/ phòng / đêm",
            tagline: "1 Giường 1m6 · 2 Người · Tĩnh Lặng & Mát Mẻ",
            desc: "Không gian nghỉ ngơi ấm cúng dành cho 2 khách với 1 giường đôi 1m6 êm ái, đầy đủ máy lạnh Inverter, Wi-Fi tốc độ cao và phòng tắm riêng hiện đại.",
            badge: "2 Người // 1 Giường 1m6",
            level: "Tầng Trệt, 1, 2 & 3",
            roomCount: "12 Phòng"
          },
          "phong-don-twn": {
            title: "Phòng Đơn Twin (TWN)",
            price: "590.000₫",
            unit: "/ phòng / đêm",
            tagline: "2 Giường 1m4 · 2 Người · Tiện Lợi & Thoáng Đãng",
            desc: "Thiết kế thông minh với 2 giường đơn 1m4 riêng biệt cho 2 khách. Lý tưởng cho bạn đồng hành, đồng nghiệp đi công tác hoặc cần không gian ngủ độc lập.",
            badge: "2 Người // 2 Giường 1m4",
            level: "Tầng 1 & Tầng 2",
            roomCount: "2 Phòng"
          },
          "phong-doi-gia-dinh-sup": {
            title: "Phòng Đôi Gia Đình (SUP)",
            price: "690.000₫",
            unit: "/ phòng / đêm",
            tagline: "2 Giường 1m6 · 4 Người · Rộng Rãi Cho Gia Đình",
            desc: "Không gian rộng rãi bố trí 2 giường đôi 1m6 thoải mái cho gia đình 4 người hoặc nhóm bạn. Cửa sổ lớn đón ánh sáng tự nhiên và gió mát cao nguyên.",
            badge: "4 Người // 2 Giường 1m6",
            level: "Tầng 1, 2 & 3",
            roomCount: "4 Phòng"
          },
          "phong-doi-ban-cong-dlx": {
            title: "Phòng Đôi Ban Công (DLX)",
            price: "720.000₫",
            unit: "/ phòng / đêm",
            tagline: "2 Giường 1m6 · 4 Người · Ban Công Riêng Hướng Núi",
            desc: "Hạng phòng cao cấp sở hữu ban công riêng ngắm toàn cảnh đồi núi Bảo Lộc. Trang bị 2 giường đôi 1m6 cho 4 người và có video thực tế chất lượng cao tại P.207.",
            badge: "4 Người // 2 Giường 1m6",
            level: "Tầng 1 & Tầng 2",
            roomCount: "2 Phòng"
          }
        }
      },
      modal: {
        closeBtn: "Đóng (ESC)",
        inspectLabel: "Chọn Xem Chi Tiết Từng Mã Phòng:",
        allPhotosTab: "Tất Cả Ảnh Hạng Mục",
        videoTitle: "Phòng P.207 // Video Ban Công",
        videoSubtitle: "Độ Phân Giải HD 1080p",
        playTour: "Phát Video",
        pauseTour: "Tạm Dừng",
        soundOn: "Bật Âm",
        soundMute: "Tắt Âm",
        fullscreen: "Toàn Màn Hình",
        galleryTitle: "Hình Ảnh Không Gian Phòng",
        photosCount: "{n} Hình Ảnh",
        footerHint: "Hotline & Zalo hỗ trợ: 0899 668 639",
        inquireForRoom: "Đặt Phòng Này"
      },
      gallery: {
        eyebrow: "Hình Ảnh Chọn Lọc",
        title: "Góc Nhìn Khách Sạn",
        intro: "Những hình ảnh chân thực ghi lại không gian phòng nghỉ, sảnh đón và cảnh sắc cao nguyên tại Khách Sạn Hoa Nắng."
      },
      amenities: {
        eyebrow: "Dịch Vụ & Tiện Ích",
        title: "Tiện Nghi Thực Tế",
        intro: "Các tiện nghi thiết thực và đồng bộ, đem lại sự thuận tiện và dễ chịu tối đa cho kỳ nghỉ tại Bảo Lộc.",
        items: [
          { index: "Tiện Nghi 01", title: "Điều Hòa Không Khí Hai Chiều", desc: "Trang bị máy lạnh Inverter êm ái độc lập trong toàn bộ các phòng nghỉ." },
          { index: "Tiện Nghi 02", title: "Wi-Fi Cáp Quang Tốc Độ Cao", desc: "Mạng không dây băng thông rộng miễn phí phủ sóng toàn bộ khuôn viên và phòng nghỉ." },
          { index: "Tiện Nghi 03", title: "Phòng Tắm Riêng Tiện Nghi", desc: "Phòng tắm khép kín hiện đại, hệ thống vòi sen nóng lạnh và đồ dùng vệ sinh chu đáo." },
          { index: "Tiện Nghi 04", title: "Thang Máy Hành Khách", desc: "Thang máy hiện đại di chuyển êm ái xuyên suốt 4 tầng từ Tầng 0 đến Tầng 3." },
          { index: "Tiện Nghi 05", title: "Ban Công Đón Nắng Tự Nhiên", desc: "Các phòng tầng trên sở hữu ban công riêng thoáng đãng nhìn ra cảnh quan núi đồi." },
          { index: "Tiện Nghi 06", title: "Lễ Tân Trực 24/7", desc: "Đội ngũ lễ tân túc trực hỗ trợ nhận phòng muộn, hotline/zalo 0899 668 639." },
          { index: "Tiện Nghi 07", title: "Dọn Phòng Hằng Ngày", desc: "Quy trình vệ sinh sạch sẽ, thay ga gối cotton tự nhiên thơm tho." },
          { index: "Tiện Nghi 08", title: "Bãi Đỗ Xe An Ninh", desc: "Khu vực sân dừng xe thuận tiện và bãi đỗ an toàn có người trông giữ cho ô tô, xe máy." }
        ]
      },
      inquiry: {
        eyebrow: "Liên Hệ & Đặt Phòng",
        title: "Gửi Yêu Cầu Đặt Phòng",
        desc: "Quý khách có thể gửi yêu cầu đặt phòng trực tiếp qua biểu mẫu, liên hệ Zalo lễ tân hoặc đặt qua các ứng dụng Booking.com và Traveloka.",
        directHotline: "Hotline & Zalo Trực Tiếp",
        chatLink: "Facebook / Messenger",
        propertyAddress: "Địa Chỉ Khách Sạn",
        labels: {
          checkIn: "Ngày Nhận Phòng *",
          checkOut: "Ngày Trả Phòng *",
          suitePref: "Hạng Phòng / Mức Giá *",
          guests: "Số Lượng Khách",
          fullName: "Họ Và Tên Quý Khách *",
          contact: "Số Điện Thoại Hoặc Email *",
          notes: "Yêu Cầu Đặc Biệt & Giờ Đến Dự Kiến",
          submit: "Gửi Yêu Cầu Đặt Phòng"
        },
        roomOptions: [
          { value: "", text: "-- Chọn Hạng Phòng & Mức Giá --" },
          { value: "Phòng Đơn Deluxe (DLX) - 490.000₫/đêm", text: "Phòng Đơn 1 Giường 1m6 · 2 Người (490.000₫/đêm)" },
          { value: "Phòng Đơn Twin (TWN) - 590.000₫/đêm", text: "Phòng Đơn 2 Giường 1m4 · 2 Người (590.000₫/đêm)" },
          { value: "Phòng Đôi Gia Đình (SUP) - 690.000₫/đêm", text: "Phòng Đôi 2 Giường 1m6 · 4 Người (690.000₫/đêm)" },
          { value: "Phòng Đôi Ban Công (DLX) - 720.000₫/đêm", text: "Phòng Đôi 2 Giường 1m6 Ban Công · 4 Người (720.000₫/đêm)" }
        ],
        guestOptions: [
          { value: "1 Khách", text: "1 Khách" },
          { value: "2 Khách", text: "2 Khách" },
          { value: "3 Khách", text: "3 Khách" },
          { value: "4 Khách", text: "4 Khách" },
          { value: "Gia Đình / Đoàn", text: "Gia Đình / Đoàn Đông" }
        ],
        placeholders: {
          fullName: "Ví dụ: Nguyễn Văn Ánh",
          contact: "Ví dụ: 0899 668 639 hoặc email@domain.com",
          notes: "Ghi chú giờ đến dự kiến, yêu cầu tầng cao, phòng ban công hoặc giường phụ..."
        },
        errors: {
          checkIn: "Vui lòng chọn ngày nhận phòng",
          checkOut: "Ngày trả phòng phải sau ngày nhận phòng ít nhất 1 đêm",
          suitePref: "Vui lòng chọn hạng phòng mong muốn",
          fullName: "Vui lòng nhập họ và tên của quý khách",
          contact: "Vui lòng nhập số điện thoại hoặc email hợp lệ"
        },
        summary: {
          refPrefix: "MÃ YÊU CẦU // ",
          title: "Xác Nhận Yêu Cầu Đặt Phòng",
          desc: "Yêu cầu đặt phòng của quý khách đã được ghi nhận. Quý khách vui lòng cung cấp mã này khi liên hệ qua Zalo: 0899 668 639.",
          labels: {
            dates: "Thời Gian Lưu Trú",
            room: "Phòng Lựa Chọn",
            guest: "Số Khách",
            guestName: "Khách Hàng",
            contact: "Liên Hệ",
            notes: "Ghi Chú"
          },
          zaloBtn: "Mở Zalo: 0899 668 639",
          resetBtn: "Tạo Yêu Cầu Mới"
        }
      },
      location: {
        eyebrow: "Vị Trí & Khí Hậu",
        title: "Điểm Đến Nghỉ Dưỡng Tại Bảo Lộc",
        desc: "Tọa lạc tại vùng đất cao nguyên mát lành của tỉnh Lâm Đồng, Khách Sạn Hoa Nắng dễ dàng tiếp cận từ trục Quốc lộ 20 kết nối TP. Hồ Chí Minh và Đà Lạt.",
        specs: {
          coordsLabel: "Tọa Độ",
          coordsVal: "Phường B Lao, TP. Bảo Lộc, Lâm Đồng",
          climateLabel: "Độ Cao & Khí Hậu",
          climateVal: "800m So Với Mực Nước Biển // 18°C - 24°C",
          arrivalLabel: "Liên Hệ Đón Tiếp",
          arrivalVal: "0899 668 639 (Zalo 24/7)",
          checkTimeLabel: "Giờ Nhận / Trả Phòng",
          checkTimeVal: "14:00 Nhận Phòng // 12:00 Trả Phòng"
        }
      },
      footer: {
        tagline: "Không Gian Tĩnh Lặng & Ánh Sáng Cao Nguyên Bảo Lộc",
        address: "Phường B'Lao, TP. Bảo Lộc, Tỉnh Lâm Đồng, Vietnam",
        navColTitle: "Danh Mục",
        navLinks: [
          "Phòng Nghỉ & Bảng Giá",
          "Hình Ảnh",
          "Tiện Nghi",
          "Kiến Trúc",
          "Đặt Phòng"
        ],
        ratesColTitle: "Bảng Giá Phòng",
        ratesLinks: [
          "Đơn DLX (1 Giường 1m6) : 490k",
          "Đơn TWN (2 Giường 1m4) : 590k",
          "Đôi SUP (2 Giường 1m6) : 690k",
          "Đôi Ban Công (2 Giường) : 720k"
        ],
        contactColTitle: "Liên Hệ & Đặt Phòng",
        contactLinks: [
          "Zalo: 0899 668 639",
          "Facebook / Messenger: Hoa Nắng",
          "Kênh Booking.com",
          "Kênh Traveloka"
        ],
        rights: "© 2026 Khách Sạn Hoa Nắng. Bảo lưu mọi quyền.",
        ticker: "Hotline & Zalo: 0899 668 639 // Phường B'Lao, TP. Bảo Lộc"
      }
    },
    en: {
      brand: {
        name: "Hotel Hoa Nắng",
        sub: "Bảo Lộc // Vietnam"
      },
      nav: {
        accommodations: "Accommodations",
        gallery: "Gallery",
        amenities: "Amenities",
        story: "Architecture",
        location: "Location",
        reserve: "Reserve",
        reserveSuite: "Reserve A Suite",
        menu: "MENU",
        closeMenu: "Close Menu"
      },
      hero: {
        eyebrow: "Quiet Luxury & Natural Light",
        title: "Hotel Hoa Nắng",
        subtitle: "Peaceful highland stays in Bảo Lộc with sunlit rooms, elevator access, and mountain-view balconies.",
        exploreBtn: "View Rates & Rooms",
        inquireBtn: "Zalo: 0899 668 639",
        stats: {
          suitesLabel: "Room Rates",
          suitesVal: "From 490.000₫ / night",
          levelsLabel: "Levels",
          levelsVal: "4 Floors // Elevator",
          photosLabel: "Direct Hotline & Zalo",
          photosVal: "0899 668 639",
          sanctuaryLabel: "Sanctuary",
          sanctuaryVal: "Bảo Lộc // Lâm Đồng"
        }
      },
      story: {
        eyebrow: "About Us",
        title: "Harmonious Space, Highland Calm",
        lead: "Nestled in the cool climate of Bảo Lộc, Hotel Hoa Nắng offers an intentional antidote to urban rush.",
        p1: "Constructed across four levels with smooth elevator access, the hotel is fully equipped with individual climate control, fiber Wi-Fi, modern en-suite bathrooms, and secure parking.",
        p2: "Guests can select from cozy single queen bedrooms, flexible twin beds, spacious family rooms, or scenic balcony suites overlooking the green highland mountains.",
        quote: "True satisfaction comes from peaceful rest, meticulous cleanliness, and genuine hospitality.",
        quoteAuthor: "Hotel Hoa Nắng // Bảo Lộc",
        specs: {
          totalLabel: "Official Rates",
          totalVal: "490.000₫ – 720.000₫ / night",
          transitLabel: "Vertical Transit",
          transitVal: "Passenger Elevator (All 4 Levels)",
          balconyLabel: "Balcony Rooms",
          balconyVal: "Suites P.106 & P.207",
          receptionLabel: "Reception & Zalo",
          receptionVal: "0899 668 639 (24/7)"
        }
      },
      accommodations: {
        eyebrow: "Official Rates & Taxonomy",
        title: "Accommodations Directory",
        intro: "Transparent rates. Direct booking via Hotline/Zalo or verified OTA channels on Booking.com and Traveloka.",
        exploreKeysBtn: "View Room Photos",
        inquireText: "Reserve",
        assignedKeysLabel: "Assigned Room Keys:",
        videoTourAvailable: "Balcony + Video",
        categories: {
          "phong-don-dlx": {
            title: "Deluxe Single Room (DLX)",
            price: "490.000₫",
            unit: "/ room / night",
            tagline: "1 Queen Bed · 2 Guests · Quiet & Serene",
            desc: "Cozy accommodation for 2 guests with 1 queen bed (1.6m), inverter air conditioning, high-speed fiber Wi-Fi, and private modern bathroom.",
            badge: "2 Guests // 1 Queen Bed",
            level: "Ground, Floors 1, 2 & 3",
            roomCount: "12 Rooms"
          },
          "phong-don-twn": {
            title: "Twin Single Room (TWN)",
            price: "590.000₫",
            unit: "/ room / night",
            tagline: "2 Single Beds · 2 Guests · Flexible Comfort",
            desc: "Smart layout featuring 2 individual single beds (1.4m) for 2 guests. Ideal for companions, business travel, or separate bedding preferences.",
            badge: "2 Guests // 2 Single Beds",
            level: "Floors 1 & 2",
            roomCount: "2 Rooms"
          },
          "phong-doi-gia-dinh-sup": {
            title: "Superior Family Double (SUP)",
            price: "690.000₫",
            unit: "/ room / night",
            tagline: "2 Queen Beds · 4 Guests · Spacious Family Suite",
            desc: "Spacious layout with 2 queen beds (1.6m) accommodating up to 4 guests. Large windows welcoming highland breeze and natural daylight.",
            badge: "4 Guests // 2 Queen Beds",
            level: "Floors 1, 2 & 3",
            roomCount: "4 Rooms"
          },
          "phong-doi-ban-cong-dlx": {
            title: "Deluxe Balcony Double (DLX)",
            price: "720.000₫",
            unit: "/ room / night",
            tagline: "2 Queen Beds · 4 Guests · Private Balcony Mountain View",
            desc: "Top-tier suite featuring a private walk-out balcony with panoramic views of Bảo Lộc hills. 2 queen beds for 4 guests with 1080p video tour for P.207.",
            badge: "4 Guests // 2 Queen Beds",
            level: "Floors 1 & 2",
            roomCount: "2 Rooms"
          }
        }
      },
      modal: {
        closeBtn: "Close (ESC)",
        inspectLabel: "Inspect Room Key:",
        allPhotosTab: "All Category Photos",
        videoTitle: "Room P.207 // Balcony Video Tour",
        videoSubtitle: "HD 1080p MP4",
        playTour: "Play Tour",
        pauseTour: "Pause",
        soundOn: "Sound On",
        soundMute: "Mute",
        fullscreen: "Fullscreen",
        galleryTitle: "Room Photography",
        photosCount: "{n} Photos",
        footerHint: "Hotline & Zalo support: 0899 668 639",
        inquireForRoom: "Reserve This Suite"
      },
      gallery: {
        eyebrow: "Curated Highlights",
        title: "Authentic Perspectives",
        intro: "Photographs documenting our living spaces, arrival foyers, and peaceful highland ambiance."
      },
      amenities: {
        eyebrow: "Verified Hospitality",
        title: "Factual Property Amenities",
        intro: "Essential amenities curated for guest convenience, comfort, and seamless highland living.",
        items: [
          { index: "Amenity 01", title: "Multi-Zone Climate Control", desc: "Individual silent inverter air conditioning installed in all guest rooms." },
          { index: "Amenity 02", title: "High-Speed Fiber Wi-Fi", desc: "Complimentary high-throughput wireless connectivity across all suites and common areas." },
          { index: "Amenity 03", title: "Private En-Suite Baths", desc: "Modern private bathrooms with hot water showers and quality toiletries." },
          { index: "Amenity 04", title: "Vertical Passenger Elevator", desc: "Modern passenger elevator servicing all four floors from Level 0 to Level 3." },
          { index: "Amenity 05", title: "Private Sun Balconies", desc: "Select upper-level suites feature open-air private balconies with panoramic orientation." },
          { index: "Amenity 06", title: "24/7 Front Desk Concierge", desc: "Round-the-clock reception support for late arrivals, Hotline/Zalo 0899 668 639." },
          { index: "Amenity 07", title: "Daily Housekeeping", desc: "Meticulous cleaning routines, fresh natural cotton linens, and sanitization standards." },
          { index: "Amenity 08", title: "Secure On-Site Parking", desc: "Dedicated courtyard drop-off area and monitored parking bays for motorbikes and vehicles." }
        ]
      },
      inquiry: {
        eyebrow: "Direct Reservations",
        title: "Inquire for Your Stay",
        desc: "Submit your preferred dates, contact via Zalo, or book directly via Booking.com and Traveloka.",
        directHotline: "Direct Hotline & Zalo",
        chatLink: "Facebook / Messenger",
        propertyAddress: "Property Address",
        labels: {
          checkIn: "Check-In Date *",
          checkOut: "Check-Out Date *",
          suitePref: "Suite & Rate Preference *",
          guests: "Guest Count",
          fullName: "Your Full Name *",
          contact: "Phone Number or Email *",
          notes: "Special Inquiries & Arrival Time",
          submit: "Transmit Reservation Inquiry"
        },
        roomOptions: [
          { value: "", text: "-- Select Suite & Rate Preference --" },
          { value: "Phòng Đơn Deluxe (DLX) - 490.000₫/đêm", text: "Deluxe Single 1 Queen Bed · 2 Guests (490.000₫/night)" },
          { value: "Phòng Đơn Twin (TWN) - 590.000₫/đêm", text: "Twin Single 2 Beds 1.4m · 2 Guests (590.000₫/night)" },
          { value: "Phòng Đôi Gia Đình (SUP) - 690.000₫/đêm", text: "Superior Family 2 Queen Beds · 4 Guests (690.000₫/night)" },
          { value: "Phòng Đôi Ban Công (DLX) - 720.000₫/đêm", text: "Deluxe Balcony 2 Queen Beds · 4 Guests (720.000₫/night)" }
        ],
        guestOptions: [
          { value: "1 Khách", text: "1 Guest" },
          { value: "2 Khách", text: "2 Guests" },
          { value: "3 Khách", text: "3 Guests" },
          { value: "4 Khách", text: "4 Guests" },
          { value: "Gia Đình / Đoàn", text: "Family / Large Group" }
        ],
        placeholders: {
          fullName: "e.g. Jean-Luc Dupont",
          contact: "e.g. 0899 668 639 or guest@example.com",
          notes: "Note any arrival estimates, upper-floor preferences, or companion arrangements..."
        },
        errors: {
          checkIn: "Please select check-in date",
          checkOut: "Check-out must be after check-in",
          suitePref: "Please choose a suite preference",
          fullName: "Please provide your full name",
          contact: "Valid phone number or email required"
        },
        summary: {
          refPrefix: "Reference // ",
          title: "Inquiry Summary Confirmed",
          desc: "Your reservation request has been structured. Present this reference code via Zalo: 0899 668 639.",
          labels: {
            dates: "Stay Period",
            room: "Selected Suite",
            guest: "Guests",
            guestName: "Guest Name",
            contact: "Contact Info",
            notes: "Special Requests"
          },
          zaloBtn: "Open Zalo: 0899 668 639",
          resetBtn: "New Inquiry"
        }
      },
      location: {
        eyebrow: "Location & Setting",
        title: "The Sanctuary in Bảo Lộc",
        desc: "Situated in the cool highlands of Lâm Đồng province, Hotel Hoa Nắng is accessible via the National Route 20 corridor connecting Ho Chi Minh City and Đà Lạt.",
        specs: {
          coordsLabel: "Coordinates",
          coordsVal: "TP. Bảo Lộc, Lâm Đồng",
          climateLabel: "Elevation & Climate",
          climateVal: "800m ASL // 18°C - 24°C",
          arrivalLabel: "Arrival Contact",
          arrivalVal: "0899 668 639 (Zalo 24/7)",
          checkTimeLabel: "Check-In / Out",
          checkTimeVal: "14:00 Check-In // 12:00 Check-Out"
        }
      },
      footer: {
        tagline: "Architectural Quietude in the Highlands of Bảo Lộc",
        address: "Phường B'Lao, TP. Bảo Lộc, Tỉnh Lâm Đồng, Vietnam",
        navColTitle: "Directory",
        navLinks: [
          "Accommodations & Rates",
          "Gallery",
          "Amenities",
          "Architecture",
          "Reservations"
        ],
        ratesColTitle: "Official Rates",
        ratesLinks: [
          "Single DLX (1 Queen Bed) : 490k",
          "Single TWN (2 Single Beds) : 590k",
          "Family SUP (2 Queen Beds) : 690k",
          "Balcony DLX (2 Queen Beds) : 720k"
        ],
        contactColTitle: "Contact & Booking",
        contactLinks: [
          "Zalo: 0899 668 639",
          "Facebook / Messenger: Hoa Nắng",
          "Booking.com Channel",
          "Traveloka Channel"
        ],
        rights: "© 2026 Hotel Hoa Nắng. All rights reserved.",
        ticker: "Hotline & Zalo: 0899 668 639 // Phường B'Lao, TP. Bảo Lộc"
      }
    }
  };

  function $(selector, context) {
    return (context || document).querySelector(selector);
  }

  function $$(selector, context) {
    return Array.from((context || document).querySelectorAll(selector));
  }

  function setLanguage(lang) {
    if (lang !== "vi" && lang !== "en") lang = "vi";
    APP_STATE.currentLang = lang;
    localStorage.setItem("hhn_lang", lang);
    document.documentElement.lang = lang;

    $$(".lang-toggle-btn").forEach(function (btn) {
      const bLang = btn.getAttribute("data-lang");
      if (bLang === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const dict = I18N[lang];

    // Navigation
    const brandSub = $(".brand-sub");
    if (brandSub) brandSub.textContent = dict.brand.sub;

    const navItems = $$(".nav-links .nav-item");
    if (navItems.length >= 5) {
      navItems[0].textContent = dict.nav.story;
      navItems[1].textContent = dict.nav.accommodations;
      navItems[2].textContent = dict.nav.gallery;
      navItems[3].textContent = dict.nav.amenities;
      navItems[4].textContent = dict.nav.location;
    }

    const navReserve = $(".nav-reserve-btn");
    if (navReserve) navReserve.textContent = dict.nav.reserve;

    const menuTrigger = $("#menuToggleBtn");
    if (menuTrigger && !$("#mobileNavOverlay").classList.contains("active")) {
      menuTrigger.textContent = dict.nav.menu;
    }

    const mobileItems = $$(".mobile-nav-links .mobile-nav-item");
    if (mobileItems.length >= 5) {
      const mTexts = [
        dict.nav.story,
        dict.nav.accommodations,
        dict.nav.gallery,
        dict.nav.amenities,
        dict.nav.location
      ];
      mobileItems.forEach(function (item, i) {
        const span = item.querySelector("span:first-child");
        if (span && mTexts[i]) span.textContent = mTexts[i];
      });
    }

    // Hero
    const heroEyebrow = $(".hero-eyebrow");
    if (heroEyebrow) heroEyebrow.textContent = dict.hero.eyebrow;

    const heroTitle = $(".hero-title");
    if (heroTitle) heroTitle.textContent = dict.hero.title;

    const heroSubtitle = $(".hero-subtitle");
    if (heroSubtitle) heroSubtitle.textContent = dict.hero.subtitle;

    const heroActions = $$(".hero-actions a");
    if (heroActions.length >= 2) {
      heroActions[0].textContent = dict.hero.exploreBtn;
      heroActions[1].textContent = dict.hero.inquireBtn;
    }

    const statLabels = $$(".hero-stats-grid .stat-label");
    const statVals = $$(".hero-stats-grid .stat-value");
    if (statLabels.length >= 4 && statVals.length >= 4) {
      statLabels[0].textContent = dict.hero.stats.suitesLabel;
      statVals[0].textContent = dict.hero.stats.suitesVal;

      statLabels[1].textContent = dict.hero.stats.levelsLabel;
      statVals[1].textContent = dict.hero.stats.levelsVal;

      statLabels[2].textContent = dict.hero.stats.photosLabel;
      statVals[2].textContent = dict.hero.stats.photosVal;

      statLabels[3].textContent = dict.hero.stats.sanctuaryLabel;
      statVals[3].textContent = dict.hero.stats.sanctuaryVal;
    }

    // Story
    const storyEyebrow = $("#story .eyebrow");
    if (storyEyebrow) storyEyebrow.textContent = dict.story.eyebrow;

    const storyTitle = $("#story .section-title");
    if (storyTitle) storyTitle.textContent = dict.story.title;

    const storyLead = $(".story-lead");
    if (storyLead) storyLead.textContent = dict.story.lead;

    const storyParas = $$(".story-paragraphs .body-muted");
    if (storyParas.length >= 2) {
      storyParas[0].textContent = dict.story.p1;
      storyParas[1].textContent = dict.story.p2;
    }

    const storyQuote = $(".story-quote-text");
    if (storyQuote) storyQuote.textContent = dict.story.quote;

    const storyQuoteAuthor = $(".story-quote-author");
    if (storyQuoteAuthor) storyQuoteAuthor.textContent = dict.story.quoteAuthor;

    const storySpecs = $$("#story .story-specs-table .spec-entry");
    if (storySpecs.length > 0) {
      const specPairs = [
        [dict.story.specs.totalLabel, dict.story.specs.totalVal],
        [dict.story.specs.transitLabel, dict.story.specs.transitVal],
        [dict.story.specs.balconyLabel, dict.story.specs.balconyVal],
        [dict.story.specs.receptionLabel, dict.story.specs.receptionVal]
      ];
      storySpecs.forEach(function (entry, i) {
        if (specPairs[i]) {
          const lbl = entry.querySelector(".spec-label");
          const val = entry.querySelector(".spec-val");
          if (lbl) lbl.textContent = specPairs[i][0];
          if (val) val.textContent = specPairs[i][1];
        }
      });
    }

    // Accommodations
    const accEyebrow = $("#accEyebrow") || $("#accommodations .eyebrow");
    if (accEyebrow) accEyebrow.textContent = dict.accommodations.eyebrow;

    const accTitle = $("#accTitle") || $("#accommodations .section-title");
    if (accTitle) accTitle.textContent = dict.accommodations.title;

    const accIntro = $("#accIntro") || $("#accommodations .section-intro");
    if (accIntro) accIntro.textContent = dict.accommodations.intro;

    // Hero Image Alt
    const heroImg = $(".hero-backdrop img");
    if (heroImg) heroImg.alt = (lang === "en" ? "Panoramic architecture of Hotel Hoa Nắng in Bảo Lộc" : "Toàn cảnh kiến trúc Khách Sạn Hoa Nắng tại Bảo Lộc Lâm Đồng");

    // Story Image Alt
    const storyImg = $(".story-image-main");
    if (storyImg) storyImg.alt = (lang === "en" ? "Illuminated evening entrance and lobby of Hotel Hoa Nắng" : "Lối vào và sảnh đón tiếp Khách Sạn Hoa Nắng");

    $$(".suite-card").forEach(function (card) {
      const catId = card.getAttribute("data-category");
      const cData = dict.accommodations.categories[catId];
      if (cData) {
        const sImg = card.querySelector(".suite-image");
        if (sImg) sImg.alt = cData.title + (lang === "en" ? " at Hotel Hoa Nắng" : " tại Khách Sạn Hoa Nắng");

        const badge = card.querySelector(".suite-badge-tag");
        if (badge) badge.textContent = cData.badge;

        const videoBadge = card.querySelector(".suite-video-badge");
        if (videoBadge) videoBadge.textContent = dict.accommodations.videoTourAvailable;

        const levelTag = card.querySelector(".suite-level-tag");
        if (levelTag) levelTag.textContent = cData.level;

        const roomCount = card.querySelector(".suite-room-count");
        if (roomCount) roomCount.textContent = cData.roomCount;

        const title = card.querySelector(".suite-title");
        if (title) title.textContent = cData.title;

        const priceAmount = card.querySelector(".suite-price-amount");
        if (priceAmount) priceAmount.textContent = cData.price;

        const priceUnit = card.querySelector(".suite-price-unit");
        if (priceUnit) priceUnit.textContent = cData.unit;

        const tagline = card.querySelector(".suite-tagline");
        if (tagline) tagline.textContent = cData.tagline;

        const desc = card.querySelector(".suite-desc");
        if (desc) desc.textContent = cData.desc;

        const exploreBtn = card.querySelector(".open-room-modal-btn");
        if (exploreBtn) exploreBtn.textContent = dict.accommodations.exploreKeysBtn;

        const inquireLink = card.querySelector(".select-category-inquire");
        if (inquireLink) inquireLink.textContent = dict.accommodations.inquireText + " (" + cData.price + ")";

        const keysLabel = card.querySelector(".suite-keys-label");
        if (keysLabel) keysLabel.textContent = dict.accommodations.assignedKeysLabel;
      }
    });

    // Curated Gallery Section
    const galEyebrow = $("#gallery .eyebrow");
    if (galEyebrow) galEyebrow.textContent = dict.gallery.eyebrow;

    const galTitle = $("#gallery .section-title");
    if (galTitle) galTitle.textContent = dict.gallery.title;

    const galIntro = $("#gallery .section-intro");
    if (galIntro) galIntro.textContent = dict.gallery.intro;

    $$(".curated-card").forEach(function (card) {
      const tagEl = card.querySelector(".curated-tag");
      const titleEl = card.querySelector(".curated-title");
      const gImg = card.querySelector("img");
      const tagVi = card.getAttribute("data-tag-vi");
      const tagEn = card.getAttribute("data-tag-en");
      const titleVi = card.getAttribute("data-title-vi");
      const titleEn = card.getAttribute("data-title-en");
      if (tagEl) tagEl.textContent = (lang === "vi" ? tagVi : tagEn) || tagEl.textContent;
      if (titleEl) titleEl.textContent = (lang === "vi" ? titleVi : titleEn) || titleEl.textContent;
      if (gImg) gImg.alt = (lang === "vi" ? titleVi : titleEn) || gImg.alt;
    });

    // Location Image Alt
    const locImg = $("#location .story-image-main");
    if (locImg) locImg.alt = (lang === "en" ? "Scenic mountain landscape surrounding Hotel Hoa Nắng in Bảo Lộc" : "Khung cảnh cao nguyên Bảo Lộc xung quanh Khách Sạn Hoa Nắng");

    // Amenities Section
    const amenEyebrow = $("#amenities .eyebrow");
    if (amenEyebrow) amenEyebrow.textContent = dict.amenities.eyebrow;

    const amenTitle = $("#amenities .section-title");
    if (amenTitle) amenTitle.textContent = dict.amenities.title;

    const amenIntro = $("#amenities .section-intro");
    if (amenIntro) amenIntro.textContent = dict.amenities.intro;

    const amenCards = $$(".amenities-grid .amenity-card");
    if (amenCards.length === dict.amenities.items.length) {
      amenCards.forEach(function (card, i) {
        const item = dict.amenities.items[i];
        const idxEl = card.querySelector(".amenity-index");
        const titleEl = card.querySelector(".amenity-title");
        const descEl = card.querySelector(".amenity-desc");
        if (idxEl) idxEl.textContent = item.index;
        if (titleEl) titleEl.textContent = item.title;
        if (descEl) descEl.textContent = item.desc;
      });
    }

    // Inquiry Section
    const inqEyebrow = $("#inquiry .eyebrow");
    if (inqEyebrow) inqEyebrow.textContent = dict.inquiry.eyebrow;

    const inqTitle = $("#inquiry .section-title");
    if (inqTitle) inqTitle.textContent = dict.inquiry.title;

    const inqDesc = $("#inquiry .inquiry-info .body-muted");
    if (inqDesc) inqDesc.textContent = dict.inquiry.desc;

    const contactRows = $$(".inquiry-contact-links .contact-row");
    if (contactRows.length >= 4) {
      const cl0 = contactRows[0].querySelector(".contact-label");
      if (cl0) cl0.textContent = dict.inquiry.directHotline;

      const cl1 = contactRows[1].querySelector(".contact-label");
      if (cl1) cl1.textContent = dict.inquiry.chatLink;

      const cl2 = contactRows[2].querySelector(".contact-label");
      if (cl2) cl2.textContent = "Kênh Đặt Phòng Trực Tuyến";
      if (lang === "en" && cl2) cl2.textContent = "Online Booking Channels";

      const cl3 = contactRows[3].querySelector(".contact-label");
      if (cl3) cl3.textContent = dict.inquiry.propertyAddress;
    }

    // Form Labels, Select Options & Placeholders
    const lblCheckIn = $("#lblCheckIn") || $("label[for='inquiryCheckIn']");
    if (lblCheckIn) lblCheckIn.textContent = dict.inquiry.labels.checkIn;

    const lblCheckOut = $("#lblCheckOut") || $("label[for='inquiryCheckOut']");
    if (lblCheckOut) lblCheckOut.textContent = dict.inquiry.labels.checkOut;

    const calApply = $("#calApplyBtn");
    if (calApply) calApply.textContent = lang === "en" ? "Confirm Dates" : "Xác Nhận";

    if (typeof window.refreshLuxuryCalendar === "function") {
      window.refreshLuxuryCalendar();
    }

    const lblRoomSelect = $("label[for='inquiryRoomSelect']");
    if (lblRoomSelect) lblRoomSelect.textContent = dict.inquiry.labels.suitePref;

    const roomSelect = $("#inquiryRoomSelect");
    if (roomSelect && dict.inquiry.roomOptions) {
      const curVal = roomSelect.value;
      roomSelect.innerHTML = "";
      dict.inquiry.roomOptions.forEach(function (opt) {
        const optEl = document.createElement("option");
        optEl.value = opt.value;
        optEl.textContent = opt.text;
        if (opt.value === curVal) optEl.selected = true;
        roomSelect.appendChild(optEl);
      });
    }

    const lblGuests = $("label[for='inquiryGuests']");
    if (lblGuests) lblGuests.textContent = dict.inquiry.labels.guests;

    const guestsSelect = $("#inquiryGuests");
    if (guestsSelect && dict.inquiry.guestOptions) {
      const curGuestVal = guestsSelect.value;
      guestsSelect.innerHTML = "";
      dict.inquiry.guestOptions.forEach(function (opt, i) {
        const optEl = document.createElement("option");
        optEl.value = opt.value;
        optEl.textContent = opt.text;
        if (opt.value === curGuestVal || (i === 1 && !curGuestVal)) optEl.selected = true;
        guestsSelect.appendChild(optEl);
      });
    }

    const lblName = $("label[for='inquiryName']");
    if (lblName) lblName.textContent = dict.inquiry.labels.fullName;

    const nameInput = $("#inquiryName");
    if (nameInput) nameInput.placeholder = dict.inquiry.placeholders.fullName;

    const lblContact = $("label[for='inquiryContact']");
    if (lblContact) lblContact.textContent = dict.inquiry.labels.contact;

    const contactInput = $("#inquiryContact");
    if (contactInput) contactInput.placeholder = dict.inquiry.placeholders.contact;

    const lblNotes = $("label[for='inquiryNotes']");
    if (lblNotes) lblNotes.textContent = dict.inquiry.labels.notes;

    const notesInput = $("#inquiryNotes");
    if (notesInput) notesInput.placeholder = dict.inquiry.placeholders.notes;

    const submitBtn = $("#inquirySubmitBtn");
    if (submitBtn) submitBtn.textContent = dict.inquiry.labels.submit;

    // Location
    const locEyebrow = $("#location .eyebrow");
    if (locEyebrow) locEyebrow.textContent = dict.location.eyebrow;

    const locTitle = $("#location .section-title");
    if (locTitle) locTitle.textContent = dict.location.title;

    const locDesc = $("#location .body-muted");
    if (locDesc) locDesc.textContent = dict.location.desc;

    const locSpecs = $$("#location .story-specs-table .spec-entry");
    if (locSpecs.length > 0) {
      const locPairs = [
        [dict.location.specs.coordsLabel, dict.location.specs.coordsVal],
        [dict.location.specs.climateLabel, dict.location.specs.climateVal],
        [dict.location.specs.arrivalLabel, dict.location.specs.arrivalVal],
        [dict.location.specs.checkTimeLabel, dict.location.specs.checkTimeVal]
      ];
      locSpecs.forEach(function (entry, i) {
        if (locPairs[i]) {
          const lbl = entry.querySelector(".spec-label");
          const val = entry.querySelector(".spec-val");
          if (lbl) lbl.textContent = locPairs[i][0];
          if (val) val.textContent = locPairs[i][1];
        }
      });
    }

    // Modal Drawer Static Labels Translation
    const modalCloseBtn = $("#modalCloseBtn");
    if (modalCloseBtn) modalCloseBtn.textContent = dict.modal.closeBtn;

    const selectorLabel = $(".selector-label");
    if (selectorLabel) selectorLabel.textContent = dict.modal.inspectLabel;

    const galleryStageTitle = $("#modalGalleryStageTitle");
    if (galleryStageTitle) galleryStageTitle.textContent = dict.modal.galleryTitle;

    const videoTag = $("#modalVideoTag");
    if (videoTag) videoTag.textContent = dict.modal.videoTitle;

    const videoRes = $("#modalVideoRes");
    if (videoRes) videoRes.textContent = dict.modal.videoSubtitle;

    const modalFooterHint = $("#modalFooterHint");
    if (modalFooterHint) {
      modalFooterHint.innerHTML = (lang === "en" ? "Hotline & Zalo support: " : "Hotline & Zalo hỗ trợ: ") +
        '<a href="tel:0899668639" style="font-weight: 600; color: var(--c-charcoal);">0899 668 639</a>';
    }

    const modalInquireBtn = $("#modalInquireBtn");
    if (modalInquireBtn) modalInquireBtn.textContent = dict.modal.inquireForRoom;

    // Footer Columns & Links Translation
    const footTag = $(".footer-tagline");
    if (footTag) footTag.textContent = dict.footer.tagline;

    const footCols = $$(".footer-top-grid > div");
    if (footCols.length >= 4) {
      // Column 1: Navigation Directory
      const col1Title = footCols[1].querySelector(".footer-col-title");
      if (col1Title) col1Title.textContent = dict.footer.navColTitle;
      const col1Links = $$(".footer-link", footCols[1]);
      col1Links.forEach(function (link, i) {
        if (dict.footer.navLinks[i]) link.textContent = dict.footer.navLinks[i];
      });

      // Column 2: Official Rates
      const col2Title = footCols[2].querySelector(".footer-col-title");
      if (col2Title) col2Title.textContent = dict.footer.ratesColTitle;
      const col2Links = $$(".footer-link", footCols[2]);
      col2Links.forEach(function (link, i) {
        if (dict.footer.ratesLinks[i]) link.textContent = dict.footer.ratesLinks[i];
      });

      // Column 3: Contact & Booking
      const col3Title = footCols[3].querySelector(".footer-col-title");
      if (col3Title) col3Title.textContent = dict.footer.contactColTitle;
      const col3Links = $$(".footer-link", footCols[3]);
      col3Links.forEach(function (link, i) {
        if (dict.footer.contactLinks[i]) link.textContent = dict.footer.contactLinks[i];
      });
    }

    const footRights = $(".footer-bottom-bar div:first-child");
    if (footRights) footRights.textContent = dict.footer.rights;

    const footTicker = $(".footer-room-index-ticker");
    if (footTicker) footTicker.textContent = dict.footer.ticker;
  }

  // =========================================================================
  // MODAL DRAWER LOGIC
  // =========================================================================
  function initAccommodationsExplorer() {
    $$(".open-room-modal-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const catId = this.getAttribute("data-category") || "phong-don-dlx";
        openCategoryModal(catId);
      });
    });

    const closeBtn = $("#modalCloseBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    const modalInquireBtn = $("#modalInquireBtn");
    if (modalInquireBtn) {
      modalInquireBtn.addEventListener("click", function () {
        closeModal();
      });
    }

    const modalBackdrop = $("#roomExplorerModal");
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", function (e) {
        if (!e.target.closest(".modal-drawer")) {
          closeModal();
        }
      });
      modalBackdrop.addEventListener("touchstart", function (e) {
        if (!e.target.closest(".modal-drawer")) {
          closeModal();
        }
      }, { passive: true });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeModal();
      }
    });

    window.closeModal = closeModal;
    window.openCategoryModal = openCategoryModal;
  }

  function openCategoryModal(categoryId) {
    const data = window.HOTEL_DATA || (typeof globalThis !== "undefined" ? globalThis.HOTEL_DATA : null);
    if (!data) {
      console.warn("HOTEL_DATA not initialized");
      return;
    }
    const cat = data.getCategory(categoryId);
    if (!cat) return;

    APP_STATE.activeCategory = categoryId;
    APP_STATE.activeRoomKey = null;

    const dict = I18N[APP_STATE.currentLang];
    const catDict = dict.accommodations.categories[categoryId];

    const titleEl = $("#modalCategoryTitle");
    const levelEl = $("#modalCategoryLevel");
    if (titleEl) titleEl.textContent = catDict ? catDict.title : cat.title;
    if (levelEl) levelEl.textContent = catDict ? catDict.badge : cat.floorLabel;

    const closeBtn = $("#modalCloseBtn");
    if (closeBtn) closeBtn.textContent = dict.modal.closeBtn;

    const selectorLabel = $(".selector-label");
    if (selectorLabel) selectorLabel.textContent = dict.modal.inspectLabel;

    const galleryStageTitle = $("#modalGalleryStageTitle");
    if (galleryStageTitle) galleryStageTitle.textContent = dict.modal.galleryTitle;

    const videoTag = $("#modalVideoTag");
    if (videoTag) videoTag.textContent = dict.modal.videoTitle;

    const videoRes = $("#modalVideoRes");
    if (videoRes) videoRes.textContent = dict.modal.videoSubtitle;

    const modalFooterHint = $("#modalFooterHint");
    if (modalFooterHint) {
      modalFooterHint.innerHTML = (APP_STATE.currentLang === "en" ? "Hotline & Zalo support: " : "Hotline & Zalo hỗ trợ: ") +
        '<a href="tel:0899668639" style="font-weight: 600; color: var(--c-charcoal);">0899 668 639</a>';
    }

    const modalInquireBtn = $("#modalInquireBtn");
    if (modalInquireBtn) modalInquireBtn.textContent = dict.modal.inquireForRoom;

    // Render Room Tabs inside Drawer
    const keysStrip = $("#modalRoomKeysStrip");
    if (keysStrip) {
      keysStrip.innerHTML = "";

      const allTab = document.createElement("button");
      allTab.className = "room-selector-tab active";
      allTab.textContent = dict.modal.allPhotosTab;
      allTab.addEventListener("click", function () {
        $$(".room-selector-tab", keysStrip).forEach(function (t) { t.classList.remove("active"); });
        this.classList.add("active");
        APP_STATE.activeRoomKey = null;
        renderCategoryModalPhotos(categoryId);
      });
      keysStrip.appendChild(allTab);

      cat.roomKeys.forEach(function (key) {
        const tab = document.createElement("button");
        tab.className = "room-selector-tab";
        tab.textContent = (APP_STATE.currentLang === "en" ? "Suite " : "Phòng ") + key + (key === "P.207" ? " (Video)" : "");
        tab.addEventListener("click", function () {
          $$(".room-selector-tab", keysStrip).forEach(function (t) { t.classList.remove("active"); });
          this.classList.add("active");
          APP_STATE.activeRoomKey = key;
          renderSingleRoomModalPhotos(key);
        });
        keysStrip.appendChild(tab);
      });
    }

    renderCategoryModalPhotos(categoryId);

    const modal = $("#roomExplorerModal");
    if (modal) {
      modal.classList.add("active");
      document.body.classList.add("modal-locked");
    }
  }

  function renderCategoryModalPhotos(categoryId) {
    const data = window.HOTEL_DATA || (typeof globalThis !== "undefined" ? globalThis.HOTEL_DATA : null);
    if (!data) return;

    const videoStage = $("#modalVideoStage");
    const videoPlayer = $("#modalVideoPlayer");
    if (videoStage) {
      if (categoryId === "phong-doi-ban-cong-dlx") {
        videoStage.style.display = "flex";
        if (videoPlayer) {
          videoPlayer.src = "P.207/p207-balcony-tour.mp4";
          videoPlayer.load();
        }
      } else {
        videoStage.style.display = "none";
        if (videoPlayer) { videoPlayer.pause(); }
      }
    }

    const grid = $("#modalPhotosGrid");
    const countEl = $("#modalGalleryPhotoCount");
    if (!grid) return;
    grid.innerHTML = "";

    const rooms = data.getRoomsByCategory(categoryId);
    const allPhotos = [];
    rooms.forEach(function (r) {
      r.photos.forEach(function (p) {
        allPhotos.push({ src: p.src, rawPath: p.rawPath, roomKey: r.key });
      });
    });

    if (countEl) {
      const dict = I18N[APP_STATE.currentLang];
      countEl.textContent = dict.modal.photosCount.replace("{n}", allPhotos.length);
    }

    allPhotos.forEach(function (photo) {
      const isEn = APP_STATE.currentLang === "en";
      const altText = (isEn ? "Suite " : "Phòng ") + photo.roomKey + (isEn ? " — Interior & View" : " — Không Gian Phòng");
      const overlayText = (isEn ? "Suite " : "Phòng ") + photo.roomKey;
      const item = document.createElement("div");
      item.className = "modal-photo-item";
      item.innerHTML = "<img src='" + photo.src + "' alt='" + altText + "' loading='lazy'>" +
        "<div class='modal-photo-overlay'>" + overlayText + "</div>";
      grid.appendChild(item);
    });
  }

  function renderSingleRoomModalPhotos(roomKey) {
    const videoStage = $("#modalVideoStage");
    const videoPlayer = $("#modalVideoPlayer");
    if (videoStage) {
      if (roomKey === "P.207") {
        videoStage.style.display = "flex";
        if (videoPlayer) {
          videoPlayer.src = "P.207/p207-balcony-tour.mp4";
          videoPlayer.load();
        }
      } else {
        videoStage.style.display = "none";
        if (videoPlayer) { videoPlayer.pause(); }
      }
    }

    const grid = $("#modalPhotosGrid");
    const countEl = $("#modalGalleryPhotoCount");
    if (!grid) return;
    grid.innerHTML = "";

    const data = window.HOTEL_DATA || (typeof globalThis !== "undefined" ? globalThis.HOTEL_DATA : null);
    if (!data) return;

    const room = data.getRoom(roomKey);
    if (!room) return;

    if (countEl) {
      const dict = I18N[APP_STATE.currentLang];
      countEl.textContent = dict.modal.photosCount.replace("{n}", room.photos.length);
    }

    room.photos.forEach(function (photo, idx) {
      const isEn = APP_STATE.currentLang === "en";
      const altText = (isEn ? "Suite " : "Phòng ") + room.key + (isEn ? " — Photo " : " — Ảnh ") + (idx + 1);
      const overlayText = (isEn ? "Suite " : "Phòng ") + room.key + (isEn ? " — Photo " : " — Ảnh ") + (idx + 1);
      const item = document.createElement("div");
      item.className = "modal-photo-item";
      item.innerHTML = "<img src='" + photo.src + "' alt='" + altText + "' loading='lazy'>" +
        "<div class='modal-photo-overlay'>" + overlayText + "</div>";
      grid.appendChild(item);
    });
  }

  function closeModal() {
    const modal = $("#roomExplorerModal");
    if (modal) modal.classList.remove("active");
    document.body.classList.remove("modal-locked");
    const video = $("#modalVideoPlayer");
    if (video) {
      video.pause();
    }
  }

  // =========================================================================
  // CUSTOM LUXURY DATE RANGE CALENDAR
  // =========================================================================
  function initCustomLuxuryCalendar() {
    const checkInInput = $("#inquiryCheckIn");
    const checkOutInput = $("#inquiryCheckOut");
    const checkInDisplay = $("#checkInDateDisplay");
    const checkOutDisplay = $("#checkOutDateDisplay");
    const checkInTrigger = $("#checkInFieldTrigger");
    const checkOutTrigger = $("#checkOutFieldTrigger");
    const popover = $("#luxuryCalendarPopover");
    const monthYearTitle = $("#calMonthYearTitle");
    const prevMonthBtn = $("#calPrevMonthBtn");
    const nextMonthBtn = $("#calNextMonthBtn");
    const daysGrid = $("#calDaysGrid");
    const weekdaysRow = $("#calWeekdaysRow");
    const summaryDates = $("#calSummaryDates");
    const summaryNights = $("#calSummaryNights");
    const applyBtn = $("#calApplyBtn");

    if (!checkInInput || !checkOutInput || !popover) return;

    // Calendar state
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let selCheckIn = new Date(today);
    let selCheckOut = new Date(today);
    selCheckOut.setDate(selCheckOut.getDate() + 1);

    let viewYear = selCheckIn.getFullYear();
    let viewMonth = selCheckIn.getMonth(); // 0-indexed
    let selectionStep = "done"; // "checkin", "checkout", "done"

    const pad = function (n) { return n < 10 ? "0" + n : "" + n; };
    const toIso = function (d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); };
    const toDisplay = function (d) { return pad(d.getDate()) + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear(); };

    const updateDOM = function () {
      if (selCheckIn) {
        checkInInput.value = toIso(selCheckIn);
        if (checkInDisplay) checkInDisplay.textContent = toDisplay(selCheckIn);
      }
      if (selCheckOut) {
        checkOutInput.value = toIso(selCheckOut);
        if (checkOutDisplay) checkOutDisplay.textContent = toDisplay(selCheckOut);
      } else {
        checkOutInput.value = "";
        if (checkOutDisplay) checkOutDisplay.textContent = "--/--/----";
      }

      if (summaryDates) {
        const inStr = selCheckIn ? toDisplay(selCheckIn) : "--";
        const outStr = selCheckOut ? toDisplay(selCheckOut) : "--";
        summaryDates.innerHTML = inStr + " &rarr; " + outStr;
      }

      if (summaryNights) {
        if (selCheckIn && selCheckOut) {
          const diffTime = Math.abs(selCheckOut - selCheckIn);
          const diffNights = Math.round(diffTime / (1000 * 60 * 60 * 24));
          const isEn = APP_STATE.currentLang === "en";
          summaryNights.textContent = "(" + diffNights + " " + (isEn ? (diffNights > 1 ? "Nights" : "Night") : "Đêm") + ")";
        } else {
          summaryNights.textContent = "";
        }
      }
    };

    const renderCalendar = function () {
      const isEn = APP_STATE.currentLang === "en";
      const monthNamesVi = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
      const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      if (monthYearTitle) {
        monthYearTitle.textContent = (isEn ? monthNamesEn[viewMonth] : monthNamesVi[viewMonth]) + ", " + viewYear;
      }

      if (weekdaysRow) {
        weekdaysRow.innerHTML = isEn
          ? "<span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>"
          : "<span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>";
      }

      if (!daysGrid) return;
      daysGrid.innerHTML = "";

      const firstDayOfMonth = new Date(viewYear, viewMonth, 1);
      const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
      
      // Calculate Monday-based start offset (0 = Mon ... 6 = Sun)
      let startOffset = firstDayOfMonth.getDay() - 1;
      if (startOffset === -1) startOffset = 6;

      for (let i = 0; i < startOffset; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.className = "cal-day-cell disabled";
        emptyCell.innerHTML = "";
        daysGrid.appendChild(emptyCell);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const cellDate = new Date(viewYear, viewMonth, day);
        cellDate.setHours(0, 0, 0, 0);

        const cell = document.createElement("div");
        cell.className = "cal-day-cell";
        cell.textContent = day;

        if (cellDate < today) {
          cell.classList.add("disabled");
        } else {
          if (cellDate.getTime() === today.getTime()) {
            cell.classList.add("today");
          }

          if (selCheckIn && cellDate.getTime() === selCheckIn.getTime()) {
            cell.classList.add("selected-checkin");
          } else if (selCheckOut && cellDate.getTime() === selCheckOut.getTime()) {
            cell.classList.add("selected-checkout");
          } else if (selCheckIn && selCheckOut && cellDate > selCheckIn && cellDate < selCheckOut) {
            cell.classList.add("in-range");
          }

          cell.addEventListener("click", function (e) {
            e.stopPropagation();
            if (selectionStep === "checkout" && selCheckIn) {
              if (cellDate > selCheckIn) {
                selCheckOut = new Date(cellDate);
                selectionStep = "done";
                updateDOM();
                renderCalendar();
                setTimeout(function () { popover.classList.remove("active"); }, 200);
              } else {
                selCheckIn = new Date(cellDate);
                selCheckOut = null;
                selectionStep = "checkout";
                updateDOM();
                renderCalendar();
              }
            } else {
              selCheckIn = new Date(cellDate);
              selCheckOut = null;
              selectionStep = "checkout";
              updateDOM();
              renderCalendar();
            }
          });
        }

        daysGrid.appendChild(cell);
      }
    };

    if (prevMonthBtn) {
      prevMonthBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        viewMonth--;
        if (viewMonth < 0) {
          viewMonth = 11;
          viewYear--;
        }
        renderCalendar();
      });
    }

    if (nextMonthBtn) {
      nextMonthBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        viewMonth++;
        if (viewMonth > 11) {
          viewMonth = 0;
          viewYear++;
        }
        renderCalendar();
      });
    }

    const openPopover = function () {
      viewYear = selCheckIn ? selCheckIn.getFullYear() : today.getFullYear();
      viewMonth = selCheckIn ? selCheckIn.getMonth() : today.getMonth();
      renderCalendar();
      popover.classList.add("active");
    };

    if (checkInTrigger) {
      checkInTrigger.addEventListener("click", function (e) {
        e.stopPropagation();
        selectionStep = "checkin";
        openPopover();
      });
    }

    if (checkOutTrigger) {
      checkOutTrigger.addEventListener("click", function (e) {
        e.stopPropagation();
        selectionStep = "checkout";
        openPopover();
      });
    }

    if (applyBtn) {
      applyBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (!selCheckOut && selCheckIn) {
          selCheckOut = new Date(selCheckIn);
          selCheckOut.setDate(selCheckOut.getDate() + 1);
          updateDOM();
        }
        popover.classList.remove("active");
      });
    }

    document.addEventListener("click", function (e) {
      if (!e.target.closest("#luxuryDatePickerContainer")) {
        popover.classList.remove("active");
      }
    });

    window.refreshLuxuryCalendar = function () {
      renderCalendar();
      updateDOM();
    };

    updateDOM();
    renderCalendar();
  }

  // =========================================================================
  // RESERVATION INQUIRY FORM
  // =========================================================================
  function initReservationForm() {
    initCustomLuxuryCalendar();
    const form = $("#inquiryForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const checkIn = $("#inquiryCheckIn").value;
      const checkOut = $("#inquiryCheckOut").value;
      const room = $("#inquiryRoomSelect").value;
      const guests = $("#inquiryGuests").value;
      const name = $("#inquiryName").value.trim();
      const contact = $("#inquiryContact").value.trim();
      const notes = $("#inquiryNotes").value.trim();

      const dict = I18N[APP_STATE.currentLang];

      // Validate
      let valid = true;
      if (!checkIn) {
        showError("checkIn", dict.inquiry.errors.checkIn);
        valid = false;
      } else { hideError("checkIn"); }

      if (!checkOut || checkOut <= checkIn) {
        showError("checkOut", dict.inquiry.errors.checkOut);
        valid = false;
      } else { hideError("checkOut"); }

      if (!room) {
        showError("room", dict.inquiry.errors.suitePref);
        valid = false;
      } else { hideError("room"); }

      if (!name || name.length < 2) {
        showError("name", dict.inquiry.errors.fullName);
        valid = false;
      } else { hideError("name"); }

      if (!contact || contact.length < 6) {
        showError("contact", dict.inquiry.errors.contact);
        valid = false;
      } else { hideError("contact"); }

      if (!valid) return;

      // Summary code
      const refCode = "HN-" + Math.floor(1000 + Math.random() * 9000);
      $("#summaryCodeBadge").textContent = dict.inquiry.summary.refPrefix + refCode;

      const summaryGrid = $("#inquirySummaryDetails");
      if (summaryGrid) {
        summaryGrid.innerHTML = `
          <div><span class="body-caption">${dict.inquiry.summary.labels.dates}:</span><strong>${checkIn} → ${checkOut}</strong></div>
          <div><span class="body-caption">${dict.inquiry.summary.labels.room}:</span><strong>${room}</strong></div>
          <div><span class="body-caption">${dict.inquiry.summary.labels.guestName}:</span><strong>${name}</strong></div>
          <div><span class="body-caption">${dict.inquiry.summary.labels.contact}:</span><strong>${contact}</strong></div>
        `;
      }

      $("#inquirySummaryStage").classList.add("active");
      form.style.display = "none";
    });

    const resetBtn = $("#inquiryResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        form.style.display = "block";
        $("#inquirySummaryStage").classList.remove("active");
      });
    }
  }

  function showError(field, msg) {
    const el = $("#err_" + field);
    if (el) {
      el.textContent = msg;
      el.classList.add("active");
    }
  }

  function hideError(field) {
    const el = $("#err_" + field);
    if (el) {
      el.classList.remove("active");
    }
  }

  // =========================================================================
  // INITIALIZATION
  // =========================================================================
  document.addEventListener("DOMContentLoaded", function () {
    // Language Toggle Buttons
    $$(".lang-toggle-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = this.getAttribute("data-lang") || "vi";
        setLanguage(lang);
      });
    });

    // Mobile Menu Toggle
    const menuBtn = $("#menuToggleBtn");
    const overlay = $("#mobileNavOverlay");
    if (menuBtn && overlay) {
      menuBtn.addEventListener("click", function () {
        const active = overlay.classList.toggle("active");
        this.setAttribute("aria-expanded", active ? "true" : "false");
        if (active) {
          document.body.classList.add("nav-locked");
          menuBtn.textContent = APP_STATE.currentLang === "en" ? "CLOSE" : "ĐÓNG";
        } else {
          document.body.classList.remove("nav-locked");
          menuBtn.textContent = "MENU";
        }
      });
    }

    $$(".mobile-nav-close-trigger").forEach(function (el) {
      el.addEventListener("click", function () {
        if (overlay) {
          overlay.classList.remove("active");
          document.body.classList.remove("nav-locked");
          if (menuBtn) {
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "MENU";
          }
        }
      });
    });

    // Header scroll auto-shrink Lotte-hotel style effect
    window.addEventListener("scroll", function () {
      const hdr = $("#mainHeader");
      if (!hdr) return;
      if (window.scrollY > 20) {
        hdr.classList.add("scrolled");
      } else {
        hdr.classList.remove("scrolled");
      }
    }, { passive: true });

    initAccommodationsExplorer();
    initReservationForm();

    // Set Initial Language (Vietnamese default)
    setLanguage(APP_STATE.currentLang);
  });

})();
