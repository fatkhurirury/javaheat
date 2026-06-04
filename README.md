# JavaHeat

Eco-graded charcoal — marketing site.

## Project Structure
- `frontend/` — React (Create React App + CRACO) — deployable to Vercel
- `backend/`  — FastAPI + MongoDB (PDF spec sheets, contact form, grades API)

## Deploy frontend to Vercel

In the Vercel "New Project" screen:

1. **Application Preset:** `Create React App`
2. **Root Directory:** `frontend`  ← important (click *Edit* and set it)
3. **Build and Output Settings:** leave as defaults (CRA preset handles it)
   - Build Command: `yarn build` (or leave default)
   - Output Directory: `build` (default)
   - Install Command: `yarn install` (default)
4. **Environment Variables (Required):**
   - `REACT_APP_BACKEND_URL` = your backend base URL (e.g. your Emergent deployment URL — no trailing slash, no `/api`)
5. Click **Deploy**.

The included `frontend/vercel.json` adds an SPA rewrite so deep links
(`/about`, `/products`, `/contact`) work on refresh.

## Backend
The FastAPI backend is **not** deployable via the Vercel "Create React App"
preset. Keep it on Emergent (or any FastAPI-capable host) and point
`REACT_APP_BACKEND_URL` to it.
