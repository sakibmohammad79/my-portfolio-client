"use client";
import { useEffect, useRef } from "react";

type Glow = {
  x: number;
  y: number;
  radius: number;
  lime: boolean;
  alpha: number;
  driftX: number;
  driftY: number;
  speed: number;
  phase: number;
};

type DevSymbol = {
  text: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  amp: number;
  phase: number;
  lime: boolean;
};

const CURSOR_RADIUS = 210;
const CURSOR_GLOW_ALPHA = 0.055;
const SYMBOL_REACT_RADIUS = 280;
const SYMBOL_REACT_MAX = 0.05;

const GLOBS: Glow[] = [
  {
    x: 0.2,
    y: 0.26,
    radius: 0.6,
    lime: true,
    alpha: 0.055,
    driftX: 0.035,
    driftY: 0.03,
    speed: 0.02,
    phase: 0,
  },
  {
    x: 0.86,
    y: 0.68,
    radius: 0.55,
    lime: true,
    alpha: 0.04,
    driftX: -0.025,
    driftY: 0.035,
    speed: 0.018,
    phase: 2.1,
  },
  {
    x: 0.5,
    y: 0.94,
    radius: 0.6,
    lime: false,
    alpha: 0.05,
    driftX: 0.02,
    driftY: -0.025,
    speed: 0.015,
    phase: 4.2,
  },
];

const SYMBOLS: DevSymbol[] = [
  { text: "</>", x: 0.13, y: 0.15, size: 15, speed: 0.1, amp: 14, phase: 0, lime: true },
  { text: "{ }", x: 0.83, y: 0.21, size: 18, speed: 0.08, amp: 16, phase: 2.1, lime: false },
  { text: "const", x: 0.25, y: 0.74, size: 13, speed: 0.12, amp: 12, phase: 4.2, lime: false },
  { text: "API", x: 0.73, y: 0.62, size: 14, speed: 0.07, amp: 18, phase: 1.2, lime: true },
  { text: "DB", x: 0.9, y: 0.45, size: 13, speed: 0.09, amp: 12, phase: 3.3, lime: false },
  { text: "npm", x: 0.08, y: 0.44, size: 14, speed: 0.11, amp: 15, phase: 5, lime: false },
  { text: "=>", x: 0.58, y: 0.1, size: 16, speed: 0.06, amp: 14, phase: 0.8, lime: true },
  { text: "()", x: 0.36, y: 0.88, size: 15, speed: 0.1, amp: 12, phase: 2.8, lime: false },
];

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canInteract = window.matchMedia("(pointer: fine) and (hover: hover)").matches;

    const primary =
      getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() ||
      "76.8% 0.233 130.85";
    const lime = (a: number) => `oklch(${primary} / ${a})`;
    const neutral = (a: number) => `oklch(78% 0.01 260 / ${a})`;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: MouseEvent) => {
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
      if (!pointer.active) {
        pointer.active = true;
        pointer.x = e.clientX;
        pointer.y = e.clientY;
      }
    };

    const draw = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, width, height);

      // Soft ambient lime glows / large blurred orbs
      for (const g of GLOBS) {
        const gx = (g.x + Math.sin(t * g.speed + g.phase) * g.driftX) * width;
        const gy = (g.y + Math.cos(t * g.speed * 1.3 + g.phase) * g.driftY) * height;
        const gr = Math.max(width, height) * g.radius;
        const pulse = 0.85 + 0.15 * Math.sin(t * g.speed * 2 + g.phase);
        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        grad.addColorStop(0, g.lime ? lime(g.alpha * pulse) : neutral(g.alpha * pulse * 0.8));
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // Soft cursor-following ambient glow (desktop only)
      if (canInteract && pointer.active) {
        pointer.x += (pointer.tx - pointer.x) * 0.1;
        pointer.y += (pointer.ty - pointer.y) * 0.1;

        const glow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          CURSOR_RADIUS
        );
        glow.addColorStop(0, lime(CURSOR_GLOW_ALPHA));
        glow.addColorStop(0.5, lime(CURSOR_GLOW_ALPHA * 0.4));
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(
          pointer.x - CURSOR_RADIUS,
          pointer.y - CURSOR_RADIUS,
          CURSOR_RADIUS * 2,
          CURSOR_RADIUS * 2
        );
      }

      // Extremely low-opacity floating developer symbols
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const s of SYMBOLS) {
        const sx = s.x * width + Math.sin(t * s.speed + s.phase) * s.amp;
        const sy = s.y * height + Math.cos(t * s.speed * 1.4 + s.phase) * s.amp;
        let alpha = s.lime ? 0.045 : 0.055;

        // Nearby symbols gently brighten near the cursor (desktop only)
        if (canInteract && pointer.active) {
          const dist = Math.hypot(sx - pointer.x, sy - pointer.y);
          if (dist < SYMBOL_REACT_RADIUS) {
            const near = 1 - dist / SYMBOL_REACT_RADIUS;
            alpha += near * SYMBOL_REACT_MAX;
          }
        }

        ctx.font = `600 ${s.size}px "Fira Code", ui-monospace, SFMono-Regular, monospace`;
        ctx.fillStyle = s.lime ? lime(alpha) : neutral(alpha);
        ctx.fillText(s.text, sx, sy);
      }
    };

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        raf = requestAnimationFrame(loop);
      }
    };

    resize();
    if (reduced) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
      window.addEventListener("mousemove", onMove, { passive: true });
    }
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}