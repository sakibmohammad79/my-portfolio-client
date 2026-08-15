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
import { GraduationCap, BookOpen, School } from "lucide-react";

const educationData = [
  {
    id: 1,
    title: "BSc in Computer Science",
    institute: "BGC Trust University Bangladesh",
    duration: "2022 - 2026",
    score: "Graduated",
    level: "Bachelor's Degree",
    description:
      "Currently pursuing my Bachelor's degree in Computer Science, gaining comprehensive knowledge in programming, databases, software development, algorithms, and modern web technologies.",
    subjects: [
      "Programming",
      "Databases",
      "Software Development",
      "Algorithms",
    ],
    current: false,
    icon: "bachelor",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    institute: "Sir. Ashotush Govt. College",
    duration: "2018 - 2020",
    score: "4.17/5",
    level: "HSC",
    description:
      "Completed my HSC with a strong focus on Mathematics, Physics, and Computer Science, building a solid foundation for my technology career.",
    subjects: ["Mathematics", "Physics", "Computer Science", "English"],
    current: false,
    icon: "college",
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    institute: "Jaisthapura Ramani Mohan High School",
    duration: "2016 - 2018",
    score: "4.28/5",
    level: "SSC",
    description:
      "Completed my SSC with a keen interest in science and problem-solving, achieving excellent results across all subjects.",
    subjects: ["General Science", "Mathematics", "English", "Bengali"],
    current: false,
    icon: "school",
  },
];

// Reversed so journey reads SSC → HSC → BSc (left to right = oldest to newest)
const milestones = [...educationData].reverse();

const IconComponent = ({ iconType }: { iconType: string }) => {
  const cls = "h-5 w-5 text-primary sm:h-6 sm:w-6";
  switch (iconType) {
    case "bachelor":
      return <GraduationCap className={cls} />;
    case "college":
      return <BookOpen className={cls} />;
    default:
      return <School className={cls} />;
  }
};

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"],
  });

  // Desktop: animate connecting line width (scaleX)
  const lineScaleX = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  // Mobile: animate height (scaleY)
  const lineScaleY = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  return (
    <Section
      id="education"
      variant="bottom-left"
      className="py-16 sm:py-20 md:py-28"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Education"
          title={
            <>
              Academic <span className="text-primary">Journey</span>
            </>
          }
          subtitle="The foundation that shaped my problem-solving mindset and technical knowledge."
        />

        {/* ── Desktop: horizontal milestone path ──────────────── */}
        <div ref={sectionRef} className="hidden md:block">
          <div className="relative mx-auto max-w-5xl">
            {/* Year labels row */}
            <div className="mb-2 grid grid-cols-3">
              {milestones.map((edu) => (
                <div key={`year-${edu.id}`} className="flex justify-center">
                  <span className="font-mono text-xs font-bold tracking-widest text-primary/60">
                    {edu.duration.split(" - ")[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Connecting path row */}
            <div className="relative mb-0 flex items-center">
              {/* Background track */}
              <div
                aria-hidden
                className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border/40"
              />
              {/* Animated lime fill */}
              <motion.div
                aria-hidden
                className="absolute left-0 top-1/2 h-px origin-left -translate-y-1/2"
                style={{
                  right: 0,
                  scaleX: prefersReduced ? 1 : lineScaleX,
                  background:
                    "linear-gradient(to right, oklch(var(--primary)), oklch(var(--primary) / 0.4))",
                  boxShadow: "0 0 8px oklch(var(--primary) / 0.4)",
                }}
              />

              {/* Nodes */}
              <div className="relative grid w-full grid-cols-3">
                {milestones.map((edu, index) => (
                  <div
                    key={`node-${edu.id}`}
                    className="flex flex-col items-center"
                  >
                    {/* Node circle */}
                    <motion.div
                      initial={{ scale: prefersReduced ? 1 : 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: prefersReduced ? 0 : 0.4,
                        delay: prefersReduced ? 0 : index * 0.15,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background"
                      style={{
                        boxShadow:
                          index === milestones.length - 1
                            ? "0 0 0 4px oklch(var(--primary-soft)), 0 0 20px oklch(var(--primary-glow))"
                            : "0 0 0 3px oklch(var(--primary-soft))",
                      }}
                    >
                      <IconComponent iconType={edu.icon} />
                    </motion.div>

                    {/* Vertical connector to card */}
                    <div className="h-6 w-px bg-gradient-to-b from-primary/60 to-primary/20" />
                  </div>
                ))}
              </div>
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-3 gap-4 items-stretch">
              {milestones.map((edu, index) => (
                <motion.div
                  key={`card-${edu.id}`}
                  initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: prefersReduced ? 0 : 0.5,
                    delay: prefersReduced ? 0 : index * 0.12,
                    ease: "easeOut",
                  }}
                  className="h-full"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_20px_45px_oklch(var(--primary-glow))]">
                    {/* Score + level */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                        {edu.level}
                      </span>
                      {edu.score !== "Graduated" && (
                        <span className="rounded-full border border-border bg-background-secondary px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                          GPA {edu.score}
                        </span>
                      )}
                    </div>

                    <h3 className="mb-1 text-sm font-bold leading-snug tracking-tight text-foreground sm:text-base">
                      {edu.title}
                    </h3>

                    <p className="mb-0.5 text-xs font-semibold text-primary">
                      {edu.institute}
                    </p>

                    <p className="mb-3 text-[11px] font-medium text-muted-foreground">
                      {edu.duration}
                    </p>

                    <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-1">
                      {edu.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border bg-background-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: vertical milestone path ─────────────────── */}
        <div className="relative mx-auto max-w-lg md:hidden" ref={sectionRef}>
          {/* Vertical track */}
          <div
            aria-hidden
            className="absolute left-[23px] top-3 bottom-3 w-px bg-border/40"
          />
          <motion.div
            aria-hidden
            className="absolute left-[23px] top-3 w-px origin-top"
            style={{
              scaleY: prefersReduced ? 1 : lineScaleY,
              height: "calc(100% - 1.5rem)",
              background:
                "linear-gradient(180deg, oklch(var(--primary)) 0%, oklch(var(--primary) / 0.3) 100%)",
              boxShadow: "0 0 6px oklch(var(--primary) / 0.4)",
            }}
          />

          <div className="flex flex-col gap-5">
            {milestones.map((edu, index) => (
              <motion.div
                key={`mob-${edu.id}`}
                initial={{ opacity: 0, x: prefersReduced ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: prefersReduced ? 0 : 0.5,
                  delay: prefersReduced ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="flex gap-4">
                  {/* Node */}
                  <div
                    className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background"
                    style={{
                      boxShadow:
                        index === milestones.length - 1
                          ? "0 0 0 4px oklch(var(--primary-soft)), 0 0 16px oklch(var(--primary-glow))"
                          : "0 0 0 3px oklch(var(--primary-soft))",
                    }}
                  >
                    <IconComponent iconType={edu.icon} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_16px_40px_oklch(var(--primary-glow))]">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                        {edu.level}
                      </span>
                      <span className="font-mono text-[10px] font-bold tracking-widest text-primary/50">
                        {edu.duration}
                      </span>
                    </div>
                    <h3 className="mb-1 text-sm font-bold tracking-tight text-foreground">
                      {edu.title}
                    </h3>
                    <p className="mb-0.5 text-xs font-semibold text-primary">
                      {edu.institute}
                    </p>
                    {edu.score !== "Graduated" && (
                      <p className="mb-2 text-xs text-muted-foreground">
                        GPA {edu.score}
                      </p>
                    )}
                    <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {edu.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border bg-background-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
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

export default Education;
