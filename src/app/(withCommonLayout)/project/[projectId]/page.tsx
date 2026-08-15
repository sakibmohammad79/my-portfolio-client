"use client";
import { useGetSingleProjectQuery } from "@/redux/api/projectApi";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { colors, radii } from "@/constant/design";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const Page = ({ params }: any) => {
  const { projectId } = params;
  const { data } = useGetSingleProjectQuery(projectId);
  const router = useRouter();

  const projectLinks = [
    {
      label: "Live Demo",
      url: data?.url,
      icon: LaunchIcon,
      color: colors.primary,
      background: colors.primary,
    },
    {
      label: "Client Repo",
      url: data?.repoClientUrl,
      icon: GitHubIcon,
      color: colors.primaryDark,
      background: "transparent",
    },
    {
      label: "Server Repo",
      url: data?.repoServerUrl,
      icon: CodeIcon,
      color: colors.textSecondary,
      background: "transparent",
    },
  ];

  const infoSections = [
    {
      icon: DescriptionIcon,
      label: "Description",
      content: data?.description,
      color: colors.primary,
    },
    {
      icon: InfoIcon,
      label: "Details",
      content: data?.details,
      color: colors.primaryDark,
    },
    {
      icon: BuildIcon,
      label: "Technology Stack",
      content: data?.technology,
      color: colors.textSecondary,
    },
  ];

  const backButtonSx = {
    background: colors.card,
    backdropFilter: "blur(20px)",
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    color: colors.textSecondary,
    px: { xs: 2, sm: 3 },
    py: { xs: 1, sm: 1.5 },
    fontWeight: 600,
    textTransform: "none",
    fontSize: { xs: "0.85rem", sm: "0.95rem" },
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: colors.borderHover,
      color: colors.primary,
      transform: "translateX(-4px)",
    },
  } as const;

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0 !important;
          padding: 0 !important;
          background: ${colors.background} !important;
        }
        #__next {
          margin: 0 !important;
          padding: 0 !important;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

      <Box
        sx={{
          background: colors.background,
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          margin: 0,
          padding: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(circle at 25% 25%, ${colors.primarySofter} 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, oklch(28% 0.05 290 / 0.16) 0%, transparent 50%)
            `,
            pointerEvents: "none",
          },
        }}
      >
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            py: { xs: 8, sm: 8, md: 12 },
            px: { xs: 2, sm: 3, md: 4 },
            margin: 0,
            maxWidth: "none !important",
            width: "100%",
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: 800, md: 900 },
              width: "100%",
              mx: "auto",
              px: { xs: 0, sm: 2 },
            }}
          >
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Box mb={{ xs: 3, sm: 4 }}>
                <Button onClick={() => router.back()} startIcon={<ArrowBackIcon />} sx={backButtonSx}>
                  Back to Projects
                </Button>
              </Box>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={slideInLeft}>
                <Card
                  sx={{
                    background: colors.card,
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${colors.border}`,
                    borderRadius: { xs: radii.lg, md: radii.xl },
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    overflow: "hidden",
                    position: "relative",
                    margin: 0,
                  }}
                >
                  <motion.div variants={slideInLeft}>
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: 200, sm: 300, md: 400, lg: 500 },
                        position: "relative",
                        overflow: "hidden",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: { xs: "60px", sm: "80px", md: "100px" },
                          background: `linear-gradient(180deg, transparent 0%, ${colors.card} 100%)`,
                          pointerEvents: "none",
                        },
                      }}
                    >
                      <Image
                        src={data?.image || "/placeholder-project.jpg"}
                        alt={data?.title || "Project Image"}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </motion.div>

                  <CardContent
                    sx={{
                      p: { xs: 3, sm: 4, md: 5, lg: 6 },
                      position: "relative",
                      zIndex: 2,
                      margin: 0,
                    }}
                  >
                    <motion.div variants={slideInRight}>
                      <Typography
                        component="h1"
                        sx={{
                          fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.5rem", lg: "2.8rem" },
                          fontWeight: 800,
                          color: colors.textPrimary,
                          mb: { xs: 3, sm: 4 },
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                          margin: "0 0 24px 0",
                          "& span": { color: colors.primary },
                        }}
                      >
                        {data?.title}
                      </Typography>
                    </motion.div>

                    {infoSections.map(
                      (section, index) =>
                        section.content && (
                          <motion.div key={index} variants={fadeInUp}>
                            <Box
                              sx={{
                                background: colors.backgroundSecondary,
                                border: `1px solid ${colors.border}`,
                                borderRadius: radii.lg,
                                p: { xs: 3, sm: 3.5, md: 4 },
                                mb: { xs: 2.5, sm: 3 },
                                position: "relative",
                                overflow: "hidden",
                                "&::before": {
                                  content: '""',
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "4px",
                                  height: "100%",
                                  background: section.color,
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  mb: { xs: 1.5, sm: 2 },
                                  flexWrap: "wrap",
                                  gap: 1,
                                }}
                              >
                                <Box
                                  sx={{
                                    background: colors.primarySofter,
                                    borderRadius: radii.sm,
                                    p: { xs: 0.75, sm: 1 },
                                    mr: { xs: 1, sm: 2 },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                  }}
                                >
                                  <section.icon
                                    sx={{ color: section.color, fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                                  />
                                </Box>
                                <Typography
                                  sx={{
                                    color: section.color,
                                    fontWeight: 700,
                                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                                    letterSpacing: "0.02em",
                                    flex: 1,
                                  }}
                                >
                                  {section.label}
                                </Typography>
                              </Box>
                              <Typography
                                sx={{
                                  color: colors.textSecondary,
                                  fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                  lineHeight: 1.7,
                                  pl: { xs: 4, sm: 5, md: 6 },
                                  whiteSpace: "pre-wrap",
                                }}
                              >
                                {section.content}
                              </Typography>
                            </Box>
                          </motion.div>
                        )
                    )}

                    {(data?.startDate || data?.endDate) && (
                      <motion.div variants={fadeInUp}>
                        <Box
                          sx={{
                            background: colors.backgroundSecondary,
                            border: `1px solid ${colors.border}`,
                            borderRadius: radii.lg,
                            p: { xs: 3, sm: 3.5, md: 4 },
                            mb: { xs: 3, sm: 4 },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: { xs: 2, sm: 3 },
                              flexWrap: "wrap",
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                background: colors.primarySofter,
                                borderRadius: radii.sm,
                                p: { xs: 0.75, sm: 1 },
                                mr: { xs: 1, sm: 2 },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <CalendarTodayIcon
                                sx={{ color: colors.primary, fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                              />
                            </Box>
                            <Typography
                              sx={{
                                color: colors.primary,
                                fontWeight: 700,
                                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                                flex: 1,
                              }}
                            >
                              Project Timeline
                            </Typography>
                          </Box>

                          <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={{ xs: 2, sm: 3, md: 4 }}
                            sx={{ pl: { xs: 4, sm: 5, md: 6 } }}
                          >
                            {data?.startDate && (
                              <Box sx={{ flex: 1 }}>
                                <Typography
                                  sx={{
                                    color: colors.textMuted,
                                    fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                                    fontWeight: 600,
                                    mb: { xs: 0.5, sm: 1 },
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                  }}
                                >
                                  Start Date
                                </Typography>
                                <Typography
                                  sx={{
                                    color: colors.textSecondary,
                                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                                    fontWeight: 600,
                                    wordBreak: "break-word",
                                  }}
                                >
                                  {data.startDate}
                                </Typography>
                              </Box>
                            )}

                            {data?.endDate && (
                              <Box sx={{ flex: 1 }}>
                                <Typography
                                  sx={{
                                    color: colors.textMuted,
                                    fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                                    fontWeight: 600,
                                    mb: { xs: 0.5, sm: 1 },
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                  }}
                                >
                                  End Date
                                </Typography>
                                <Typography
                                  sx={{
                                    color: colors.textSecondary,
                                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                                    fontWeight: 600,
                                    wordBreak: "break-word",
                                  }}
                                >
                                  {data.endDate}
                                </Typography>
                              </Box>
                            )}
                          </Stack>
                        </Box>
                      </motion.div>
                    )}

                    <motion.div variants={fadeInUp}>
                      <Divider
                        sx={{
                          my: { xs: 3, sm: 4 },
                          background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
                        }}
                      />

                      <Typography
                        sx={{
                          color: colors.textMuted,
                          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                          fontWeight: 600,
                          mb: { xs: 2.5, sm: 3 },
                          textAlign: "center",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        Project Links
                      </Typography>

                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 2, sm: 2.5, md: 3 }}
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          "& > *": {
                            width: { xs: "100%", sm: "auto" },
                            minWidth: { sm: "160px", md: "180px" },
                          },
                        }}
                      >
                        {projectLinks.map(
                          (link, index) =>
                            link.url && (
                              <motion.div
                                key={index}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                style={{ width: "100%" }}
                              >
                                <Button
                                  component="a"
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  startIcon={<link.icon />}
                                  sx={{
                                    background: link.background,
                                    color: link.background === colors.primary ? colors.background : link.color,
                                    border: link.background === colors.primary ? "none" : `1px solid ${colors.border}`,
                                    borderRadius: radii.md,
                                    px: { xs: 3, sm: 3.5, md: 4 },
                                    py: { xs: 1.5, sm: 1.75, md: 2 },
                                    fontWeight: 600,
                                    textTransform: "none",
                                    fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                                    width: "100%",
                                    transition: "all 0.25s ease",
                                    "&:hover": {
                                      background:
                                        link.background === colors.primary
                                          ? colors.primaryLight
                                          : colors.primarySoft,
                                      borderColor: colors.borderHover,
                                      color:
                                        link.background === colors.primary
                                          ? colors.background
                                          : colors.primary,
                                    },
                                    "& .MuiButton-startIcon": {
                                      marginRight: { xs: 1, sm: 1.5 },
                                    },
                                  }}
                                >
                                  {link.label}
                                </Button>
                              </motion.div>
                            )
                        )}
                      </Stack>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Page;