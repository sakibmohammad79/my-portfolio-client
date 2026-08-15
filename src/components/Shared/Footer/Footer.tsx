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
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/md-sakib79/",
  },
  { name: "GitHub", icon: Github, url: "https://github.com/sakibmohammad79" },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=100011373134077",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/md_sakib75/",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12 sm:py-16 md:py-20">
      <div className="container">
        {/* Brand + tagline */}
        <div className="mb-8 text-center sm:mb-10">
          <Link
            href="/"
            className="mb-2 inline-flex items-center text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            sakib<span className="text-primary">.</span>dev
          </Link>
          <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Full Stack Web Developer passionate about creating secure, scalable
            digital experiences.
          </p>
        </div>

        {/* Nav links */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-10 sm:gap-6 md:gap-8">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="mb-8 flex items-center justify-center gap-2 sm:mb-10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 hover:text-primary sm:h-11 sm:w-11"
            >
              <social.icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-2.5 border-t border-border pt-6 sm:flex-row sm:pt-8">
          <p className="text-xs text-muted-foreground sm:text-[13px]">
            © {new Date().getFullYear()} Md. Sakib. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground sm:text-[13px]">
            Made by Md. Sakib
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
