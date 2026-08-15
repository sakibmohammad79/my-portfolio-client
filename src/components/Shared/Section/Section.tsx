"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("section-anchor relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, var(--primary-softer) 0%, transparent 45%), radial-gradient(circle at 15% 85%, oklch(28% 0.05 290 / 0.18) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}