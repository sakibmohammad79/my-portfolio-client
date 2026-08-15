"use client";
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadResume from "@/lib/UI/ResumeDownload/ResumeDownload";
import DevWorkspace from "@/components/Shared/DevWorkspace/DevWorkspace";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { colors, radii } from "@/constant/design";

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
    icon: <LinkedInIcon fontSize="medium" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/sakibmohammad79",
    icon: <GitHubIcon fontSize="medium" />,
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100011373134077",
    icon: <FacebookIcon fontSize="medium" />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/md_sakib75/",
    icon: <InstagramIcon fontSize="medium" />,
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
    <Box
      sx={{
        minHeight: "100vh",
        background: colors.background,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Atmosphere */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 15% 30%, ${colors.primarySofter} 0%, transparent 45%),
            radial-gradient(circle at 85% 75%, oklch(28% 0.05 290 / 0.16) 0%, transparent 50%),
            radial-gradient(circle at 60% 10%, oklch(76.8% 0.233 130.85 / 0.05) 0%, transparent 40%)
          `,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(45deg, ${colors.border} 1px, transparent 1px),
            linear-gradient(-45deg, ${colors.border} 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          opacity: 0.25,
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <Container
        sx={{ position: "relative", zIndex: 1, py: { xs: 10, md: 6 } }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            minHeight: "calc(100vh - 140px)",
            pt: { xs: 6, md: 0 },
          }}
        >
          {/* Left: content */}
          <Grid item xs={12} md={7} lg={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Availability label */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 0.8,
                    borderRadius: 999,
                    border: `1px solid ${colors.border}`,
                    background: colors.card,
                    fontSize: { xs: "0.72rem", md: "0.8rem" },
                    color: colors.textSecondary,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: colors.primary,
                      boxShadow: `0 0 0 4px ${colors.primarySoft}`,
                    }}
                  />
                  Available for new opportunities
                </Box>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: {
                      xs: "1.8rem",
                      sm: "2rem",
                      md: "2.6rem",
                      lg: "3.0rem",
                      xl: "3.25rem",
                    },
                    fontFamily:
                      '"Inter", "SF Pro Display", -apple-system, sans-serif',
                    fontWeight: 800,
                    lineHeight: 1.08,
                    letterSpacing: "-0.03em",
                    color: colors.textPrimary,
                    mt: 3,
                  }}
                >
                  Hi, I&apos;m{" "}
                  <Box component="span" sx={{ color: colors.primary }}>
                    Md. Sakib
                  </Box>
                  <br />
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      color: colors.textSecondary,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ color: colors.textMuted, mr: 1 }}
                    >
                      A
                    </Box>
                    {typedText}
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        width: { xs: 2, md: 3 },
                        height: { xs: "1.8rem", md: "2.6rem" },
                        bgcolor: colors.primary,
                        ml: 0.5,
                        animation: "blink 1.1s infinite",
                      }}
                    />
                  </Box>
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    color: colors.textMuted,
                    fontSize: { xs: "0.95rem", sm: "0.8rem", md: "0.8rem" },
                    lineHeight: 1.75,
                    mt: 3,
                    maxWidth: 580,
                  }}
                >
                  I design and build complete web applications — from polished,
                  responsive frontends to scalable backend services, RESTful
                  APIs, and database architecture. I combine clean UI with
                  robust system design to ship products that drive real impact.
                </Typography>
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  mt={4}
                >
                  <Button
                    component="a"
                    href="#contact"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: colors.primary,
                      color: colors.background,
                      fontWeight: 700,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.5, md: 1.75 },
                      borderRadius: radii.md,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        background: colors.primaryLight,
                        transform: "translateY(-2px)",
                        boxShadow: `0 12px 30px ${colors.primaryGlow}`,
                      },
                    }}
                  >
                    Let&apos;s Talk
                  </Button>
                  <Box
                    sx={{
                      "& button, & a": {
                        background: "transparent",
                        color: colors.textPrimary,
                        border: `1px solid ${colors.border}`,
                        borderRadius: radii.md,
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.5, md: 1.75 },
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        fontWeight: 600,
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: colors.borderHover,
                          background: colors.primarySoft,
                          transform: "translateY(-2px)",
                        },
                        "& svg": { color: colors.primary },
                      },
                    }}
                  >
                    <DownloadResume />
                  </Box>
                </Stack>
              </motion.div>

              {/* Social links */}
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    color: colors.textMuted,
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    mt: 5,
                    mb: 2,
                  }}
                >
                  Connect with me
                </Typography>
                <Stack direction="row" spacing={1.5}>
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
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 18,
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 42, md: 46 },
                            height: { xs: 42, md: 46 },
                            borderRadius: radii.md,
                            border: `1px solid ${colors.border}`,
                            background: colors.card,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: colors.textSecondary,
                            transition: "all 0.25s ease",
                            "&:hover": {
                              color: colors.primary,
                              borderColor: colors.borderHover,
                              background: colors.primarySofter,
                            },
                          }}
                        >
                          {item.icon}
                        </Box>
                      </motion.div>
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right: developer workspace visual */}
          <Grid item xs={12} md={5} lg={6}>
            <Box sx={{ pb: { xs: 6, sm: 8 }, pt: { xs: 4, md: 0 } }}>
              <DevWorkspace />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
