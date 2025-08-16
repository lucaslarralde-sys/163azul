# Ecowatt — sitio con React + Vite + Tailwind

## Cómo usar
1) Colocá tu video en `public/video/hero.mp4` y (opcional) un poster en `public/img/hero-poster.jpg`.
2) Colocá tu logo en `public/logo/logo-ecowatt.png`.
3) Partners: reemplazá los archivos en `src/assets/img/logos/` con los PNG reales.
4) Fotos por área (hasta 4): `src/assets/img/areas/<slug>/1.jpg...4.jpg`
   - Slugs: `aguas`, `efluentes-urbanos`, `efluentes-industriales-bioenergia`, `aire-gases`, `equipos`.

## Scripts
- `npm i`
- `npm run dev`
- `npm run build`

## Deploy en Netlify
- Conectá el repo y dejá:
  - Build command: `npm run build`
  - Publish directory: `dist`