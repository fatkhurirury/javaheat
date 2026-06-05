// JavaHeat — site-wide JS (vanilla)

// Brand constants (mirrors React constants/brand.js)
const BRAND = {
  name: "JavaHeat",
  email: "info@javaheat.com",
  phoneRaw: "6281228446702",
  phoneDisplay: "+62 812-2844-6702",
  whatsappMsg:
    "Hello JavaHeat, I am interested in your Plus Value graded charcoal. Could you share more details?",
  logoUrl:
    "https://customer-assets.emergentagent.com/job_e04965c3-8ed4-4715-8caa-bc017e530dd1/artifacts/pw124b40_Logo.png",
};

const buildWhatsAppHref = (msg) => {
  const text = encodeURIComponent(msg || BRAND.whatsappMsg);
  return `https://wa.me/${BRAND.phoneRaw}?text=${text}`;
};

const buildMailtoHref = () => `mailto:${BRAND.email}`;

window.JH = { BRAND, buildWhatsAppHref, buildMailtoHref };

// WhatsApp inline-SVG glyph
const WA_GLYPH = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>`;

// SVG icon helper (used for icon attribute in HTML to keep markup small)
const ICONS = {
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m22 2-7 20-4-9-9-4 20-7Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2 11 13" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="3"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6 6 18M6 6l12 12" stroke-linecap="round"/></svg>`,
  scanLine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M3 12h18"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h7a7 7 0 0 1 7 7v1a7 7 0 0 1-7 7Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  tree: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 13.5v8M7 13.5l-1.5 2.5h13L17 13.5M9 9l-1.5 2h9L15 9M11 4 9 6h6l-2-2zM12 4v18"/></svg>`,
  droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 21.5a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7Z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8z"/><path d="m9 12 2 2 4-4"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="m12 3-1.9 5.8L4 11l6.1 1.9L12 19l1.9-6.1L20 11l-6.1-2.2L12 3z"/></svg>`,
};
window.ICONS = ICONS;

