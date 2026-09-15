import type { PageContent } from "@/types/content";

export const discordCommunity: PageContent = {
  id: "discord-community",
  translationKey: "discord-community",
  locale: "en-US",
  routeKind: "fixed",
  slug: "discord",
  url: "/discord",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Mog Evolution Discord: Verified Invite (discord.gg/aZ6w6QgPZ9) and Re-Verification",
  seoTitle: "+1 Mog Evolution Discord: Verified Invite (discord.gg/aZ6w6QgPZ9)",
  metaDescription:
    "+1 Mog Evolution Discord community: the verified invite discord.gg/aZ6w6QgPZ9, how to re-verify against the live Roblox Universe page and the Navoj Mog creator group, and how to avoid third-party mirrors.",
  summary:
    "The verified +1 Mog Evolution Discord invite (discord.gg/aZ6w6QgPZ9), how to re-verify it against the live Roblox Universe page and the Navoj Mog creator group, and how to avoid third-party mirrors.",
  hero: {
    eyebrow: "Community",
    subtitle:
      "Verified invite: discord.gg/aZ6w6QgPZ9 — re-verify against the live Roblox Universe page or the Navoj Mog creator group before joining.",
    ctas: [
      { label: "Verified invite", href: "https://discord.gg/aZ6w6QgPZ9" },
      { label: "Roblox Universe page", href: "/roblox" },
    ],
  },
  quickAnswer:
    "The verified +1 Mog Evolution Discord invite is https://discord.gg/aZ6w6QgPZ9. The invite is reachable from third-party trackers and the Navoj Mog creator's Roblox group profile (https://www.roblox.com/communities/426881025). Always re-verify the invite against the live Roblox Universe page or the Navoj Mog creator group before joining; third-party mirrors drift and search-result copies of Discord invites can resolve to a different server.",
  keyFacts: [
    { label: "Verified invite", value: "https://discord.gg/aZ6w6QgPZ9" },
    { label: "Universe", value: "10764479526" },
    { label: "Creator group", value: "https://www.roblox.com/communities/426881025" },
    { label: "Verify rule", value: "Re-verify against the Universe page or creator group before joining" },
  ],
  modules: [
    {
      id: "verified-invite",
      type: "callout",
      tone: "tip",
      title: "Verified invite",
      body:
        "The current +1 Mog Evolution Discord invite is https://discord.gg/aZ6w6QgPZ9. Re-verify it against the live Roblox Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution or the Navoj Mog creator group at https://www.roblox.com/communities/426881025 before joining. If either of those surfaces stops pointing at this invite, treat it as stale and check this page for an updated link.",
    },
    {
      id: "verify-invite",
      type: "prose",
      heading: "Always re-verify the invite",
      body:
        "Discord invites drift: the invite that worked yesterday can resolve to a different server tomorrow. Before joining, cross-check the invite against one of the two authoritative surfaces — the live Roblox Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution, or the Navoj Mog creator group at https://www.roblox.com/communities/426881025. Third-party trackers and search-result copies of Discord invites should never be the only source you trust.",
    },
    {
      id: "third-party-warning",
      type: "callout",
      tone: "caution",
      title: "Avoid third-party mirrors",
      body:
        "Third-party forums, Discord-listing sites, and search-result snippets frequently copy stale or unrelated invites for click-bait. Never join a +1 Mog Evolution Discord from any link that is not echoed by the live Universe page or the Navoj Mog creator group. The verified invite above is the only entry point this site publishes.",
    },
    {
      id: "discord-channels",
      type: "prose",
      heading: "What to expect from the official Discord",
      body:
        "An official +1 Mog Evolution Discord will likely carry announcement channels, general discussion, Mog showcase, code announcements, and rebirth discussion. Treat any DM that asks for your Roblox account credentials as a phishing attempt — the official Discord never requests credentials in DM.",
    },
  ],
  faqIds: ["discord-official", "discord-credentials", "discord-invite-verification"],
  relatedPageIds: ["roblox-page", "wiki", "release-date-status"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const wikiFaq: PageContent = {
  id: "wiki",
  translationKey: "wiki-faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "wiki",
  url: "/wiki",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Is There a +1 Mog Evolution Wiki? Community FAQ Hub Status",
  seoTitle: "+1 Mog Evolution Wiki / FAQ: Community Channels and FAQ Hub Status",
  metaDescription:
    "+1 Mog Evolution wiki and FAQ: no third-party wiki is established as of 2026-09-15; this hub serves as the FAQ surface until a community wiki appears.",
  summary:
    "Find a community-maintained +1 Mog Evolution wiki, FAQ hub, and current community channels; this hub serves as the FAQ surface until an external wiki is established.",
  hero: {
    eyebrow: "Wiki / FAQ",
    subtitle:
      "No third-party wiki is established as of 2026-09-15; this hub is the current FAQ surface.",
    ctas: [
      { label: "Discord community", href: "/discord" },
      { label: "Gameplay overview", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "No third-party +1 Mog Evolution wiki has been established as of 2026-09-15. This hub serves as the current FAQ surface, with each page linked from the homepage. Once a community wiki is established, the creator will likely link to it from the Universe page description or the verified Discord.",
  keyFacts: [
    { label: "Third-party wiki", value: "None established as of 2026-09-15" },
    { label: "Current FAQ surface", value: "This hub" },
    { label: "Universe", value: "10764479526" },
    { label: "Watch surface", value: "Roblox Universe page description, verified Discord" },
  ],
  modules: [
    {
      id: "no-third-party-wiki",
      type: "callout",
      tone: "tip",
      title: "No third-party wiki established",
      body:
        "As of 2026-09-15, no third-party +1 Mog Evolution wiki has been established. The game is 16 days old, which is inside the typical new-site window for community wikis to appear. Once one does, it will most likely be linked from the Roblox Universe page description or the verified Discord.",
    },
    {
      id: "faq-surfaces",
      type: "prose",
      heading: "Current FAQ surfaces",
      body:
        "Until a third-party wiki is established, the current FAQ surfaces are this hub (every page carries a research-date stamp and source links), the Roblox Universe page description (creator-published facts), and the verified Discord once published. Treat third-party wikis not linked from those two sources as unverified.",
    },
    {
      id: "wiki-pages-map",
      type: "entity-grid",
      heading: "Wiki pages on this hub",
      items: [
        { title: "Release date", summary: "Confirmed 2026-08-30; 16 days live.", href: "/release-date" },
        { title: "Roblox game page", summary: "Universe 10764479526, Place ID 92648272637932.", href: "/roblox" },
        { title: "Gameplay overview", summary: "Four pillars of the +1 Mog Evolution loop.", href: "/gameplay" },
        { title: "Codes & rewards", summary: "Redemption flow and where to watch for new codes.", href: "/codes" },
        { title: "Evolution guide", summary: "How to evolve Mogs into higher tiers.", href: "/evolution-guide" },
        { title: "Beginner's guide", summary: "Day-one setup on Roblox.", href: "/beginners-guide" },
        { title: "Tier list", summary: "Best Mogs ranked once community tiers appear.", href: "/tier-list" },
        { title: "Rebirth reset", summary: "When the reset pays for itself.", href: "/rebirth" },
        { title: "Mog / unit list", summary: "Roster categories pending first-party data.", href: "/units" },
        { title: "Trading values", summary: "Trade sheet categories pending a trade channel.", href: "/trading" },
        { title: "Discord community", summary: "Verified invite once published.", href: "/discord" },
      ],
    },
  ],
  faqIds: ["third-party-wiki", "faq-surface", "wiki-establishment"],
  relatedPageIds: ["discord-community", "release-date-status", "roblox-page"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
