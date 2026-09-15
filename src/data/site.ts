import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "+1 Mog Evolution",
  brandMark: "MOG",
  gameName: "+1 Mog Evolution",
  domain: "1mogevolution.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://1mogevolution.pro").replace(/\/$/, ""),
  description:
    "Reference hub for +1 Mog Evolution — the Roblox clicker/pet-simulator game about evolving Mogs (Universe 10764479526, Place ID 92648272637932): release status, evolution tiers, Mog units, rebirth reset, code redemption, and community entry points.",
  tagline: "Source-backed reference for +1 Mog Evolution: release status, evolution tiers, codes, rebirth reset, and the Mog unit list.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "+1 Mog Evolution Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "+1 Mog Evolution on Roblox",
      href: "https://www.roblox.com/games/92648272637932/+1-Mog-Evolution",
      description: "Official Roblox Universe page for +1 Mog Evolution (Universe 10764479526, Place ID 92648272637932) — release metadata, creator, and current popularity stats.",
    },
    {
      label: "Roblox Games API — +1 Mog Evolution",
      href: "https://games.roblox.com/v1/games?universeIds=10764479526",
      description: "Roblox Games API multi-get for Universe 10764479526 — identity snapshot, visits, favorites, and player count used as the dated planning source.",
    },
    {
      label: "Roblox creator groups",
      href: "https://www.roblox.com/groups",
      description: "Roblox groups index — placeholder until the exact +1 Mog Evolution Creator Group id is confirmed by downstream codex work.",
    },
  ],
  disclaimer:
    "+1 Mog Evolution Wiki is an unofficial fan reference built from the official Roblox Universe page and the Roblox Games API snapshot. Facts come from those sources on research date 2026-09-15; unannounced details are labeled as such and the wiki does not invent roster, code, or rebirth numbers that the publisher has not published.",
};
