# leafDancer.github.io

Minimal single-page personal site (static HTML + CSS). Deploys to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Edit content

- **`index.html`** — About text, contact row, and paper list.
- **`css/style.css`** — Typography, colors, and spacing.
- **`static/`** — Deployed as-is. Includes **`static/coauthor_infos.json`**: map `"Author Name"` → homepage URL; in `index.html`, wrap a name with `<span class="coauthor-name" data-coauthor="Author Name">Author Name</span>` and the page script turns it into a link only when that key exists in the JSON.
- **`static/uploads/`** — Photos, `resume.pdf`, etc.

## Preview locally

Open `index.html` in a browser, or from the repo root run a static server, for example:

```bash
npx --yes serve .
```

Then visit the URL shown in the terminal (CSS paths stay correct).

## Deploy

Push to `main`. In the repository **Settings → Pages**, ensure the source is **GitHub Actions**.

## Google Search Console (HTML file verification)

The file `google57f470f04652bf67.html` must stay at the **site root** (`https://leafdancer.github.io/google57f470f04652bf67.html`). The deploy workflow copies it into `public/`; do not delete it after verification.

## Favicon / Google search thumbnail

Replace `static/uploads/pku_icon.png` with a square PNG (ideally **≥ 48×48 px**, many sites use 192×192). Google can take **days or weeks** to refresh the icon next to your result; use [URL Inspection](https://search.google.com/search-console) in Search Console to request re-indexing of the homepage. If you change domain, update the `https://leafdancer.github.io` URLs in `index.html` (`canonical`, `og:image`, `twitter:image`).
