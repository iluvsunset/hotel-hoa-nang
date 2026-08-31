import { animate, scroll, stagger } from "motion";

(function initMotion() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const easeEditorial = [0.16, 1, 0.3, 1];

  // 1. Hero Cinematic Entrance (Executes EXACTLY ONCE on mount)
  animate(".hero-eyebrow", { opacity: [0, 1], y: [-15, 0] }, { duration: 0.8, easing: easeEditorial, delay: 0.05 });
  animate(".hero-title", { opacity: [0, 1], y: [35, 0] }, { duration: 1.0, easing: easeEditorial, delay: 0.15 });
  animate(".hero-subtitle", { opacity: [0, 1], y: [25, 0] }, { duration: 0.85, easing: easeEditorial, delay: 0.3 });
  animate(".hero-actions a", { opacity: [0, 1], y: [20, 0] }, { duration: 0.75, easing: easeEditorial, delay: stagger(0.1, { start: 0.45 }) });
  animate(".hero-stats-grid .stat-item", { opacity: [0, 1], y: [20, 0] }, { duration: 0.75, easing: easeEditorial, delay: stagger(0.06, { start: 0.55 }) });

  // 2. Hero Backdrop Parallax Effect on Scroll
  const heroImg = document.querySelector(".hero-backdrop img");
  const heroSection = document.querySelector("#heroSection");
  if (heroImg && heroSection) {
    scroll(animate(heroImg, { y: ["0%", "16%"], scale: [1, 1.05] }), {
      target: heroSection,
      offset: ["start start", "end start"]
    });
  }

  // 3. One-Time Observer Engine (Prevents duplicate re-animations)
  const animatedSet = new WeakSet();

  const observeOnce = function (selector, callback, threshold) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animatedSet.has(entry.target)) {
          animatedSet.add(entry.target);
          obs.unobserve(entry.target);
          callback(entry.target);
        }
      });
    }, { threshold: threshold || 0.15, rootMargin: "0px 0px -40px 0px" });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  };

  // A. Section Headers
  observeOnce(".section-header", function (header) {
    animate(header.querySelectorAll(".eyebrow, .section-title, .section-intro"), {
      opacity: [0, 1],
      y: [30, 0]
    }, {
      duration: 0.85,
      easing: easeEditorial,
      delay: stagger(0.1)
    });
  }, 0.2);

  // B. Story Section
  observeOnce("#story", function (section) {
    animate(section.querySelector(".story-media-stack"), { opacity: [0, 1], x: [-35, 0] }, { duration: 1.0, easing: easeEditorial });
    animate(section.querySelectorAll(".story-content > *"), { opacity: [0, 1], y: [25, 0] }, { duration: 0.85, easing: easeEditorial, delay: stagger(0.1, { start: 0.15 }) });
  }, 0.15);

  // C. Suites Container (Staggered Suite Cards)
  observeOnce("#suitesContainer", function (container) {
    animate(container.querySelectorAll(".suite-card"), {
      opacity: [0, 1],
      y: [40, 0]
    }, {
      duration: 0.9,
      easing: easeEditorial,
      delay: stagger(0.12)
    });
  }, 0.1);

  // D. Curated Showcase Gallery
  observeOnce(".curated-showcase-grid", function (grid) {
    animate(grid.querySelectorAll(".curated-card"), {
      opacity: [0, 1],
      y: [45, 0],
      scale: [0.97, 1]
    }, {
      duration: 0.85,
      easing: easeEditorial,
      delay: stagger(0.1)
    });
  }, 0.1);

  // E. Amenities Grid (8-card wave reveal)
  observeOnce(".amenities-grid", function (grid) {
    animate(grid.querySelectorAll(".amenity-card"), {
      opacity: [0, 1],
      y: [30, 0]
    }, {
      duration: 0.75,
      easing: easeEditorial,
      delay: stagger(0.06)
    });
  }, 0.1);

  // F. Inquiry Form & Direct Info
  observeOnce("#inquiry", function (section) {
    animate(section.querySelector(".inquiry-info"), { opacity: [0, 1], x: [-30, 0] }, { duration: 0.9, easing: easeEditorial });
    animate(section.querySelector(".inquiry-form-card"), { opacity: [0, 1], x: [30, 0] }, { duration: 0.9, easing: easeEditorial, delay: 0.15 });
  }, 0.15);

  // G. Location Section
  observeOnce("#location", function (section) {
    animate(section.querySelectorAll(".story-grid > *"), {
      opacity: [0, 1],
      y: [30, 0]
    }, {
      duration: 0.9,
      easing: easeEditorial,
      delay: stagger(0.15)
    });
  }, 0.15);

  // H. Modal Drawer Animation on Open
  const prevOpenCategoryModal = window.openCategoryModal;
  if (typeof prevOpenCategoryModal === "function") {
    window.openCategoryModal = function (catId) {
      prevOpenCategoryModal(catId);
      setTimeout(function () {
        animate(".modal-header", { opacity: [0, 1], y: [-15, 0] }, { duration: 0.45, easing: easeEditorial });
        animate(".modal-section", { opacity: [0, 1], y: [20, 0] }, { duration: 0.55, easing: easeEditorial, delay: stagger(0.08) });
        animate(".modal-photo-item", { opacity: [0, 1], scale: [0.92, 1] }, { duration: 0.45, easing: easeEditorial, delay: stagger(0.04) });
      }, 50);
    };
  }
})();
