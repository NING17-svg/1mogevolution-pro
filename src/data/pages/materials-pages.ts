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
  h1: "+1 Mog Evolution Rebirth Reset: When to Reset and What It Costs",
  seoTitle: "+1 Mog Evolution Rebirth Reset (2026): When to Reset, What It Costs",
  metaDescription:
    "+1 Mog Evolution rebirth reset: when the reset pays for itself and what it costs, plus what is not announced as of 2026-09-15.",
  summary:
    "When the rebirth reset pays for itself in +1 Mog Evolution, what the trade-off looks like in series-family terms, and what is not announced.",
  hero: {
    eyebrow: "Rebirth reset",
    subtitle:
      "When to reset the loop and how the permanent multiplier compounds into the next run.",
    ctas: [
      { label: "Gameplay overview", href: "/gameplay" },
      { label: "Evolution guide", href: "/evolution-guide" },
    ],
  },
  quickAnswer:
    "Rebirth is the +1 Evolution game family's classic mid-game accelerator: when progress in the clicker pillar slows, you reset your run in exchange for a permanent multiplier that compounds into the next run. The exact reward curve and threshold values for +1 Mog Evolution are not announced as of 2026-09-15, so this page documents the trade-off in series-family terms rather than quoting an official curve.",
  keyFacts: [
    { label: "Mechanic", value: "Reset loop in exchange for permanent multiplier" },
    { label: "Curve", value: "Not announced as of 2026-09-15" },
    { label: "Best timing", value: "When clicker pillar growth slows noticeably" },
    { label: "Trade-off", value: "Lose run progress; gain compounding multiplier" },
    { label: "Universe", value: "10764479526" },
  ],
  modules: [
    {
      id: "rebirth-mechanic",
      type: "prose",
      heading: "How rebirth works in series-family terms",
      body:
        "Across the +1 Evolution game family on Roblox, the rebirth reset is the lever you pull when the clicker pillar's growth starts to flatten. You trade your current run's currency and Mog progress for a permanent multiplier that applies to the next run, and the multiplier compounds across resets. The mechanic is what makes the series family feel mid-game instead of a flat curve: each reset unlocks faster progression than the last run could reach.",
    },
    {
      id: "rebirth-timing",
      type: "steps",
      heading: "When to consider the reset",
      items: [
        { title: "Clicker growth flattens", body: "Tap income no longer meaningfully increases between upgrades." },
        { title: "Mog roster is plateauing", body: "No new tier unlocks are visible at current progression." },
        { title: "Multiplier preview looks favourable", body: "The next reset's previewed multiplier meaningfully outpaces the current run's growth." },
        { title: "Commit the reset", body: "Reset the loop and start the next run with the new multiplier applied." },
      ],
    },
    {
      id: "rebirth-boundaries",
      type: "callout",
      tone: "tip",
      title: "What is not announced",
      body:
        "A documented +1 Mog Evolution rebirth reward curve (exact multiplier per reset, exact reset thresholds, exact Mog progress lost on reset) is not announced as of 2026-09-15. Until the Roblox Universe page or the verified Discord publishes those numbers, this page does not estimate the curve.",
    },
  ],
  faqIds: ["rebirth-mechanic", "rebirth-timing", "rebirth-curve"],
  relatedPageIds: ["gameplay-overview", "evolution-guide", "beginners-guide"],
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
