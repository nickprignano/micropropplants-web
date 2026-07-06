# MicroPropPlants — Website (v1)

A small, fast, static site for **micropropplants.com**. No build step, no framework, no backend — just HTML and CSS. v1 is a brochure + care guide; there is intentionally **no ordering** (sales happen on TikTok with local porch pickup).

## What's here

```
micropropplants-web/
├── index.html          Home (single-page scroll)
├── care/index.html     Deflasking care guide  → micropropplants.com/care
├── assets/
│   ├── styles.css       All styling (brand system from the printed care card)
│   ├── favicon.svg
│   ├── og-image.png     Social share image (1200×630)
│   └── fonts/SpaceGrotesk.woff2
├── robots.txt
├── sitemap.xml
├── _headers            Security + cache headers (Cloudflare Pages reads this)
└── README.md
```

## Preview locally

Just open `index.html` in a browser. Or run a tiny local server so the clean `/care` URL works:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy to Cloudflare Pages

1. Create a new **GitHub repo** (e.g. `micropropplants-web`) and push these files to it.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, and pick the repo.
3. Build settings for this plain HTML site:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/`  (the folder containing `index.html`)
4. Deploy. You'll get a `*.pages.dev` preview URL first.
5. **Custom domains → Set up a custom domain →** add `micropropplants.com` and `www.micropropplants.com`. Because the domain's DNS is already on Cloudflare, it wires up records + SSL automatically.
6. Turn on **Cloudflare Web Analytics** for the site (free, cookieless — no cookie banner needed).

Every future `git push` redeploys automatically, with a preview URL per branch.

## Before / after launch — quick checklist

- [ ] Set up email forwarding for `hello@micropropplants.com` (registrar/Cloudflare Email Routing) so the contact link works.
- [ ] Confirm the TikTok URL (`https://www.tiktok.com/@micropropplants`).
- [ ] Add real flask **photos** — drop them in `assets/img/` and place them in the hero / cards. Photos are the biggest quality lever.
- [ ] Add the **nursery license number** to the footer once issued (search the files for "add once issued").
- [ ] Keep `/care` in sync with the printed care card — they should always match.

## Editing notes

- All brand colors and fonts live as CSS variables at the top of `assets/styles.css`.
- Copy is plain HTML — edit the text directly in `index.html` and `care/index.html`.
- The site is mobile-first and needs no JavaScript.

## Not in v1 (future)

Ordering / checkout, live inventory, payments, accounts, pickup scheduling, blog. If/when these are added, that's the point to consider moving from Cloudflare Pages to Cloudflare Workers (static assets + serverless logic).
