"use client";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";

const navigationLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skill" },
  { name: "PROJECTS", href: "#project" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "BLOG", href: "#blog" },
  { name: "CONTACT", href: "#contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/md-sakib79/",
    hoverClass:
      "hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:shadow-[0_0_16px_rgba(10,102,194,0.25)]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/sakibmohammad79",
    hoverClass:
      "hover:border-primary/45 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_16px_oklch(var(--primary-glow))]",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=100011373134077",
    hoverClass:
      "hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:shadow-[0_0_16px_rgba(24,119,242,0.25)]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/md_sakib75/",
    hoverClass:
      "hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 hover:text-[#E1306C] hover:shadow-[0_0_16px_rgba(225,48,108,0.25)]",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t-0 py-12 sm:py-16 md:py-20">
      {/* Gradient fade from last section */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(var(--background)) 0%, oklch(10% 0.015 260) 100%)",
        }}
      />

      {/* Subtle lime ambient orb — centered behind brand */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, oklch(var(--primary) / 0.8) 0%, transparent 70%)",
        }}
      />

      {/* Gradient top divider line */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, oklch(var(--primary) / 0.35) 30%, oklch(var(--primary) / 0.35) 70%, transparent 100%)",
        }}
      />

      <div className="container relative z-10">
        {/* Brand + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-10"
        >
          <Link
            href="/"
            className="mb-2 inline-flex items-center text-2xl font-extrabold tracking-tight text-foreground transition-colors duration-300 hover:text-primary sm:text-3xl"
          >
            sakib<span className="text-primary">.</span>dev
          </Link>
          <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Full Stack Web Developer passionate about creating secure, scalable
            digital experiences.
          </p>
        </motion.div>

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-10 sm:gap-6 md:gap-8"
        >
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-xs font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:text-primary sm:text-sm"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 flex items-center justify-center gap-2 sm:mb-10"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 sm:h-11 sm:w-11 ${social.hoverClass}`}
            >
              <social.icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
            </motion.a>
          ))}
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-2.5 border-t border-border/40 pt-6 sm:flex-row sm:pt-8">
          <p className="text-xs text-muted-foreground sm:text-[13px]">
            © {new Date().getFullYear()} Md. Sakib. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground sm:text-[13px]">
            Made by Md. Sakib
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
