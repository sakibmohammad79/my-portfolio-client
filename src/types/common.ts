import type { LucideIcon } from "lucide-react";

export interface drawerItem {
  title: string;
  path: string;
  icon?: LucideIcon;
  parentPath?: string;
  child?: drawerItem[];
}