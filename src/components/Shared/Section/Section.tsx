"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center"
  | "default";

const variantGradients: Record<SectionVariant, string> = {
  "top-right":
    "radial-gradient(circle at 88% 12%, oklch(76.8% 0.233 130.85 / 0.06) 0%, transparent 45%), radial-gradient(circle at 8% 88%, oklch(76.8% 0.233 130.85 / 0.03) 0%, transparent 40%)",
  "top-left":
    "radial-gradient(circle at 12% 10%, oklch(76.8% 0.233 130.85 / 0.06) 0%, transparent 45%), radial-gradient(circle at 90% 80%, oklch(76.8% 0.233 130.85 / 0.03) 0%, transparent 40%)",
  "bottom-right":
    "radial-gradient(circle at 85% 88%, oklch(76.8% 0.233 130.85 / 0.06) 0%, transparent 45%), radial-gradient(circle at 15% 12%, oklch(76.8% 0.233 130.85 / 0.03) 0%, transparent 40%)",
  "bottom-left":
    "radial-gradient(circle at 10% 88%, oklch(76.8% 0.233 130.85 / 0.06) 0%, transparent 45%), radial-gradient(circle at 88% 15%, oklch(76.8% 0.233 130.85 / 0.03) 0%, transparent 40%)",
  center:
    "radial-gradient(circle at 50% 50%, oklch(76.8% 0.233 130.85 / 0.06) 0%, transparent 50%), radial-gradient(circle at 20% 20%, oklch(76.8% 0.233 130.85 / 0.02) 0%, transparent 40%)",
  default:
    "radial-gradient(circle at 85% 15%, oklch(76.8% 0.233 130.85 / 0.06) 0%, transparent 45%), radial-gradient(circle at 15% 85%, oklch(76.8% 0.233 130.85 / 0.03) 0%, transparent 50%)",
};

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: SectionVariant;
}

export default function Section({ id, children, className, variant = "default" }: SectionProps) {
  return (
    <section id={id} className={cn("section-anchor relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: variantGradients[variant] }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}