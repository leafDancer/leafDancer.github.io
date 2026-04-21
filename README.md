# leafDancer.github.io

Minimal single-page personal site (static HTML + CSS). Deploys to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Edit content

- **`index.html`** — About text, contact row, and paper list.
- **`css/style.css`** — Typography, colors, and spacing.
- **`static/uploads/`** — Profile photos (`photo1.jpg` is used on the page) and other assets (e.g. `resume.pdf`). The deploy workflow copies all of `static/` into the published site.

## Preview locally

Open `index.html` in a browser, or from the repo root run a static server, for example:

```bash
npx --yes serve .
```

Then visit the URL shown in the terminal (CSS paths stay correct).

## Deploy

Push to `main`. In the repository **Settings → Pages**, ensure the source is **GitHub Actions**.
