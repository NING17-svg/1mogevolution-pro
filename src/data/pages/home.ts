import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "+1 Mog Evolution Roblox Hub: Launch Status, Codes, Gameplay & Tiers",
  seoTitle:
    "+1 Mog Evolution Roblox Hub: Status, Codes, Gameplay & Tiers",
  metaDescription:
    "+1 Mog Evolution is a new Roblox +1 Evolution pet-sim clicker (Universe 10764479526). Open the game page, learn the gameplay loop, and reach the community.",
  summary:
    "Open the +1 Mog Evolution Roblox game page, learn the four-pillar gameplay loop, redeem codes, and join the community.",
  hero: {
    eyebrow: "Unofficial launch hub",
    subtitle: site.tagline,
    ctas: [
      { label: "Open the game page", href: "/roblox/" },
      { label: "Release status", href: "/release-date/" },
      { label: "Gameplay overview", href: "/gameplay/" },
    ],
  },
  quickAnswer:
    "+1 Mog Evolution is the new Roblox +1 Evolution pet-sim clicker that launched on Universe ID 10764479526 (Place ID 92648272637932) on August 30, 2026. Sixteen days in, the Roblox game page is publicly playable, sitting at top-trending #30 with about 10,104 concurrent players, 71,409 favorites, and 4.15M visits. This hub is the launch entry point for opening the game, learning the four-pillar gameplay loop, redeeming codes, and joining the community.",
  keyFacts: [
    { label: "Universe", value: "10764479526 (Place ID 92648272637932)" },
    { label: "Created", value: "2026-08-30" },
    { label: "Top trending", value: "#30 (brief snapshot 2026-09-15)" },
    { label: "CCU", value: "10,104 (brief snapshot 2026-09-15)" },
    { label: "Favorites", value: "71,409 (brief snapshot 2026-09-15)" },
    { label: "Visits", value: "4.15M (brief snapshot 2026-09-15)" },
  ],
  modules: [
    {
      id: "open-the-game",
      type: "entity-grid",
      heading: "Open the +1 Mog Evolution Roblox game page",
      items: [
        {
          title: "Roblox game page",
          summary:
            "The single authoritative Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution.",
          href: "/roblox/",
        },
        {
          title: "Release & status",
          summary:
            "Universe created 2026-08-30, 16 days live, top-trending #30, CCU 10,104.",
          href: "/release-date/",
        },
        {
          title: "Gameplay overview",
          summary:
            "The four-pillar clicker + Mog evolution + rebirth + codes loop.",
          href: "/gameplay/",
        },
        {
          title: "Codes & rewards",
          summary:
            "How the redemption flow works and where to watch for new codes.",
          href: "/codes/",
        },
      ],
    },
    {
      id: "four-pillar-loop",
      type: "comparison",
      heading: "How the gameplay loop works",
      options: [
        {
          name: "Clicker",
          summary:
            "Tap to earn currency, then buy upgrades that automate or multiply tap income.",
          bestFor: "First session pacing.",
        },
        {
          name: "Mog evolution",
          summary:
            "Collected Mogs grow into stronger forms, which is where the 'evolution' in the title shows up.",
          bestFor: "Long-term progression.",
        },
        {
          name: "Rebirth reset",
          summary:
            "Reset the loop at certain thresholds in exchange for a permanent multiplier.",
          bestFor: "Mid-game acceleration.",
        },
        {
          name: "Codes",
          summary:
            "Short alphanumeric codes exchanged for boosts, currencies, or Mog unlocks.",
          bestFor: "Free catch-up boosts.",
        },
      ],
    },
    {
      id: "launch-cluster",
      type: "entity-grid",
      heading: "Launch & Status cluster",
      items: [
        { title: "Release date", summary: "Universe created 2026-08-30; 16 days live.", href: "/release-date/" },
        { title: "Roblox game page", summary: "Universe 10764479526, Place ID 92648272637932.", href: "/roblox/" },
        { title: "Gameplay overview", summary: "Four pillars: clicker, Mog evolution, rebirth, codes.", href: "/gameplay/" },
        { title: "Codes & rewards", summary: "Redemption flow and where to watch for new codes.", href: "/codes/" },
      ],
    },
    {
      id: "progression-cluster",
      type: "entity-grid",
      heading: "Progression cluster",
      items: [
        { title: "Evolution guide", summary: "How to evolve Mogs into higher tiers.", href: "/evolution-guide/" },
        { title: "Beginner's guide", summary: "Day-one setup on Roblox.", href: "/beginners-guide/" },
        { title: "Tier list", summary: "Best Mogs ranked once community tiers appear.", href: "/tier-list/" },
        { title: "Rebirth reset", summary: "When the reset pays for itself.", href: "/rebirth/" },
      ],
    },
    {
      id: "roster-cluster",
      type: "entity-grid",
      heading: "Roster & community cluster",
      items: [
        { title: "Pets/Units list", summary: "Mog roster once a first-party list is published.", href: "/units/" },
        { title: "Trading values", summary: "Community trade values once a sheet is published.", href: "/trading/" },
        { title: "Discord community", summary: "Community entry point and invite verification.", href: "/discord/" },
        { title: "Wiki / FAQ", summary: "Community-maintained information channels.", href: "/wiki/" },
      ],
    },
    {
      id: "open-game",
      type: "prose",
      heading: "Open the +1 Mog Evolution Roblox Game Page",
      body:
        "The single authoritative source for every fact about this title is the Roblox Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution. Opening that page in a browser drops straight into Place ID 92648272637932 under Universe 10764479526, which is what every other guide in this hub links back to. If you only do one thing from this homepage, click that link and bookmark the page so the universe metadata, favorites count, and current CCU stay one click away.",
    },
    {
      id: "sibling-boundary",
      type: "callout",
      tone: "tip",
      title: "Sibling boundary",
      body:
        "Because the game is part of the broader +1 Evolution game family on Roblox, the same clicker + pet-evolution + rebirth pattern shows up in siblings like +1 Muscle Evolution and +1 Magic Evolution, but those are different Universe IDs with their own codes, units, and Discord. Do not import sibling data here; everything on this site is anchored to Universe 10764479526 and Place ID 92648272637932.",
    },
    {
      id: "data-boundary",
      type: "callout",
      tone: "caution",
      title: "What we do not invent",
      body:
        "As of 2026-09-15, no public code list, first-party Mog roster, documented rebirth reward curve, or community trade-value sheet is observable on the official Roblox game page. Each of those pages explains what will appear once data lands and links back to the game page rather than borrowing sibling numbers.",
    },
  ],
  faqIds: [
    "where-to-open-game",
    "release-date",
    "active-codes",
    "compare-siblings",
  ],
  relatedPageIds: [
    "release-date-status",
    "roblox-page",
    "gameplay-overview",
    "codes-rewards",
  ],
  schemaTypes: ["WebSite", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
