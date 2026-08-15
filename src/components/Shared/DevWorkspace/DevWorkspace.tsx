"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";

type Segment = { t: string; c?: string };

const codeLines: Segment[][] = [
  [{ t: "// api/routes/user.ts", c: "text-muted-foreground" }],
  [
    { t: "import", c: "text-primary" },
    { t: " { Router } ", c: "text-foreground" },
    { t: "from", c: "text-primary" },
    { t: ' "express"', c: "text-sky-300" },
  ],
  [
    { t: "const", c: "text-primary" },
    { t: " router = Router();", c: "text-foreground" },
  ],
  [
    { t: "router.get", c: "text-lime-200" },
    { t: '("/api/users", ', c: "text-sky-300" },
    { t: "async", c: "text-primary" },
    { t: " (req, res) => {", c: "text-foreground" },
  ],
  [
    { t: "  const", c: "text-primary" },
    { t: " users = ", c: "text-foreground" },
    { t: "await", c: "text-primary" },
    { t: " db.user.findMany();", c: "text-foreground" },
  ],
  [
    { t: "  res.json(", c: "text-foreground" },
    { t: "{ data: users }", c: "text-sky-300" },
    { t: ");", c: "text-foreground" },
  ],
  [{ t: "});", c: "text-foreground" }],
  [{ t: "", c: "text-foreground" }],
  [
    { t: "export", c: "text-primary" },
    { t: " default router;", c: "text-foreground" },
  ],
];

const terminalLines: Segment[][] = [
  [{ t: "$", c: "text-primary" }, { t: " npm run dev", c: "text-foreground" }],
  [{ t: "> portfolio@0.1.0 dev", c: "text-muted-foreground" }],
  [
    { t: "✓ Ready on ", c: "text-lime-300" },
    { t: "http://localhost:3000", c: "text-sky-300" },
  ],
  [{ t: "  Next.js 14 — Full Stack", c: "text-muted-foreground" }],
];

const chips = [
  { label: "React", x: -18, y: 10, delay: 0.2, dur: 5 },
  { label: "Next.js", x: 26, y: -14, delay: 0.6, dur: 6 },
  { label: "Node.js", x: -34, y: 36, delay: 1, dur: 5.5 },
  { label: "PostgreSQL", x: 30, y: 28, delay: 0.4, dur: 7 },
  { label: "REST API", x: -28, y: -26, delay: 0.8, dur: 6.5 },
];

function CodeLine({
  segs,
  size,
}: {
  segs: Segment[];
  size: string;
}) {
  return (
    <div
      className="flex flex-nowrap whitespace-nowrap font-mono"
      style={{ fontSize: size, lineHeight: 1.75 }}
    >
      {segs.length === 0 ? (
        <span className="inline-block h-[1em]" />
      ) : (
        segs.map((seg, i) => (
          <span key={i} className={seg.c || "text-foreground"}>
            {seg.t}
          </span>
        ))
      )}
    </div>
  );
}

