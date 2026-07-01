import { SITE_BASE_PATH } from "@/lib/constants";

export type NavItem = {
  title: string;
  href: string;
};

export const navItems = [
  { title: "Home",       href: `${SITE_BASE_PATH}/#home` },
  { title: "About",      href: `${SITE_BASE_PATH}/#about` },
  { title: "Experience", href: `${SITE_BASE_PATH}/#experience` },
  { title: "Work",       href: `${SITE_BASE_PATH}/#work` },
  { title: "Contact",    href: `${SITE_BASE_PATH}/#contact` },
];