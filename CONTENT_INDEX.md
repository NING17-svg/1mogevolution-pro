# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | +1 Mog Evolution Roblox hub | Find the [W2] entry point | Open the game page / Release status | Hub | Lead with W2 boundary + named progression path. |
| `/wiki` | `src/data/pages/community-pages.ts` (`wikiFaq`) | Guide | +1 Mog Evolution wiki | Find community-maintained channels | Discord / Gameplay | Hub | No third-party wiki established; this hub is the FAQ surface. |
| `/guides` | `src/data/pages/site-pages.ts` (`guides`) | Guide | +1 Mog Evolution guides | Browse launch, gameplay, roster, community | Release / Gameplay | Hub | Index for every guide on this site. |
| `/release-date` | `src/data/pages/launch-pages.ts` (`releaseDateStatus`) | Guide | +1 Mog Evolution release date | Confirm launch date and current standing | Open the game page / Gameplay | Supporting hub | Confirmed 2026-08-30, soft-launch. |
| `/faq` | `src/data/pages/site-pages.ts` (`faq`) | Guide | +1 Mog Evolution FAQ | Short answers | Release / Contact | Answer hub | FAQ schema enabled. |
| `/roblox` | `src/data/pages/launch-pages.ts` (`robloxPage`) | Guide | Open +1 Mog Evolution on Roblox | Reach Universe 10764479526 | Release / Discord | Supporting hub | Navoj Mog creator community surfaced. |
| `/gameplay` | `src/data/pages/simulation-loop-pages.ts` (`gameplayOverview`) | Guide | +1 Mog Evolution named progression | Run the [W2] loop | Beginner's guide / Rebirth | Hub | Hammer → Bonesmash → six Auto systems in order. |
| `/beginners-guide` | `src/data/pages/simulation-loop-pages.ts` (`beginnersGuide`) | Guide | +1 Mog Evolution beginner's guide | Day-one setup | Open the game / Gameplay | Hub | Names Hammer, Bonesmash, and six Auto systems. |
| `/rebirth` | `src/data/pages/materials-pages.ts` (`rebirthReset`) | Guide | +1 Mog Evolution rebirth reset | Run Auto Rebirth in the W2 loop | Gameplay / Beginner's guide | Hub | Auto Rebirth positioned in the named ladder. |
| `/evolution-guide` | `src/data/pages/simulation-loop-pages.ts` (`evolutionGuide`) | Guide | +1 Mog Evolution evolution guide | Mog progression path | Tier list / Pets-Units | Supporting | Series-family shape until first-party roster lands. |
| `/codes` | `src/data/pages/simulation-loop-pages.ts` (`codesRewards`) | Guide | +1 Mog Evolution codes | Redeem codes + watch surfaces | Gameplay / Discord | Supporting | No public code list as of 2026-09-15. |
| `/tier-list` | `src/data/pages/materials-pages.ts` (`tierList`) | Guide | +1 Mog Evolution tier list | Best Mogs ranked | Evolution / Pets-Units | Supporting | No community tier sheet observed. |
| `/units` | `src/data/pages/materials-pages.ts` (`petsUnitsList`) | Guide | +1 Mog Evolution Mog list | Mog roster once first-party data lands | Tier list / Evolution | Supporting | First-party roster pending. |
| `/trading` | `src/data/pages/materials-pages.ts` (`tradingValues`) | Guide | +1 Mog Evolution trading values | Trade sheet once a channel appears | Tier list / Discord | Supporting | No trade channel observed. |
| `/discord` | `src/data/pages/community-pages.ts` (`discordCommunity`) | Guide | +1 Mog Evolution Discord | Verified invite + re-verification | Verified invite / Roblox | Supporting | Verified invite discord.gg/aZ6w6QgPZ9. |
| `/about` | `src/data/pages/site-pages.ts` (`about`) | Utility | About +1 Mog Evolution Wiki | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` (`contact`) | Utility | Contact +1 Mog Evolution Wiki | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` (`privacyPolicy`) | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` (`terms`) | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/roblox`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Gameplay loop (W2): `/gameplay`, `/beginners-guide`, `/rebirth`
- Roster and progression: `/evolution-guide`, `/tier-list`, `/units`, `/trading`, `/codes`
- Community: `/discord`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
