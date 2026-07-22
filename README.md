# Bright Smile Dental Care — Landing Page

A modern, responsive dental practice landing page built with React 19, Vite, and Tailwind CSS. It ships with three interchangeable design variants (A/B/C) for A/B testing, selectable at runtime.

## Tech stack

- **React 19** — UI library
- **Vite 8** — dev server and build tool
- **Tailwind CSS 3** — utility-first styling (with PostCSS + Autoprefixer)
- **Oxlint** — linting

## Requirements

- **Node.js** 18+ (verified with Node 26 and npm 11)
- **npm** (comes with Node)

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server (with hot module reload):

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server at `http://localhost:5173`. |
| `npm run build` | Produce an optimized production build in `dist/`. |
| `npm run preview` | Serve the built `dist/` locally to preview the production build. |
| `npm run lint` | Run Oxlint over the codebase. |

## Design variants (A/B testing)

The page renders one of three variants. Switch between them in two ways:

- **On-screen switcher** — use the floating "Variant" pill at the bottom of the page.
- **URL query parameter** — append `?variant=a`, `?variant=b`, or `?variant=c`, e.g. `http://localhost:5173/?variant=b`. The selected variant is persisted back into the URL.

If no (or an unknown) variant is specified, **Variant A** is used by default.

## Project structure

```
index.html              # Page shell (title, meta, favicon, root div)
src/
  main.jsx              # React entry point
  App.jsx              # Variant selector + on-screen switcher
  variants/
    VariantA.jsx       # Full landing page — design A
    VariantB.jsx       # Full landing page — design B
    VariantC.jsx       # Full landing page — design C
  index.css            # Tailwind directives + global styles
  assets/              # Images used by the app
public/                # Static assets served as-is (favicon, icons)
tailwind.config.js      # Tailwind theme (colors, fonts)
vite.config.js          # Vite configuration
postcss.config.js       # PostCSS configuration
```

## Customizing the code

Each variant (`src/variants/VariantA.jsx`, `VariantB.jsx`, `VariantC.jsx`) is a self-contained landing page, so most edits happen inside these files.

### Change the text and content

Business name, headings, and copy are plain JSX inside each variant — search for the text you want to change (e.g. `Bright Smile`) and edit it directly.

Structured content lives in arrays near the top of each variant file and is the easiest place to make bulk changes:

- `services` — the list of service cards (each has `title`, `desc`, and an inline SVG `icon`).
- `navLinks` — the header navigation items.
- `officePhotos` — the gallery images.

To add or remove a service or nav item, add/remove an entry in the corresponding array — the UI updates automatically.

### Change images

Photos are loaded from Pexels via the `pexels(id, width)` helper at the top of each variant. Swap an image by changing the numeric photo `id`. To use your own images instead, drop files into `src/assets/` (import them) or `public/` (reference by path, e.g. `/my-image.jpg`).

### Change contact details

Update the phone number, email, and address text directly in the contact/footer sections of each variant. The appointment form fields (e.g. "Email address", "Phone number") are also plain JSX you can edit.

### Change colors and fonts

Global theme tokens are defined in `tailwind.config.js` under `theme.extend`:

- `colors.teal.*` — the brand color palette used throughout. Adjust these hex values to re-brand the site.
- `fontFamily.sans` — the default font stack.

For one-off styling, edit the Tailwind utility classes directly on the elements. Global CSS and Tailwind directives live in `src/index.css`.

### Add a new variant

1. Create `src/variants/VariantD.jsx` exporting a React component (copy an existing variant as a starting point).
2. Import it in `src/App.jsx` and add it to the `variants` map:

   ```jsx
   import VariantD from './variants/VariantD.jsx';

   const variants = { a: VariantA, b: VariantB, c: VariantC, d: VariantD };
   ```

The on-screen switcher and `?variant=d` URL support are generated from that map automatically.

### Page metadata

Edit `index.html` to change the browser tab title, `<meta name="description">`, and favicon.

## Building for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

The contents of `dist/` are static and can be deployed to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).
