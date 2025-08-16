"use client";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Chip,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ArticleIcon from "@mui/icons-material/Article";
import LaunchIcon from "@mui/icons-material/Launch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Blog = () => {
  const { data } = useGetAllBlogQuery({});

  return (
    <Box
      id="blog"
      sx={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: 12,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(244, 114, 182, 0.04) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(45deg, rgba(148, 163, 184, 0.01) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(148, 163, 184, 0.01) 25%, transparent 25%)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3,
          pointerEvents: 'none',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              sx={{
                color: 'rgba(99, 102, 241, 0.9)',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.1em',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                position: 'relative',
                display: 'inline-block',
                pb: 2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                  borderRadius: '1px',
                }
              }}
            >
              Visit My Blog & Keep Your Feedback
            </Typography>
            
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                mt: 3,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)',
                  borderRadius: '2px',
                  opacity: 0.7,
                }
              }}
            >
              My Blog
            </Typography>
          </Box>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {data?.map((blog: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <motion.div variants={cardVariants}>
                  <Link
                    href={`/blog/${blog.id}`}
                    style={{ textDecoration: "none", display: "block", height: "100%" }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        rotateY: 3,
                        z: 50
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }}
                      style={{ height: "100%" }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          background: 'rgba(15, 23, 42, 0.6)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(148, 163, 184, 0.2)',
                          borderRadius: '24px',
                          overflow: 'hidden',
                          position: 'relative',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                          display: 'flex',
                          flexDirection: 'column',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.02) 100%)',
                            pointerEvents: 'none',
                            zIndex: 1,
                          },
                          '&:hover': {
                            borderColor: 'rgba(99, 102, 241, 0.4)',
                            boxShadow: '0 30px 60px rgba(99, 102, 241, 0.2)',
                            transform: 'translateY(-10px)',
                          },
                        }}
                      >
                        {/* Blog Image */}
                        <Box
                          sx={{
                            width: "100%",
                            height: 280,
                            position: "relative",
                            overflow: 'hidden',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.1) 100%)',
                              pointerEvents: 'none',
                              zIndex: 2,
                            }
                          }}
                        >
                          <Image
                            src={blog?.image}
                            alt={`${blog?.title} blog post`}
                            fill
                            style={{ 
                              objectFit: "cover",
                              filter: 'brightness(1.1) contrast(1.05)',
                              transition: 'all 0.3s ease',
                            }}
                          />
                          
                          {/* Hover Overlay */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'rgba(15, 23, 42, 0.8)',
                              opacity: 0,
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              zIndex: 3,
                              '.MuiCard-root:hover &': {
                                opacity: 1,
                              }
                            }}
                          >
                            <Box
                              sx={{
                                background: 'rgba(99, 102, 241, 0.9)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '50%',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
                              }}
                            >
                              <LaunchIcon sx={{ color: 'white', fontSize: '24px' }} />
                            </Box>
                          </Box>

                          {/* Blog Type Badge */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 16,
                              left: 16,
                              zIndex: 4,
                            }}
                          >
                            <Chip
                              icon={<ArticleIcon sx={{ fontSize: '16px !important' }} />}
                              label="Article"
                              size="small"
                              sx={{
                                background: 'rgba(15, 23, 42, 0.9)',
                                backdropFilter: 'blur(10px)',
                                color: '#60a5fa',
                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                '& .MuiChip-icon': {
                                  color: '#60a5fa',
                                }
                              }}
                            />
                          </Box>

                          {/* Reading Time Badge */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 16,
                              right: 16,
                              zIndex: 4,
                            }}
                          >
                            <Chip
                              icon={<AccessTimeIcon sx={{ fontSize: '14px !important' }} />}
                              label="5 min read"
                              size="small"
                              sx={{
                                background: 'rgba(15, 23, 42, 0.9)',
                                backdropFilter: 'blur(10px)',
                                color: '#a78bfa',
                                border: '1px solid rgba(167, 139, 250, 0.3)',
                                fontWeight: 500,
                                fontSize: '0.7rem',
                                '& .MuiChip-icon': {
                                  color: '#a78bfa',
                                }
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Card Content */}
                        <CardContent sx={{ p: 4, position: 'relative', zIndex: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                          {/* Blog Category */}
                          <Typography
                            sx={{
                              color: 'rgba(99, 102, 241, 0.8)',
                              fontSize: '0.85rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              mb: 2,
                              fontFamily: '"Inter", sans-serif',
                            }}
                          >
                            {blog?.name || 'Technology'}
                          </Typography>
                          
                          {/* Blog Title */}
                          <Typography
                            component="h2"
                            sx={{
                              fontSize: { xs: '1.3rem', lg: '1.5rem' },
                              fontWeight: 700,
                              color: 'rgba(248, 250, 252, 0.95)',
                              fontFamily: '"Inter", sans-serif',
                              lineHeight: 1.3,
                              mb: 2,
                              flexGrow: 1,
                              transition: 'all 0.3s ease',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              '&:hover': { 
                                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                              },
                            }}
                          >
                            {blog?.title}
                          </Typography>

                          {/* Blog Description */}
                          {blog?.description && (
                            <Typography
                              sx={{
                                color: 'rgba(203, 213, 225, 0.8)',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                fontFamily: '"Inter", sans-serif',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                mb: 3,
                              }}
                            >
                              {blog.description}
                            </Typography>
                          )}

                          {/* Blog Meta Info */}
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                            <Typography
                              sx={{
                                color: 'rgba(148, 163, 184, 0.7)',
                                fontSize: '0.8rem',
                                fontFamily: '"Inter", sans-serif',
                              }}
                            >
                              {blog?.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' 
                              }) : 'Recent'}
                            </Typography>

                            <Box
                              sx={{
                                background: 'rgba(99, 102, 241, 0.1)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                borderRadius: '8px',
                                px: 2,
                                py: 0.5,
                                fontSize: '0.75rem',
                                color: '#60a5fa',
                                fontWeight: 600,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  background: 'rgba(99, 102, 241, 0.2)',
                                  transform: 'scale(1.05)',
                                }
                              }}
                            >
                              Read More →
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Empty State */}
        {(!data || data.length === 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
                background: 'rgba(15, 23, 42, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              }}
            >
              <ArticleIcon 
                sx={{ 
                  fontSize: '4rem', 
                  color: 'rgba(99, 102, 241, 0.6)',
                  mb: 2 
                }} 
              />
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'rgba(248, 250, 252, 0.9)',
                  mb: 1,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Coming Soon
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(203, 213, 225, 0.7)',
                  fontSize: '1rem',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                I&apos;m working on some amazing blog posts. Stay tuned!
              </Typography>
            </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default Blog;