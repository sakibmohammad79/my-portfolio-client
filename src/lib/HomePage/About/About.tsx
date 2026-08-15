"use client";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors, radii } from "@/constant/design";
import Section from "@/components/Shared/Section/Section";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const profileImage = "https://i.postimg.cc/V6v625LY/sakib-s-image.png";

const highlights = [
  "Frontend & Backend Development",
  "RESTful API Design",
  "Database Architecture",
  "Scalable Full-Stack Systems",
];

const About = () => {
  return (
    <Section id="about" sx={{ py: { xs: 7, sm: 9, md: 12 } }}>
      <Container>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={5} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: "relative",
                  maxWidth: 420,
                  mx: "auto",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: -14,
                    background: `radial-gradient(ellipse at 50% 50%, ${colors.primaryGlow} 0%, transparent 70%)`,
                    filter: "blur(32px)",
                    opacity: 0.45,
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: radii.xl,
                    overflow: "hidden",
                    border: `1px solid ${colors.borderHover}`,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                    background: colors.card,
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  >
                    <Image
                      src={profileImage}
                      alt="Md. Sakib - Full Stack Developer"
                      width={600}
                      height={700}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </motion.div>
                </Box>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 18,
                      left: -8,
                      zIndex: 2,
                      background: colors.card,
                      border: `1px solid ${colors.borderHover}`,
                      borderRadius: radii.md,
                      px: 2,
                      py: 1.2,
                      boxShadow: "0 16px 35px rgba(0,0,0,0.35)",
                      display: { xs: "none", sm: "flex" },
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: colors.primary,
                        boxShadow: `0 0 0 4px ${colors.primarySoft}`,
                      }}
                    />
                    <Box>
                      <Typography sx={{ color: colors.textPrimary, fontWeight: 700, fontSize: "0.85rem", lineHeight: 1.2 }}>
                        Full Stack Developer
                      </Typography>
                      <Typography sx={{ color: colors.textMuted, fontSize: "0.7rem" }}>
                        Frontend · Backend · Database
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Content */}
          <Grid item xs={12} md={7} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 0.8,
                  borderRadius: 999,
                  border: `1px solid ${colors.borderHover}`,
                  background: colors.primarySofter,
                  mb: 3,
                }}
              >
                <Box sx={{ width: 26, height: 2, bgcolor: colors.primary, borderRadius: 1 }} />
                <Typography
                  sx={{
                    color: colors.primary,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                  }}
                >
                  About Me
                </Typography>
              </Box>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.6rem", lg: "3rem" },
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: colors.textPrimary,
                  mb: 2,
                }}
              >
                I am available for hire as a{" "}
                <Box component="span" sx={{ color: colors.primary }}>
                  Full Stack Developer
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: colors.textMuted,
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.8,
                  mb: 5,
                }}
              >
                My name is Md. Sakib, and I am a dedicated Full Stack Web Developer from
                Bangladesh, currently pursuing a bachelor&apos;s degree in Computer Science.
                I work across the entire stack — building responsive frontend interfaces with
                React, Next.js, and TypeScript, and crafting scalable backend services with
                Node.js, Express, and Prisma backed by MongoDB and PostgreSQL. I enjoy
                exploring new technologies and believe in working hard, never giving up, and
                tackling challenges with determination. My focus is on creating complete,
                robust, and efficient web applications that deliver real impact. Now, I am
                seeking an opportunity to start my professional development career and apply
                my full-stack expertise in a real-world environment.
              </Typography>

              {/* Highlights */}
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 1.6,
                        borderRadius: radii.md,
                        background: colors.card,
                        border: `1px solid ${colors.border}`,
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: colors.borderHover,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <CheckCircleIcon sx={{ color: colors.primary, fontSize: "1.25rem", flexShrink: 0 }} />
                      <Typography sx={{ color: colors.textSecondary, fontSize: "0.9rem", fontWeight: 500 }}>
                        {item}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;