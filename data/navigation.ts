import { SITE_BASE_PATH } from "@/lib/constants";

export type NavItem = { title: string; href: string };

export const navItems: NavItem[] = [
  { title: "Work", href: `${SITE_BASE_PATH}/#work` },
  { title: "Services", href: `${SITE_BASE_PATH}/#services` },
  { title: "About", href: `${SITE_BASE_PATH}/#about` },
];
