"use client";
import { useGetAllProjectQuery } from "@/redux/api/projectApi";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

type StackGroup = { label: string; chip: string; labelClass: string; items: string[] };

const stackConfig: { label: string; labelClass: string; match: RegExp }[] = [
  {
    label: "Frontend",
    labelClass: "text-primary",
    match: /html|css|javascript|typescript|react|next|redux|tailwind|material|mui|bootstrap|daisyui|framer/,
  },
  {
    label: "Backend",
    labelClass: "text-primary-dark",
    match: /node|express|nest|jwt|json web token|auth|rest|api|socket|zod/,
  },
  {
    label: "Database",
    labelClass: "text-muted-foreground",
    match: /mongo|postgre|mysql|sqlite|redis|supabase|firebase|dynamo|prisma|mongoose/,
  },
];

const defaultProjects = [
  {
    id: "1",
    title: "Blood Donation Management Application",
    description:
      "A comprehensive blood donation platform featuring donor discovery, urgent request broadcasting, donor history tracking, and an admin dashboard with role-based access control.",
    technology: "React · Next.js · TypeScript · Tailwind CSS · Node.js · Express.js · PostgreSQL · Prisma",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1000&auto=format&fit=crop",
    url: "https://blood-donation-client-zeta.vercel.app/",
    repoClientUrl: "https://github.com/sakibmohammad79/blood-donation-client",
    repoServerUrl: "https://github.com/sakibmohammad79/blood-donation-server",
  },
  {
    id: "2",
    title: "Healthcare Service Management System",
    description:
      "A full-stack telehealth platform connecting patients and verified doctors with real-time appointment scheduling, medical records management, and secure payment processing.",
    technology: "Next.js · TypeScript · Redux Toolkit · Node.js · Express.js · PostgreSQL · Prisma · SSLCommerz",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    url: "https://ph-healthcare-client.vercel.app/",
    repoClientUrl: "https://github.com/sakibmohammad79/ph-health-care-client",
    repoServerUrl: "https://github.com/sakibmohammad79/ph-health-care-server",
  },
];

const Project = () => {
  const { data } = useGetAllProjectQuery({});
  const projectList = data && data.length > 0 ? data : defaultProjects;

  const classifyStack = (technology?: string, technologies?: string[]) => {
    const items = technology
      ? technology
          .split(/[·,]/)
          .map((t) => t.trim())
          .filter(Boolean)
      : technologies || [];
    if (items.length === 0) return null;

    const groups: StackGroup[] = stackConfig.map((cfg) => ({
      label: cfg.label,
      labelClass: cfg.labelClass,
      chip: "",
      items: [],
    }));

    items.forEach((tech) => {
      const lower = tech.toLowerCase();
      const match = stackConfig.find((cfg) => cfg.match.test(lower));
      if (match) {
        const idx = stackConfig.indexOf(match);
        groups[idx].items.push(tech);
      } else {
        let tools = groups.find((g) => g.label === "Tools");
        if (!tools) {
          tools = { label: "Tools", labelClass: "text-muted-foreground", chip: "", items: [] };
          groups.push(tools);
        }
        tools.items.push(tech);
      }
    });

    return groups.filter((g) => g.items.length > 0);
  };

  return (
    <Section id="project" className="py-16 sm:py-20 md:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              Featured <span className="text-primary">Projects</span>
            </>
          }
          subtitle="A selection of full-stack applications I've designed and built — from idea to production."
        />

        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
          {projectList.map((project: any, index: number) => {
            const reverse = index % 2 === 1;
            const gitUrl = project.repoClientUrl || project.repoServerUrl;
            const stackGroups = classifyStack(project?.technology, project?.technologies);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/45 hover:shadow-[0_24px_50px_var(--primary-glow)] sm:rounded-3xl lg:grid-cols-12">
                  {/* Image */}
                  <div
                    className={`relative min-h-[240px] overflow-hidden sm:min-h-[300px] md:min-h-[350px] lg:col-span-6 lg:min-h-[420px] ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Link href={`/project/${project.id}`} aria-label={project?.title} className="block h-full w-full">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 250, damping: 26 }}
                        className="relative h-full w-full min-h-[240px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-full"
                      >
                        <Image
                          src={project?.image}
                          alt={`${project?.title} preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="block object-cover"
                        />
                      </motion.div>
                    </Link>
                    <span className="absolute left-3 top-3 z-[2] rounded-full border border-primary/40 bg-background/85 px-2.5 py-1 font-mono text-xs font-bold tracking-[0.14em] text-primary backdrop-blur-md sm:left-4 sm:top-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:col-span-6 lg:p-10 ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>

                    <Link href={`/project/${project.id}`} className="group inline-block">
                      <h3 className="mb-2 text-xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl md:text-3xl">
                        {project?.title}
                      </h3>
                    </Link>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {project?.description}
                    </p>

                    {stackGroups && (
                      <div className="mb-5 flex flex-col gap-2.5">
                        {stackGroups.map((group) => (
                          <div key={group.label}>
                            <p className={`mb-1 text-[10px] font-bold uppercase tracking-[0.14em] sm:text-[11px] ${group.labelClass}`}>
                              {group.label}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {group.items.map((tech, i) => (
                                <span
                                  key={i}
                                  className="rounded-full border border-border bg-background-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-primary/45 hover:text-primary"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2 sm:gap-3">
                      {project?.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground shadow-[0_8px_20px_var(--primary-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light sm:px-4 sm:py-2.5 sm:text-sm"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                      {gitUrl && (
                        <a
                          href={gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-transparent px-3.5 py-2 text-xs font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 sm:px-4 sm:py-2.5 sm:text-sm"
                        >
                          <Github className="h-4 w-4" />
                          Source
                        </a>
                      )}
                      <Link
                        href={`/project/${project.id}`}
                        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary/10 sm:text-sm"
                      >
                        Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Project;