# Tony Zhang — Portfolio

Personal site for https://ZhangHuTony.github.io/Portfolio/. A single page built with
Vite and React: hero, research, publications and talks, projects, contact. Light theme by
default with a dark toggle.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173/Portfolio/  (the bare root 404s on purpose)
npm run build      # outputs dist/
npm run preview    # serves dist/ at http://localhost:4173/Portfolio/
```

## Edit content

All text, links, tags and image references live in `src/data.js`. Components contain no content.

- A link with `href: null` is hidden until you add a URL (see the `TODO` comments for the
  paper, project page and benchmark repo).
- `image: null` gives a card without a figure. `image.fit: 'contain'` shows a diagram uncropped.
- Project-site figures (IBMARL method diagram, CONSORT HoloOcean render) are saved in `assets-src/` and processed by `npm run images`.
- The CV is `public/Tony_Zhang_CV.pdf`. Replace the file to update it.

## Images

Originals go in `assets-src/` (git-ignored). `npm run images` (needs Python and Pillow) crops and
converts them to optimized WebP in `src/assets/img/` and writes `public/og.jpg`. Crop focal points
are in `scripts/optimize-images.py`.

## Deploy

```bash
npm run deploy     # builds, then publishes dist/ to the gh-pages branch
```

GitHub Pages serves the `gh-pages` branch, so no repository settings need to change.
