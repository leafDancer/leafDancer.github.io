# leafDancer.github.io

Personal academic website for [Chiyuan Wang](https://wangchiyuan.com/) — static single-page site (HTML + CSS), deployed to GitHub Pages.

## Edit content

- **`index.html`** — About text, contact info, and research list.
- **`css/style.css`** — Typography (Playfair Display + Spectral + JetBrains Mono), colors, layout.
- **`static/coauthor_infos.json`** — Map `"Author Name"` → homepage URL. Wrap a name in `index.html` with `<span class="coauthor-name" data-coauthor="Author Name">Author Name</span>` and the page script turns it into a link automatically.
- **`static/uploads/`** — Photos, PDFs, `pku_icon.png`, etc.
- **`aer-bench/`** — AER-bench project page at `/aer-bench/`. `index.html` contains the paper summary, authors, citations, and all 16 model result rows; `script.js` handles the task explorer, result sorting/filtering, figure viewer, and citation copy; `style.css` is scoped to this page. Original paper figures live in `assets/`; self-hosted fonts and their SIL Open Font Licenses live in `assets/fonts/`.

## Preview locally

```bash
npx --yes serve .
```

## Deploy

Push to `main`. In **Settings → Pages**, set source to **GitHub Actions**.

## Notes

- `google57f470f04652bf67.html` must stay at the site root (Google Search Console verification).
- Canonical / Open Graph URLs in `index.html` point to `https://wangchiyuan.com/` — update there if the domain changes.
- Portrait photo is clickable and downloads as `chiyuan-wang.jpg`.
