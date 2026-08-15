"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    position: "Junior Software Engineer",
    company: "Fytobyte Ltd.",
    duration: "Feb 2026 - Present",
    description:
      "Working as a Full Stack Developer, building and maintaining scalable web applications using React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and Prisma. Developing modern user interfaces, RESTful APIs, authentication systems, and business-focused features across multiple projects.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    current: true,
  },
  {
    id: 2,
    position: "Software Engineer",
    company: "CSX Labs",
    duration: "October 2024 - February 2025",
    description:
      "Worked as a Full Stack Software Engineer, developing scalable web applications using Next.js, TypeScript, PostgreSQL, and Prisma. Built modern, responsive user interfaces and implemented robust backend solutions.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Storybook.js",
    ],
    current: false,
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

  const railScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="experience" variant="top-right" className="py-16 sm:py-20 md:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Work <span className="text-primary">Experience</span>
            </>
          }
          subtitle="Where I've applied my skills to build real-world products and grow as an engineer."
        />

        {/* ── Desktop: alternating branch tree ─────────────────── */}
        <div ref={sectionRef} className="relative mx-auto hidden max-w-5xl md:block">
          {/* Central vertical rail */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border/40"
          />
          {/* Animated fill overlay */}
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-0 w-px origin-top -translate-x-1/2"
            style={{
              scaleY: prefersReduced ? 1 : railScaleY,
              height: "100%",
              background: "linear-gradient(180deg, oklch(var(--primary)) 0%, oklch(var(--primary) / 0.3) 100%)",
              boxShadow: "0 0 8px oklch(var(--primary) / 0.5)",
            }}
          />

          <div className="flex flex-col">
            {experiences.map((exp, index) => {
              const isRight = index % 2 === 0; // first card goes right

              return (
                <div
                  key={exp.id}
                  className="relative grid grid-cols-[1fr_80px_1fr] items-center gap-0 py-10"
                >
                  {/* LEFT slot */}
                  <div className="flex justify-end pr-8">
                    {!isRight && (
                      <ExperienceCard
                        exp={exp}
                        index={index}
                        direction="left"
                        prefersReduced={prefersReduced ?? false}
                      />
                    )}
                  </div>

                  {/* CENTER node */}
                  <div className="relative flex flex-col items-center">
                    {/* Horizontal branch — left side */}
                    {!isRight && (
                      <motion.div
                        aria-hidden
                        className="absolute right-1/2 top-1/2 h-px -translate-y-1/2"
                        style={{ width: "calc(50% - 20px)", background: "linear-gradient(to left, oklch(var(--primary)), transparent)", originX: 1 }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: prefersReduced ? 0 : 0.5, delay: prefersReduced ? 0 : 0.2 }}
                      />
                    )}
                    {/* Horizontal branch — right side */}
                    {isRight && (
                      <motion.div
                        aria-hidden
                        className="absolute left-1/2 top-1/2 h-px -translate-y-1/2"
                        style={{ width: "calc(50% - 20px)", background: "linear-gradient(to right, oklch(var(--primary)), transparent)", originX: 0 }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: prefersReduced ? 0 : 0.5, delay: prefersReduced ? 0 : 0.2 }}
                      />
                    )}

                    {/* Node */}
                    <motion.div
                      initial={{ scale: prefersReduced ? 1 : 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: prefersReduced ? 0 : 0.4, type: "spring", stiffness: 300, damping: 20 }}
                      className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background"
                      style={{
                        boxShadow: exp.current
                          ? "0 0 0 4px oklch(var(--primary-soft)), 0 0 20px oklch(var(--primary-glow))"
                          : "0 0 0 3px oklch(var(--primary-soft))",
                      }}
                    >
                      {exp.current ? (
                        <>
                          <span className="h-2.5 w-2.5 rounded-full bg-primary" style={{ animation: "blink 2s infinite" }} />
                          {/* Pulsing outer ring */}
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full border border-primary"
                            style={{ animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite", opacity: 0 }}
                          />
                        </>
                      ) : (
                        <Briefcase className="h-4 w-4 text-primary" />
                      )}
                    </motion.div>

                    {/* Index badge */}
                    <span className="mt-2 font-mono text-[10px] font-bold tracking-widest text-primary/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* RIGHT slot */}
                  <div className="flex justify-start pl-8">
                    {isRight && (
                      <ExperienceCard
                        exp={exp}
                        index={index}
                        direction="right"
                        prefersReduced={prefersReduced ?? false}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: single-sided timeline ────────────────────── */}
        <div className="relative mx-auto max-w-xl md:hidden" ref={sectionRef}>
          {/* Left rail */}
          <div
            aria-hidden
            className="absolute left-[19px] top-3 bottom-3 w-px bg-border/40"
          />
          <motion.div
            aria-hidden
            className="absolute left-[19px] top-3 w-px origin-top"
            style={{
              scaleY: prefersReduced ? 1 : railScaleY,
              height: "calc(100% - 1.5rem)",
              background: "linear-gradient(180deg, oklch(var(--primary)) 0%, oklch(var(--primary) / 0.3) 100%)",
              boxShadow: "0 0 6px oklch(var(--primary) / 0.4)",
            }}
          />
          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: prefersReduced ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: prefersReduced ? 0 : 0.5, delay: prefersReduced ? 0 : index * 0.1 }}
              >
                <div className="flex gap-4">
                  {/* Node */}
                  <div
                    className="relative z-[1] mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background"
                    style={{
                      boxShadow: exp.current
                        ? "0 0 0 4px oklch(var(--primary-soft)), 0 0 16px oklch(var(--primary-glow))"
                        : "0 0 0 3px oklch(var(--primary-soft))",
                    }}
                  >
                    {exp.current ? (
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" style={{ animation: "blink 2s infinite" }} />
                    ) : (
                      <Briefcase className="h-4 w-4 text-primary" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_20px_45px_oklch(var(--primary-glow))]">
                    <CardContent exp={exp} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

/* ── Sub-components ──────────────────────────────────────── */

type ExpItem = (typeof experiences)[number];

function ExperienceCard({
  exp,
  index,
  direction,
  prefersReduced,
}: {
  exp: ExpItem;
  index: number;
  direction: "left" | "right";
  prefersReduced: boolean;
}) {
  const xInit = direction === "right" ? 30 : -30;
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: prefersReduced ? 0 : xInit }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: prefersReduced ? 0 : 0.55, delay: prefersReduced ? 0 : index * 0.1, ease: "easeOut" }}
    >
      <div className="group relative rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_20px_45px_oklch(var(--primary-glow))] lg:p-6">
        <CardContent exp={exp} />
      </div>
    </motion.div>
  );
}

function CardContent({ exp }: { exp: ExpItem }) {
  return (
    <>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
          {exp.position}
        </h3>
        {exp.current && (
          <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.06em] text-primary">
            Current
          </span>
        )}
      </div>

      <p className="mb-1 text-sm font-semibold text-primary">{exp.company}</p>

      <p className="mb-3 text-xs font-medium text-muted-foreground">{exp.duration}</p>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {exp.technologies.map((tech, i) => (
          <span
            key={i}
            className="rounded-full border border-border bg-background-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-primary/45 hover:text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}

export default Experience;
