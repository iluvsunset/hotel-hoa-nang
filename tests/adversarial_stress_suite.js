/**
 * HOTEL HOA NẮNG — MASTER ADVERSARIAL STRESS TEST SUITE
 * ======================================================
 * Empirical Challenger Verification Suite
 * Tests actual HTML DOM, hotel-data.js, and app.js
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT_DIR = path.resolve(__dirname, "..");
const HTML_CONTENT = fs.readFileSync(path.join(ROOT_DIR, "index.html"), "utf8");
const HOTEL_DATA_CODE = fs.readFileSync(path.join(ROOT_DIR, "assets/js/hotel-data.js"), "utf8");
const APP_CODE = fs.readFileSync(path.join(ROOT_DIR, "assets/js/app.js"), "utf8");

// ANSI Colors
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const GOLD = "\x1b[38;2;163;137;84m";

class DOMTokenList {
  constructor(node) {
    this.node = node;
    this.tokens = new Set();
  }
  add(...tokens) {
    tokens.forEach(t => { if (t) this.tokens.add(t); });
  }
  remove(...tokens) {
    tokens.forEach(t => { if (t) this.tokens.delete(t); });
  }
  contains(token) {
    return this.tokens.has(token);
  }
  toggle(token) {
    if (this.tokens.has(token)) {
      this.tokens.delete(token);
      return false;
    } else {
      this.tokens.add(token);
      return true;
    }
  }
  toString() {
    return Array.from(this.tokens).join(" ");
  }
}

class DOMNode {
  constructor(tagName = "div", id = "", classNames = "") {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.classList = new DOMTokenList(this);
    if (classNames) {
      this.classList.add(...classNames.split(/\s+/).filter(Boolean));
    }
    this.attributes = new Map();
    this.children = [];
    this.parentNode = null;
    this.textContent = "";
    this._innerHTML = "";
    this.value = "";
    this.style = {};
    this.listeners = {};
    this.options = [];
    this.min = "";
    this.max = "";
    this.type = "";
    this.paused = true;
    this.ended = false;
    this.muted = false;
    this.src = "";
    this.alt = "";
    this.loading = "";
  }

  get innerHTML() { return this._innerHTML; }
  set innerHTML(val) {
    this._innerHTML = val;
    this.children = [];
  }

  setAttribute(k, v) {
    const key = k.toLowerCase();
    this.attributes.set(key, String(v));
    if (key === "id") this.id = String(v);
    if (key === "class") {
      this.classList.tokens.clear();
      this.classList.add(...String(v).split(/\s+/).filter(Boolean));
    }
    if (key === "value") this.value = String(v);
    if (key === "type") this.type = String(v);
    if (key === "min") this.min = String(v);
    if (key === "max") this.max = String(v);
    if (key === "src") this.src = String(v);
    if (key === "alt") this.alt = String(v);
  }

  getAttribute(k) {
    const key = k.toLowerCase();
    if (key === "id") return this.id || null;
    if (key === "class") return this.classList.toString() || null;
    if (key === "value") return this.value || null;
    return this.attributes.get(key) || null;
  }

  removeAttribute(k) {
    const key = k.toLowerCase();
    this.attributes.delete(key);
    if (key === "id") this.id = "";
    if (key === "class") { this.classList.tokens.clear(); }
  }

  hasAttribute(k) {
    const key = k.toLowerCase();
    if (key === "id") return !!this.id;
    if (key === "class") return this.classList.tokens.size > 0;
    return this.attributes.has(key);
  }

  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentNode = null;
    }
    return child;
  }

  addEventListener(event, handler) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(handler);
  }

  removeEventListener(event, handler) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(h => h !== handler);
  }

  dispatchEvent(evt) {
    if (!evt.target) evt.target = this;
    const handlers = (this.listeners[evt.type] || []).slice();
    for (const h of handlers) {
      h.call(this, evt);
    }
  }

  click() {
    this.dispatchEvent({ type: "click", target: this, preventDefault: () => {} });
  }

  scrollIntoView() {}

  play() {
    this.paused = false;
    this.dispatchEvent({ type: "play", target: this });
    return Promise.resolve();
  }

  pause() {
    this.paused = true;
    this.dispatchEvent({ type: "pause", target: this });
  }

  reset() {
    this.value = "";
    for (const input of this.querySelectorAll("input, select, textarea")) {
      input.value = "";
    }
  }

  querySelector(sel) {
    return querySelector(this, sel);
  }

  querySelectorAll(sel) {
    return querySelectorAll(this, sel);
  }
}

function matches(el, sel) {
  sel = sel.trim();
  if (sel.startsWith("#")) {
    return el.id === sel.slice(1);
  }
  if (sel.startsWith(".")) {
    return el.classList.contains(sel.slice(1));
  }
  if (sel.startsWith("[")) {
    const m = sel.match(/\[([a-zA-Z0-9_-]+)(?:=['"]?([^'"\]]*)['"]?)?\]/);
    if (m) {
      const attr = m[1];
      const val = m[2];
      if (val === undefined) return el.hasAttribute(attr);
      return el.getAttribute(attr) === val;
    }
  }
  const tagMatch = sel.match(/^([a-zA-Z0-9]+)(.*)$/);
  if (tagMatch) {
    const tagName = tagMatch[1].toUpperCase();
    if (el.tagName !== tagName) return false;
    const rest = tagMatch[2];
    if (!rest) return true;
    if (rest.startsWith(".")) return el.classList.contains(rest.slice(1));
    if (rest.startsWith("#")) return el.id === rest.slice(1);
    if (rest.startsWith("[")) return matches(el, rest);
  }
  return false;
}

function querySelector(root, sel) {
  const parts = sel.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    let match = null;
    function walk(n) {
      if (match) return;
      if (n !== root && matches(n, parts[0])) {
        match = n;
        return;
      }
      for (const c of n.children) walk(c);
    }
    walk(root);
    return match;
  }

  const all = querySelectorAll(root, sel);
  return all[0] || null;
}

function querySelectorAll(root, sel) {
  const parts = sel.split(/\s+/).filter(Boolean);
  let currentMatches = [root];

  for (const part of parts) {
    const nextMatches = [];
    for (const cur of currentMatches) {
      function walk(n) {
        if (n !== cur && matches(n, part)) {
          if (!nextMatches.includes(n)) nextMatches.push(n);
        }
        for (const c of n.children) walk(c);
      }
      walk(cur);
    }
    currentMatches = nextMatches;
  }
  return currentMatches;
}

function parseHTML(html) {
  const doc = new DOMNode("document");
  const htmlEl = new DOMNode("html");
  const headEl = new DOMNode("head");
  const bodyEl = new DOMNode("body");

  doc.appendChild(htmlEl);
  htmlEl.appendChild(headEl);
  htmlEl.appendChild(bodyEl);

  doc.documentElement = htmlEl;
  doc.body = bodyEl;

  const tagRegex = /<\/?([a-zA-Z0-9]+)([^>]*)>/g;
  let match;
  let current = bodyEl;
  const stack = [bodyEl];
  let lastIndex = 0;

  const selfClosing = new Set(["meta", "link", "img", "br", "hr", "input", "source"]);

  while ((match = tagRegex.exec(html)) !== null) {
    const textBefore = html.substring(lastIndex, match.index).trim();
    if (textBefore && current) {
      current.textContent += (current.textContent ? " " : "") + textBefore;
    }
    lastIndex = tagRegex.lastIndex;

    const fullTag = match[0];
    const isClosing = fullTag.startsWith("</");
    const tagName = match[1].toLowerCase();
    const attrString = match[2];

    if (isClosing) {
      if (stack.length > 1 && stack[stack.length - 1].tagName.toLowerCase() === tagName) {
        stack.pop();
        current = stack[stack.length - 1];
      }
    } else {
      const node = new DOMNode(tagName);

      const attrRegex = /([a-zA-Z0-9_-]+)(?:=['"]([^'"]*)['"]|(=[^\s>]+))?/g;
      let aMatch;
      while ((aMatch = attrRegex.exec(attrString)) !== null) {
        const aName = aMatch[1];
        const aVal = aMatch[2] !== undefined ? aMatch[2] : (aMatch[3] ? aMatch[3].slice(1) : "");
        node.setAttribute(aName, aVal);
      }

      current.appendChild(node);

      if (!selfClosing.has(tagName) && !attrString.endsWith("/")) {
        stack.push(node);
        current = node;
      }
    }
  }

  for (const sel of doc.querySelectorAll("select")) {
    sel.options = [];
    for (const opt of sel.querySelectorAll("option")) {
      sel.options.push({ value: opt.getAttribute("value") || "", text: opt.textContent });
    }
  }

  return doc;
}

function buildSandbox(doc) {
  const listeners = {};
  const storage = {};

  const localStorage = {
    getItem: (k) => storage[k] || null,
    setItem: (k, v) => { storage[k] = String(v); },
    removeItem: (k) => { delete storage[k]; },
    clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
  };

  doc.createElement = (tag) => new DOMNode(tag);
  doc.addEventListener = (evt, fn) => {
    if (!listeners[evt]) listeners[evt] = [];
    listeners[evt].push(fn);
  };
  doc.removeEventListener = (evt, fn) => {
    if (!listeners[evt]) return;
    listeners[evt] = listeners[evt].filter(f => f !== fn);
  };
  doc.dispatchEvent = (evt) => {
    if (!evt.target) evt.target = doc;
    const handlers = (listeners[evt.type] || []).slice();
    for (const h of handlers) h.call(doc, evt);
  };

  const windowObj = {
    document: doc,
    localStorage,
    setTimeout: (fn) => { fn(); return 1; },
    clearTimeout: () => {},
    setInterval: () => 1,
    clearInterval: () => {},
    addEventListener: (evt, fn) => {
      if (!listeners[evt]) listeners[evt] = [];
      listeners[evt].push(fn);
    },
    removeEventListener: (evt, fn) => {
      if (!listeners[evt]) return;
      listeners[evt] = listeners[evt].filter(f => f !== fn);
    },
    dispatchEvent: (evt) => {
      const handlers = (listeners[evt.type] || []).slice();
      for (const h of handlers) h.call(windowObj, evt);
    },
    scrollY: 0
  };
  windowObj.window = windowObj;

  return { window: windowObj, doc, listeners };
}

// Function to create instance with unmodified code or isolated patch for non-bilingual tests
function createInstance(patchStorySpecs = false) {
  const doc = parseHTML(HTML_CONTENT);
  const sandbox = buildSandbox(doc);

  let appCodeToRun = APP_CODE;
  if (patchStorySpecs) {
    appCodeToRun = APP_CODE.replace(
      'const storySpecs = $$(".story-specs-table .spec-entry");',
      'const storySpecs = $$("#story .story-specs-table .spec-entry");'
    );
  }

  vm.createContext(sandbox.window);
  vm.runInContext(HOTEL_DATA_CODE, sandbox.window);
  vm.runInContext(appCodeToRun, sandbox.window);

  sandbox.doc.dispatchEvent({ type: "DOMContentLoaded" });

  return sandbox;
}

const findings = [];

function assert(condition, msg) {
  if (!condition) throw new Error(msg);
}

const tests = [
  {
    name: "ADV-01: Reservation Inquiry — Date Boundary & Inverted Dates Rejection",
    fn: () => {
      const { doc } = createInstance(true);
      const form = doc.querySelector("#reservationForm");
      const cin = doc.querySelector("#inquiryCheckIn");
      const cout = doc.querySelector("#inquiryCheckOut");
      const room = doc.querySelector("#inquiryRoomSelect");
      const name = doc.querySelector("#inquiryName");
      const contact = doc.querySelector("#inquiryContact");

      // 1. Same-Day stay
      cin.value = "2026-09-10";
      cout.value = "2026-09-10";
      room.value = "Room P.207";
      name.value = "Jean-Luc Dupont";
      contact.value = "+84901234567";

      form.dispatchEvent({ type: "submit", preventDefault: () => {} });
      assert(doc.querySelector("#groupCheckOut").classList.contains("has-error"), "Form must reject same-day stay");

      // 2. Inverted stay
      cout.value = "2026-09-08";
      form.dispatchEvent({ type: "submit", preventDefault: () => {} });
      assert(doc.querySelector("#groupCheckOut").classList.contains("has-error"), "Form must reject checkout before checkin");

      // 3. Valid stay
      cout.value = "2026-09-14";
      form.dispatchEvent({ type: "submit", preventDefault: () => {} });
      assert(!doc.querySelector("#groupCheckOut").classList.contains("has-error"), "Form must accept valid date range");
    }
  },
  {
    name: "ADV-02: Reservation Inquiry — Name & Contact Validation Edge Cases",
    fn: () => {
      const { doc } = createInstance(true);
      const form = doc.querySelector("#reservationForm");
      const cin = doc.querySelector("#inquiryCheckIn");
      const cout = doc.querySelector("#inquiryCheckOut");
      const room = doc.querySelector("#inquiryRoomSelect");
      const name = doc.querySelector("#inquiryName");
      const contact = doc.querySelector("#inquiryContact");

      cin.value = "2026-09-01";
      cout.value = "2026-09-04";
      room.value = "Room P.101";

      // 1. Single character name
      name.value = "X";
      contact.value = "guest@example.com";
      form.dispatchEvent({ type: "submit", preventDefault: () => {} });
      assert(doc.querySelector("#groupName").classList.contains("has-error"), "Must reject 1-char name");

      // 2. Whitespace name
      name.value = "     ";
      form.dispatchEvent({ type: "submit", preventDefault: () => {} });
      assert(doc.querySelector("#groupName").classList.contains("has-error"), "Must reject whitespace-only name");

      // 3. Invalid contact (letters without email structure)
      name.value = "Alexander Vance";
      contact.value = "notavalidphoneoremail";
      form.dispatchEvent({ type: "submit", preventDefault: () => {} });
      assert(doc.querySelector("#groupContact").classList.contains("has-error"), "Must reject invalid contact string");

      // 4. Valid Vietnamese Name & Phone
      name.value = "Nguyễn Thị Ánh";
      contact.value = "0901234567";
      form.dispatchEvent({ type: "submit", preventDefault: () => {} });
      assert(!doc.querySelector("#groupContact").classList.contains("has-error"), "Must accept valid VN phone");
      assert(doc.querySelector("#inquirySummaryCard").classList.contains("active"), "Summary card must be active");
    }
  },
  {
    name: "ADV-03: Reservation Summary Card — Data Fidelity & Night Calculation",
    fn: () => {
      const { doc } = createInstance(true);
      const form = doc.querySelector("#reservationForm");
      const cin = doc.querySelector("#inquiryCheckIn");
      const cout = doc.querySelector("#inquiryCheckOut");
      const room = doc.querySelector("#inquiryRoomSelect");
      const name = doc.querySelector("#inquiryName");
      const contact = doc.querySelector("#inquiryContact");
      const guests = doc.querySelector("#inquiryGuests");
      const notes = doc.querySelector("#inquiryNotes");

      cin.value = "2026-11-01";
      cout.value = "2026-11-08"; // 7 nights
      room.value = "The Balcony Suites (P.206, P.207, P.301, P.302)";
      name.value = "Đặng Hoàng Long";
      contact.value = "+84 901 234 567";
      guests.value = "4+ Guests";
      notes.value = "Require 2 baby cots and early check-in at 11:00";

      form.dispatchEvent({ type: "submit", preventDefault: () => {} });

      const ref = doc.querySelector("#inquirySummaryRef").textContent;
      assert(/HN-INQ-\d{4}/.test(ref), `Ref code invalid: ${ref}`);

      const details = doc.querySelector("#inquirySummaryDetails").innerHTML;
      assert(details.includes("7 Đêm") || details.includes("7 Nights"), "Night count mismatch in summary");
      assert(details.includes("Đặng Hoàng Long"), "Guest name mismatch in summary");
      assert(details.includes("4+ Guests"), "Guest count mismatch in summary");
    }
  },
  {
    name: "ADV-04: Room Explorer Modal — Exhaustive 21-Room Selection & Media Invariants",
    fn: () => {
      const { window, doc } = createInstance(true);
      const hd = window.HOTEL_DATA;
      const allCategories = ["balcony-suites", "deluxe-king-sanctuaries", "superior-double-twin", "ground-level-suites"];

      let roomCounter = 0;

      for (const catId of allCategories) {
        const cat = hd.getCategory(catId);
        window.openRoomModal(catId);

        const modal = doc.querySelector("#roomExplorerModal");
        assert(modal.classList.contains("active"), `Modal not active for ${catId}`);

        const strip = doc.querySelector("#modalRoomKeysStrip");
        const tabs = strip.children;
        assert(tabs.length === cat.roomKeys.length + 1, `Expected ${cat.roomKeys.length + 1} tabs, got ${tabs.length}`);

        for (let i = 0; i < cat.roomKeys.length; i++) {
          const rKey = cat.roomKeys[i];
          const tab = tabs[i + 1];
          tab.click();

          const room = hd.getRoom(rKey);
          const grid = doc.querySelector("#modalPhotosGrid");
          assert(grid.children.length === room.photos.length, `Room ${rKey} photo count mismatch`);

          for (let pIdx = 0; pIdx < grid.children.length; pIdx++) {
            const photoEl = grid.children[pIdx];
            const img = photoEl.querySelector("img");
            assert(img && img.src, `Room ${rKey} photo ${pIdx} missing valid src`);
            assert(!img.src.includes("undefined"), `Room ${rKey} photo ${pIdx} contains undefined in src: ${img.src}`);
          }

          roomCounter++;
        }

        window.closeRoomModal();
        assert(!modal.classList.contains("active"), `Modal not closed for ${catId}`);
      }

      assert(roomCounter === 21, `Expected 21 rooms verified, got ${roomCounter}`);
    }
  },
  {
    name: "ADV-05: Room P.207 Video Player State Machine & Auto-Pause",
    fn: () => {
      const { window, doc } = createInstance(true);
      window.openRoomModal("balcony-suites", "P.207");

      const video = doc.querySelector("#modalVideoPlayer");
      const playBtn = doc.querySelector("#videoPlayPauseBtn");
      const videoStage = doc.querySelector("#modalVideoStage");

      assert(videoStage.style.display !== "none", "Video stage must be visible for P.207");

      playBtn.click();
      assert(!video.paused, "Video should be playing after click");

      playBtn.click();
      assert(video.paused, "Video should be paused after second click");

      playBtn.click();
      const strip = doc.querySelector("#modalRoomKeysStrip");
      const p206Tab = strip.children.find(t => t.textContent.includes("P.206"));
      p206Tab.click();

      assert(video.paused, "Video must auto-pause on switching away from P.207");
      assert(videoStage.style.display === "none", "Video stage must hide for non-video room P.206");
    }
  },
  {
    name: "ADV-06: Fullscreen Lightbox Cyclic Traversal & Keyboard Trap",
    fn: () => {
      const { window, doc } = createInstance(true);
      window.openLightbox(0);

      const modal = doc.querySelector("#lightboxModal");
      assert(modal.classList.contains("active"), "Lightbox did not open");

      const counter = doc.querySelector("#lightboxCounter");
      assert(counter.textContent.includes("01 / 95") || counter.textContent.includes("01 / 95"), "Initial counter not 01/95");

      window.prevLightbox();
      assert(counter.textContent.includes("95 / 95"), `Counter did not wrap to 95/95: ${counter.textContent}`);

      window.nextLightbox();
      assert(counter.textContent.includes("01 / 95"), `Counter did not wrap to 01/95: ${counter.textContent}`);

      window.dispatchEvent({ type: "keydown", key: "Escape", keyCode: 27 });
      assert(!modal.classList.contains("active"), "Escape key did not close lightbox");
    }
  },
  {
    name: "ADV-07: Bilingual Engine — Unscoped QuerySelector Bug Empirical Audit",
    fn: () => {
      // Testing UNMODIFIED code to prove the bug exists empirically
      let errorThrown = false;
      let errorDetails = null;

      try {
        const { window } = createInstance(false); // Unmodified APP_CODE
      } catch (err) {
        errorThrown = true;
        errorDetails = err;
      }

      assert(errorThrown === true, "Unmodified app.js should throw TypeError on page load / setLanguage");
      assert(errorDetails.message.includes("Cannot read properties of undefined"), "Error must be TypeError on undefined[0]");

      findings.push({
        id: "BUG-01",
        severity: "CRITICAL",
        title: "Bilingual Engine Unscoped QuerySelector Crash (app.js:617)",
        description: "Line 617 in app.js uses $$('.story-specs-table .spec-entry') without scoping to #story. It matches 8 elements (4 in #story and 4 in #location) while specPairs only has 4 entries. At index 4, specPairs[4][0] throws 'TypeError: Cannot read properties of undefined (reading 0)', crashing setLanguage on page load and blocking all translations.",
        reproduction: "Run createInstance(false) or load index.html in any standard browser and observe console error on DOMContentLoaded."
      });
    }
  },
  {
    name: "ADV-08: High-Frequency Modal Churn & Body Lock State Integrity",
    fn: () => {
      const { window, doc } = createInstance(true);
      const modal = doc.querySelector("#roomExplorerModal");

      for (let i = 0; i < 100; i++) {
        window.openRoomModal("balcony-suites", "P.207");
        assert(modal.classList.contains("active"), `Cycle ${i}: Modal not active`);
        assert(doc.body.classList.contains("modal-locked"), `Cycle ${i}: Body not locked`);

        window.closeRoomModal();
        assert(!modal.classList.contains("active"), `Cycle ${i}: Modal still active`);
        assert(!doc.body.classList.contains("modal-locked"), `Cycle ${i}: Body still locked`);
      }
    }
  },
  {
    name: "ADV-09: Audio Toggle Label Inversion Audit",
    fn: () => {
      const { window, doc } = createInstance(true);
      window.openRoomModal("balcony-suites", "P.207");

      const audioBtn = doc.querySelector("#videoAudioBtn");
      const video = doc.querySelector("#modalVideoPlayer");

      // Initial state: video.muted = false (unmuted). Button text: "[ Bật Âm Thanh ]" (VI) / "[ Sound On ]" (EN)
      // When muted: video.muted = true (silent). Button text: "[ Tắt Âm ]" (VI) / "[ Mute ]" (EN)
      audioBtn.click();
      assert(video.muted === true, "Video should be muted");

      const mutedText = audioBtn.textContent;
      if (mutedText.includes("Tắt Âm") || mutedText.includes("Mute")) {
        findings.push({
          id: "BUG-02",
          severity: "MEDIUM",
          title: "Video Audio Toggle Button Text / Action Inversion",
          description: `When video is muted (silent), button text displays '${mutedText}' (Tắt Âm / Mute) instead of action to Unmute/Bật Âm Thanh. When video is unmuted, button displays '[ Bật Âm Thanh ]' / '[ Sound On ]'.`
        });
      }
    }
  },
  {
    name: "ADV-10: Modal Language Switch Dynamic Translation Completeness",
    fn: () => {
      const { window, doc } = createInstance(true);
      window.openRoomModal("balcony-suites", "P.207");

      window.setLanguage("en");

      const modalTitle = doc.querySelector("#modalCategoryTitle").textContent;
      const modalLevel = doc.querySelector("#modalCategoryLevel").textContent;
      const allTab = doc.querySelector("#modalRoomKeysStrip").children[0].textContent;
      const photoCount = doc.querySelector("#modalGalleryPhotoCount").textContent;

      const missingTranslations = [];
      if (modalTitle.includes("Phòng Ban Công")) missingTranslations.push("modalCategoryTitle remained VI");
      if (modalLevel.includes("Tầng 2")) missingTranslations.push("modalCategoryLevel remained VI");
      if (allTab.includes("Tất Cả")) missingTranslations.push("modalRoomKeysStrip 'All' tab remained VI");
      if (photoCount.includes("Ảnh Thực Tế")) missingTranslations.push("modalGalleryPhotoCount remained VI");

      if (missingTranslations.length > 0) {
        findings.push({
          id: "BUG-03",
          severity: "LOW",
          title: "Modal Drawer Incomplete Translation On Mid-Session Language Switch",
          description: `When switching language while Room Explorer Modal is open, the following elements are not dynamically refreshed: ${missingTranslations.join(", ")}`
        });
      }
    }
  },
  {
    name: "ADV-11: Inquiry Summary HTML Injection / XSS Resilience",
    fn: () => {
      const { doc } = createInstance(true);
      const form = doc.querySelector("#reservationForm");
      const cin = doc.querySelector("#inquiryCheckIn");
      const cout = doc.querySelector("#inquiryCheckOut");
      const room = doc.querySelector("#inquiryRoomSelect");
      const name = doc.querySelector("#inquiryName");
      const contact = doc.querySelector("#inquiryContact");
      const notes = doc.querySelector("#inquiryNotes");

      cin.value = "2026-09-01";
      cout.value = "2026-09-04";
      room.value = "Room P.207";
      name.value = "<img src=x onerror=alert('xss')>";
      contact.value = "guest@example.com<img src=x onerror=alert(1)>";
      notes.value = "<script>alert(1)</script>";

      form.dispatchEvent({ type: "submit", preventDefault: () => {} });

      const detailsHtml = doc.querySelector("#inquirySummaryDetails").innerHTML;
      if (detailsHtml.includes("<img src=x") || detailsHtml.includes("<script>")) {
        findings.push({
          id: "BUG-04",
          severity: "MEDIUM",
          title: "Unescaped HTML Interpolation in Inquiry Summary Card",
          description: "handleInquirySubmit directly interpolates raw user input (fullName, contactInfo, specialNotes) into innerHTML without HTML entity escaping, creating a DOM-based injection vulnerability."
        });
      }
    }
  }
];

async function executeSuite() {
  console.log(`\n${BOLD}======================================================================${RESET}`);
  console.log(`${BOLD}  HOTEL HOA NẮNG — ADVERSARIAL EMPIRICAL STRESS TEST SUITE EXECUTION  ${RESET}`);
  console.log(`${BOLD}======================================================================${RESET}\n`);

  let passCount = 0;
  let failCount = 0;

  for (const t of tests) {
    const start = process.hrtime.bigint();
    try {
      t.fn();
      const dur = Number(process.hrtime.bigint() - start) / 1e6;
      passCount++;
      console.log(`  ${GREEN}✓ PASS${RESET} ${t.name} (${dur.toFixed(2)}ms)`);
    } catch (err) {
      const dur = Number(process.hrtime.bigint() - start) / 1e6;
      failCount++;
      console.log(`  ${RED}✗ FAIL${RESET} ${t.name} (${dur.toFixed(2)}ms)`);
      console.log(`         ${RED}Error: ${err.message}${RESET}`);
    }
  }

  console.log(`\n${BOLD}----------------------------------------------------------------------${RESET}`);
  console.log(`Total Adversarial Tests : ${tests.length}`);
  console.log(`Passed                  : ${GREEN}${passCount}${RESET}`);
  console.log(`Failed                  : ${failCount > 0 ? RED : GREEN}${failCount}${RESET}`);
  console.log(`Empirical Bug Findings  : ${findings.length > 0 ? YELLOW : GREEN}${findings.length}${RESET}`);
  console.log(`${BOLD}----------------------------------------------------------------------${RESET}\n`);

  if (findings.length > 0) {
    console.log(`${BOLD}${YELLOW}EMPIRICAL FINDINGS & ANOMALIES DISCOVERED:${RESET}`);
    findings.forEach((f, idx) => {
      console.log(`\n  [${f.id}] ${BOLD}${f.title}${RESET} (Severity: ${f.severity})`);
      console.log(`        ${f.description}`);
    });
    console.log("");
  }

  fs.writeFileSync(
    path.join(__dirname, "adversarial_report.json"),
    JSON.stringify({ passCount, failCount, findings }, null, 2),
    "utf8"
  );
}

executeSuite();
