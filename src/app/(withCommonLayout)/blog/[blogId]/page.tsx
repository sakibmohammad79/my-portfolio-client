"use client";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import { Box, Card, CardContent, Container, Typography, Chip, Button, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import ShareIcon from "@mui/icons-material/Share";
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
  const { blogId } = params;
  const { data } = useGetSingleBlogQuery(blogId);
  const router = useRouter();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: data?.title,
        text: data?.description || "Check out this amazing blog post!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Recent";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateReadTime = (content: string) => {
    if (!content) return "5 min read";
    const wordsPerMinute = 200;
    const textLength = content.replace(/<[^>]*>/g, "").split(" ").length;
    const readTime = Math.ceil(textLength / wordsPerMinute);
    return `${readTime} min read`;
  };

  const ghostButtonSx = {
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
            py: { xs: 10, md: 16 },
            px: { xs: 2, sm: 3, md: 4 },
            margin: 0,
            maxWidth: "none !important",
            width: "100%",
          }}
        >
          <Box
            sx={{
              maxWidth: 800,
              width: "100%",
              mx: "auto",
              px: { xs: 1, sm: 2 },
            }}
          >
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Box
                mb={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={2}
                flexWrap="wrap"
              >
                <Button onClick={() => router.back()} startIcon={<ArrowBackIcon />} sx={ghostButtonSx}>
                  Back to Blog
                </Button>
                <Button onClick={handleShare} startIcon={<ShareIcon />} sx={ghostButtonSx}>
                  Share
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
                    borderRadius: radii.xl,
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
                        height: { xs: 250, sm: 300, md: 400 },
                        position: "relative",
                        overflow: "hidden",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "120px",
                          background: `linear-gradient(180deg, transparent 0%, ${colors.card} 100%)`,
                          pointerEvents: "none",
                        },
                      }}
                    >
                      <Image
                        src={data?.image || "/placeholder-blog.jpg"}
                        alt={data?.title || "Blog Image"}
                        fill
                        style={{ objectFit: "cover" }}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          top: { xs: 16, sm: 24 },
                          left: { xs: 16, sm: 24 },
                          zIndex: 2,
                        }}
                      >
                        <Chip
                          icon={<ArticleIcon sx={{ fontSize: "16px !important" }} />}
                          label={data?.name || "Article"}
                          size="medium"
                          sx={{
                            background: "oklch(10% 0.015 260 / 0.85)",
                            backdropFilter: "blur(10px)",
                            color: colors.primary,
                            border: `1px solid ${colors.borderHover}`,
                            fontWeight: 600,
                            fontSize: { xs: "0.75rem", sm: "0.85rem" },
                            px: 1,
                            "& .MuiChip-icon": { color: colors.primary },
                          }}
                        />
                      </Box>
                    </Box>
                  </motion.div>

                  <CardContent
                    sx={{
                      p: { xs: 3, sm: 4, md: 6 },
                      position: "relative",
                      zIndex: 2,
                      margin: 0,
                    }}
                  >
                    <motion.div variants={slideInRight}>
                      <Typography
                        component="h1"
                        sx={{
                          fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.8rem" },
                          fontWeight: 800,
                          color: colors.textPrimary,
                          mb: { xs: 2, sm: 3 },
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                          margin: "0 0 16px 0",
                        }}
                      >
                        {data?.title}
                      </Typography>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: { xs: 2, sm: 3 },
                          mb: { xs: 3, sm: 4 },
                          pb: { xs: 2, sm: 3 },
                          borderBottom: `1px solid ${colors.border}`,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <PersonIcon sx={{ color: colors.primary, fontSize: "1.2rem" }} />
                          <Typography
                            sx={{
                              color: colors.textSecondary,
                              fontSize: { xs: "0.8rem", sm: "0.9rem" },
                              fontWeight: 500,
                            }}
                          >
                            Md. Sakib
                          </Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <CalendarTodayIcon sx={{ color: colors.primary, fontSize: "1.2rem" }} />
                          <Typography
                            sx={{
                              color: colors.textSecondary,
                              fontSize: { xs: "0.8rem", sm: "0.9rem" },
                              fontWeight: 500,
                            }}
                          >
                            {formatDate(data?.publishedAt || data?.createdAt)}
                          </Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Typography
                            sx={{
                              color: colors.textMuted,
                              fontSize: { xs: "0.8rem", sm: "0.9rem" },
                              fontWeight: 500,
                            }}
                          >
                            {calculateReadTime(data?.content || "")}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <Box
                        sx={{
                          color: colors.textSecondary,
                          fontSize: { xs: "1rem", sm: "1.1rem" },
                          lineHeight: 1.8,
                          "& > *": {
                            margin: "0 0 1.5rem 0 !important",
                          },
                          "& h1, & h2, & h3, & h4, & h5, & h6": {
                            color: colors.textPrimary,
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 700,
                            margin: "2rem 0 1rem 0 !important",
                          },
                          "& h1": { fontSize: { xs: "1.8rem", sm: "2.2rem" } },
                          "& h2": { fontSize: { xs: "1.5rem", sm: "1.9rem" } },
                          "& h3": { fontSize: { xs: "1.3rem", sm: "1.6rem" } },
                          "& h4": { fontSize: { xs: "1.2rem", sm: "1.4rem" } },
                          "& p": {
                            margin: "0 0 1.5rem 0 !important",
                            color: colors.textSecondary,
                          },
                          "& a": {
                            color: colors.primary,
                            textDecoration: "none",
                            borderBottom: `1px solid ${colors.borderHover}`,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: colors.primaryLight,
                              borderBottomColor: colors.primaryLight,
                            },
                          },
                          "& ul, & ol": {
                            paddingLeft: { xs: "1.5rem", sm: "2rem" },
                            margin: "0 0 1.5rem 0 !important",
                          },
                          "& li": {
                            marginBottom: "0.5rem",
                            color: colors.textSecondary,
                          },
                          "& blockquote": {
                            background: colors.primarySofter,
                            border: `1px solid ${colors.borderHover}`,
                            borderLeft: `4px solid ${colors.primary}`,
                            borderRadius: radii.sm,
                            padding: { xs: "1.5rem", sm: "2rem" },
                            margin: "1.5rem 0 !important",
                            fontStyle: "italic",
                            color: colors.textSecondary,
                          },
                          "& code": {
                            background: colors.background,
                            border: `1px solid ${colors.border}`,
                            borderRadius: "6px",
                            padding: "0.25rem 0.75rem",
                            fontSize: "0.9em",
                            color: colors.primary,
                            fontFamily: '"Fira Code", monospace',
                          },
                          "& pre": {
                            background: colors.background,
                            border: `1px solid ${colors.border}`,
                            borderRadius: radii.md,
                            padding: { xs: "1.5rem", sm: "2rem" },
                            margin: "1.5rem 0 !important",
                            overflow: "auto",
                            "& code": {
                              background: "none",
                              border: "none",
                              padding: 0,
                              color: colors.textSecondary,
                            },
                          },
                          "& img": {
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: radii.md,
                            margin: "1.5rem 0 !important",
                            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                            display: "block",
                          },
                        }}
                      >
                        {data?.content ? (
                          <Box dangerouslySetInnerHTML={{ __html: data.content }} />
                        ) : (
                          <Typography
                            sx={{
                              color: colors.textMuted,
                              fontSize: { xs: "1rem", sm: "1.1rem" },
                              fontStyle: "italic",
                              textAlign: "center",
                              py: { xs: 4, sm: 6 },
                            }}
                          >
                            Blog content is loading...
                          </Typography>
                        )}
                      </Box>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <Divider
                        sx={{
                          my: { xs: 4, sm: 6 },
                          background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
                        }}
                      />

                      <Box sx={{ textAlign: "center", margin: 0 }}>
                        <Typography
                          sx={{
                            color: colors.textMuted,
                            fontSize: { xs: "0.85rem", sm: "0.95rem" },
                            mb: { xs: 2, sm: 3 },
                          }}
                        >
                          Thank you for reading! Share this article if you found it helpful.
                        </Typography>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={handleShare}
                            startIcon={<ShareIcon />}
                            sx={{
                              background: colors.primary,
                              color: colors.background,
                              borderRadius: radii.md,
                              px: { xs: 3, sm: 4 },
                              py: { xs: 1.5, sm: 2 },
                              fontWeight: 700,
                              textTransform: "none",
                              fontSize: { xs: "0.9rem", sm: "1rem" },
                              transition: "all 0.25s ease",
                              margin: 0,
                              "&:hover": {
                                background: colors.primaryLight,
                                boxShadow: `0 12px 35px ${colors.primaryGlow}`,
                                transform: "translateY(-2px)",
                              },
                            }}
                          >
                            Share Article
                          </Button>
                        </motion.div>
                      </Box>
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