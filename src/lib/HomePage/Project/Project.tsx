"use client";
import { useGetAllProjectQuery } from "@/redux/api/projectApi";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { colors, radii } from "@/constant/design";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = () => {
  const { data } = useGetAllProjectQuery({});

  const classifyStack = (technology?: string, technologies?: string[]) => {
    const items = technology
      ? technology.split(/[·,]/).map((t) => t.trim()).filter(Boolean)
      : technologies || [];
    if (items.length === 0) return null;

    const groups: { label: string; color: string; items: string[] }[] = [
      { label: "Frontend", color: colors.primary, items: [] },
      { label: "Backend", color: colors.primaryDark, items: [] },
      { label: "Database", color: colors.textSecondary, items: [] },
      { label: "Tools", color: colors.textMuted, items: [] },
    ];

    items.forEach((tech) => {
      const lower = tech.toLowerCase();
      if (/mongo|postgre|mysql|sqlite|redis|supabase|firebase|dynamo|prisma|mongoose/.test(lower)) {
        groups[2].items.push(tech);
      } else if (/node|express|nest|jwt|json web token|auth|rest|api|socket|zod/.test(lower)) {
        groups[1].items.push(tech);
      } else if (/html|css|javascript|typescript|react|next|redux|tailwind|material|mui|bootstrap|daisyui|framer/.test(lower)) {
        groups[0].items.push(tech);
      } else {
        groups[3].items.push(tech);
      }
    });

    return groups.filter((g) => g.items.length > 0);
  };

  return (
    <Section id="project" sx={{ py: { xs: 7, sm: 9, md: 12 } }}>
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              Featured <Box component="span" sx={{ color: colors.primary }}>Projects</Box>
            </>
          }
          subtitle="A selection of full-stack applications I've designed and built — from idea to production."
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 10, md: 14 } }}>
          {data?.map((project: any, index: number) => {
            const reverse = index % 2 === 1;
            const gitUrl = project.repoClientUrl || project.repoServerUrl;
            const stackGroups = classifyStack(project?.technology, project?.technologies);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", lg: "1.1fr 1fr" },
                    gap: { xs: 3, md: 5 },
                    alignItems: "center",
                    background: colors.card,
                    border: `1px solid ${colors.border}`,
                    borderRadius: radii.xl,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: colors.borderHover,
                      boxShadow: `0 30px 60px ${colors.primaryGlow}`,
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      order: { xs: 1, lg: reverse ? 2 : 1 },
                      position: "relative",
                      height: { xs: 240, sm: 300, md: 360, lg: 400 },
                      overflow: "hidden",
                    }}
                  >
                    <Link href={`/project/${project.id}`} aria-label={project?.title}>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 250, damping: 26 }}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Image
                          src={project?.image}
                          alt={`${project?.title} preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          style={{ objectFit: "cover", display: "block" }}
                        />
                      </motion.div>
                    </Link>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        zIndex: 2,
                        fontFamily: "'SF Mono', Consolas, monospace",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        color: colors.primary,
                        background: "oklch(10% 0.015 260 / 0.85)",
                        border: `1px solid ${colors.borderHover}`,
                        borderRadius: 999,
                        px: 1.6,
                        py: 0.6,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      order: { xs: 2, lg: reverse ? 1 : 2 },
                      p: { xs: 3, sm: 4, md: 5 },
                    }}
                  >
                    <Typography
                      sx={{
                        color: colors.textMuted,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        mb: 1.5,
                      }}
                    >
                      Project {String(index + 1).padStart(2, "0")}
                    </Typography>

                    <Link href={`/project/${project.id}`} style={{ textDecoration: "none" }}>
                      <Typography
                        component="h3"
                        sx={{
                          color: colors.textPrimary,
                          fontWeight: 800,
                          fontSize: { xs: "1.5rem", md: "1.8rem", lg: "2.1rem" },
                          letterSpacing: "-0.02em",
                          mb: 2.5,
                          transition: "color 0.25s ease",
                          "&:hover": { color: colors.primary },
                        }}
                      >
                        {project?.title}
                      </Typography>
                    </Link>

                    <Typography
                      sx={{
                        color: colors.textMuted,
                        fontSize: { xs: "0.92rem", md: "0.98rem" },
                        lineHeight: 1.75,
                        mb: 3.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project?.description}
                    </Typography>

                    {stackGroups && (
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mb: 4 }}>
                        {stackGroups.map((group) => (
                          <Box key={group.label}>
                            <Typography
                              sx={{
                                color: group.color,
                                fontSize: "0.68rem",
                                fontWeight: 700,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                mb: 1,
                              }}
                            >
                              {group.label}
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                              {group.items.map((tech, i) => (
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
                        ))}
                      </Box>
                    )}

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                      {project?.url && (
                        <Button
                          component="a"
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<LaunchIcon />}
                          sx={{
                            background: colors.primary,
                            color: colors.background,
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            px: 2.5,
                            py: 1.2,
                            borderRadius: radii.md,
                            transition: "all 0.25s ease",
                            "&:hover": {
                              background: colors.primaryLight,
                              transform: "translateY(-2px)",
                              boxShadow: `0 10px 25px ${colors.primaryGlow}`,
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      )}
                      {gitUrl && (
                        <Button
                          component="a"
                          href={gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<GitHubIcon />}
                          sx={{
                            background: "transparent",
                            color: colors.textPrimary,
                            border: `1px solid ${colors.border}`,
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            px: 2.5,
                            py: 1.2,
                            borderRadius: radii.md,
                            transition: "all 0.25s ease",
                            "&:hover": {
                              borderColor: colors.borderHover,
                              background: colors.primarySoft,
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          Source
                        </Button>
                      )}
                      <Button
                        component={Link}
                        href={`/project/${project.id}`}
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          color: colors.primary,
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          px: 2,
                          py: 1.2,
                          borderRadius: radii.md,
                          "&:hover": { background: colors.primarySoft },
                        }}
                      >
                        Details
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Section>
  );
};

export default Project;