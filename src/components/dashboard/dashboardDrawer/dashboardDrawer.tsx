"use client";
import * as React from "react";
import { Menu } from "lucide-react";
import SideBar from "./SideBar/SideBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function DashboardDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[240px] border-r border-border bg-card sm:block">
        <SideBar />
      </aside>

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col sm:ml-[240px]">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="open drawer"
                className="flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-primary/10 sm:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] border-r border-border bg-card p-0">
              <SheetHeader className="px-4 pt-4">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <SideBar />
            </SheetContent>
          </Sheet>
          <h1 className="truncate text-base font-bold tracking-wide text-foreground md:text-lg">
            WELCOME TO MY PORTFOLIO
          </h1>
        </header>

        <main className="flex-1 p-3 sm:p-4 md:p-5">{children}</main>
      </div>
    </div>
  );
}