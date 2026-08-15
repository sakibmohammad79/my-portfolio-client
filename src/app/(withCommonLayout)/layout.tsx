"use client";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import TechBackground from "@/components/Shared/TechBackground/TechBackground";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <TechBackground />
      <Navbar />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;