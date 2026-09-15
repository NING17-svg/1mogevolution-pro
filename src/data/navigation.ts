import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release-date/", labels: { "en-US": "Release Date" } },
  { href: "/roblox/", labels: { "en-US": "Roblox Page" } },
  { href: "/gameplay/", labels: { "en-US": "Gameplay" } },
  { href: "/codes/", labels: { "en-US": "Codes" } },
  { href: "/evolution-guide/", labels: { "en-US": "Evolution" } },
  { href: "/tier-list/", labels: { "en-US": "Tier List" } },
  { href: "/rebirth/", labels: { "en-US": "Rebirth" } },
  { href: "/units/", labels: { "en-US": "Mogs" } },
  { href: "/discord/", labels: { "en-US": "Discord" } },
  { href: "/wiki/", labels: { "en-US": "Wiki" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about/", labels: { "en-US": "About" } },
  { href: "/contact/", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy/", labels: { "en-US": "Privacy" } },
  { href: "/terms/", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
