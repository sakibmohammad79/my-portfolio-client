"use client";
import { Box, Typography } from "@mui/material";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { colors, radii } from "@/constant/design";

const LIME = colors.primary;
const TEXT = colors.textPrimary;
const MUTED = colors.textMuted;
const STRING = "oklch(76% 0.12 220)";
const FN = "oklch(74% 0.1 90)";

type Segment = { t: string; c?: string };

const codeLines: Segment[][] = [
  [{ t: "// api/routes/user.ts", c: MUTED }],
  [
    { t: "import", c: LIME },
    { t: " { Router } ", c: TEXT },
    { t: "from", c: LIME },
    { t: ' "express"', c: STRING },
  ],
  [{ t: "const", c: LIME }, { t: " router = Router();", c: TEXT }],
  [
    { t: "router.get", c: FN },
    { t: '("/api/users", ', c: STRING },
    { t: "async", c: LIME },
    { t: " (req, res) => {", c: TEXT },
  ],
  [
    { t: "  const", c: LIME },
    { t: " users = ", c: TEXT },
    { t: "await", c: LIME },
    { t: " db.user.findMany();", c: TEXT },
  ],
  [{ t: "  res.json(", c: TEXT }, { t: "{ data: users }", c: STRING }, { t: ");", c: TEXT }],
  [{ t: "});", c: TEXT }],
  [{ t: "", c: TEXT }],
  [{ t: "export", c: LIME }, { t: " default router;", c: TEXT }],
];

const terminalLines: Segment[][] = [
  [{ t: "$", c: LIME }, { t: " npm run dev", c: TEXT }],
  [{ t: "> portfolio@0.1.0 dev", c: MUTED }],
  [{ t: "✓ Ready on ", c: "oklch(82% 0.18 140)" }, { t: "http://localhost:3000", c: STRING }],
  [{ t: "  Next.js 14 — Full Stack", c: MUTED }],
];

const chips = [
  { label: "React", x: -18, y: 10, delay: 0.2, dur: 5 },
  { label: "Next.js", x: 26, y: -14, delay: 0.6, dur: 6 },
  { label: "Node.js", x: -34, y: 36, delay: 1, dur: 5.5 },
  { label: "PostgreSQL", x: 30, y: 28, delay: 0.4, dur: 7 },
  { label: "REST API", x: -28, y: -26, delay: 0.8, dur: 6.5 },
];

function CodeLine({ segs, size }: { segs: Segment[]; size: Record<string, string> | string }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        fontFamily: "'SF Mono', 'Fira Code', Consolas, monospace",
        fontSize: size,
        lineHeight: { xs: 1.65, md: 1.8 },
      }}
    >
      {segs.length === 0 ? (
        <Box sx={{ height: "1em" }} />
      ) : (
        segs.map((seg, i) => (
          <Box key={i} component="span" sx={{ color: seg.c || TEXT }}>
            {seg.t}
          </Box>
        ))
      )}
    </Box>
  );
}

