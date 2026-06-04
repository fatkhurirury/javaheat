# JavaHeat — Static Site

Plus Value · The first eco-friendly graded charcoal.
Pure HTML + CSS + vanilla JavaScript. No build step, no backend, no framework.

## Structure

```
/
├── index.html              # Home
├── about.html              # About
├── products.html           # Products (3 grades + comparison)
├── contact.html            # Contact (WhatsApp form)
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── main.js         # Nav, footer, FAB, animations, icons
│       └── contact.js      # Contact form → WhatsApp
├── pdfs/                   # Pre-generated spec sheets
│   ├── javaheat-plus-value-spec-sheet.pdf
│   ├── javaheat-premium-spec-sheet.pdf
│   └── javaheat-eco-standard-spec-sheet.pdf
└── vercel.json             # Vercel config (clean URLs)
```

## Deploy to Vercel

In the Vercel "New Project" screen:

1. **Framework Preset:** `Other` (or leave blank — it's pure static)
2. **Root Directory:** `./` (repo root) ← keep as-is
3. **Build Command:** *(leave empty)*
4. **Output Directory:** *(leave empty — defaults to repo root)*
5. **Install Command:** *(leave empty)*
6. Click **Deploy**.

No environment variables needed. No build runs. Vercel will just serve the HTML files.

Thanks to `vercel.json` (`cleanUrls: true`), visiting `/about` will serve `about.html` automatically.

## Local preview

```
python3 -m http.server 8000
```
Then open <http://localhost:8000>.

## Contact form

The form on `contact.html` opens WhatsApp in a new tab with the user's
name, email, company, subject and message pre-filled, ready to send to
`+62 812-2844-6702`. No backend required.

## Editing content

- **Brand info / WhatsApp number / email:** edit `assets/js/main.js` (top — `BRAND` object).
- **Copy / sections:** edit the relevant `.html` file directly.
- **Spec sheet PDFs:** drop new files into `/pdfs/` with the same filenames.
