(function initScrollAnimations() {
  function startObserver() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(
      ".section-header, .story-media-stack, .story-content, .suite-card, .curated-card, .amenity-card, .inquiry-info, .inquiry-form-card, #location .story-grid > *"
    );

    if (prefersReducedMotion) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    targets.forEach(function (el) {
      el.classList.add("reveal-on-scroll");
    });

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    targets.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < 0) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startObserver);
  } else {
    startObserver();
  }
})();
