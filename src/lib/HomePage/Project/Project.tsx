"use client";
import { useGetAllProjectQuery } from "@/redux/api/projectApi";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

type StackGroup = { label: string; labelClass: string; items: string[] };

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

function classifyStack(technology?: string, technologies?: string[]): StackGroup[] | null {
  const items = technology
    ? technology.split(/[·,]/).map((t) => t.trim()).filter(Boolean)
    : technologies || [];
  if (items.length === 0) return null;

  const groups: StackGroup[] = stackConfig.map((cfg) => ({
    label: cfg.label,
    labelClass: cfg.labelClass,
    items: [],
  }));

  items.forEach((tech) => {
    const lower = tech.toLowerCase();
    const match = stackConfig.find((cfg) => cfg.match.test(lower));
    if (match) {
      groups[stackConfig.indexOf(match)].items.push(tech);
    } else {
      let tools = groups.find((g) => g.label === "Tools");
      if (!tools) {
        tools = { label: "Tools", labelClass: "text-muted-foreground", items: [] };
        groups.push(tools);
      }
      tools.items.push(tech);
    }
  });

  return groups.filter((g) => g.items.length > 0);
}

/* ── Featured project card with cursor parallax ─────────── */
function FeaturedProject({
  project,
  index,
  prefersReduced,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any;
  index: number;
  prefersReduced: boolean;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const reverse = index % 2 === 1;
  const gitUrl = project.repoClientUrl || project.repoServerUrl;
  const stackGroups = classifyStack(project?.technology, project?.technologies);

  // Cursor-tracking parallax on the image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 20 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReduced || !imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: prefersReduced ? 0 : 0.65, ease: "easeOut" }}
    >
      <div
        className={`grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_24px_60px_oklch(var(--primary-glow))] sm:rounded-3xl lg:grid-cols-12`}
      >
        {/* ── Image panel ── */}
        <div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative min-h-[240px] overflow-hidden sm:min-h-[300px] md:min-h-[360px] lg:col-span-7 lg:min-h-[460px] ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Link href={`/project/${project.id}`} aria-label={project?.title} className="block h-full w-full">
            <motion.div
              style={{ x: prefersReduced ? 0 : x, y: prefersReduced ? 0 : y }}
              className="relative h-full w-full min-h-[240px] sm:min-h-[300px] lg:min-h-full"
            >
              <motion.div
                whileHover={{ scale: prefersReduced ? 1 : 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 28 }}
                className="relative h-full w-full"
              >
                <Image
                  src={project?.image}
                  alt={`${project?.title} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="block object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Gradient overlay — bleeds toward info panel */}
            <div
              aria-hidden
              className={`absolute inset-0 ${
                reverse
                  ? "bg-gradient-to-l from-card/80 via-transparent to-transparent lg:from-card/60"
                  : "bg-gradient-to-r from-transparent via-transparent to-card/80 lg:to-card/60"
              }`}
            />
          </Link>

          {/* Project number badge */}
          <span className="absolute left-3 top-3 z-[2] rounded-full border border-primary/40 bg-background/85 px-2.5 py-1 font-mono text-xs font-bold tracking-[0.14em] text-primary backdrop-blur-md sm:left-4 sm:top-4">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Subtle lime ambient bleed */}
          <div
            aria-hidden
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 h-48 w-24 opacity-20 blur-3xl ${
              reverse ? "left-0" : "right-0"
            }`}
            style={{ background: "radial-gradient(circle, oklch(var(--primary) / 0.6) 0%, transparent 80%)" }}
          />
        </div>

        {/* ── Info panel ── */}
        <div
          className={`flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:col-span-5 lg:p-10 ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Ghost number watermark */}
          <div className="relative mb-2 overflow-hidden">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-4 -right-2 select-none font-mono text-[5rem] font-black leading-none text-primary/5 sm:text-[7rem]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className="relative mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
              Project {String(index + 1).padStart(2, "0")}
            </p>
          </div>

          <Link href={`/project/${project.id}`} className="group mb-3 inline-block">
            <h3 className="text-xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl lg:text-3xl">
              {project?.title}
            </h3>
          </Link>

          <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {project?.description}
          </p>

          {stackGroups && (
            <div className="mb-6 flex flex-col gap-2.5">
              {stackGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, x: prefersReduced ? 0 : -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: prefersReduced ? 0 : 0.4, delay: prefersReduced ? 0 : gi * 0.07 }}
                >
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
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2 sm:gap-3">
            {project?.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-[0_8px_24px_oklch(var(--primary-glow))] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light sm:text-sm"
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
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-transparent px-4 py-2.5 text-xs font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 sm:text-sm"
              >
                <Github className="h-4 w-4" />
                Source
              </a>
            )}
            <Link
              href={`/project/${project.id}`}
              className="inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary/10 sm:text-sm"
            >
              Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Secondary compact project card ──────────────────────── */
function SecondaryProject({
  project,
  index,
  prefersReduced,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any;
  index: number;
  prefersReduced: boolean;
}) {
  const gitUrl = project.repoClientUrl || project.repoServerUrl;
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: prefersReduced ? 0 : 0.5, delay: prefersReduced ? 0 : index * 0.1 }}
    >
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_40px_oklch(var(--primary-glow))]">
        <span className="mb-3 block font-mono text-[10px] font-bold tracking-widest text-primary/50">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mb-2 text-base font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-lg">
          {project?.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project?.description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {project?.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
              <ExternalLink className="h-3.5 w-3.5" />Live
            </a>
          )}
          {gitUrl && (
            <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary">
              <Github className="h-3.5 w-3.5" />Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main component ─────────────────────────────────────── */
const Project = () => {
  const { data } = useGetAllProjectQuery({});
  const projectList = data && data.length > 0 ? data : defaultProjects;
  const prefersReduced = useReducedMotion() ?? false;

  // First 2 are featured, rest are secondary
  const featured = projectList.slice(0, 2);
  const secondary = projectList.slice(2);

  return (
    <Section id="project" variant="top-left" className="py-16 sm:py-20 md:py-28">
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

        {/* Featured projects */}
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
          {featured.map((project: any, index: number) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={index}
              prefersReduced={prefersReduced}
            />
          ))}
        </div>

        {/* Secondary projects grid */}
        {secondary.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              More Projects
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {secondary.map((project: any, index: number) => (
                <SecondaryProject
                  key={project.id}
                  project={project}
                  index={featured.length + index}
                  prefersReduced={prefersReduced}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Project;