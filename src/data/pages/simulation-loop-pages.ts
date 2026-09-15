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
  h1: "+1 Mog Evolution Gameplay: Named Upgrade + Auto-System Path (W2)",
  seoTitle: "+1 Mog Evolution Gameplay: Hammer, Bonesmash, Auto Systems Order",
  metaDescription:
    "+1 Mog Evolution gameplay: the named upgrade + enable order for the live [W2] Roblox experience — Hammer → Bonesmash → Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards.",
  summary:
    "Walk through the named +1 Mog Evolution [W2] progression path: Hammer → Bonesmash first upgrade, then the six Auto systems in the published enable order.",
  hero: {
    eyebrow: "Gameplay overview",
    subtitle:
      "The named [W2] loop: Hammer → Bonesmash, then Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards.",
    ctas: [
      { label: "Beginner's guide", href: "/beginners-guide" },
      { label: "Rebirth reset", href: "/rebirth" },
    ],
  },
  quickAnswer:
    "The live Roblox +1 Mog Evolution experience is tagged [W2] on third-party trackers — World 1 and World 2 are two separate Roblox experiences with their own leaderboards, and World 1 progress does not carry over into World 2. Inside the [W2] experience, the named progression path is: tap with Hammer to earn currency, take Bonesmash as the first upgrade once it unlocks, then enable the six Auto systems in order — Auto mog → Auto farm → Auto Appeal Gain → Auto Ascend (after earning Wings) → Auto Rebirth → Auto Claim Daily Rewards.",
  keyFacts: [
    { label: "World tag", value: "[W2] (separate from World 1, no carryover, separate leaderboard)" },
    { label: "First upgrade", value: "Bonesmash (after Hammer taps)" },
    { label: "Auto enable order", value: "Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards" },
    { label: "Ascend unlock", value: "Earn Wings first (Appeal threshold unannounced)" },
    { label: "Universe", value: "10764479526" },
  ],
  modules: [
    {
      id: "world-tag",
      type: "callout",
      tone: "tip",
      title: "World 1 vs World 2",
      body:
        "The live Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution is tagged [W2]. World 1 and World 2 are two separate Roblox experiences with separate leaderboards — World 1 progress does not carry over into World 2. This hub covers the [W2] experience only; World 1 has its own Universe ID and is out of scope here.",
    },
    {
      id: "progression-order",
      type: "steps",
      heading: "Named upgrade + Auto-system enable order",
      items: [
        { title: "Tap with Hammer", body: "Tap to earn currency in the [W2] experience's opening loop." },
        { title: "Buy Bonesmash", body: "Take Bonesmash as the first upgrade once it unlocks — this is the named first upgrade for [W2]." },
        { title: "Enable Auto Mog", body: "Turn on Auto Mog once it unlocks to start auto-earning currency hands-free." },
        { title: "Enable Auto Farm", body: "Add Auto Farm as the next automation layer." },
        { title: "Enable Auto Appeal Gain", body: "Turn on Auto Appeal Gain to push Appeal toward the Wings threshold." },
        { title: "Earn Wings → enable Auto Ascend", body: "Earn Wings, then enable Auto Ascend as the mid-game accelerator. The exact Wings Appeal threshold is not announced." },
        { title: "Enable Auto Rebirth", body: "Turn on Auto Rebirth once it unlocks so resets happen automatically when growth flattens." },
        { title: "Enable Auto Claim Daily Rewards", body: "Finish the enable ladder with Auto Claim Daily Rewards for free catch-up boosts." },
      ],
    },
    {
      id: "auto-systems",
      type: "comparison",
      heading: "What each Auto system does",
      options: [
        { name: "Auto Mog", summary: "Auto-earns Mogs without tapping.", bestFor: "First automation to enable." },
        { name: "Auto Farm", summary: "Auto-runs the farm income stream.", bestFor: "Layered income on top of Auto Mog." },
        { name: "Auto Appeal Gain", summary: "Pushes Appeal toward the Wings unlock.", bestFor: "Mid-game Appeal progression." },
        { name: "Auto Ascend", summary: "Automates Ascend once Wings is earned.", bestFor: "Mid-game acceleration." },
        { name: "Auto Rebirth", summary: "Automates the rebirth reset when growth flattens.", bestFor: "Compounding multiplier runs." },
        { name: "Auto Claim Daily Rewards", summary: "Auto-claims the daily reward each session.", bestFor: "Free catch-up boosts." },
      ],
    },
    {
      id: "progression-notes",
      type: "callout",
      tone: "caution",
      title: "What is not announced",
      body:
        "The exact Wings Appeal threshold, any post-Bonesmash tool tier, and the documented rebirth reward curve are not announced as of 2026-09-15. The Roblox Universe page lists Hammer, Wings, Ascend, and the leaderboard but does not publish the precise unlock numbers; this hub maps the named loop without inventing those thresholds.",
    },
  ],
  faqIds: ["four-pillars", "first-pillar", "active-codes"],
  relatedPageIds: ["beginners-guide", "rebirth-reset", "evolution-guide", "codes-rewards"],
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
        "+1 Muscle Evolution, +1 Magic Evolution, +1 Superhero Evolution, and +1 Speed Evolve share the +1 Evolution series but have separate Universe IDs, Place IDs, and code lists. A code that works in +1 Muscle Evolution will not redeem in +1 Mog Evolution; do not paste codes across siblings.",
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
    "How to evolve Mogs into higher tiers in +1 Mog Evolution, what the Mog progression path looks like in series-family terms, and what is not announced.",
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
      heading: "How Mog evolution works in series-family terms",
      body:
        "Across the +1 Evolution game family on Roblox, Mog-style units share a common progression shape: you obtain a unit, you play with it long enough to meet a growth threshold, and the unit advances into a stronger form. Higher tiers typically compound the clicker pillar's income and unlock new Mog variants. The exact thresholds, multipliers, and tier names in +1 Mog Evolution are not announced as of 2026-09-15.",
    },
    {
      id: "evolution-stages",
      type: "steps",
      heading: "Mog progression stages (series-family terms)",
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
  h1: "+1 Mog Evolution Beginner's Guide: Hammer, Bonesmash, Auto Enable Order",
  seoTitle: "+1 Mog Evolution Beginner's Guide (2026): Hammer, Bonesmash, Auto Order",
  metaDescription:
    "+1 Mog Evolution beginner's guide: day-one setup on Roblox [W2], the named Hammer → Bonesmash first upgrade, and the six Auto systems enable order.",
  summary:
    "Day-one setup on Roblox for +1 Mog Evolution's [W2] experience, the named Hammer → Bonesmash first upgrade, and the six Auto systems enable order.",
  hero: {
    eyebrow: "Beginner's guide",
    subtitle:
      "Day-one setup on the live [W2] Roblox experience: Hammer → Bonesmash, then Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards.",
    ctas: [
      { label: "Open the game", href: "/roblox" },
      { label: "Gameplay overview", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "To start playing +1 Mog Evolution on Roblox, open the official Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution (the live [W2] experience), sign in to your Roblox account, and click Play. The game resolves to Place ID 92648272637932 under Universe 10764479526. Tap with Hammer to earn currency, take Bonesmash as your first named upgrade, then enable the six Auto systems in order: Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend (once Wings is earned) → Auto Rebirth → Auto Claim Daily Rewards.",
  keyFacts: [
    { label: "World tag", value: "[W2] (no carryover from World 1)" },
    { label: "Universe", value: "10764479526" },
    { label: "Place ID", value: "92648272637932" },
    { label: "First upgrade", value: "Bonesmash (after Hammer taps)" },
    { label: "Auto enable order", value: "Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards" },
    { label: "Freshness window", value: "21 days from 2026-08-30" },
  ],
  modules: [
    {
      id: "first-session",
      type: "steps",
      heading: "Day-one setup on the [W2] Roblox experience",
      items: [
        { title: "Open the Universe page", body: "Visit https://www.roblox.com/games/92648272637932/+1-Mog-Evolution — this is the live [W2] experience." },
        { title: "Sign in or create a Roblox account", body: "Use the Roblox client or web sign-in; the game launches inside the Roblox client." },
        { title: "Click Play", body: "Place ID 92648272637932 under Universe 10764479526 loads inside the client." },
        { title: "Tap with Hammer", body: "Tap to earn currency in the opening loop." },
        { title: "Buy Bonesmash", body: "Take Bonesmash as the first named upgrade once it unlocks." },
        { title: "Enable Auto Mog, then Auto Farm", body: "Turn on Auto Mog, then Auto Farm, to start earning hands-free." },
        { title: "Enable Auto Appeal Gain, then earn Wings for Auto Ascend", body: "Push Appeal toward Wings, then enable Auto Ascend. The exact Wings Appeal threshold is not announced." },
        { title: "Enable Auto Rebirth and Auto Claim Daily Rewards", body: "Finish the enable ladder so resets and daily rewards happen automatically." },
        { title: "Bookmark the Universe page", body: "Revisit weekly during the 21-day new-site freshness window." },
      ],
    },
    {
      id: "first-session-tips",
      type: "prose",
      heading: "First-session tips",
      body:
        "Spend the first session on the named progression path rather than chasing every upgrade — Bonesmash first, then the six Auto systems in the published order. Codes are Universe-scoped, so do not paste codes from sibling +1 Evolution games. If you see a community tier sheet or trade-value table before a first-party source, treat it as unverified until the Roblox Universe page or the verified Discord publishes the same numbers.",
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
