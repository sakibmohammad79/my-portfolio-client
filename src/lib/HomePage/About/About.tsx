"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/Shared/Section/Section";
import { CheckCircle2 } from "lucide-react";

const profileImage = "https://i.postimg.cc/V6v625LY/sakib-s-image.png";

const highlights = [
  "Frontend & Backend Development",
  "RESTful API Design",
  "Database Architecture",
  "Scalable Full-Stack Systems",
];

const About = () => {
  return (
    <Section id="about" variant="bottom-right" className="py-16 sm:py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Image */}
          <div className="md:col-span-5 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative mx-auto max-w-[360px] sm:max-w-[400px] md:max-w-none">
                <div
                  aria-hidden
                  className="absolute -inset-3 z-0 opacity-40 blur-[30px]"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 50%, var(--primary-glow) 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-[0_24px_50px_rgba(0,0,0,0.35)]">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  >
                    <Image
                      src={profileImage}
                      alt="Md. Sakib - Full Stack Developer"
                      width={600}
                      height={700}
                      priority
                      className="block h-auto w-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-3 left-2 sm:-left-3 z-20 hidden items-center gap-2.5 rounded-xl border border-primary/40 bg-card/95 px-3.5 py-2.5 shadow-[0_16px_35px_rgba(0,0,0,0.35)] backdrop-blur-md sm:flex"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" style={{ boxShadow: "0 0 0 4px var(--primary-soft)" }} />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold leading-tight text-foreground sm:text-[13px]">
                      Full Stack Developer
                    </span>
                    <span className="block text-[10px] text-muted-foreground sm:text-[11px]">
                      Frontend · Backend · Database
                    </span>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="md:col-span-7 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 sm:px-4 sm:py-2">
                <span className="h-0.5 w-6 rounded bg-primary sm:w-7" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
                  About Me
                </span>
              </div>

              <h2 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                I am available for hire as a{" "}
                <span className="text-primary">Full Stack Developer</span>
              </h2>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
                My name is Md. Sakib, and I am a dedicated Full Stack Web Developer
                from Bangladesh, currently pursuing a bachelor&apos;s degree in Computer
                Science. I work across the entire stack — building responsive
                frontend interfaces with React, Next.js, and TypeScript, and crafting
                scalable backend services with Node.js, Express, and Prisma backed by
                MongoDB and PostgreSQL. I enjoy exploring new technologies and believe
                in working hard, never giving up, and tackling challenges with
                determination. My focus is on creating complete, robust, and efficient
                web applications that deliver real impact. Now, I am seeking an
                opportunity to start my professional development career and apply my
                full-stack expertise in a real-world environment.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                  >
                    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 sm:p-4">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                      <span className="text-xs font-medium text-foreground sm:text-sm">
                        {item}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;