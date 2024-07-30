import DashboardDrawer from "@/components/dashboard/dashboardDrawer/dashboardDrawer";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
