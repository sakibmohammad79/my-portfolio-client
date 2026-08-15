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

type BackgroundDepth =
  | "default"
  | "subtle"
  | "very-subtle"
  | "strong"
  | "strongest"
  | "minimal"
  | "experience";

const LIME = "76.8% 0.233 130.85";

const variantSpots: Record<SectionVariant, [string, string]> = {
  "top-right": ["88% 12%", "8% 88%"],
  "top-left": ["12% 10%", "90% 80%"],
  "bottom-right": ["85% 88%", "15% 12%"],
  "bottom-left": ["10% 88%", "88% 15%"],
  center: ["50% 50%", "20% 20%"],
  default: ["85% 15%", "15% 85%"],
};

const variantSecond: Record<SectionVariant, { alpha: number; radius: string }> = {
  center: { alpha: 0.02, radius: "40%" },
  default: { alpha: 0.03, radius: "50%" },
  "top-right": { alpha: 0.03, radius: "40%" },
  "top-left": { alpha: 0.03, radius: "40%" },
  "bottom-right": { alpha: 0.03, radius: "40%" },
  "bottom-left": { alpha: 0.03, radius: "40%" },
};

const depthScale: Record<BackgroundDepth, number> = {
  default: 1,
  subtle: 0.55,
  "very-subtle": 0.4,
  strong: 1.4,
  strongest: 1.85,
  minimal: 0.32,
  experience: 0.9,
};

const depthDrift: Record<BackgroundDepth, boolean> = {
  default: true,
  subtle: false,
  "very-subtle": false,
  strong: true,
  strongest: true,
  minimal: false,
  experience: true,
};

function buildBackground(variant: SectionVariant, depth: BackgroundDepth): string {
  const [spot1, spot2] = variantSpots[variant];
  const scale = depthScale[depth];
  const second = variantSecond[variant];
  const base = `radial-gradient(circle at ${spot1}, oklch(${LIME} / ${(0.06 * scale).toFixed(3)}) 0%, transparent 45%), radial-gradient(circle at ${spot2}, oklch(${LIME} / ${(second.alpha * scale).toFixed(3)}) 0%, transparent ${second.radius})`;
  if (depth === "experience") {
    return `${base}, linear-gradient(90deg, transparent 20%, oklch(${LIME} / ${(0.05 * scale).toFixed(3)}) 50%, transparent 80%)`;
  }
  return base;
}

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: SectionVariant;
  background?: BackgroundDepth;
}

export default function Section({
  id,
  children,
  className,
  variant = "default",
  background = "default",
}: SectionProps) {
  const drift = depthDrift[background];
  return (
    <section id={id} className={cn("section-anchor relative overflow-hidden", className)}>
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0", drift && "bg-drift")}
        style={{ background: buildBackground(variant, background) }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}