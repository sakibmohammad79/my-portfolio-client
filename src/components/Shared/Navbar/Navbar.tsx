"use client";
import { getUserInfo } from "@/services/auth.services";
import dynamic from "next/dynamic";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const sectionIds = [
  "about",
  "skill",
  "experience",
  "project",
  "education",
  "blog",
  "testimonials",
  "contact",
];

const AuthButton = dynamic(() => import("@/lib/UI/AuthButton/AuthButton"), {
  ssr: false,
});

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [userRole, setUserRole] = React.useState("");
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo?.role) {
      setUserRole(userInfo.role);
    }
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skill" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#project" },
    { label: "Education", href: "#education" },
    { label: "Blog", href: "#blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    ...(userRole ? [{ label: "Dashboard", href: "/dashboard" }] : []),
  ];

  const isActive = (href: string) =>
    href.startsWith("#") &&
    activeSection === href.slice(1) &&
    activeSection !== "";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-[72px]">
        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="open navigation"
              className="mr-1 flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-primary/10 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-l border-border bg-background/95 px-4 py-5 backdrop-blur-md">
            <SheetHeader className="mb-4 px-1 text-left">
              <SheetTitle className="text-xl">
                sakib<span className="text-primary">.</span>dev
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-0.5">
              {navItems.map((item, index) => (
                <SheetClose asChild key={index}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                      isActive(item.href) ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <div className="mt-4 px-4">
                <AuthButton />
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-xl font-extrabold tracking-tight text-foreground md:text-2xl"
        >
          sakib<span className="text-primary">.</span>dev
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "relative whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium tracking-wide transition-colors hover:text-primary lg:px-3.5",
                isActive(item.href) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute bottom-1 left-1/2 h-0.5 w-3/5 -translate-x-1/2 rounded-full bg-primary transition-transform duration-300",
                  isActive(item.href) ? "scale-x-100" : "scale-x-0"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Auth */}
        <div className="flex items-center">
          <AuthButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;