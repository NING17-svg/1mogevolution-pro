import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: `${site.gameName} Guides`,
    seoTitle: `${site.gameName} Guides | Evolution, Rebirth, Codes, Tier List`,
    metaDescription:
      "Browse the +1 Mog Evolution guide index: release status, gameplay overview, evolution, rebirth reset, codes, tier list, Mog roster, trading values, and Discord.",
    summary:
      "Browse the +1 Mog Evolution guide index across launch, gameplay, roster, and community topics.",
    hero: {
      eyebrow: "Guides index",
      subtitle:
        "Browse every +1 Mog Evolution guide across launch status, gameplay, roster, and community topics.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "Gameplay overview", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "The +1 Mog Evolution guides index links to every page on this hub across launch status, gameplay, roster, and community topics. Use this index to jump to the topic you need.",
    keyFacts: [
      { label: "Topics", value: "Launch, gameplay, roster, community" },
      { label: "Universe", value: "10764479526" },
      { label: "Research date", value: "2026-09-15" },
    ],
    modules: [
      {
        id: "guide-clusters",
        type: "entity-grid",
        heading: "Guide clusters",
        items: [
          { title: "Launch & status", summary: "Release date and Roblox Universe page.", href: "/release-date" },
          { title: "Gameplay overview", summary: "Four pillars of the +1 Mog Evolution loop.", href: "/gameplay" },
          { title: "Evolution guide", summary: "How to evolve Mogs into higher tiers.", href: "/evolution-guide" },
          { title: "Beginner's guide", summary: "Day-one setup on Roblox.", href: "/beginners-guide" },
          { title: "Rebirth reset", summary: "When the reset pays for itself.", href: "/rebirth" },
          { title: "Codes & rewards", summary: "Redemption flow and where to watch.", href: "/codes" },
          { title: "Tier list", summary: "Best Mogs ranked once tiers appear.", href: "/tier-list" },
          { title: "Mogs / units", summary: "Roster categories pending first-party data.", href: "/units" },
          { title: "Trading values", summary: "Trade sheet categories pending a channel.", href: "/trading" },
          { title: "Discord", summary: "Community entry and invite verification.", href: "/discord" },
          { title: "Wiki / FAQ", summary: "Community-maintained information channels.", href: "/wiki" },
        ],
      },
    ],
    faqIds: ["where-to-open-game", "release-date"],
    relatedPageIds: ["release-date-status", "gameplay-overview", "wiki"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
  },
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Launch, Codes, and Community Questions`,
    metaDescription:
      "+1 Mog Evolution FAQ: common launch, codes, gameplay, community, and wiki-scope questions answered with official Roblox Universe facts.",
    summary:
      "Common launch, gameplay, codes, community, and wiki-scope questions answered with official Roblox Universe facts.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Common launch, gameplay, codes, community, and wiki-scope questions answered with official Roblox Universe facts.",
      ctas: [
        { label: "Release Info", href: "/release-date" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "This FAQ answers launch, gameplay, codes, community, and wiki-scope questions using facts from the official Roblox Universe page (Universe 10764479526, Place ID 92648272637932) and the game-check brief dated 2026-09-15. Every answer is sourced; nothing here is invented from sibling +1 Evolution games.",
    keyFacts: [
      { label: "FAQ source", value: "Official Roblox Universe page + game-check brief" },
      { label: "Schema", value: "FAQ JSON-LD enabled" },
      { label: "Review", value: "Dated to research date 2026-09-15" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ scope",
        body:
          "This page collects short answers to questions a new +1 Mog Evolution player or wiki reader is likely to ask. Longer explanations live on the dedicated pages linked below. Every answer on this page is dated to the research date and re-verified against the Roblox Universe page.",
      },
    ],
    faqIds: [
      "where-to-open-game",
      "release-date",
      "still-available",
      "active-codes",
      "compare-siblings",
    ],
    relatedPageIds: ["wiki", "release-date-status", "codes-rewards"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About +1 Mog Evolution Wiki: an unofficial fan reference built from the official Roblox Universe page and the Roblox Games API snapshot, with facts dated to the research date.",
    summary:
      "What +1 Mog Evolution Wiki covers, how facts are sourced, and what readers should expect.",
    hero: {
      eyebrow: "About",
      subtitle:
        "An unofficial fan reference built from the official Roblox Universe page and the Roblox Games API snapshot.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial fan reference hub for +1 Mog Evolution (Roblox Universe 10764479526, Place ID 92648272637932). Every fact is dated, sourced to the Roblox Universe page or the game-check brief, and re-verified against the live Universe page during the next research pass.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Editorial rule", value: "Live Roblox Universe page as source of truth" },
      { label: "Scope", value: "Launch, gameplay, codes, roster, community" },
      { label: "Sibling boundary", value: "Does not import from +1 Muscle Evolution or +1 Magic Evolution" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear, well-structured information about +1 Mog Evolution without overclaiming facts the Roblox Universe page does not support. During the 0-21 day new-site freshness window, the wiki documents what is observable rather than inventing numbers the creator has not published.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Facts are sourced from the official Roblox Universe page for Universe 10764479526, the Roblox Games API multi-get for that Universe, and the game-check brief recorded on 2026-09-15. Each page carries a research-date stamp. Sibling +1 Evolution games have separate Universe IDs and separate facts; this wiki never borrows numbers from them.",
      },
    ],
    faqIds: ["where-to-open-game", "compare-siblings"],
    relatedPageIds: ["contact", "privacy-policy", "terms", "wiki"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "How to send corrections, official source updates, and site feedback to +1 Mog Evolution Wiki.",
    summary:
      "Send corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, official source updates, and site feedback.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Send corrections, source updates, and site feedback through the support inbox at support@1mogevolution.pro. The address is configured via Cloudflare Email Routing on the production domain.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Address", value: "support@1mogevolution.pro" },
      { label: "Routing", value: "Cloudflare Email Routing" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Send corrections, official source updates, and site feedback to support@1mogevolution.pro. The address is configured via Cloudflare Email Routing on the production domain. We do not request Roblox account credentials in DM or via this address.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Invite readers to send official source links (typically a link to the official Roblox Universe page or the verified Discord) when facts change. The next research pass will re-verify against the live Universe page.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for +1 Mog Evolution Wiki: GA4 analytics only when configured, no user accounts, AdSense authentication preinstalled.",
    summary:
      "How +1 Mog Evolution Wiki handles analytics, hosting, and contact messages.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "How the site handles analytics, hosting, and contact messages.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This site does not include user accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. AdSense authentication is preinstalled through the standard ads.txt, account meta, and script carriers but does not run ads until the publisher activates the integration.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts in V1" },
      { label: "Ads", value: "AdSense preinstalled, Adsterra-ready slots empty" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. Cloudflare Workers Static Assets hosts the site; Cloudflare may process technical request data to serve the site.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a contact message is sent to support@1mogevolution.pro, the message may include the information visitors choose to send. We do not request sensitive personal information or Roblox account credentials.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-15",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for +1 Mog Evolution Wiki: unofficial fan reference, informational use only, sourced from the official Roblox Universe page.",
    summary:
      "Terms of use for an unofficial guide site.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Unofficial fan reference; informational use; sourced from the official Roblox Universe page.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "+1 Mog Evolution Wiki is an unofficial fan reference site. Facts are sourced from the official Roblox Universe page (Universe 10764479526, Place ID 92648272637932); use official sources for final purchase, platform, and release decisions.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Sourced from", value: "Official Roblox Universe page" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with the +1 Mog Evolution developer, the Roblox Corporation, or any trademark owner unless explicitly stated. The site is an unofficial fan reference built from the public Roblox Universe page and the Roblox Games API snapshot.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated on the Roblox Universe page. Use the official Roblox Universe page for final release, platform, and creator-identity decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through the support inbox. We do not request Roblox account credentials; treat any DM or email that does so as a phishing attempt.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-15",
  },
];
