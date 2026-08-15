"use client";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Github, ArrowRight } from "lucide-react";
import DownloadResume from "@/lib/UI/ResumeDownload/ResumeDownload";
import DevWorkspace from "@/components/Shared/DevWorkspace/DevWorkspace";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const useTypingEffect = (texts: string[], speed: number = 120) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = texts[currentIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, speed / 2);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, speed]);

  return displayText;
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/md-sakib79/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/sakibmohammad79",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100011373134077",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/md_sakib75/",
    icon: Instagram,
    label: "Instagram",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Banner = () => {
  const designations = [
    "Full Stack Developer",
    "Backend Developer",
    "Node.js Developer",
    "API Architect",
  ];

  const typedText = useTypingEffect(designations, 120);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, var(--primary-softer) 0%, transparent 45%), radial-gradient(circle at 85% 75%, oklch(28% 0.05 290 / 0.16) 0%, transparent 50%), radial-gradient(circle at 60% 10%, oklch(76.8% 0.233 130.85 / 0.05) 0%, transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--border) 1px, transparent 1px), linear-gradient(-45deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-20 md:py-24 lg:py-0">
        <div className="grid grid-cols-1 items-center gap-12 pt-4 md:min-h-[calc(100vh-100px)] md:grid-cols-12 md:gap-8 md:pt-0 lg:gap-12">
          {/* Left: content */}
          <div className="md:col-span-7 lg:col-span-6">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {/* Availability label */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.04em] text-muted-foreground sm:px-4 sm:text-[13px]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" style={{ boxShadow: "0 0 0 4px var(--primary-soft)" }} />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Available for new opportunities
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants}>
                <h1 className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Hi, I&apos;m <span className="text-primary">Md. Sakib</span>
                  <br />
                  <span className="inline-flex min-h-[1.2em] flex-wrap items-center text-muted-foreground">
                    <span className="mr-2 text-muted-foreground/60">A</span>
                    {typedText}
                    <span className="ml-1 inline-block h-6 w-[2.5px] animate-blink bg-primary sm:h-8 sm:w-1 md:h-10" />
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants}>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
                  I design and build complete web applications — from polished,
                  responsive frontends to scalable backend services, RESTful APIs,
                  and database architecture. I combine clean UI with robust system
                  design to ship products that drive real impact.
                </p>
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={itemVariants}>
                <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_30px_var(--primary-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light sm:px-7 sm:py-3.5 sm:text-base"
                  >
                    Let&apos;s Talk
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <DownloadResume />
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div variants={itemVariants}>
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:mt-10 sm:text-xs">
                  Connect with me
                </p>
                <div className="mt-3.5 flex flex-wrap gap-2 sm:gap-2.5">
                  {socialLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      aria-label={item.label}
                    >
                      <motion.div
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/45 hover:bg-primary/10 hover:text-primary sm:h-11 sm:w-11 md:h-12 md:w-12">
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: developer workspace visual */}
          <div className="pb-8 pt-4 md:col-span-5 md:py-0 lg:col-span-6">
            <DevWorkspace />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;