# JavaHeat — PRD

## Original problem statement
Convert the JavaHeat marketing site from React + FastAPI + MongoDB to pure
HTML / CSS / vanilla JavaScript, deployable to Vercel as a static site.

## User choices (confirmed)
- File structure: **Multi-page** (`index.html`, `about.html`, `products.html`, `contact.html`)
- Contact form: **WhatsApp** (form contents pre-fill a WhatsApp message)
- PDFs: **Pre-generated static PDFs** in `/pdfs/`
- Animations: **Vanilla equivalents** (IntersectionObserver reveals, CSS marquee, CSS hover scales, ping FAB)
- Styling: **Plain CSS** (single `styles.css`) — kept Tailwind-like utilities locally so no CDN dependency
- Cleanup: **Replace everything in /app with the static site**

## Implementation
- `index.html` — Home (hero, marquee, eco-grading system, Plus Value product, benefits bento, grading process, sustainability quote, final CTA)
- `about.html` — Hero, story (drop cap), pull quote, 4 pillars, stat band, CTA
- `products.html` — Hero, eco-grading system, 3 grade blocks (Plus Value / Premium / Eco Standard), comparison table, CTA
- `contact.html` — Hero, split layout (direct channels + WhatsApp form)
- `assets/css/styles.css` — All site styles (~700 lines, single file, no build)
- `assets/js/main.js` — Nav, footer, FAB rendering; reveal observer; icon injection; brand/whatsapp helpers
- `assets/js/contact.js` — Contact form → builds WhatsApp deep link, shows success state
- `pdfs/` — 3 pre-generated PDF spec sheets (generated once from the old backend code)
- `vercel.json` — `cleanUrls: true` so `/about` → `about.html`

## Vercel deployment
1. Framework preset: **Other** (or blank)
2. Root Directory: `./`
3. Build / install / output commands: **all empty**
4. Click Deploy

No env vars. No build step. No backend.

## Verified
- All 4 pages render correctly (screenshots taken)
- WhatsApp form deep link generated correctly (verified — opens `wa.me/6281228446702` with form content)
- All 3 PDF downloads return 200
- Nav scroll behavior, mobile hamburger, marquee, reveal animations all working
- WhatsApp FAB visible on all pages with ping animation

## Files
```
/app/
├── index.html
├── about.html
├── products.html
├── contact.html
├── assets/
│   ├── css/styles.css   (+ comprehensive responsive overrides at the end)
│   └── js/{main,contact}.js
├── pdfs/
│   ├── javaheat-plus-value-spec-sheet.pdf
│   ├── javaheat-premium-spec-sheet.pdf
│   └── javaheat-eco-standard-spec-sheet.pdf
├── vercel.json
├── README.md
└── frontend/package.json  ← preview-only shim so the Emergent preview URL
                              keeps serving the static files via supervisor.
                              NOT pushed to GitHub (covered by .gitignore? — see Backlog).
```

## Responsive (added)
- Mobile breakpoints: `<=1023` (tablet), `<=879` (nav-to-hamburger), `<=767` (mobile), `<=480` (extra-small)
- Mobile nav: hamburger sheet, links collapse, CTA fills sheet
- Hero font goes from 152px → 42.9px on 390px width
- Section padding 160px → 64px on mobile
- 3-col bento stats → single column on mobile (2-col spec cells stay 2-col for legibility)
- About pillars `.grid-2` → 356px single column; stat grid 4×1 → 2×2 below 1024px
- Products comparison table → horizontal scroll wrapper
- Contact split layout collapses to vertical stack below 1024px
- Buttons fill width inside `.cta-stack` on mobile
- Marquee, drop-cap, blockquote, FAB all sized down on mobile
- `img/svg/video { max-width: 100%; height: auto; }` global to prevent overflow

## Verified
- DOM measurements at 390px confirm: nav-links hidden, hamburger visible, hero 42.9px, section padding 64px, contact split single column, products spec bento single column, about pillars single column, comparison table overflow-x:auto

## Backlog
- Add `/frontend` to `.gitignore` (it's only used by Emergent's supervisor to serve the static site on the preview URL — should not ship to Vercel).
