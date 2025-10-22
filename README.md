# Art Shop (f)

## Maquette / Prototype

[Maquette Figma d'inspiration](https://www.figma.com/design/oB9N93hNOAYYbUZmCBUbpY/Art-Shop?node-id=0-1&t=vkAwj2iFms4QSv04-1)

## Vite

```bash
npm install -D vite
```

### vite/client

vite/client provides the following type shims:

- Asset imports (e.g. importing an .svg file)
- Types for the Vite-injected constants on import.meta.env
- Types for the HMR API on import.meta.hot

## Vercel

```bash
npm i -g vercel
vercel init vite
```

## Netlify

```bash
npm install -g netlify-cli
# Create a new site in Netlify
ntl init
# Deploy to a unique preview URL
ntl deploy
# Deploy the site into production
ntl deploy --prod
```
