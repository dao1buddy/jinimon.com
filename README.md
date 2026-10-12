# Jinimon — landing page

Static site: open `index.html` directly or serve the folder from any static host. No build step.

- `index.html` — bilingual markup (every string carries `data-i18n`)
- `styles.css` — the Sadu-loom world (tokens at the top)
- `script.js` — language switch, generative loom, card art, rack rail, mobile menu, follow form
- `assets/favicon.svg`
- `PRODUCT.md` — product truth (inferred facts are marked *assumed*)
- `DESIGN.md` — the design system, written from the finished build

## Replace before launch (synthetic content)

Everything below was invented to make the page complete. Nothing here is a claim about the real Jinimon.

| Where | Placeholder | Replace with |
|---|---|---|
| Two worlds | Generated Sadu bands as the art for each world | Real screenshots or key art if you prefer (`.world__art` takes any image) |
| Arabic wordmark | جينيمون | Confirm the transliteration |
| Careers copy | hiring "in Riyadh and remotely" | Your own facts |
| Social links | X, Discord, YouTube, TikTok have no `href` yet (`data-replace="social url"`) | Real URLs |
| Follow form | Intercepted in `script.js`, posts nowhere | Your list provider endpoint |

The games rack was removed on 2026-10-12 at the founder's request; the page now leads with the studio and its two worlds.

Fonts load from Google Fonts (Changa for display, Alexandria for text; both cover Arabic and Latin). Offline, system fonts take over.
