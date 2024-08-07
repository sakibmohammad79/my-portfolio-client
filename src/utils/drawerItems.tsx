import { drawerItem } from "@/types/common";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CodeIcon from "@mui/icons-material/Code";
import BoltIcon from "@mui/icons-material/Bolt";
import EditNoteIcon from "@mui/icons-material/EditNote";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const drawerItems = (role: string): drawerItem[] => {
  const roleMenus: drawerItem[] = [];
  switch (role) {
    case "admin":
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Project",
          path: `${role}/project`,
          icon: CodeIcon,
        },
        {
          title: "Skill",
          path: `${role}/skill`,
          icon: BoltIcon,
        },
        {
          title: "Blogs",
          path: `${role}/blog`,
          icon: RateReviewIcon,
        },
        {
          title: "Write Blog",
          path: `${role}/writeblog`,
          icon: EditNoteIcon,
        },
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: AccountCircleIcon,
        }
      );
      break;
    default:
      break;
  }
  return roleMenus;
};
