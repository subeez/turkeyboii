# turkeyboii

This repository is a small, static Thanksgiving greeting page created as a personal message. It includes a welcoming opening screen, animated floating emoji decorations, falling leaves, and a letter page.

Files
- `index.html` — main page markup (opening screen + letter page)
- `styles.css` — all styling, page frames, emoji borders, and background textures
- `script.js` — interactivity (open button) and animated elements (emotes + falling leaves)
- `assets/` — assets folder (contains `turkey.svg` used for decorations)

Run locally
1. Start a local static server (Python 3 recommended):

```bash
cd /workspaces/turkeyboii
python3 -m http.server 8000 --bind 127.0.0.1
```

2. Open the preview in your browser:

http://127.0.0.1:8000

Notes
- The opening screen has a fancy font (from Google Fonts). Ensure you have internet access when previewing so the font loads.
- The project uses locally created SVG artwork in `/assets/` and some emoji decorations; if you want a different turkey illustration you can replace `/assets/turkey.svg` with your licensed image.

Want changes?
- I can tweak the animation timing, density of falling leaves, border decorations, or export a packaged zip. Tell me what to change and I’ll update the files.

Enjoy! ❤️