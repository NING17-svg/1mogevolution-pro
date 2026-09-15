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
    "+1 Mog Evolution is the Roblox [W2] +1 Mog Evolution experience (Universe ID 10764479526, Place ID 92648272637932), launched August 30, 2026 and tagged [W2] on third-party trackers. World 1 and World 2 are two separate Roblox experiences with separate leaderboards — World 1 progress does not carry over into World 2. Sixteen days in, the Universe page is publicly playable at top-trending #30 with about 10,104 concurrent players, 71,409 favorites, and 4.15M visits.",
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
            "The named [W2] progression path: Hammer → Bonesmash → Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards.",
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
          name: "Hammer + Bonesmash",
          summary:
            "Tap with Hammer to earn currency, then take Bonesmash as the first upgrade once it unlocks.",
          bestFor: "Day-one progression in the [W2] experience.",
        },
        {
          name: "Auto Mog / Farm / Appeal",
          summary:
            "Auto Mog → Auto Farm → Auto Appeal Gain enable in that order as currency allows.",
          bestFor: "Hands-free idle progression.",
        },
        {
          name: "Wings → Auto Ascend",
          summary:
            "Earn Wings to unlock Auto Ascend, the mid-game accelerator that compounds across runs.",
          bestFor: "Mid-game acceleration.",
        },
        {
          name: "Auto Rebirth + Daily",
          summary:
            "Auto Rebirth and Auto Claim Daily Rewards finish the enable ladder for the [W2] loop.",
          bestFor: "Late-game catch-up and free boosts.",
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
        { title: "Gameplay overview", summary: "Named [W2] loop: Hammer → Bonesmash → six Auto systems.", href: "/gameplay/" },
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
      title: "World 1 vs World 2 boundary",
      body:
        "The [W2] tag on the live Roblox Universe page means this is the World 2 experience of +1 Mog Evolution — not a sibling +1 Evolution game. World 1 and World 2 are two separate Roblox experiences with their own leaderboards, and World 1 progress does not carry over into World 2. Everything on this site is anchored to the live [W2] Universe (10764479526) and Place ID 92648272637932; unrelated +1 Evolution siblings such as +1 Muscle Evolution or +1 Magic Evolution have their own Universe IDs and are out of scope here.",
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
