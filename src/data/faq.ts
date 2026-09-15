import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "where-to-open-game",
    question: "Where do I open +1 Mog Evolution on Roblox?",
    answer:
      "Open the official Roblox Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution. That page resolves to Place ID 92648272637932 under Universe 10764479526, which is the same game every other page in this hub references.",
    pageIds: ["home", "roblox-page", "beginners-guide", "guides", "faq", "about"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "universe-vs-place-id",
    question: "What is the difference between Universe ID and Place ID?",
    answer:
      "Universe ID 10764479526 is the top-level identifier for the +1 Mog Evolution experience on Roblox. Place ID 92648272637932 is the specific game server inside that Universe that loads when you click Play. Both resolve to the same game; the Universe page is the canonical surface for popularity stats and the Place ID is what the Roblox client launches.",
    pageIds: ["roblox-page"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "creator-group",
    question: "Where is the official +1 Mog Evolution creator group?",
    answer:
      "The +1 Mog Evolution creator group is the Navoj Mog community at https://www.roblox.com/communities/426881025. That creator profile also surfaces the verified Discord invite; re-verify against the live Roblox Universe page sidebar before quoting the group link.",
    pageIds: ["roblox-page"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-date",
    question: "When did +1 Mog Evolution release on Roblox?",
    answer:
      "The +1 Mog Evolution release date is 2026-08-30, the date the Roblox Universe (ID 10764479526) was created. Place ID 92648272637932 went live on the same day and has been publicly playable since.",
    pageIds: ["release-date-status", "home", "guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "still-available",
    question: "Is +1 Mog Evolution still available on Roblox as of 2026-09-15?",
    answer:
      "Yes. The Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution resolves cleanly, the game is 16 days old, and the brief snapshot shows top-trending #30 with CCU 10,104. Treat the status as soft-launch / publicly playable.",
    pageIds: ["release-date-status", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-long-live",
    question: "How long has +1 Mog Evolution been live?",
    answer:
      "Sixteen days, calculated from the 2026-08-30 creation date to the 2026-09-15 research date. That window sits inside the typical 0-21 day new-site freshness window used to evaluate Roblox launches.",
    pageIds: ["release-date-status"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "leave-beta",
    question: "Will +1 Mog Evolution leave early access or beta?",
    answer:
      "There is no separate early-access or beta phase announced for +1 Mog Evolution. The title launched directly as a publicly playable Roblox Universe on 2026-08-30. Any future change to that distribution model is not announced as of 2026-09-15; check the official Roblox game page for updates.",
    pageIds: ["release-date-status"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "freshness-window",
    question: "What is the 21-day new-site freshness window?",
    answer:
      "The first 21 days after a Roblox Universe is created is when most first-party and community data layers tend to appear: game descriptions, official social channels, first-party Mog rosters, code lists, tier sheets, and community Discords. +1 Mog Evolution is 16 days old as of 2026-09-15 and sits inside this window.",
    pageIds: ["beginners-guide", "release-date-status"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "first-action",
    question: "What is the first action for a new +1 Mog Evolution player?",
    answer:
      "Open the Roblox Universe page at https://www.roblox.com/games/92648272637932/+1-Mog-Evolution, sign in to your Roblox account, click Play, and spend your first session on the clicker pillar. Claim your first Mog during the opening loop and bookmark the Universe page for the weekly freshness check.",
    pageIds: ["beginners-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "first-session",
    question: "What should I focus on in the first session?",
    answer:
      "Focus on the clicker pillar: it builds the daily-currency floor that the Mog evolution and rebirth pillars multiply on top of. Do not paste codes from sibling +1 Evolution games, and treat any community tier sheet or trade-value table that appears before a first-party source as unverified.",
    pageIds: ["beginners-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "four-pillars",
    question: "What are the four pillars of the +1 Mog Evolution loop?",
    answer:
      "In the live [W2] experience, the named progression path is: tap with Hammer → take Bonesmash as the first upgrade → enable the six Auto systems in order (Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend → Auto Rebirth → Auto Claim Daily Rewards). Each Auto system is the named equivalent of a loop pillar; the exact post-Bonesmash tool tier and Wings Appeal threshold are not announced.",
    pageIds: ["gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "first-pillar",
    question: "Which pillar should I focus on first?",
    answer:
      "Tap with Hammer to earn currency, then take Bonesmash as the first named upgrade. After that, enable the six Auto systems in the published order: Auto Mog → Auto Farm → Auto Appeal Gain → Auto Ascend (once Wings is earned) → Auto Rebirth → Auto Claim Daily Rewards. The exact Wings Appeal threshold is not announced.",
    pageIds: ["gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "active-codes",
    question: "Are there any active +1 Mog Evolution codes right now?",
    answer:
      "No public code list is observable on the official +1 Mog Evolution Roblox Universe page as of 2026-09-15. The Codes and Rewards page explains the typical Roblox redemption flow and where to watch when new codes drop, without importing codes from sibling +1 Evolution games.",
    pageIds: ["codes-rewards", "home", "gameplay-overview", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "redemption-surface",
    question: "How do I redeem a +1 Mog Evolution code?",
    answer:
      "Codes are redeemed inside the Roblox game client. Open the game, look for a Codes or Rewards button on the main UI or in a settings menu, paste or type the alphanumeric code exactly as published, and claim the reward. There is no web redemption surface for +1 Mog Evolution as of 2026-09-15.",
    pageIds: ["codes-rewards"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sibling-codes",
    question: "Do +1 Mog Evolution codes work in sibling +1 Evolution games?",
    answer:
      "No. +1 Muscle Evolution, +1 Magic Evolution, +1 Superhero Evolution, and +1 Speed Evolve share the +1 Evolution series but have separate Universe IDs, Place IDs, and code lists. A code that works in one sibling will not redeem in +1 Mog Evolution.",
    pageIds: ["codes-rewards"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-to-evolve",
    question: "How do I evolve Mogs in +1 Mog Evolution?",
    answer:
      "Mogs evolve by accumulating progression in the Mog evolution pillar: you collect a Mog, you grow it through play, and at thresholds it advances into a stronger form. The exact tier names, multipliers, and unlock conditions are not announced as of 2026-09-15.",
    pageIds: ["evolution-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tier-multipliers",
    question: "Are tier multipliers announced?",
    answer:
      "A documented tier multiplier curve is not announced as of 2026-09-15. Once the Roblox Universe page or the verified Discord publishes the curve, the Evolution Guide and Tier List will map tier names and multipliers to the progression path.",
    pageIds: ["evolution-guide", "tier-list"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tier-sheet-status",
    question: "Is there a community +1 Mog Evolution tier sheet?",
    answer:
      "No community-maintained tier sheet is observable as of 2026-09-15. The game is 16 days old and the Roblox Universe page does not yet publish a first-party Mog roster with stats. Tier lists from sibling +1 Evolution games do not transfer across Universe IDs.",
    pageIds: ["tier-list"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tier-categories",
    question: "What tier categories will the tier list use?",
    answer:
      "The tier list will use the standard S / A / B / C categories plus a starter tier once community or first-party data lands. Categories are documented in advance so the page can populate without inventing numbers.",
    pageIds: ["tier-list"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sibling-tier-list",
    question: "Can I borrow a tier list from +1 Muscle Evolution or +1 Magic Evolution?",
    answer:
      "No. Tier lists are scoped to a Universe ID. Sibling +1 Evolution games have separate Universe IDs and separate Mog rosters; their tier lists do not apply to +1 Mog Evolution (Universe 10764479526).",
    pageIds: ["tier-list"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "rebirth-mechanic",
    question: "How does the rebirth reset work in +1 Mog Evolution?",
    answer:
      "Rebirth is the +1 Evolution game family's mid-game accelerator: when progress in the clicker pillar slows, you reset your run in exchange for a permanent multiplier that compounds into the next run. The exact reward curve for +1 Mog Evolution is not announced as of 2026-09-15.",
    pageIds: ["rebirth-reset"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "rebirth-timing",
    question: "When should I rebirth?",
    answer:
      "Consider the reset when clicker growth flattens (tap income no longer meaningfully increases between upgrades), when your Mog roster is plateauing (no new tier unlocks are visible at current progression), and when the next reset's previewed multiplier meaningfully outpaces the current run's growth.",
    pageIds: ["rebirth-reset"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "rebirth-curve",
    question: "Is the rebirth reward curve announced?",
    answer:
      "A documented +1 Mog Evolution rebirth reward curve (exact multiplier per reset, exact reset thresholds, exact Mog progress lost on reset) is not announced as of 2026-09-15. Until the Roblox Universe page or the verified Discord publishes those numbers, the Rebirth Reset page does not estimate the curve.",
    pageIds: ["rebirth-reset"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "first-party-roster",
    question: "Is there a first-party Mog roster with stats?",
    answer:
      "No first-party +1 Mog Evolution Mog roster with stats is published on the Roblox Universe page as of 2026-09-15. Once the Universe page description, the verified Discord, or an official social channel publishes the list, the Mog / Units page will populate with stats, tiers, and obtain methods.",
    pageIds: ["pets-units-list", "evolution-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "starter-mogs",
    question: "What starter Mogs exist in +1 Mog Evolution?",
    answer:
      "A first-party starter Mog list is not announced as of 2026-09-15. The first Mogs you obtain will come from the opening loop; this page will populate once the Universe page description or the verified Discord publishes the roster.",
    pageIds: ["pets-units-list"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "obtain-mogs",
    question: "How do I obtain Mogs in +1 Mog Evolution?",
    answer:
      "In series-family terms, Mogs are obtained through play (earn or unlock during the clicker loop), through the Mog evolution pillar (higher forms unlock as you progress), and through events when the creator publishes limited-time Mogs. Specific obtain methods for +1 Mog Evolution are not announced as of 2026-09-15.",
    pageIds: ["pets-units-list"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trade-sheet-status",
    question: "Is there a community +1 Mog Evolution trade-value sheet?",
    answer:
      "No community trade-value sheet is observable as of 2026-09-15 — the game is 16 days old and no dedicated trade channel has been indexed. This page will populate once a trade channel appears on the verified Discord or inside an in-game trading surface.",
    pageIds: ["trading-values"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trade-surface",
    question: "Where will trade values be published?",
    answer:
      "Trade values will most likely surface on the verified Discord (once published) or inside an in-game trading surface if the creator enables one. Trade values from sibling +1 Evolution games are scoped to their own Universe IDs and do not carry across to +1 Mog Evolution.",
    pageIds: ["trading-values"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sibling-trade-values",
    question: "Can I borrow trade values from sibling +1 Evolution games?",
    answer:
      "No. Trade values are Universe-scoped. Sibling +1 Evolution games have separate Universe IDs and separate Mog rosters; their trade values do not apply to +1 Mog Evolution (Universe 10764479526).",
    pageIds: ["trading-values"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "discord-official",
    question: "Is there an official +1 Mog Evolution Discord?",
    answer:
      "Yes. The verified +1 Mog Evolution Discord invite is https://discord.gg/aZ6w6QgPZ9. It is reachable from third-party trackers and the Navoj Mog creator community profile (https://www.roblox.com/communities/426881025); re-verify against the live Roblox Universe page or the creator group before joining.",
    pageIds: ["discord-community"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "discord-credentials",
    question: "Will the official Discord ever ask for my Roblox credentials?",
    answer:
      "No. Treat any DM that asks for your Roblox account credentials as a phishing attempt — the official Discord never requests credentials in DM. The official channels for announcements, codes, and Q&A are public inside the server.",
    pageIds: ["discord-community"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "discord-invite-verification",
    question: "How do I verify the Discord invite is official?",
    answer:
      "Re-verify the invite link against the official Roblox Universe page (https://www.roblox.com/games/92648272637932/+1-Mog-Evolution) or the Navoj Mog creator group (https://www.roblox.com/communities/426881025) before joining. Third-party mirrors and search-result copies of Discord invites drift; the Universe page and the creator group are the authoritative sources for the invite currently in use.",
    pageIds: ["discord-community"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "third-party-wiki",
    question: "Is there a third-party +1 Mog Evolution wiki?",
    answer:
      "No third-party +1 Mog Evolution wiki has been established as of 2026-09-15. The game is 16 days old, which is inside the typical new-site window for community wikis to appear. Once one does, it will most likely be linked from the Roblox Universe page description or the verified Discord.",
    pageIds: ["wiki"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-surface",
    question: "What is the current FAQ surface for +1 Mog Evolution?",
    answer:
      "Until a third-party wiki is established, the current FAQ surfaces are this hub (every page carries a research-date stamp and source links), the Roblox Universe page description (creator-published facts), and the verified Discord once published.",
    pageIds: ["wiki"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "wiki-establishment",
    question: "When will a community +1 Mog Evolution wiki be established?",
    answer:
      "Most third-party Roblox wikis are established inside the 0-21 day new-site freshness window. +1 Mog Evolution is 16 days old as of 2026-09-15; the most likely signal is the creator linking a community wiki from the Roblox Universe page description or the verified Discord.",
    pageIds: ["wiki"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "compare-siblings",
    question: "How does +1 Mog Evolution compare to other +1 Evolution games?",
    answer:
      "The title is the live [W2] +1 Mog Evolution experience (Universe 10764479526). World 1 and World 2 are two separate Roblox experiences with separate leaderboards and no progress carryover. Siblings such as +1 Muscle Evolution and +1 Magic Evolution are separate Universe IDs with their own codes, units, and Discord; treat each sibling as a separate game and do not carry data across them.",
    pageIds: ["home", "faq", "about"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
