# Hasil Bumi Menu Website

A responsive one-page restaurant menu built with Next.js App Router, Tailwind CSS v4, TypeScript, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Customization

- Edit menu names and cards in `app/page.tsx`.
- Update colors, layout, and responsive styles in `app/globals.css`.
- Fonts are loaded from Google Fonts in `app/layout.tsx`:
  - Knewave for display headings
  - Montserrat for body text
- Replace the sample Unsplash image URLs in `app/page.tsx` with Hasil Bumi's own food photography for the best brand accuracy.
- Add an Open Graph image and set its absolute production URL in `app/layout.tsx` after the website domain and final brand photography are available.
- Add a canonical URL in `app/layout.tsx` once the production domain is known.

## SEO included

- Indonesian document language (`lang="id"`)
- Page title and meta description
- Relevant local and menu keywords
- Open Graph and Twitter metadata
- Search engine robots directives
- Restaurant JSON-LD structured data with location and map link

## Notes

No prices, phone number, or opening hours were supplied, so they are intentionally not invented. The food photos are illustrative placeholders and should be replaced with actual Hasil Bumi menu photography before launch.
# hasil-bumi
