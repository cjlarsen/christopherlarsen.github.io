# christopherlarsen.com

Static personal site — plain HTML, CSS, and a little JavaScript. No build step.

## Files

- `index.html` — all page content
- `styles.css` — layout and the light/dark color tokens (top of the file)
- `theme.js` — the light/dark toggle (remembers the visitor's choice; defaults to their system setting)
- `favicon.svg` — the ghost mark
- `painting.jpg` — painting in the About section
- `resume.pdf` — **add this**: export the résumé from the canvas and drop it here

## Preview locally

Open `index.html` in a browser, or run a tiny server from this folder:

```sh
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Still to fill in

Search for `[` in `index.html` to find placeholders: the Southwest and American case studies,
and the Overhead Door line.

## Deploy

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Upload this folder as-is.
