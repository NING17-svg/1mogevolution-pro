import type { PageContent } from "@/types/content";

export const tierList: PageContent = {
  id: "tier-list",
  translationKey: "tier-list",
  locale: "en-US",
  routeKind: "fixed",
  slug: "tier-list",
  url: "/tier-list",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Tier List: Best Mogs Ranked (When Published)",
  seoTitle: "+1 Mog Evolution Tier List (2026): Best Mogs Ranked, Pending Roster",
  metaDescription:
    "+1 Mog Evolution tier list: best Mogs ranked once community tiers appear; no community tier sheet is observable as of 2026-09-15.",
  summary:
    "How a +1 Mog Evolution tier list will be assembled once community or first-party data lands, and what is not announced as of 2026-09-15.",
  hero: {
    eyebrow: "Tier list",
    subtitle:
      "Categories that will populate a tier list once community or first-party data lands; no community tier sheet is observable as of 2026-09-15.",
    ctas: [
      { label: "Evolution guide", href: "/evolution-guide" },
      { label: "Pets/Units list", href: "/units" },
    ],
  },
  quickAnswer:
    "No community-maintained +1 Mog Evolution tier sheet is observable as of 2026-09-15 — the game is 16 days old and the Roblox Universe page does not yet publish a first-party Mog roster with stats. This page documents the categories (S/A/B/C and starter-tier Mogs) that will populate the tier list once data lands rather than borrowing a tier list from sibling +1 Evolution games.",
  keyFacts: [
    { label: "Tier sheet status", value: "Not published as of 2026-09-15" },
    { label: "Universe", value: "10764479526" },
    { label: "Tier categories", value: "S / A / B / C + starter tier (series-family)" },
    { label: "Source rule", value: "First-party Roblox Universe or verified Discord" },
    { label: "Sibling rule", value: "Do not import from +1 Muscle Evolution or +1 Magic Evolution" },
  ],
  modules: [
    {
      id: "tier-categories",
      type: "comparison",
      heading: "Tier categories that will populate the list",
      options: [
        { name: "S tier", summary: "Top-performing Mogs with the highest multiplier contribution.", bestFor: "End-of-run carries." },
        { name: "A tier", summary: "Strong Mogs that slot into most progression plans.", bestFor: "Mid-run core." },
        { name: "B tier", summary: "Solid Mogs that fill specific roles or niches.", bestFor: "Coverage and substitution." },
        { name: "C tier", summary: "Starter Mogs used in the first session loop.", bestFor: "Day-one progression." },
      ],
    },
    {
      id: "no-tier-sheet",
      type: "callout",
      tone: "caution",
      title: "No tier sheet observed",
      body:
        "As of 2026-09-15, neither the official Roblox Universe page nor the verified Discord (when published) carries a community +1 Mog Evolution tier sheet. This page will populate once a tier sheet appears. Until then, treat any tier list circulating in third-party forums as unverified — numbers and tier names from sibling +1 Evolution games do not transfer across Universe IDs.",
    },
  ],
  faqIds: ["tier-sheet-status", "tier-categories", "sibling-tier-list"],
  relatedPageIds: ["evolution-guide", "pets-units-list", "gameplay-overview"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const rebirthReset: PageContent = {
  id: "rebirth-reset",
  translationKey: "rebirth-reset",
  locale: "en-US",
  routeKind: "fixed",
  slug: "rebirth",
  url: "/rebirth",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Rebirth Reset: Auto Rebirth in the W2 Named Loop",
  seoTitle: "+1 Mog Evolution Rebirth Reset (2026): Auto Rebirth Position in W2 Loop",
  metaDescription:
    "+1 Mog Evolution rebirth reset: where Auto Rebirth sits in the named [W2] progression path (Hammer → Bonesmash → six Auto systems), and what is not announced.",
  summary:
    "Where Auto Rebirth sits in the named +1 Mog Evolution [W2] progression path, when the reset pays for itself, and what is not announced.",
  hero: {
    eyebrow: "Rebirth reset",
    subtitle:
      "Auto Rebirth sits fifth in the named [W2] enable order: after Hammer → Bonesmash → Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend.",
    ctas: [
      { label: "Gameplay overview", href: "/gameplay" },
      { label: "Beginner's guide", href: "/beginners-guide" },
    ],
  },
  quickAnswer:
    "In the live [W2] +1 Mog Evolution experience, the named progression path is Hammer → Bonesmash first upgrade, then the six Auto systems in order: Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards. Auto Rebirth is the fifth Auto system to enable and it automates the reset once it unlocks, trading current-run progress for a compounding multiplier across runs.",
  keyFacts: [
    { label: "Position in [W2] loop", value: "Auto Rebirth (5th of 6 Auto systems)" },
    { label: "Named enable order", value: "Hammer → Bonesmash → Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards" },
    { label: "Curve", value: "Not announced as of 2026-09-15" },
    { label: "Best timing", value: "After Auto Mog / Auto Farm / Auto Appeal Gain / Auto Ascend are enabled" },
    { label: "Trade-off", value: "Lose run progress; gain compounding multiplier" },
    { label: "Universe", value: "10764479526" },
  ],
  modules: [
    {
      id: "rebirth-mechanic",
      type: "prose",
      heading: "Where Auto Rebirth sits in the [W2] loop",
      body:
        "The live Universe page describes a path that runs from Hammer through Wings and Ascend onto a leaderboard. Inside the +1 Mog Evolution [W2] experience, that path is the named enable ladder: take Bonesmash as the first upgrade, then enable Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend (after earning Wings) → Auto Rebirth → Auto Claim Daily Rewards. Auto Rebirth automates the reset lever so it fires automatically once growth in the run starts to flatten.",
    },
    {
      id: "rebirth-timing",
      type: "steps",
      heading: "When to turn on Auto Rebirth",
      items: [
        { title: "Auto Mog, Auto Farm, Auto Appeal Gain, Auto Ascend are enabled", body: "Auto Rebirth is the fifth Auto system in the named order; enable it once the prior four are running." },
        { title: "Run growth flattens", body: "Tap income, Auto Mog, Auto Farm, and Auto Appeal Gain stops meaningfully increasing between upgrades." },
        { title: "Multiplier preview looks favourable", body: "The next reset's previewed multiplier meaningfully outpaces the current run's growth." },
        { title: "Let Auto Rebirth fire", body: "Once enabled, Auto Rebirth handles the reset so the compounding multiplier takes effect each run." },
      ],
    },
    {
      id: "rebirth-boundaries",
      type: "callout",
      tone: "tip",
      title: "What is not announced",
      body:
        "The exact rebirth reward curve (multiplier per reset, reset thresholds, Mog progress lost on reset) and the Wings Appeal threshold that unlocks Auto Ascend are not announced as of 2026-09-15. Until the Roblox Universe page or the verified Discord publishes those numbers, this page maps the named loop without estimating the curve.",
    },
  ],
  faqIds: ["rebirth-mechanic", "rebirth-timing", "rebirth-curve"],
  relatedPageIds: ["gameplay-overview", "beginners-guide", "evolution-guide"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const petsUnitsList: PageContent = {
  id: "pets-units-list",
  translationKey: "pets-units-list",
  locale: "en-US",
  routeKind: "fixed",
  slug: "units",
  url: "/units",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Mog List: Units, Tiers, and How to Obtain Them",
  seoTitle: "+1 Mog Evolution Mog/Unit List (2026): Categories Pending First-Party Roster",
  metaDescription:
    "+1 Mog Evolution Mog/unit list: the categories that will populate the roster once the first-party list is published on the Roblox Universe page.",
  summary:
    "The Mog categories that will populate +1 Mog Evolution's unit list once first-party data lands, plus how to obtain Mogs in series-family terms.",
  hero: {
    eyebrow: "Mog list",
    subtitle:
      "Categories that will populate the roster once the first-party Mog list is published on the Roblox Universe page.",
    ctas: [
      { label: "Tier list", href: "/tier-list" },
      { label: "Evolution guide", href: "/evolution-guide" },
    ],
  },
  quickAnswer:
    "No first-party +1 Mog Evolution Mog roster with stats is published on the Roblox Universe page as of 2026-09-15. This page documents the categories that will populate the unit list — starter Mogs, mid-tier Mogs, evolution-stage Mogs, and event/limited Mogs — and how to obtain Mogs in series-family terms, rather than fabricating a roster.",
  keyFacts: [
    { label: "First-party roster", value: "Not published as of 2026-09-15" },
    { label: "Universe", value: "10764479526" },
    { label: "Categories", value: "Starter, mid-tier, evolution-stage, event/limited" },
    { label: "Source rule", value: "First-party Roblox Universe or verified Discord" },
  ],
  modules: [
    {
      id: "unit-categories",
      type: "entity-grid",
      heading: "Mog categories that will populate the list",
      items: [
        { title: "Starter Mogs", summary: "First Mogs you obtain in the opening loop.", href: "/evolution-guide" },
        { title: "Mid-tier Mogs", summary: "Mogs unlocked after the first rebirth.", href: "/rebirth" },
        { title: "Evolution-stage Mogs", summary: "Higher forms unlocked via the Mog evolution pillar.", href: "/evolution-guide" },
        { title: "Event / limited Mogs", summary: "Time-limited Mogs unlocked during special events (when announced).", href: "/codes" },
      ],
    },
    {
      id: "no-roster",
      type: "callout",
      tone: "caution",
      title: "No published Mog roster",
      body:
        "As of 2026-09-15, the +1 Mog Evolution Roblox Universe page does not publish a first-party Mog roster with stats. This page will populate once the Universe page description, the verified Discord, or an official social channel publishes the list. Until then, treat any third-party Mog list as unverified — roster names and stats from sibling +1 Evolution games do not transfer across Universe IDs.",
    },
  ],
  faqIds: ["first-party-roster", "starter-mogs", "obtain-mogs"],
  relatedPageIds: ["tier-list", "evolution-guide", "gameplay-overview"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const tradingValues: PageContent = {
  id: "trading-values",
  translationKey: "trading-values",
  locale: "en-US",
  routeKind: "fixed",
  slug: "trading",
  url: "/trading",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Trading Values: Community Trade Sheet (When Published)",
  seoTitle: "+1 Mog Evolution Trading Values (2026): Pending Community Sheet",
  metaDescription:
    "+1 Mog Evolution trading values: how community trade sheets will be assembled once a trade channel appears, plus what is not announced as of 2026-09-15.",
  summary:
    "How +1 Mog Evolution trade values will be tracked once a community trade channel appears, plus the absence of a public sheet as of 2026-09-15.",
  hero: {
    eyebrow: "Trading values",
    subtitle:
      "How community trade values will be tracked once a trade channel appears; no public sheet is observable as of 2026-09-15.",
    ctas: [
      { label: "Tier list", href: "/tier-list" },
      { label: "Discord community", href: "/discord" },
    ],
  },
  quickAnswer:
    "No community +1 Mog Evolution trade-value sheet is observable as of 2026-09-15 — the game is 16 days old and no dedicated trade channel has been indexed. This page documents how a community sheet will be assembled (rarity tier × demand tier) once a trade channel appears, rather than importing values from sibling +1 Evolution games.",
  keyFacts: [
    { label: "Trade sheet", value: "Not published as of 2026-09-15" },
    { label: "Universe", value: "10764479526" },
    { label: "Trade surface", value: "Verified Discord (when published) or in-game trading (if enabled)" },
    { label: "Sibling rule", value: "Do not import from sibling +1 Evolution games" },
  ],
  modules: [
    {
      id: "trade-shape",
      type: "prose",
      heading: "How a community trade sheet will be assembled",
      body:
        "Across Roblox pet-sim clickers, community trade sheets typically combine two axes: a Mog's rarity tier (starter, mid, evolution-stage, event/limited) and its current community demand (rising, stable, falling). Once a +1 Mog Evolution trade channel appears on the verified Discord or inside the Roblox trading surface, the sheet will follow that two-axis pattern. As of 2026-09-15, no such channel is observable.",
    },
    {
      id: "trade-boundary",
      type: "callout",
      tone: "tip",
      title: "What is not announced",
      body:
        "A dedicated trade channel, an in-game trading surface, and any official trade-value floors for +1 Mog Evolution are not announced as of 2026-09-15. This page will populate once a trade channel appears. Trade values from sibling +1 Evolution games are scoped to their own Universe IDs and do not carry across to +1 Mog Evolution.",
    },
  ],
  faqIds: ["trade-sheet-status", "trade-surface", "sibling-trade-values"],
  relatedPageIds: ["tier-list", "discord-community", "pets-units-list"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
