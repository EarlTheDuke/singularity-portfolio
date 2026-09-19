# The Singularity — ASI Ground Zero

Source for [thesingularity.netlify.app](https://thesingularity.netlify.app/). A static site (plain HTML/CSS/JS, no build step) deployed by Netlify from `main`, plus one Netlify Function that proxies the Grok-vs-Claude conversation page to the xAI and Anthropic APIs.

## Layout

```
index.html                 home: featured projects, about, contact (Formspree), blog teaser
uss-enterprise.html        landing page for the U.S.S. Enterprise reconstruction
enterprise/                the built Enterprise app (see "Updating the Enterprise")
assets/enterprise/         stills used by the landing page and the home card
blog.html, posts/          Path to ASI blog
live-ai-convo.html         Grok vs Claude live conversation (access code + Netlify Function)
music-hub.html, *.mp3/mp4  Music Hub media
ballistics-simulator.html  ballistics simulator
galaxy-explorer.html, neural-genesis.html, space-simulation.html, evolution-timeline.html
netlify/functions/proxy.js the API proxy
netlify.toml               build, headers, redirects
ai_conversation.py         local CLI version of the AI conversation (needs API keys in env)
```

## Netlify environment variables

| Variable | Purpose |
| --- | --- |
| `XAI_API_KEY` | Grok (xAI) key used by the proxy function |
| `ANTHROPIC_API_KEY` | Claude key used by the proxy function |
| `CHAT_ACCESS_CODE` | Optional. When set, the proxy rejects requests whose `X-Access-Code` header does not match. The conversation page forwards the code the visitor typed, so set this to the same value as `ACCESS_CODE` in `live-ai-convo.html` to enforce the gate server-side instead of only in the browser. |

Keys never appear in the repo or in function logs.

## Security notes

- The proxy only answers `POST` from the site's own origin (production, Netlify deploy previews, localhost); caller text is length-capped; API error bodies are truncated and request headers are never logged.
- All pages get `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`, `Permissions-Policy` and HSTS via `netlify.toml`.
- Pinned CDN scripts (three.js r128/r134, p5 1.4.2) carry Subresource Integrity hashes. `ballistics-simulator.html` loads `plotly-latest`, which is unpinned and therefore cannot carry SRI; pin a version if that page is reworked.
- The contact form posts to Formspree; nothing sensitive is stored here.

## Updating the Enterprise

The app lives in its own (private) repo, `EarlTheDuke/uss-enterprise-ncc-1701`. To publish a new build here:

```bash
# in the uss-enterprise-ncc-1701 checkout, with this repo checked out alongside it
npm run build:portfolio        # builds with base /enterprise/ and copies into ../singularity-portfolio/enterprise
# then in this repo
git add enterprise && git commit -m "Update Enterprise build" && git push
```

`/enterprise/assets/*` are content-hashed and cached for a year; `/enterprise/audio/*` for a week. Music and effects credits are in the app (`CREDITS.md` in its repo) and on `uss-enterprise.html`.

## Local development

```bash
npm install
npm run dev          # netlify dev: static site on :8888 with the proxy function
# or just: python -m http.server 8000
```
