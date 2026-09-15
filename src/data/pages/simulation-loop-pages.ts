import type { PageContent } from "@/types/content";

export const gameplayOverview: PageContent = {
  id: "gameplay-overview",
  translationKey: "gameplay-overview",
  locale: "en-US",
  routeKind: "fixed",
  slug: "gameplay",
  url: "/gameplay",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Gameplay Overview: The Four-Pillar Loop",
  seoTitle: "+1 Mog Evolution Gameplay: Clicker, Mog Evolution, Rebirth, Codes",
  metaDescription:
    "+1 Mog Evolution gameplay overview: the four pillars of the clicker + Mog evolution + rebirth reset + code redemption loop on Roblox Universe 10764479526.",
  summary:
    "Walk through the four pillars of +1 Mog Evolution: clicker incremental, Mog evolution, rebirth reset, and code redemption.",
  hero: {
    eyebrow: "Gameplay overview",
    subtitle:
      "Four pillars drive every session: clicker incremental, Mog evolution, rebirth reset, and code redemption.",
    ctas: [
      { label: "Evolution guide", href: "/evolution-guide" },
      { label: "Rebirth reset", href: "/rebirth" },
    ],
  },
  quickAnswer:
    "+1 Mog Evolution's gameplay loop splits into four pillars that every guide in this hub covers in more depth. The clicker pillar lets you tap to earn currency and buy upgrades that automate or multiply that tap income. The Mog evolution pillar turns collected Mogs into stronger forms, which is where the 'evolution' in the title shows up. The rebirth reset pillar resets the loop at certain thresholds in exchange for a permanent multiplier. The code redemption pillar exchanges short alphanumeric codes for boosts, currencies, or Mog unlocks.",
  keyFacts: [
    { label: "Pillar 1", value: "Clicker incremental (tap → currency → upgrades)" },
    { label: "Pillar 2", value: "Mog evolution (collect → grow → evolve)" },
    { label: "Pillar 3", value: "Rebirth reset (reset for permanent multiplier)" },
    { label: "Pillar 4", value: "Code redemption (alphanumeric boosts)" },
    { label: "Genre", value: "Roblox pet-sim clicker (+1 Evolution template family)" },
    { label: "Universe", value: "10764479526" },
  ],
  modules: [
    {
      id: "pillar-comparison",
      type: "comparison",
      heading: "The four pillars compared",
      options: [
        {
          name: "Clicker incremental",
          summary: "Tap to earn currency; buy upgrades that automate or multiply tap income.",
          bestFor: "First session pacing and idle progression.",
        },
        {
          name: "Mog evolution",
          summary: "Collect Mogs and grow them into stronger forms.",
          bestFor: "Long-term progression and roster depth.",
        },
        {
          name: "Rebirth reset",
          summary: "Reset the loop at thresholds in exchange for a permanent multiplier.",
          bestFor: "Mid-game acceleration when growth slows.",
        },
        {
          name: "Code redemption",
          summary: "Exchange alphanumeric codes for boosts, currencies, or Mog unlocks.",
          bestFor: "Free catch-up boosts when new codes drop.",
        },
      ],
    },
    {
      id: "clicker",
      type: "prose",
      heading: "Clicker incremental pillar",
      body:
        "The first pillar is a classic clicker/tycoon loop. You tap to earn currency, then spend that currency on upgrades that automate or multiply your tap income. In a Roblox +1 Evolution template, the clicker pillar is the first thing every new player meets, and it remains a baseline income source even after the Mog evolution and rebirth pillars unlock. Treat this pillar as your daily-currency floor: every other pillar multiplies on top of it.",
    },
    {
      id: "evolution",
      type: "prose",
      heading: "Mog evolution pillar",
      body:
        "Mogs are the collectible units the title is named after. The Mog evolution pillar is what makes +1 Mog Evolution feel different from a bare clicker: collected Mogs grow into stronger forms, and the progression from one tier to the next is what the Evolution Guide unpacks in detail. As of 2026-09-15, no first-party Mog roster with stats is published on the Roblox Universe page; the Evolution Guide documents the categories that will appear once data lands rather than inventing a roster.",
    },
    {
      id: "rebirth",
      type: "prose",
      heading: "Rebirth reset pillar",
      body:
        "The rebirth pillar is the +1 Evolution template's classic mid-game accelerator: when progress in the clicker pillar slows, you can reset your run in exchange for a permanent multiplier that compounds into the next run. The Rebirth Reset page explains when the reset pays for itself, what the trade-off looks like in template-family terms, and what is not announced as of 2026-09-15 (a documented rebirth reward curve is not published).",
    },
    {
      id: "codes",
      type: "prose",
      heading: "Code redemption pillar",
      body:
        "Codes are short alphanumeric strings you exchange inside the Roblox game for boosts, currencies, or Mog unlocks. The Codes and Rewards page tracks the redemption flow and where to watch for new codes; no public code list is observable on the official Roblox Universe page as of 2026-09-15, so the page documents the absence rather than importing codes from sibling +1 Evolution games.",
    },
  ],
  faqIds: ["four-pillars", "first-pillar", "active-codes"],
  relatedPageIds: ["evolution-guide", "rebirth-reset", "codes-rewards", "beginners-guide"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const codesRewards: PageContent = {
  id: "codes-rewards",
  translationKey: "codes-rewards",
  locale: "en-US",
  routeKind: "fixed",
  slug: "codes",
  url: "/codes",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Codes and Rewards: Redemption Flow and Active Codes",
  seoTitle: "+1 Mog Evolution Codes (2026): Active Codes and Redemption Guide",
  metaDescription:
    "+1 Mog Evolution codes and rewards: how Roblox redemption works, where to watch for new codes, and what is not announced as of 2026-09-15.",
  summary:
    "How Roblox code redemption works in +1 Mog Evolution, where to watch for new codes, and the absence of a public code list as of 2026-09-15.",
  hero: {
    eyebrow: "Codes & rewards",
    subtitle:
      "Redemption flow plus where to watch for new codes; no public code list is observable as of 2026-09-15.",
    ctas: [
      { label: "Gameplay overview", href: "/gameplay" },
      { label: "Discord community", href: "/discord" },
    ],
  },
  quickAnswer:
    "No public +1 Mog Evolution code list is observable on the official Roblox Universe page as of 2026-09-15. This page documents the typical Roblox redemption flow — enter codes inside the game client or on a designated redemption page — and where to watch when new codes drop, without importing codes from sibling +1 Evolution games.",
  keyFacts: [
    { label: "Active codes", value: "None publicly observable as of 2026-09-15" },
    { label: "Redemption surface", value: "Inside the Roblox game client" },
    { label: "Watch surface 1", value: "Official Roblox Universe page description" },
    { label: "Watch surface 2", value: "Verified Discord (when published)" },
    { label: "Sibling rule", value: "Do not import codes from sibling +1 Evolution games" },
  ],
  modules: [
    {
      id: "no-active-codes",
      type: "callout",
      tone: "caution",
      title: "No public code list observed",
      body:
        "As of 2026-09-15, the official +1 Mog Evolution Roblox Universe page does not publish a public code list. The game is 16 days old, which is inside the typical new-site window in which the first code list usually appears. Until a first-party list lands, this page does not invent codes or import them from sibling +1 Evolution games such as +1 Muscle Evolution or +1 Magic Evolution — those have separate Universe IDs and separate code lists.",
    },
    {
      id: "redemption-flow",
      type: "steps",
      heading: "Typical Roblox redemption flow",
      items: [
        { title: "Open the game", body: "Launch +1 Mog Evolution from the Roblox Universe page." },
        { title: "Find the redemption surface", body: "Look for a Codes / Rewards button on the main UI or in a settings menu." },
        { title: "Enter the code", body: "Paste or type the alphanumeric code exactly as published." },
        { title: "Claim the reward", body: "Boosts, currencies, or Mog unlocks appear in your inventory once accepted." },
      ],
    },
    {
      id: "where-to-watch",
      type: "prose",
      heading: "Where to watch for new codes",
      body:
        "The two most reliable surfaces for new +1 Mog Evolution codes are the official Roblox Universe page description and the verified Discord (when published). Third-party code aggregator sites copy from those two surfaces with a delay and frequently rotate expired codes back in, so always cross-check the latest code against the official source before redeeming. The Discord Community page tracks invite verification once the official Discord goes live.",
    },
    {
      id: "sibling-boundary",
      type: "callout",
      tone: "tip",
      title: "Sibling boundary",
      body:
        "+1 Muscle Evolution, +1 Magic Evolution, +1 Superhero Evolution, and +1 Speed Evolve share the +1 Evolution template but have separate Universe IDs, Place IDs, and code lists. A code that works in +1 Muscle Evolution will not redeem in +1 Mog Evolution; do not paste codes across siblings.",
    },
  ],
  faqIds: ["active-codes", "redemption-surface", "sibling-codes"],
  relatedPageIds: ["gameplay-overview", "discord-community", "evolution-guide"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const evolutionGuide: PageContent = {
  id: "evolution-guide",
  translationKey: "evolution-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "evolution-guide",
  url: "/evolution-guide",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Guide: How to Evolve Mogs Into Higher Tiers",
  seoTitle: "+1 Mog Evolution Evolution Guide: How to Evolve Mogs (2026)",
  metaDescription:
    "+1 Mog Evolution evolution guide: the Mog progression path, what changes between tiers, and what is not announced as of 2026-09-15.",
  summary:
    "How to evolve Mogs into higher tiers in +1 Mog Evolution, what the Mog progression path looks like in template-family terms, and what is not announced.",
  hero: {
    eyebrow: "Evolution guide",
      subtitle:
      "The Mog progression path: how collected Mogs grow into stronger forms and what changes between tiers.",
    ctas: [
      { label: "Tier list", href: "/tier-list" },
      { label: "Pets/Units list", href: "/units" },
    ],
  },
  quickAnswer:
    "Mogs evolve by accumulating progression in the Mog evolution pillar: you collect a Mog, you grow it through play, and at thresholds it advances into a stronger form. The exact tier names, multipliers, and unlock conditions are not announced as of 2026-09-15 — no first-party Mog roster with stats is published on the Roblox Universe page — so this guide documents the category structure that will appear once data lands rather than inventing a roster.",
  keyFacts: [
    { label: "Pillar", value: "Mog evolution" },
    { label: "Progression shape", value: "Collect → grow → evolve through thresholds" },
    { label: "First-party roster", value: "Not announced as of 2026-09-15" },
    { label: "Multiplier curve", value: "Not announced as of 2026-09-15" },
    { label: "Universe", value: "10764479526" },
  ],
  modules: [
    {
      id: "evolution-shape",
      type: "prose",
      heading: "How Mog evolution works in template-family terms",
      body:
        "Across the +1 Evolution template family on Roblox, Mog-style units share a common progression shape: you obtain a unit, you play with it long enough to meet a growth threshold, and the unit advances into a stronger form. Higher tiers typically compound the clicker pillar's income and unlock new Mog variants. The exact thresholds, multipliers, and tier names in +1 Mog Evolution are not announced as of 2026-09-15.",
    },
    {
      id: "evolution-stages",
      type: "steps",
      heading: "Mog progression stages (template-family terms)",
      items: [
        { title: "Obtain", body: "Earn or unlock a Mog through play." },
        { title: "Grow", body: "Use the Mog in the clicker loop to accumulate progression currency." },
        { title: "Threshold", body: "Reach the next growth threshold to trigger an evolution attempt." },
        { title: "Evolve", body: "Advance into a stronger form and compound the next loop." },
      ],
    },
    {
      id: "evolution-boundaries",
      type: "callout",
      tone: "tip",
      title: "What is not announced",
      body:
        "A first-party Mog roster with stats, a documented tier multiplier curve, and any official evolution-rate figures are not announced as of 2026-09-15. Once the Roblox Universe page or the verified Discord publishes that data, this guide will map tier names and multipliers to the progression path rather than estimating them.",
    },
  ],
  faqIds: ["how-to-evolve", "tier-multipliers", "first-party-roster"],
  relatedPageIds: ["tier-list", "pets-units-list", "gameplay-overview"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const beginnersGuide: PageContent = {
  id: "beginners-guide",
  translationKey: "beginners-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "beginners-guide",
  url: "/beginners-guide",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Beginner's Guide: Day-One Setup on Roblox",
  seoTitle: "+1 Mog Evolution Beginner's Guide (2026): Day-One Setup on Roblox",
  metaDescription:
    "+1 Mog Evolution beginner's guide: day-one setup on Roblox, the first session loop, and what to expect in the first 21 days.",
  summary:
    "Day-one setup on Roblox for +1 Mog Evolution, the first-session loop, and what to expect in the first 21 days of public availability.",
  hero: {
    eyebrow: "Beginner's guide",
    subtitle:
      "Day-one setup on Roblox: open the game, learn the clicker loop, claim your first Mog, and avoid sibling cross-imports.",
    ctas: [
      { label: "Open the game", href: "/roblox" },
      { label: "Gameplay overview", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "To start playing +1 Mog Evolution on Roblox, open the official Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution, sign in to your Roblox account, and click Play. The game resolves to Place ID 92648272637932 under Universe 10764479526. Spend your first session on the clicker pillar, claim your first Mog, and bookmark the Universe page so the freshness check stays one click away.",
  keyFacts: [
    { label: "First action", value: "Open the Roblox Universe page" },
    { label: "Universe", value: "10764479526" },
    { label: "Place ID", value: "92648272637932" },
    { label: "First pillar", value: "Clicker incremental" },
    { label: "First Mog", value: "Claim during the first session loop" },
    { label: "Freshness window", value: "21 days from 2026-08-30" },
  ],
  modules: [
    {
      id: "first-session",
      type: "steps",
      heading: "Day-one setup on Roblox",
      items: [
        { title: "Open the Universe page", body: "Visit https://www.roblox.com/games/92648272637932/+1-Mog-Evolution." },
        { title: "Sign in or create a Roblox account", body: "Use the Roblox client or web sign-in; the game launches inside the Roblox client." },
        { title: "Click Play", body: "Place ID 92648272637932 under Universe 10764479526 loads inside the client." },
        { title: "Learn the clicker loop", body: "Tap to earn currency, then buy the first upgrade that automates or multiplies tap income." },
        { title: "Claim your first Mog", body: "Use the Mog evolution pillar to collect and grow your first unit." },
        { title: "Bookmark the Universe page", body: "Revisit weekly during the 21-day new-site freshness window." },
      ],
    },
    {
      id: "first-session-tips",
      type: "prose",
      heading: "First-session tips",
      body:
        "Spend the first session focused on the clicker pillar: it builds the daily-currency floor that the Mog evolution and rebirth pillars multiply on top of. Do not paste codes from sibling +1 Evolution games — codes are Universe-scoped. If you see a community tier sheet or trade-value table before a first-party source, treat it as unverified until the Roblox Universe page or the verified Discord publishes the same numbers.",
    },
    {
      id: "freshness-window",
      type: "callout",
      tone: "tip",
      title: "21-day freshness window",
      body:
        "+1 Mog Evolution is 16 days old as of 2026-09-15, so the title sits inside the typical 0-21 day new-site freshness window. That window is when most first-party Mog rosters, code lists, and community-maintained tier sheets usually appear. Bookmarking the Universe page and checking once a week is the most reliable way to catch the first wave of official updates.",
    },
  ],
  faqIds: ["first-action", "first-session", "freshness-window"],
  relatedPageIds: ["roblox-page", "gameplay-overview", "release-date-status"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
