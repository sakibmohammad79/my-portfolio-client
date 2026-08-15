"use client";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { colors, radii } from "@/constant/design";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarIcon from "@mui/icons-material/Star";

const educationData = [
  {
    id: 1,
    title: "BSc in Computer Science",
    institute: "BGC Trust University Bangladesh",
    duration: "2022 - 2026",
    score: "Graduated",
    level: "Bachelor's Degree",
    description:
      "Currently pursuing my Bachelor's degree in Computer Science, gaining comprehensive knowledge in programming, databases, software development, algorithms, and modern web technologies.",
    subjects: [
      "Programming",
      "Databases",
      "Software Development",
      "Algorithms",
    ],
    current: false,
    icon: "bachelor",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    institute: "Sir. Ashotush Govt. College",
    duration: "2018 - 2020",
    score: "4.17/5",
    level: "HSC",
    description:
      "Completed my HSC with a strong focus on Mathematics, Physics, and Computer Science, building a solid foundation for my technology career.",
    subjects: ["Mathematics", "Physics", "Computer Science", "English"],
    current: false,
    icon: "college",
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    institute: "Jaisthapura Ramani Mohan High School",
    duration: "2016 - 2018",
    score: "4.28/5",
    level: "SSC",
    description:
      "Completed my SSC with a keen interest in science and problem-solving, achieving excellent results across all subjects.",
    subjects: ["General Science", "Mathematics", "English", "Bengali"],
    current: false,
    icon: "school",
  },
];

const getIcon = (iconType: string) => {
  const sx = { color: colors.primary, fontSize: "1.35rem" };
  switch (iconType) {
    case "bachelor":
      return <StarIcon sx={sx} />;
    case "college":
      return <MenuBookIcon sx={sx} />;
    default:
      return <SchoolIcon sx={sx} />;
  }
};

const Education = () => {
  return (
    <Section id="education" sx={{ py: { xs: 7, sm: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Education"
          title={
            <>
              Academic{" "}
              <Box component="span" sx={{ color: colors.primary }}>
                Journey
              </Box>
            </>
          }
          subtitle="The foundation that shaped my problem-solving mindset and technical knowledge."
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: 760,
            mx: "auto",
          }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2.5, md: 3.5 },
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radii.lg,
                  p: { xs: 2.5, md: 3.5 },
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: colors.borderHover,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 52,
                    height: 52,
                    borderRadius: radii.md,
                    background: colors.primarySofter,
                    border: `1px solid ${colors.borderHover}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {getIcon(edu.icon)}
                </Box>

                {/* Content */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 0.75,
                    }}
                  >
                    <Typography
                      sx={{
                        color: colors.textPrimary,
                        fontWeight: 700,
                        fontSize: { xs: "1.05rem", md: "1.2rem" },
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {edu.title}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Box
                        sx={{
                          px: 1.4,
                          py: 0.4,
                          borderRadius: 999,
                          background: colors.primarySoft,
                          color: colors.primary,
                          fontSize: "0.72rem",
                          fontWeight: 600,
                        }}
                      >
                        {edu.score}
                      </Box>
                      {edu.current && (
                        <Box
                          sx={{
                            px: 1.4,
                            py: 0.4,
                            borderRadius: 999,
                            background: colors.primarySofter,
                            border: `1px solid ${colors.borderHover}`,
                            color: colors.primary,
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          Current
                        </Box>
                      )}
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      color: colors.primary,
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      mb: 0.5,
                    }}
                  >
                    {edu.institute}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.textMuted,
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      mb: 1.5,
                    }}
                  >
                    {edu.duration} · {edu.level}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.textSecondary,
                      fontSize: { xs: "0.88rem", md: "0.93rem" },
                      lineHeight: 1.7,
                      mb: 2,
                    }}
                  >
                    {edu.description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {edu.subjects.map((subject, i) => (
                      <Box
                        key={i}
                        sx={{
                          px: 1.2,
                          py: 0.5,
                          borderRadius: 999,
                          background: colors.backgroundSecondary,
                          border: `1px solid ${colors.border}`,
                          color: colors.textSecondary,
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: colors.primary,
                            borderColor: colors.borderHover,
                          },
                        }}
                      >
                        {subject}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default Education;