export default function DevWorkspace() {
  const prefersReducedMotion = !!useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [finePointer, setFinePointer] = useState(false);
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 140, damping: 18, mass: 0.4 });
  const springY = useSpring(mvY, { stiffness: 140, damping: 18, mass: 0.4 });

  const rotateY = useTransform(springX, [-1, 1], [-3.5, 3.5]);
  const rotateX = useTransform(springY, [-1, 1], [3.5, -3.5]);

  const chipsShiftX = useTransform(springX, [-1, 1], [-16, 16]);
  const chipsShiftY = useTransform(springY, [-1, 1], [-10, 10]);
  const terminalShiftX = useTransform(springX, [-1, 1], [12, -12]);
  const terminalShiftY = useTransform(springY, [-1, 1], [8, -8]);
  const glowShiftX = useTransform(springX, [-1, 1], [-70, 70]);
  const glowShiftY = useTransform(springY, [-1, 1], [-50, 50]);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFinePointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setFinePointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!finePointer || prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mvX.set(x * 2 - 1);
    mvY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  const monitorFloat = prefersReducedMotion ? { y: 0 } : { y: [0, -8, 0] };
  const monitorFloatTransition = prefersReducedMotion
    ? undefined
    : { duration: 6, ease: "easeInOut" as const, repeat: Infinity };
  const termFloat = prefersReducedMotion ? { y: 0 } : { y: [0, 6, 0] };
  const termFloatTransition = prefersReducedMotion
    ? undefined
    : { duration: 7, ease: "easeInOut" as const, repeat: Infinity };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto w-full max-w-[520px]"
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-[10%] opacity-50 blur-[40px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, var(--primary-glow) 0%, transparent 65%)",
          }}
        />

        {/* Cursor-following glow spot */}
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            top: "45%",
            width: 260,
            height: 260,
            marginLeft: -130,
            marginTop: -130,
            x: prefersReducedMotion ? 0 : glowShiftX,
            y: prefersReducedMotion ? 0 : glowShiftY,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <div
            className="h-full w-full rounded-full opacity-50 blur-[20px]"
            style={{
              background:
                "radial-gradient(circle, var(--primary-glow) 0%, transparent 65%)",
            }}
          />
        </motion.div>

        {/* Monitor */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 1,
            transformPerspective: 900,
            rotateX: prefersReducedMotion ? 0 : rotateX,
            rotateY: prefersReducedMotion ? 0 : rotateY,
          }}
        >
          <motion.div animate={monitorFloat} transition={monitorFloatTransition}>
            <div
              className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            >
              {/* Screen */}
              <div className="m-1.5 overflow-hidden rounded-[18px] bg-background md:m-3">
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-border bg-background-secondary px-3 py-2 md:px-4 md:py-3">
                  <div className="flex gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(65%_0.15_25)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(82%_0.15_80)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(72%_0.16_145)]" />
                  </div>
                  <span className="ml-1 rounded border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-muted-foreground md:text-xs">
                    user.routes.ts
                  </span>
                </div>

                {/* Code area */}
                <div className="overflow-hidden px-4 py-3 md:px-6 md:py-4">
                  <div className="flex gap-3 md:gap-4">
                    {/* Line numbers */}
                    <div className="flex select-none flex-col font-mono text-[10px] text-[oklch(32%_0.02_260)] md:text-xs" style={{ lineHeight: 1.75 }}>
                      {codeLines.map((_, i) => (
                        <span key={i}>{i + 1}</span>
                      ))}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      {codeLines.map((segs, i) => (
                        <CodeLine key={i} segs={segs} size="clamp(0.6rem, 1.4vw, 0.7rem)" />
                      ))}
                      {/* Blinking caret */}
                      <span className="mt-0.5 inline-block h-3 w-[7px] animate-blink bg-primary md:h-[13px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitor stand */}
              <div className="mx-auto h-2 w-24 rounded-b-md border-b border-border bg-card md:w-[110px]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          style={{
            position: "absolute",
            bottom: -16,
            right: 0,
            zIndex: 2,
            x: prefersReducedMotion ? 0 : terminalShiftX,
            y: prefersReducedMotion ? 0 : terminalShiftY,
          }}
          className="sm:-right-3 md:-right-6"
        >
          <motion.div animate={termFloat} transition={termFloatTransition}>
            <div
              className="w-[190px] overflow-hidden rounded-md border border-primary/45 shadow-[0_20px_45px_rgba(0,0,0,0.5)] min-[380px]:w-[220px] sm:w-[250px] md:w-[280px]"
              style={{ background: "oklch(8% 0.012 260)" }}
            >
              <div className="flex items-center gap-2 border-b border-border bg-background-secondary px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[oklch(65%_0.15_25)]" />
                <span className="font-mono text-[10px] text-muted-foreground">bash</span>
              </div>
              <div className="px-3 py-2">
                {terminalLines.map((segs, i) => (
                  <CodeLine key={i} segs={segs} size="clamp(0.55rem, 1.2vw, 0.62rem)" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating chips (parallax layer) */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            pointerEvents: "none",
            x: prefersReducedMotion ? 0 : chipsShiftX,
            y: prefersReducedMotion ? 0 : chipsShiftY,
          }}
        >
          {chips.map((chip) => {
            const hovered = hoveredChip === chip.label;
            return (
              <motion.div
                key={chip.label}
                animate={
                  prefersReducedMotion
                    ? { x: 0, y: 0 }
                    : { y: [0, -10, 0], x: [0, chip.delay * 3 - 1.5, 0] }
                }
                transition={{
                  duration: chip.dur,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: chip.delay,
                }}
                style={{ position: "absolute", left: `${Math.max(-8, Math.min(85, 20 + chip.x * 1.5))}%`, top: `${chip.y + 18}%`, pointerEvents: "auto" }}
                onHoverStart={() => setHoveredChip(chip.label)}
                onHoverEnd={() => setHoveredChip(null)}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <div
                  className={`hidden items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] transition-all duration-300 sm:flex ${
                    hovered
                      ? "border-primary/45 text-primary shadow-[0_10px_25px_var(--primary-glow)]"
                      : "border-border text-muted-foreground shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                  }`}
                  style={{ background: hovered ? "var(--card-hover)" : "var(--card)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {chip.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decorative bracket */}
        <span
          aria-hidden
          className="absolute right-0 top-[6%] z-[1] font-mono text-2xl font-bold text-primary opacity-35"
        >
          {"{ }"}
        </span>
      </div>
    </motion.div>
  );
}