import type { PageContent } from "@/types/content";

export const releaseDateStatus: PageContent = {
  id: "release-date-status",
  translationKey: "release-date-status",
  locale: "en-US",
  routeKind: "fixed",
  slug: "release-date",
  url: "/release-date",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Release Date and Roblox Launch Status",
  seoTitle: "+1 Mog Evolution Release Date and Current Roblox Status (2026)",
  metaDescription:
    "Confirmed +1 Mog Evolution release date on Roblox: Universe created 2026-08-30, 16 days live, top-trending #30 and CCU 10,104 as of 2026-09-15.",
  summary:
    "Confirm the +1 Mog Evolution release date and current Roblox Universe status as of 2026-09-15.",
  hero: {
    eyebrow: "Launch status",
    subtitle:
      "Universe created 2026-08-30; 16 days live; top-trending #30, CCU 10,104, favorites 71,409, visits 4.15M.",
    ctas: [
      { label: "Open the Roblox game page", href: "/roblox" },
      { label: "Gameplay overview", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "+1 Mog Evolution released on Roblox on August 30, 2026, when its Universe (ID 10764479526) and Place (ID 92648272637932) were first published. The game has been publicly playable for 16 days as of 2026-09-15, so the +1 Mog Evolution release date is confirmed and the title is in soft-launch status rather than a fixed regional or beta window. Brief-snapshot signals back that up: the game sits at Roblox US top-trending #30 with about 10,104 concurrent players and 71,409 favorites.",
  keyFacts: [
    { label: "Release date", value: "2026-08-30 (Universe created)" },
    { label: "Universe ID", value: "10764479526" },
    { label: "Place ID", value: "92648272637932" },
    { label: "Days live", value: "16 days (as of 2026-09-15)" },
    { label: "Top trending", value: "#30 (US, brief snapshot)" },
    { label: "Status", value: "Soft-launch, publicly playable" },
  ],
  modules: [
    {
      id: "release-date-meta",
      type: "prose",
      heading: "Confirmed +1 Mog Evolution Release Date and Universe Metadata",
      body:
        "The release date is the date the Roblox Universe was created. Per the official Roblox Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution, the Universe ID is 10764479526 and the Place ID is 92648272637932, and the game-check brief records a Universe created_at of 2026-08-30. That is the authoritative +1 Mog Evolution release date. The Place ID has been live continuously since creation. Roblox universes are timestamped at creation and made publicly playable as soon as the developer flips the toggle, so the same date functions as both the launch timestamp and the start of the public availability window. There is no separate closed-beta, regional soft launch, or staggered release schedule documented.",
    },
    {
      id: "soft-launch-status",
      type: "callout",
      tone: "tip",
      title: "Current Status: Soft-Launch, Publicly Playable",
      body:
        "As of 2026-09-15, the release window sits inside the typical 0-21 day new-site freshness window: the game is 16 days old, the Roblox Universe page is reachable, and there is no evidence of a takedown, scheduled maintenance, or regional block. Treat the title as soft-launch / publicly playable on Roblox rather than as a fully marketed launch with a separate global release announcement. Brief-snapshot signals back that up: top-trending #30, CCU 10,104, favorites 71,409, and visits 4.15M are demand signals consistent with an active, in-window Roblox experience rather than a fading one.",
    },
    {
      id: "freshness-window",
      type: "prose",
      heading: "What to Watch as the Release Window Closes",
      body:
        "The first 21 days after the +1 Mog Evolution release date are the period when most first-party and community data layers tend to appear. The Roblox page description, official social channels, and any community-maintained Mog roster, code list, or tier sheet usually publish in that window. Today, none of those secondary resources is observable: no first-party roster is published, no public code list is visible on the game page, and no third-party wiki is established. Reopening the Universe page once a week during the freshness window is the most reliable way to catch the first wave of official updates.",
    },
    {
      id: "release-sources",
      type: "data-table",
      heading: "Release evidence table",
      columns: [
        { key: "field", label: "Field" },
        { key: "value", label: "Value" },
        { key: "source", label: "Source" },
      ],
      rows: [
        { field: "Release date", value: "2026-08-30", source: "Roblox Universe created_at" },
        { field: "Universe ID", value: "10764479526", source: "Roblox Universe metadata" },
        { field: "Place ID", value: "92648272637932", source: "Roblox Universe metadata" },
        { field: "Days live", value: "16", source: "Computed 2026-08-30 → 2026-09-15" },
        { field: "Top trending (US)", value: "#30", source: "Game-check brief, 2026-09-15" },
        { field: "Concurrent players", value: "~10,104", source: "Game-check brief, 2026-09-15" },
        { field: "Favorites", value: "71,409", source: "Game-check brief, 2026-09-15" },
        { field: "Visits", value: "4.15M", source: "Game-check brief, 2026-09-15" },
      ],
    },
  ],
  faqIds: ["release-date", "still-available", "how-long-live", "leave-beta"],
  relatedPageIds: ["roblox-page", "gameplay-overview", "beginners-guide"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const robloxPage: PageContent = {
  id: "roblox-page",
  translationKey: "roblox-page",
  locale: "en-US",
  routeKind: "fixed",
  slug: "roblox",
  url: "/roblox",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Open the +1 Mog Evolution Roblox Game Page",
  seoTitle: "Open the +1 Mog Evolution Roblox Game Page (Universe 10764479526)",
  metaDescription:
    "The official +1 Mog Evolution Roblox game page: Universe 10764479526, Place ID 92648272637932, creator group, and one-click Play entry point.",
  summary:
    "Open the official Roblox Universe page for +1 Mog Evolution and confirm the Place ID, creator, and current popularity stats.",
  hero: {
    eyebrow: "Roblox Universe",
    subtitle:
      "Universe 10764479526 (Place ID 92648272637932) — the authoritative source for every +1 Mog Evolution fact.",
    ctas: [
      { label: "Release date", href: "/release-date" },
      { label: "Discord community", href: "/discord" },
    ],
  },
  quickAnswer:
    "Open the official +1 Mog Evolution Roblox Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution. That page resolves to Place ID 92648272637932 under Universe 10764479526 and is the single authoritative source for the game's identity, popularity stats, and creator info. Bookmark it: every other guide in this hub links back to this Universe page.",
  keyFacts: [
    { label: "Universe ID", value: "10764479526" },
    { label: "Place ID", value: "92648272637932" },
    { label: "Created", value: "2026-08-30" },
    { label: "Universe URL", value: "https://www.roblox.com/games/92648272637932/+1-Mog-Evolution" },
    { label: "API URL", value: "https://games.roblox.com/v1/games?universeIds=10764479526" },
    { label: "Status", value: "Publicly playable on Roblox" },
  ],
  modules: [
    {
      id: "roblox-universe",
      type: "prose",
      heading: "The single authoritative source",
      body:
        "Every fact on this hub links back to the official Roblox Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution. The Universe page is the canonical record for the Place ID, the creator's published description, supported devices, any uploaded thumbnail art, and the live popularity stats (favorites, visits, current CCU). When those numbers shift on the Universe page, the rest of the hub is updated in the next research pass.",
    },
    {
      id: "creator-info",
      type: "callout",
      tone: "tip",
      title: "Creator group",
      body:
        "The +1 Mog Evolution Creator Group is published on the Roblox groups index (https://www.roblox.com/groups). The exact Creator Group id is not confirmed in this hub as of 2026-09-15; verify the group link from the Roblox Universe page sidebar before joining or quoting it.",
    },
    {
      id: "play-button",
      type: "steps",
      heading: "How to open the game",
      items: [
        { title: "Open the Universe page", body: "Visit https://www.roblox.com/games/92648272637932/+1-Mog-Evolution in a browser." },
        { title: "Sign in to Roblox", body: "Use your existing Roblox account or create one; the game launches inside the Roblox client." },
        { title: "Click Play", body: "The Universe page Play button resolves to Place ID 92648272637932 under Universe 10764479526." },
        { title: "Bookmark the Universe page", body: "Use the bookmark as your freshness check; revisit once a week during the 21-day new-site window." },
      ],
    },
    {
      id: "roblox-sources",
      type: "data-table",
      heading: "Roblox Universe metadata table",
      columns: [
        { key: "field", label: "Field" },
        { key: "value", label: "Value" },
        { key: "source", label: "Source" },
      ],
      rows: [
        { field: "Universe ID", value: "10764479526", source: "Roblox Universe metadata" },
        { field: "Place ID", value: "92648272637932", source: "Roblox Universe metadata" },
        { field: "Universe URL", value: "https://www.roblox.com/games/92648272637932/+1-Mog-Evolution", source: "Roblox" },
        { field: "API URL", value: "https://games.roblox.com/v1/games?universeIds=10764479526", source: "Roblox Games API" },
        { field: "Creator group URL", value: "https://www.roblox.com/groups", source: "Roblox groups index" },
        { field: "Top trending (US)", value: "#30", source: "Game-check brief, 2026-09-15" },
        { field: "Concurrent players", value: "~10,104", source: "Game-check brief, 2026-09-15" },
        { field: "Favorites", value: "71,409", source: "Game-check brief, 2026-09-15" },
        { field: "Visits", value: "4.15M", source: "Game-check brief, 2026-09-15" },
      ],
    },
  ],
  faqIds: ["where-to-open-game", "universe-vs-place-id", "creator-group"],
  relatedPageIds: ["release-date-status", "discord-community", "gameplay-overview"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
