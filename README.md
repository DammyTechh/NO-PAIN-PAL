# NO PAIN PAL — landing page

React + Vite. No UI framework, no animation library — the motion is CSS
keyframes plus a small rAF loop, so the whole JS bundle is React itself.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the build locally
```

Deploying to Vercel / Netlify: framework preset **Vite**, build command
`npm run build`, output directory `dist`.

## What's where

```
src/
  styles/tokens.css      every colour, type size and spacing value
  styles/fonts.css       self-hosted Archivo / IBM Plex Mono / Newsreader
  styles/global.css      resets, layout primitives, buttons, reveal, grain
  hooks/
    useNavVisibility.js  pill nav: tuck on scroll, return on settle, tint swap
    useSectionSpy.js     active nav link
    useReveal.js         IntersectionObserver fade-up for [data-reveal]
  components/
    Nav / Hero / Problem / Mechanism / Anatomy / Protocol /
    ClinicalUse / Assurance / Reference / Contact / Footer
    FloatingDevice.jsx   the 3D product float (tilt, parallax, sheen, shadow)
    SiteDiagram.jsx      animated plan view of the three stimulation fields
    Icons.jsx            the whole icon set, hand-drawn on a 24px grid
```

## Brand palette

Sampled straight from the logo and the product renders:

| token | value | where it came from |
|---|---|---|
| `--petrol-600` | `#19455C` | the logo mark |
| `--sage-500`   | `#AFB861` | the wordmark |
| `--indigo-600` | `#2B395B` | the blue trim on the device |
| `--bone-100`   | `#F4F2EA` | paper ground |

## Notes

- Product stills are background-stripped WebP cut-outs (`src/assets/`).
  They are composited live: halo, drop shadow, specular sheen and contact
  shadow are all CSS, so the same file works on light and dark sections.
- Anatomy hotspots are percentage coordinates on the cut-out
  (`PARTS` in `Anatomy.jsx`) — if the render is ever re-exported, re-read
  those eight x/y pairs.
- Everything respects `prefers-reduced-motion`.
- Partner logos sit on a bone plate rather than being recoloured, so the
  Innov8 Hub and TETFund marks keep their own brand colours on any ground.
