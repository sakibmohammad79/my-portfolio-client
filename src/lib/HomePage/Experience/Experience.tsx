"use client";
import { motion } from "framer-motion";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    position: "Software Engineer",
    company: "CSX Labs",
    duration: "October 2024 - February 2025",
    description:
      "Worked as a Full Stack Software Engineer, developing scalable web applications using Next.js, TypeScript, PostgreSQL, and Prisma. Built modern, responsive user interfaces and implemented robust backend solutions.",
    technologies: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Storybook.js"],
    current: true,
  },
];

const Experience = () => {
  return (
    <Section id="experience" className="py-16 sm:py-20 md:py-28">
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

        <div className="relative mx-auto max-w-3xl">
          <span
            aria-hidden
            className="absolute left-[19px] sm:left-[21px] top-3 bottom-3 w-[2px] opacity-70"
            style={{
              background: "linear-gradient(180deg, var(--primary), var(--border))",
            }}
          />
          <div className="flex flex-col gap-6 sm:gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="flex gap-3 sm:gap-4 md:gap-5">
                  {/* Node */}
                  <div
                    className="relative z-[1] mt-1 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_var(--primary-soft)]"
                  >
                    {exp.current ? (
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-primary"
                        style={{ animation: "blink 2s infinite" }}
                      />
                    ) : (
                      <Briefcase className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_20px_45px_var(--primary-glow)] sm:p-5 md:p-6">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg md:text-xl">
                        {exp.position}
                      </h3>
                      {exp.current && (
                        <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.06em] text-primary">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="mb-1 text-sm font-semibold text-primary sm:text-base">
                      {exp.company}
                    </p>

                    <p className="mb-3 text-xs font-medium text-muted-foreground sm:text-sm">
                      {exp.duration}
                    </p>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
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

export default Experience;