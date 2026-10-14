# christopherlarsen.com — project context

Personal portfolio site for Christopher Larsen ("Ghost"), a Dallas-based iOS engineer and
technical lead (Southwest Airlines; previously American Airlines, Overhead Door, Bioworld,
Cratebind, Vimeo). The site supports a move toward Staff / Principal iOS roles, with a
specialty in on-device AI and a secondary design-engineering angle (he studied computer
science first, then went to art school at FIT, where graphic design fed into his web
design and development work before iOS). Don't say he "trained as an illustrator before
writing code" — the computer science came first.

Plain static site: `index.html`, `styles.css`, `theme.js`, `gallery.js`. No framework, no build step.
Keep it that way unless asked.

## Design direction — "Swiss serif"

- Strict two-column Swiss grid: a 240px label column on the left, content on the right.
  Sections are separated by heavy 2px rules; rows inside sections by 1px rules.
- Section labels are small mono caps with a red number, e.g. `01 Selected work`.
  Sections, in order: 01 Selected work, 02 Earlier work, 03 About, 04 Contact.
  (A Writing section was removed on purpose — he isn't blogging. Don't add it back.)
- Type: **Newsreader** (serif) for headings and body; **IBM Plex Mono** for labels,
  nav, buttons, and metadata. The hero headline alone is set in **Instrument Serif**,
  larger than the old Newsreader headline — he tried a heavy Fraunces first and preferred
  this; DM Serif Display and Bodoni Moda were also considered. All loaded from Google Fonts.
- Square corners everywhere (no rounded buttons or cards). No gradients, no shadows,
  no emoji.
- Exception to square corners: the line-drawn phone around the Azimuth screenshot gallery
  (row 1.3). It is a drawing of a device, not a button or card. Screenshots live in
  `imgs/azimuth/` (PNG originals plus the 640px JPEGs the page uses); the app is dark mode
  only, so there is one set for both themes. `gallery.js` only adds the Prev / Next buttons
  and counter; swiping works without it.
- The ghost mark (inline SVG) is the logo and favicon. It belongs on the website only —
  he removed it from the résumé.
- The About section shows his painting "Bruiser" (`painting.jpg`). It sits beside the
  text and only drops below it at phone widths (~700px and under), capped at 320px wide.

## Color

All colors are CSS variables at the top of `styles.css`. Light is the default;
`[data-theme="dark"]` overrides.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F6F5F1` | `#121211` |
| `--ink` | `#111111` | `#EDEBE5` |
| `--ink-2` (secondary text) | `#3D3A34` | `#C2BEB4` |
| `--muted` | `#55524B` | `#9C978C` |
| `--accent` (large text, e.g. headline "well-crafted") | `#C2241A` | `#D7163F` |
| `--accent-sm` (small red labels/numbers) | `#C2241A` | `#E8345B` |
| `--hover` | `#C2241A` | `#E8345B` |

Color decisions he made (keep them):
- Light-mode red is `#C2241A` — he tried a deeper alizarin crimson and preferred this one.
- Dark-mode red is a cooler crimson, **split in two**: `#D7163F` for large text, and the
  slightly lighter `#E8345B` for small text so it meets 4.5:1 contrast on the dark background.
- The footer is an inverted block: black with light text in light mode, off-white with
  dark text in dark mode.

## Light / dark toggle

- Button in the top nav, right of "Contact": moon + "Dark" in light mode, sun + "Light"
  in dark mode.
- First visit follows the visitor's system setting; a click is remembered in
  `localStorage` (`theme`). An inline script in `<head>` sets `data-theme` before first
  paint to avoid a flash.

## Content notes

- Tone: professional and plain. He dislikes salesy phrasing — avoid lines like
  "I bring a designer's eye." Personality is fine on the website; the résumé stays plain.
- **Azimuth Finance** is his own app, live on the App Store as a universal app for
  iPhone, iPad, and Mac (one link covers all):
  https://apps.apple.com/us/app/azimuth-finance/id6773539916
  It does **not** have an AI feature yet — don't describe it as AI-powered.
- The headline says "local AI" (he wanted no hyphens in the headline, so "Staff level",
  "local AI", and "well crafted" are deliberate); the About text still says "on-device AI".
  He may soften the AI claim until the AI feature ships in Azimuth; ask before changing it.
- No text placeholders remain. Every Selected work row links to its app on the App Store;
  there are no separate case study pages. Rows 1.1, 1.2, and 1.4 show employment dates
  taken from his résumé.
- No résumé on the site, on purpose: he doesn't want a document with his personal details
  downloadable, and anyone who needs it gets it from him directly. Don't add a Résumé
  button or `resume.pdf` back.

## Working on the site

- Preview: `python3 -m http.server 8000`, then open http://localhost:8000.
- Check changes at phone width (~390px) and in both themes before calling them done.
- Keep accessibility: real `<a>` / `<button>` elements, 44px minimum touch targets,
  alt text on images, 4.5:1 contrast for small text.
