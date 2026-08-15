"use client";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Github, Heart } from "lucide-react";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skill" },
  { name: "Projects", href: "#project" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/md-sakib79/" },
  { name: "GitHub", icon: Github, url: "https://github.com/sakibmohammad79" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/profile.php?id=100011373134077" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/md_sakib75/" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-border py-14 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 130%, var(--primary-soft) 0%, transparent 55%)",
        }}
      />
      <div className="relative z-10 container">
        {/* Brand + tagline */}
        <div className="mb-12 text-center">
          <Link
            href="/"
            className="mb-2 inline-flex items-center text-3xl font-extrabold tracking-tight text-foreground"
          >
            sakib<span className="text-primary">.</span>dev
          </Link>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Full Stack Web Developer passionate about creating secure, scalable
            digital experiences.
          </p>
        </div>

        {/* Nav links */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="mb-12 flex items-center justify-center gap-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 hover:text-primary"
            >
              <social.icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-8 sm:flex-row">
          <p className="text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} Md. Sakib. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
            Made with
            <Heart className="h-4 w-4 fill-primary text-primary" />
            by Md. Sakib
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;