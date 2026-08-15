"use client";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { colors, radii } from "@/constant/design";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArticleIcon from "@mui/icons-material/Article";

const Blog = () => {
  const { data } = useGetAllBlogQuery({});

  return (
    <Section id="blog" sx={{ py: { xs: 7, sm: 9, md: 12 } }}>
      <Container>
        <SectionHeader
          eyebrow="Blog"
          title={
            <>
              My <Box component="span" sx={{ color: colors.primary }}>Writings</Box>
            </>
          }
          subtitle="Insights, tutorials, and thoughts on modern web development."
        />

        {!data || data.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                textAlign: "center",
                py: 10,
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: radii.xl,
              }}
            >
              <ArticleIcon sx={{ fontSize: "3rem", color: colors.primary, mb: 2 }} />
              <Typography sx={{ color: colors.textPrimary, fontWeight: 700, fontSize: "1.4rem", mb: 1 }}>
                Coming Soon
              </Typography>
              <Typography sx={{ color: colors.textMuted, fontSize: "0.95rem" }}>
                I&apos;m working on some amazing blog posts. Stay tuned!
              </Typography>
            </Box>
          </motion.div>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {data?.map((blog: any, index: number) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/blog/${blog.id}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <Box
                    sx={{
                      height: "100%",
                      background: colors.card,
                      border: `1px solid ${colors.border}`,
                      borderRadius: radii.lg,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: colors.borderHover,
                        boxShadow: `0 20px 45px ${colors.primaryGlow}`,
                      },
                    }}
                  >
                    {/* Image */}
                    <Box sx={{ position: "relative", height: 200, overflow: "hidden" }}>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 250, damping: 26 }}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Image
                          src={blog?.image}
                          alt={blog?.title || "Blog post"}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{ objectFit: "cover", display: "block" }}
                        />
                      </motion.div>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          zIndex: 2,
                          px: 1.4,
                          py: 0.5,
                          borderRadius: 999,
                          background: "oklch(10% 0.015 260 / 0.85)",
                          border: `1px solid ${colors.borderHover}`,
                          color: colors.primary,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {blog?.name || "Technology"}
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                      <Typography
                        component="h3"
                        sx={{
                          color: colors.textPrimary,
                          fontWeight: 700,
                          fontSize: { xs: "1.05rem", md: "1.15rem" },
                          lineHeight: 1.4,
                          mb: 2,
                          flexGrow: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          transition: "color 0.25s ease",
                          ".MuiBox-root:hover &": { color: colors.primary },
                        }}
                      >
                        {blog?.title}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mt: "auto",
                          pt: 1.5,
                        }}
                      >
                        <Typography sx={{ color: colors.textMuted, fontSize: "0.78rem" }}>
                          {blog?.publishedAt
                            ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : "Recent"}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            color: colors.primary,
                            fontWeight: 600,
                            fontSize: "0.82rem",
                            transition: "all 0.25s ease",
                            "&:hover": { gap: 1 },
                          }}
                        >
                          Read More <ArrowForwardIcon sx={{ fontSize: "0.95rem" }} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </motion.div>
            ))}
          </Box>
        )}
      </Container>
    </Section>
  );
};

export default Blog;