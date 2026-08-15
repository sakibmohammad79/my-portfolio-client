"use client";
import { useGetAllSkillQuery } from "@/redux/api/skillApi";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";

interface Skill {
  id: string;
  name: string;
  image: string;
  parcentage: number;
}

type CategoryKey = "frontend" | "backend" | "database" | "tools";

const categories: { key: CategoryKey; label: string; match: RegExp }[] = [
  { key: "frontend", label: "Frontend", match: /html|css|javascript|typescript|react|next|redux|tailwind|material|bootstrap|vue|svelte|shadcn/i },
  { key: "backend", label: "Backend", match: /node|express|nest|prisma|graphql|rest|api|auth|jwt|socket/i },
  { key: "database", label: "Database", match: /mongo|postgre|mysql|sqlite|redis|supabase|firebase|dynamo/i },
  { key: "tools", label: "Tools & Technologies", match: /git|docker|github|gitlab|vercel|netlify|aws|azure|jira|linux|vscode|storybook|jenkins/i },
];

const getCategory = (name: string): CategoryKey => {
  for (const cat of categories) {
    if (cat.match.test(name)) return cat.key;
  }
  return "tools";
};

const defaultSkills: Skill[] = [
  { id: "1", name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", parcentage: 90 },
  { id: "2", name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", parcentage: 85 },
  { id: "3", name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", parcentage: 85 },
  { id: "4", name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", parcentage: 90 },
  { id: "5", name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", parcentage: 80 },
  { id: "6", name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", parcentage: 95 },
  { id: "7", name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", parcentage: 85 },
  { id: "8", name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", parcentage: 85 },
  { id: "9", name: "Prisma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", parcentage: 80 },
  { id: "10", name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", parcentage: 80 },
  { id: "11", name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", parcentage: 75 },
  { id: "12", name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", parcentage: 85 },
  { id: "13", name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", parcentage: 70 },
  { id: "14", name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", parcentage: 85 },
];

const Skills = () => {
  const { data } = useGetAllSkillQuery({});
  const skillList: Skill[] = data && data.length > 0 ? data : defaultSkills;

  const grouped = categories
    .map((cat) => ({
      ...cat,
      skills: skillList.filter((s: Skill) => getCategory(s.name) === cat.key),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <Section id="skill" variant="center" className="py-16 sm:py-20 md:py-28" background="subtle">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              My <span className="text-primary">Tech Stack</span>
            </>
          }
          subtitle="The technologies I use to transform ideas into reliable, scalable, and high-performance web applications."
        />

        <div className="flex flex-col gap-10 md:gap-14">
          {grouped.map((cat) => (
            <div key={cat.key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <h3 className="text-base font-bold tracking-wide text-primary sm:text-lg md:text-xl">
                    {cat.label}
                  </h3>
                  <div className="h-px flex-1 bg-border" />
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    {String(cat.skills.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-3.5">
                {cat.skills.map((skill: Skill, index: number) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="rounded-xl border border-border bg-card p-3.5 transition-all duration-300 hover:border-primary/45 hover:bg-card-hover sm:p-4">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background-secondary p-2 transition-all duration-300">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={skill.image}
                            alt={`${skill.name} icon`}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <span className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground sm:text-[15px]">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-primary sm:text-sm">
                          {skill.parcentage}%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-background-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.parcentage}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 + Math.min(index * 0.05, 0.3) }}
                          className="h-full rounded-full bg-gradient-to-r from-primary-dark to-primary"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;