# JavaHeat — PRD

## Original problem statement
User imported existing JavaHeat project (React frontend `/frontend` + FastAPI backend `/backend`) and wants to deploy the **frontend** to Vercel using the **Create React App** application preset.

## Vercel deployment failure (root cause)
Vercel build failed with `sh: line 1: react-scripts: command not found` (exit 127).
Reason: Root Directory was left as `./` (repo root). There is no `package.json`
at the root; the React app lives in `/frontend`.

## Fix
1. In Vercel → **Root Directory = `frontend`**
2. **Application Preset = Create React App** (already selected by user)
3. Add env var `REACT_APP_BACKEND_URL` pointing to a hosted backend (Emergent preview/deploy URL or wherever FastAPI is hosted)
4. Added `frontend/vercel.json` with SPA rewrite so React Router deep links (`/about`, `/products`, `/contact`) work on refresh
5. Backend (FastAPI) cannot be deployed via CRA preset → keep on Emergent

## Verified
- `yarn install` clean
- `CI=false yarn build` ✅
- `CI=true yarn build` ✅ (Vercel uses CI=true)
- Local backend + frontend running, homepage renders correctly

## Files added / changed
- `frontend/vercel.json` (new, SPA rewrite)
- `frontend/.env` (REACT_APP_BACKEND_URL)
- `backend/.env` (MONGO_URL/DB_NAME for local Mongo)
- `README.md` updated with Vercel deploy steps

## Backlog / next
- Optionally host FastAPI backend on Render/Railway/Fly so the site is fully independent of Emergent
- Optionally migrate backend endpoints to Vercel Python serverless functions (requires restructure)