// ---------- Nav ----------
function renderNav() {
  const host = document.getElementById("site-nav");
  if (!host) return;

  const path = location.pathname.replace(/\/$/, "");
  const isHome = path === "" || path === "/index.html" || path.endsWith("/index.html");
  const isAbout = path.endsWith("/about.html");
  const isProducts = path.endsWith("/products.html");
  const isContact = path.endsWith("/contact.html");

  const darkHero = isHome || isAbout;
  host.classList.toggle("light-page", !darkHero);

  const links = [
    { href: "index.html", label: "Home", active: isHome },
    { href: "products.html", label: "Products", active: isProducts },
    { href: "about.html", label: "About", active: isAbout },
    { href: "contact.html", label: "Contact", active: isContact },
  ];

  host.innerHTML = `
    <div class="nav-inner">
      <a class="nav-logo" href="index.html" data-testid="nav-logo" aria-label="JavaHeat home">
        <span class="nav-logo-mark"><img src="${BRAND.logoUrl}" alt="JavaHeat"></span>
        <span style="display:flex;flex-direction:column;">
          <span class="nav-title">JavaHeat</span>
          <span class="nav-sub">Plus Value</span>
        </span>
      </a>
      <nav class="nav-links">
        ${links
          .map(
            (l) =>
              `<a class="nav-link${l.active ? " active" : ""}" href="${l.href}" data-testid="nav-link-${l.label.toLowerCase()}">${l.label}</a>`,
          )
          .join("")}
      </nav>
      <button class="nav-mobile-toggle" id="nav-toggle" aria-label="Toggle menu" data-testid="nav-mobile-toggle">
        <span id="nav-toggle-icon" style="display:inline-flex;width:20px;height:20px;">${ICONS.menu}</span>
      </button>
    </div>
    <div class="nav-mobile-sheet" id="nav-sheet" data-testid="nav-mobile-sheet">
      <div class="inner">
        ${links
          .map(
            (l) =>
              `<a class="${l.active ? "active" : ""}" href="${l.href}" data-testid="nav-link-${l.label.toLowerCase()}-mobile">${l.label}</a>`,
          )
          .join("")}
      </div>
    </div>
  `;

  // Scroll behavior — switch to scrolled state past 24px (or, on dark-hero
  // pages, only after the dark hero is no longer behind the nav so the menu
  // never sits as dark-text on a dark hero).
  const heroEl = document.querySelector(".hero");
  const onScroll = () => {
    let pastHero;
    if (darkHero && heroEl) {
      pastHero = heroEl.getBoundingClientRect().bottom <= 8;
    } else {
      pastHero = window.scrollY > 24;
    }
    host.classList.toggle("scrolled", pastHero);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  // Mobile toggle
  const toggle = document.getElementById("nav-toggle");
  const sheet = document.getElementById("nav-sheet");
  const iconHost = document.getElementById("nav-toggle-icon");
  toggle?.addEventListener("click", () => {
    const open = sheet.classList.toggle("open");
    iconHost.innerHTML = open ? ICONS.x : ICONS.menu;
  });
}

// ---------- Footer ----------
function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  host.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <p class="eyebrow" style="color:rgba(255,255,255,0.6);margin-bottom:16px;">JavaHeat — Plus Value</p>
          <h3 style="font-size:clamp(2rem, 4vw, 3rem);line-height:1.05;letter-spacing:-0.01em;">The first eco-friendly graded charcoal.</h3>
          <p style="margin-top:32px;font-size:14px;line-height:1.7;opacity:0.7;max-width:440px;">
            Engineered in Java. Graded by hand. Delivered to connoisseurs, restaurants and lounges across the world.
          </p>
        </div>
        <div>
          <p class="eyebrow" style="color:rgba(255,255,255,0.6);margin-bottom:24px;">Navigate</p>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;font-size:14px;">
            <li><a class="underline-link" href="index.html">Home</a></li>
            <li><a class="underline-link" href="about.html">About</a></li>
            <li><a class="underline-link" href="products.html">Products</a></li>
            <li><a class="underline-link" href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <p class="eyebrow" style="color:rgba(255,255,255,0.6);margin-bottom:24px;">Reach Us</p>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:16px;font-size:14px;">
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <span style="opacity:0.7;width:16px;height:16px;display:inline-flex;margin-top:2px;">${ICONS.mail}</span>
              <a class="underline-link" href="${buildMailtoHref()}" data-testid="footer-email-link">${BRAND.email}</a>
            </li>
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <span style="opacity:0.7;width:16px;height:16px;display:inline-flex;margin-top:2px;">${ICONS.phone}</span>
              <a class="underline-link" href="${buildWhatsAppHref()}" target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp-link">${BRAND.phoneDisplay} · WhatsApp</a>
            </li>
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <span style="opacity:0.7;width:16px;height:16px;display:inline-flex;margin-top:2px;">${ICONS.mapPin}</span>
              <span style="opacity:0.8;">Central Java, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span id="year"></span> JavaHeat. All rights reserved.</p>
        <p>Plus Value · Graded · Eco-friendly</p>
      </div>
    </div>
  `;
  document.getElementById("year").textContent = new Date().getFullYear();
}

// ---------- WhatsApp FAB ----------
function renderFab() {
  const host = document.getElementById("wa-fab");
  if (!host) return;
  host.innerHTML = `
    <a class="wa-fab" data-testid="wa-fab" href="${buildWhatsAppHref()}" target="_blank" rel="noopener noreferrer" aria-label="Chat with JavaHeat on WhatsApp">
      ${WA_GLYPH}
    </a>
  `;
}

// ---------- Reveal on scroll ----------
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseFloat(entry.target.dataset.delay || "0");
          if (delay) {
            setTimeout(() => entry.target.classList.add("in-view"), delay * 1000);
          } else {
            entry.target.classList.add("in-view");
          }
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  els.forEach((el) => io.observe(el));
}

// ---------- Replace WhatsApp / mailto links by [data-wa-msg] ----------
function bindLinks() {
  document.querySelectorAll("[data-wa-msg]").forEach((el) => {
    el.setAttribute("href", buildWhatsAppHref(el.getAttribute("data-wa-msg")));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
  document.querySelectorAll("[data-wa-default]").forEach((el) => {
    el.setAttribute("href", buildWhatsAppHref());
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
  document.querySelectorAll("[data-mailto]").forEach((el) => {
    el.setAttribute("href", buildMailtoHref());
  });
}

// ---------- Inject icons by [data-icon] ----------
function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.getAttribute("data-icon");
    if (ICONS[name]) {
      el.innerHTML = ICONS[name];
      el.style.display = el.style.display || "inline-flex";
    }
  });
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
  renderFab();
  injectIcons();
  bindLinks();
  setupReveal();
});
