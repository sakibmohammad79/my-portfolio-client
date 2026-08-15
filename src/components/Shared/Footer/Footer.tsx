"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { colors } from "@/constant/design";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skill" },
  { name: "Projects", href: "#project" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: LinkedInIcon, url: "https://www.linkedin.com/in/md-sakib79/" },
  { name: "GitHub", icon: GitHubIcon, url: "https://github.com/sakibmohammad79" },
  { name: "Facebook", icon: FacebookIcon, url: "https://www.facebook.com/profile.php?id=100011373134077" },
  { name: "Instagram", icon: InstagramIcon, url: "https://www.instagram.com/md_sakib75/" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid ${colors.border}`,
        background: colors.background,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        {/* Brand + tagline */}
        <Box textAlign="center" mb={6}>
          <Typography
            component={Link}
            href="/"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 800,
              fontSize: { xs: "1.6rem", md: "1.9rem" },
              letterSpacing: "-0.02em",
              color: colors.textPrimary,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              mb: 2,
            }}
          >
            sakib
            <Box component="span" sx={{ color: colors.primary }}>
              .
            </Box>
            dev
          </Typography>
          <Typography
            sx={{
              color: colors.textMuted,
              fontSize: "0.95rem",
              maxWidth: 460,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Full Stack Web Developer passionate about creating secure, scalable digital experiences.
          </Typography>
        </Box>

        {/* Nav links */}
        <Stack direction="row" justifyContent="center" flexWrap="wrap" spacing={{ xs: 2, md: 4 }} mb={6}>
          {navigationLinks.map((link, index) => (
            <Typography
              key={index}
              component={Link}
              href={link.href}
              sx={{
                color: colors.textSecondary,
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500,
                fontSize: "0.82rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
                transition: "color 0.25s ease",
                "&:hover": { color: colors.primary },
              }}
            >
              {link.name}
            </Typography>
          ))}
        </Stack>

        {/* Socials */}
        <Stack direction="row" justifyContent="center" spacing={1.5} mb={6}>
          {socialLinks.map((social, index) => (
            <Box
              key={index}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              sx={{
                width: 42,
                height: 42,
                borderRadius: "10px",
                border: `1px solid ${colors.border}`,
                background: colors.card,
                color: colors.textSecondary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: colors.primary,
                  borderColor: colors.borderHover,
                  background: colors.primarySofter,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <social.icon sx={{ fontSize: "1.15rem" }} />
            </Box>
          ))}
        </Stack>

        <Box
          sx={{
            borderTop: `1px solid ${colors.border}`,
            pt: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1.5,
          }}
        >
          <Typography sx={{ color: colors.textMuted, fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Md. Sakib. All Rights Reserved.
          </Typography>
          <Typography
            sx={{
              color: colors.textMuted,
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: 0.6,
            }}
          >
            Made with
            <FavoriteIcon sx={{ color: colors.primary, fontSize: "0.95rem" }} />
            by Md. Sakib
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;