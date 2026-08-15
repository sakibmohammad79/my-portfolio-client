"use client";
import { useGetSingleProjectQuery } from "@/redux/api/projectApi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ExternalLink,
  Github,
  Code,
  Calendar,
  FileText,
  Wrench,
  Info,
  ArrowLeft,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const Page = ({ params }: any) => {
  const { projectId } = params;
  const { data } = useGetSingleProjectQuery(projectId);
  const router = useRouter();

  const projectLinks = [
    {
      label: "Live Demo",
      url: data?.url,
      icon: ExternalLink,
      primary: true,
    },
    {
      label: "Client Repo",
      url: data?.repoClientUrl,
      icon: Github,
      primary: false,
    },
    {
      label: "Server Repo",
      url: data?.repoServerUrl,
      icon: Code,
      primary: false,
    },
  ];

  const infoSections = [
    {
      icon: FileText,
      label: "Description",
      content: data?.description,
    },
    {
      icon: Info,
      label: "Details",
      content: data?.details,
    },
    {
      icon: Wrench,
      label: "Technology Stack",
      content: data?.technology,
    },
  ];

  const backButtonClass =
    "inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 text-sm font-semibold text-muted-foreground backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-primary/45 hover:text-primary sm:px-3 sm:py-2 sm:text-[15px]";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 25%, var(--primary-softer) 0%, transparent 50%), radial-gradient(circle at 75% 75%, oklch(28% 0.05 290 / 0.16) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-[1] mx-auto w-full max-w-none px-2 py-8 sm:px-3 sm:py-8 md:px-4 md:py-12">
        <div className="mx-auto w-full max-w-[800px] px-0 md:max-w-[900px] sm:px-2">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="mb-3 sm:mb-4">
              <button onClick={() => router.back()} className={backButtonClass}>
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </button>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={slideInLeft}>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl md:rounded-[24px]">
                <motion.div variants={slideInLeft}>
                  <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] md:h-[400px] lg:h-[500px]">
                    <Image
                      src={data?.image || "/placeholder-project.jpg"}
                      alt={data?.title || "Project Image"}
                      fill
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] sm:h-[80px] md:h-[100px]"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, var(--card) 100%)",
                      }}
                    />
                  </div>
                </motion.div>

                <div className="relative z-[2] p-3 sm:p-4 md:p-5 lg:p-6">
                  <motion.div variants={slideInRight}>
                    <h1 className="mb-6 text-[1.75rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.8rem]">
                      {data?.title}
                    </h1>
                  </motion.div>

                  {infoSections.map(
                    (section, index) =>
                      section.content && (
                        <motion.div key={index} variants={fadeInUp}>
                          <div className="relative mb-2.5 overflow-hidden rounded-xl border border-border bg-background-secondary p-3 sm:mb-3 sm:p-3.5 md:p-4">
                            <span
                              aria-hidden
                              className="absolute inset-y-0 left-0 w-1 bg-primary"
                            />
                            <div className="mb-1.5 flex flex-wrap items-center gap-1 sm:mb-2">
                              <div className="mr-1 flex shrink-0 items-center justify-center rounded-lg bg-primary/10 p-0.5 sm:mr-2 sm:p-1">
                                <section.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                              </div>
                              <p className="flex-1 text-base font-bold tracking-wide text-primary sm:text-lg md:text-xl">
                                {section.label}
                              </p>
                            </div>
                            <p className="whitespace-pre-wrap pl-4 text-sm leading-[1.7] text-muted-foreground sm:pl-5 sm:text-[15px] md:pl-6 md:text-base">
                              {section.content}
                            </p>
                          </div>
                        </motion.div>
                      )
                  )}

                  {(data?.startDate || data?.endDate) && (
                    <motion.div variants={fadeInUp}>
                      <div className="mb-3 rounded-xl border border-border bg-background-secondary p-3 sm:mb-4 sm:p-3.5 md:p-4">
                        <div className="mb-2 flex flex-wrap items-center gap-1 sm:mb-3">
                          <div className="mr-1 flex shrink-0 items-center justify-center rounded-lg bg-primary/10 p-0.5 sm:mr-2 sm:p-1">
                            <Calendar className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                          </div>
                          <p className="flex-1 text-base font-bold text-primary sm:text-lg md:text-xl">
                            Project Timeline
                          </p>
                        </div>

                        <div className="flex flex-col gap-2 pl-4 sm:flex-row sm:gap-3 sm:pl-5 md:gap-4 md:pl-6">
                          {data?.startDate && (
                            <div className="flex-1">
                              <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.05em] text-muted-foreground sm:mb-1 sm:text-sm">
                                Start Date
                              </p>
                              <p className="text-[15px] font-semibold break-words text-muted-foreground sm:text-base md:text-lg">
                                {data.startDate}
                              </p>
                            </div>
                          )}

                          {data?.endDate && (
                            <div className="flex-1">
                              <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.05em] text-muted-foreground sm:mb-1 sm:text-sm">
                                End Date
                              </p>
                              <p className="text-[15px] font-semibold break-words text-muted-foreground sm:text-base md:text-lg">
                                {data.endDate}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <motion.div variants={fadeInUp}>
                    <div className="my-3 sm:my-4" style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}>
                      <div className="h-px w-full" />
                    </div>

                    <p className="mb-2.5 text-center text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground sm:mb-3 sm:text-sm">
                      Project Links
                    </p>

                    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-2.5 md:gap-3">
                      {projectLinks.map(
                        (link, index) =>
                          link.url && (
                            <motion.div
                              key={index}
                              whileHover={{ y: -3 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full sm:w-auto"
                            >
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-300 sm:min-w-[160px] sm:px-3.5 sm:py-2.5 md:min-w-[180px] md:px-4 md:py-3 md:text-base ${
                                  link.primary
                                    ? "bg-primary text-primary-foreground shadow-[0_10px_25px_var(--primary-glow)] hover:bg-primary-light"
                                    : "border border-border text-muted-foreground hover:border-primary/45 hover:bg-primary/10 hover:text-primary"
                                }`}
                              >
                                <link.icon className="h-4 w-4" />
                                {link.label}
                              </a>
                            </motion.div>
                          )
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;