# Bright Smile Dental Landing — Agent Notes

## Stack
- React 19 (Vite template)
- Vite 8
- Tailwind CSS 3
- PostCSS + Autoprefixer

## Commands
- `npm run dev` — start the Vite dev server at `http://localhost:5173`
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run `oxlint`

## Project structure
- `index.html` — page shell
- `src/main.jsx` — React entry point
- `src/App.jsx` — main landing page (all sections in one file)
- `src/index.css` — Tailwind directives + global styles
- `tailwind.config.js` — Tailwind theme config
- `postcss.config.js` — PostCSS config
- `public/` — static assets (favicon)
- `dist/` — production build output

## Conventions
- All UI is styled with Tailwind utility classes.
- Images are hot-linked from Pexels under the Pexels free-use license.
- The landing page is a single `App.jsx` with inline SVG icons and no extra icon library.
- No test suite is currently configured.

## Environment
- Verified with Node v26.4.0 and npm 11.17.0.
