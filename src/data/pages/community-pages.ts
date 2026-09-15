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
  h1: "+1 Mog Evolution Discord: Community Entry Point and Invite Verification",
  seoTitle: "+1 Mog Evolution Discord: Verified Invite and Community Entry",
  metaDescription:
    "+1 Mog Evolution Discord community: how to find the verified invite once published and avoid third-party mirrors, plus the absence of a public invite as of 2026-09-15.",
  summary:
    "How to find the verified +1 Mog Evolution Discord invite once published, how to avoid third-party mirrors, and the absence of a public invite as of 2026-09-15.",
  hero: {
    eyebrow: "Community",
    subtitle:
      "Verified invite linked from the official Roblox Universe page once published; no public Discord invite is observable as of 2026-09-15.",
    ctas: [
      { label: "Roblox Universe page", href: "/roblox" },
      { label: "Wiki / FAQ", href: "/wiki" },
    ],
  },
  quickAnswer:
    "As of 2026-09-15, no verified official +1 Mog Evolution Discord invite is published on the Roblox Universe page or any indexed official social channel. Once the creator publishes an invite, the verified link will be surfaced from the Universe page description or the creator's Roblox group — never from a third-party forum, search-result snippet, or social post that is not explicitly linked from the Universe page.",
  keyFacts: [
    { label: "Verified invite", value: "Not announced as of 2026-09-15" },
    { label: "Universe", value: "10764479526" },
    { label: "Authoritative surface", value: "Roblox Universe page description or creator's Roblox group" },
    { label: "Verify rule", value: "Re-verify against the Universe page before joining" },
  ],
  modules: [
    {
      id: "no-invite-yet",
      type: "callout",
      tone: "caution",
      title: "No public Discord invite observed",
      body:
        "As of 2026-09-15, no verified +1 Mog Evolution Discord invite is published on the Roblox Universe page or any indexed official social channel. The game is 16 days old, which is inside the typical new-site window for a creator to publish community links. This page will populate the verified invite once the Universe page surfaces it.",
    },
    {
      id: "verify-invite",
      type: "prose",
      heading: "Always verify the invite",
      body:
        "When a Discord invite does appear, re-verify it against the official Roblox Universe page or the creator's Roblox group before joining. Third-party mirrors and search-result copies of Discord invites drift: the invite that worked yesterday can resolve to a different server tomorrow. The Universe page is the authoritative source for the invite currently in use.",
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
