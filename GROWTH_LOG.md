# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-16 - W2 framing + named progression + verified Discord invite

- Task: Apply the urgent auto-systems-idle-progression, high world-1-vs-world-2, and normal verified-discord-invite content updates for the [W2] +1 Mog Evolution Roblox experience.
- Files changed: `src/data/pages/home.ts`, `src/data/pages/simulation-loop-pages.ts` (`gameplayOverview`, `beginnersGuide`), `src/data/pages/materials-pages.ts` (`rebirthReset`), `src/data/pages/community-pages.ts` (`discordCommunity`), `src/data/pages/launch-pages.ts` (`robloxPage`), `src/data/faq.ts`, `src/data/site.ts`, `CONTENT_INDEX.md`.
- URLs affected: `/`, `/gameplay`, `/beginners-guide`, `/rebirth`, `/discord`, `/roblox`.
- SEO/GEO changed: `home`, `gameplay-overview`, `beginners-guide`, `rebirth-reset`, `discord-community`, `roblox-page` titles, summaries, FAQs, key facts, and CTAs now reflect the [W2] tag (no World 1 carryover, separate leaderboard) and the named progression path (Hammer → Bonesmash → Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards). Navoj Mog creator community (`https://www.roblox.com/communities/426881025`) is now the authoritative surface for the verified Discord invite `https://discord.gg/aZ6w6QgPZ9`.
- Progression boundary: Anything beyond the published Universe description — Wings Appeal threshold, post-Bonesmash tool tier, exact rebirth reward curve — remains labelled unannounced.
- Verification: `npm run verify` (typecheck, lint, template/content/SEO validation, build).

### 2026-09-15 - Adsterra six-unit integration applied

- Task: Replace empty Adsterra placeholders in `src/data/ads.ts` with real codes collected from the Adsterra publisher dashboard for the fixed six units (Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, Smartlink).
- Files changed: `src/data/ads.ts`.
- URLs affected: None.
- SEO/GEO changed: None.
- Ad baseline: All six fixed unit values are now populated; runtime DOM containers and Smartlink URL are real.
- Verification: `npm run verify` (typecheck, lint, template/content/SEO validation).

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
