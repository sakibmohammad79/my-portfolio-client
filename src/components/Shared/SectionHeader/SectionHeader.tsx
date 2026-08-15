"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("mb-12 md:mb-16", isCenter ? "text-center" : "text-left")}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2.5",
            isCenter ? "justify-center" : "justify-start"
          )}
        >
          <span className="h-0.5 w-7 rounded bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary md:text-sm">
            {eyebrow}
          </span>
          {isCenter && <span className="h-0.5 w-7 rounded bg-primary" />}
        </div>
      )}
      <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base",
            isCenter && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}