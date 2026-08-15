import { drawerItem } from "@/types/common";
import {
  LayoutDashboard,
  Code,
  Zap,
  PenSquare,
  MessageSquare,
  UserRound,
} from "lucide-react";
export const drawerItems = (role: string): drawerItem[] => {
  const roleMenus: drawerItem[] = [];
  switch (role) {
    case "admin":
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: LayoutDashboard,
        },
        {
          title: "Project",
          path: `${role}/project`,
          icon: Code,
        },
        {
          title: "Skill",
          path: `${role}/skill`,
          icon: Zap,
        },
        {
          title: "Blogs",
          path: `${role}/blog`,
          icon: MessageSquare,
        },
        {
          title: "Write Blog",
          path: `${role}/writeblog`,
          icon: PenSquare,
        },
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: UserRound,
        }
      );
      break;
    default:
      break;
  }
  return roleMenus;
};