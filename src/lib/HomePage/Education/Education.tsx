"use client";
import { motion } from "framer-motion";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Star, BookOpen, School } from "lucide-react";

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
    subjects: ["Programming", "Databases", "Software Development", "Algorithms"],
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

const getIcon = (iconType: string) => {
  const className = "h-7 w-7 text-primary";
  switch (iconType) {
    case "bachelor":
      return <Star className={className} />;
    case "college":
      return <BookOpen className={className} />;
    default:
      return <School className={className} />;
  }
};

const Education = () => {
  return (
    <Section id="education" className="py-16 sm:py-20 md:py-28">
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

        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_20px_45px_var(--primary-glow)] sm:flex-row sm:items-start sm:gap-5 sm:p-5 md:p-6">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 sm:h-14 sm:w-14">
                  {getIcon(edu.icon)}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg md:text-xl">
                      {edu.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {edu.score}
                      </span>
                      {edu.current && (
                        <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.06em] text-primary">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mb-0.5 text-sm font-semibold text-primary sm:text-base">
                    {edu.institute}
                  </p>
                  <p className="mb-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    {edu.duration} · {edu.level}
                  </p>
                  <p className="mb-3.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {edu.subjects.map((subject, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-border bg-background-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-primary/45 hover:text-primary"
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
    </Section>
  );
};

export default Education;