export default function DevWorkspace() {
  const prefersReducedMotion = !!useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [finePointer, setFinePointer] = useState(false);
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);

  // Normalized cursor position (-1 .. 1), spring-smoothed.
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
      <Box
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{ position: "relative", width: "100%", maxWidth: 520, mx: "auto" }}
      >
        {/* Ambient glow */}
        <Box
          sx={{
            position: "absolute",
            inset: "-10%",
            background: `radial-gradient(ellipse at 50% 45%, ${colors.primaryGlow} 0%, transparent 65%)`,
            filter: "blur(40px)",
            opacity: 0.5,
            pointerEvents: "none",
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
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${colors.primaryGlow} 0%, transparent 65%)`,
              filter: "blur(20px)",
              opacity: 0.5,
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
            <Box
              sx={{
                position: "relative",
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: radii.xl,
                boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
                overflow: "hidden",
              }}
            >
              {/* Screen */}
              <Box sx={{ background: colors.background, borderRadius: 18, m: { xs: 1, md: 1.5 }, overflow: "hidden" }}>
                {/* Title bar */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: { xs: 2, md: 2.5 },
                    py: { xs: 1.25, md: 1.5 },
                    borderBottom: `1px solid ${colors.border}`,
                    background: colors.backgroundSecondary,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 0.7 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "oklch(65% 0.15 25)" }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "oklch(82% 0.15 80)" }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "oklch(72% 0.16 145)" }} />
                  </Box>
                  <Box
                    sx={{
                      ml: 1,
                      px: { xs: 1, md: 1.5 },
                      py: 0.3,
                      borderRadius: 1,
                      background: colors.card,
                      border: `1px solid ${colors.border}`,
                      fontFamily: "'SF Mono', Consolas, monospace",
                      fontSize: { xs: "0.6rem", md: "0.7rem" },
                      color: colors.textSecondary,
                    }}
                  >
                    user.routes.ts
                  </Box>
                </Box>

                {/* Code area */}
                <Box
                  sx={{
                    px: { xs: 2, md: 3 },
                    py: { xs: 1.5, md: 2 },
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ display: "flex", gap: { xs: 1.5, md: 2 } }}>
                    {/* Line numbers */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "'SF Mono', Consolas, monospace",
                        fontSize: { xs: "0.6rem", md: "0.7rem" },
                        lineHeight: { xs: 1.65, md: 1.8 },
                        color: "oklch(32% 0.02 260)",
                        userSelect: "none",
                      }}
                    >
                      {codeLines.map((_, i) => (
                        <Box key={i}>{i + 1}</Box>
                      ))}
                    </Box>
                    <Box sx={{ flex: 1, overflow: "hidden" }}>
                      {codeLines.map((segs, i) => (
                        <CodeLine key={i} segs={segs} size={{ xs: "0.6rem", md: "0.7rem" }} />
                      ))}
                      {/* Blinking caret */}
                      <Box
                        sx={{
                          display: "inline-block",
                          width: 7,
                          height: { xs: 11, md: 13 },
                          bgcolor: LIME,
                          animation: "blink 1.2s infinite",
                          mt: 0.2,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Monitor stand */}
              <Box
                sx={{
                  width: { xs: 80, md: 110 },
                  height: 8,
                  background: colors.card,
                  borderBottom: `1px solid ${colors.border}`,
                  mx: "auto",
                  borderRadius: "0 0 6px 6px",
                }}
              />
            </Box>
          </motion.div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          style={{
            position: "absolute",
            bottom: -22,
            right: -8,
            zIndex: 2,
            x: prefersReducedMotion ? 0 : terminalShiftX,
            y: prefersReducedMotion ? 0 : terminalShiftY,
          }}
        >
          <motion.div animate={termFloat} transition={termFloatTransition}>
            <Box
              sx={{
                width: { xs: 210, sm: 250, md: 280 },
                background: "oklch(8% 0.012 260)",
                border: `1px solid ${colors.borderHover}`,
                borderRadius: radii.md,
                boxShadow: "0 20px 45px rgba(0,0,0,0.5)",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderBottom: `1px solid ${colors.border}`,
                  background: colors.backgroundSecondary,
                }}
              >
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "oklch(65% 0.15 25)" }} />
                <Typography
                  sx={{
                    fontFamily: "'SF Mono', Consolas, monospace",
                    fontSize: "0.6rem",
                    color: colors.textMuted,
                  }}
                >
                  bash
                </Typography>
              </Box>
              <Box sx={{ px: 2, py: 1.25 }}>
                {terminalLines.map((segs, i) => (
                  <CodeLine key={i} segs={segs} size={{ xs: "0.55rem", md: "0.62rem" }} />
                ))}
              </Box>
            </Box>
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
                style={{ position: "absolute", left: chip.x, top: `${chip.y + 18}%`, pointerEvents: "auto" }}
                onHoverStart={() => setHoveredChip(chip.label)}
                onHoverEnd={() => setHoveredChip(null)}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    gap: 0.75,
                    px: 1.4,
                    py: 0.6,
                    borderRadius: 999,
                    background: hovered ? colors.cardHover : colors.card,
                    border: `1px solid ${hovered ? colors.borderHover : colors.border}`,
                    boxShadow: hovered
                      ? `0 10px 25px ${colors.primaryGlow}`
                      : "0 10px 25px rgba(0,0,0,0.35)",
                    fontFamily: "'SF Mono', Consolas, monospace",
                    fontSize: "0.68rem",
                    color: hovered ? colors.primary : colors.textSecondary,
                    transition: "all 0.25s ease",
                  }}
                >
                  <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: LIME }} />
                  {chip.label}
                </Box>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decorative bracket */}
        <Box
          sx={{
            position: "absolute",
            top: "6%",
            right: -6,
            color: LIME,
            opacity: 0.35,
            fontFamily: "'SF Mono', Consolas, monospace",
            fontSize: "1.4rem",
            fontWeight: 700,
            zIndex: 1,
          }}
        >
          {"{ }"}
        </Box>
      </Box>
    </motion.div>
  );
}