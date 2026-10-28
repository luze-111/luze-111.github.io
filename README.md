# github_homepage

My personal GitHub Pages site: **https://luze-111.github.io/**

A single static page introducing me and what I am learning in Week 05.
Hand-written HTML, CSS and a small JavaScript file. No framework, no build step,
no external requests, no trackers.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All page content (hero, about, learning, now) |
| `style.css` | Theme variables, layout, dark/light mode, responsive rules |
| `script.js` | Theme toggle (remembers your choice in `localStorage`) |
| `README.md` | This file |

## Preview locally

Option 1 — open the file directly:

```text
Double-click index.html, or right-click → Open with → your browser.
```

Option 2 — serve it over HTTP (closer to the real site):

```powershell
cd github_homepage
python -m http.server 8000
# then open http://localhost:8000
```

Any static server works (`npx serve`, VS Code Live Server, etc.).
There are no dependencies and no lockfile, so nothing needs installing.

## How it is published

1. Create a **public** repository named `luze-111.github.io`.
2. Put `index.html`, `style.css` and `script.js` in the repository **root**.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
4. Wait for the deployment, then open `https://luze-111.github.io/`.

## Editing

- Text lives in `index.html`; sections are `<section class="section">` blocks.
- Colours and spacing are CSS variables at the top of `style.css`
  (`:root` for dark, `[data-theme="light"]` for light).
- The page works with JavaScript disabled; only the theme toggle is enhanced by it.
