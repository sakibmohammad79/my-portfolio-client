"use client";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { colors, radii } from "@/constant/design";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const experiences = [
  {
    id: 1,
    position: "Software Engineer",
    company: "CSX Labs",
    duration: "October 2024 - February 2025",
    description:
      "Worked as a Full Stack Software Engineer, developing scalable web applications using Next.js, TypeScript, PostgreSQL, and Prisma. Built modern, responsive user interfaces and implemented robust backend solutions.",
    technologies: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Storybook.js"],
    current: true,
  },
];

const Experience = () => {
  return (
    <Section id="experience" sx={{ py: { xs: 7, sm: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Work <Box component="span" sx={{ color: colors.primary }}>Experience</Box>
            </>
          }
          subtitle="Where I've applied my skills to build real-world products and grow as an engineer."
        />

        <Box sx={{ position: "relative", pl: { xs: 0, md: 0 }, maxWidth: 760, mx: "auto" }}>
          <Box
            sx={{
              position: "absolute",
              left: { xs: 18, md: 20 },
              top: 8,
              bottom: 8,
              width: 2,
              background: `linear-gradient(180deg, ${colors.primary}, ${colors.border})`,
              opacity: 0.7,
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <Box sx={{ display: "flex", gap: { xs: 3, md: 4 } }}>
                  {/* Node */}
                  <Box
                    sx={{
                      position: "relative",
                      flexShrink: 0,
                      width: 38,
                      height: 38,
                      mt: 1,
                      borderRadius: "50%",
                      border: `2px solid ${colors.primary}`,
                      background: colors.background,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      boxShadow: `0 0 0 5px ${colors.primarySofter}`,
                    }}
                  >
                    {exp.current ? (
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: colors.primary,
                          animation: "blink 2s infinite",
                        }}
                      />
                    ) : (
                      <BusinessCenterIcon sx={{ color: colors.primary, fontSize: "1rem" }} />
                    )}
                  </Box>

                  {/* Card */}
                  <Box
                    sx={{
                      flex: 1,
                      background: colors.card,
                      border: `1px solid ${colors.border}`,
                      borderRadius: radii.lg,
                      p: { xs: 3, md: 4 },
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: colors.borderHover,
                        transform: "translateY(-4px)",
                        boxShadow: `0 20px 45px ${colors.primaryGlow}`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: colors.textPrimary,
                          fontWeight: 700,
                          fontSize: { xs: "1.15rem", md: "1.35rem" },
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {exp.position}
                      </Typography>
                      {exp.current && (
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.4,
                            borderRadius: 999,
                            background: colors.primarySoft,
                            border: `1px solid ${colors.borderHover}`,
                            color: colors.primary,
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          Current
                        </Box>
                      )}
                    </Box>

                    <Typography
                      sx={{
                        color: colors.primary,
                        fontWeight: 600,
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        mb: 0.75,
                      }}
                    >
                      {exp.company}
                    </Typography>

                    <Typography
                      sx={{
                        color: colors.textMuted,
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        mb: 2.5,
                      }}
                    >
                      {exp.duration}
                    </Typography>

                    <Typography
                      sx={{
                        color: colors.textSecondary,
                        fontSize: { xs: "0.92rem", md: "0.98rem" },
                        lineHeight: 1.75,
                        mb: 3,
                      }}
                    >
                      {exp.description}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {exp.technologies.map((tech, i) => (
                        <Box
                          key={i}
                          sx={{
                            px: 1.5,
                            py: 0.6,
                            borderRadius: 999,
                            background: colors.backgroundSecondary,
                            border: `1px solid ${colors.border}`,
                            color: colors.textSecondary,
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            transition: "all 0.2s ease",
                            "&:hover": {
                              color: colors.primary,
                              borderColor: colors.borderHover,
                            },
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default Experience;