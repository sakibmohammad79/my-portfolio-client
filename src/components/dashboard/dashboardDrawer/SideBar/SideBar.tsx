"use client";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <div className="flex h-full flex-col">
      <Link href="/">
        <div className="flex items-center justify-center py-2">
          <span className="text-2xl font-extrabold tracking-tight">
            PORTFOLIO<span className="text-primary">.</span>
          </span>
        </div>
      </Link>
      <div className="mx-4 border-t border-border" />
      <nav className="flex-1 space-y-0.5 px-3 py-3">
        {drawerItems(userRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </nav>
    </div>
  );
};

export default SideBar;