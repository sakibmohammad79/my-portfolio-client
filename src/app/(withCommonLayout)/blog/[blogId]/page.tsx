"use client";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import ShareIcon from "@mui/icons-material/Share";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const Page = ({ params }: any) => {
  const { blogId } = params;
  const { data } = useGetSingleBlogQuery(blogId);
  const router = useRouter();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: data?.title,
        text: data?.description || 'Check out this amazing blog post!',
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recent';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (content: string) => {
    if (!content) return '5 min read';
    const wordsPerMinute = 200;
    const textLength = content.replace(/<[^>]*>/g, '').split(' ').length;
    const readTime = Math.ceil(textLength / wordsPerMinute);
    return `${readTime} min read`;
  };

  return (
    <>
      {/* Global styles to remove body margins */}
      <style jsx global>{`
        body {
          margin: 0 !important;
          padding: 0 !important;
          background: #0f172a !important;
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
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          margin: 0,
          padding: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 50% 0%, rgba(244, 114, 182, 0.03) 0%, transparent 50%)
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
              linear-gradient(45deg, rgba(148, 163, 184, 0.005) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(148, 163, 184, 0.005) 25%, transparent 25%)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.4,
            pointerEvents: 'none',
          }
        }}
      >
        <Container 
          sx={{ 
            position: 'relative', 
            zIndex: 1, 
            py: { xs: 10, md: 16 }, // Reduced top padding
            px: { xs: 2, sm: 3, md: 4 }, // Responsive horizontal padding
            margin: 0,
            maxWidth: 'none !important', // Override Container's maxWidth
            width: '100%',
          }}
        >
          <Box 
            sx={{ 
              maxWidth: 800, 
              width: "100%", 
              mx: "auto",
              px: { xs: 1, sm: 2 }, // Inner padding for content
            }}
          >
            {/* Back Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Box 
                mb={3} // Reduced margin
                display="flex" 
                justifyContent="space-between" 
                alignItems="center"
                gap={2}
                flexWrap="wrap"
              >
                <Button
                  onClick={() => router.back()}
                  startIcon={<ArrowBackIcon />}
                  sx={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '12px',
                    color: 'rgba(203, 213, 225, 0.9)',
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(99, 102, 241, 0.1)',
                      borderColor: 'rgba(99, 102, 241, 0.3)',
                      transform: 'translateX(-5px)',
                    },
                  }}
                >
                  Back to Blog
                </Button>

                <Button
                  onClick={handleShare}
                  startIcon={<ShareIcon />}
                  sx={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '12px',
                    color: 'rgba(203, 213, 225, 0.9)',
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(99, 102, 241, 0.1)',
                      borderColor: 'rgba(99, 102, 241, 0.3)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Share
                </Button>
              </Box>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Main Blog Card */}
              <motion.div variants={slideInLeft}>
                <Card
                  sx={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    overflow: 'hidden',
                    position: 'relative',
                    margin: 0, // Ensure no default margins
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.02) 100%)',
                      pointerEvents: 'none',
                    },
                  }}
                >
                  {/* Blog Image */}
                  <motion.div variants={slideInLeft}>
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: 250, sm: 300, md: 400 },
                        position: "relative",
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '120px',
                          background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.4) 100%)',
                          pointerEvents: 'none',
                        }
                      }}
                    >
                      <Image
                        src={data?.image || '/placeholder-blog.jpg'}
                        alt={data?.title || 'Blog Image'}
                        fill
                        style={{ 
                          objectFit: "cover",
                          filter: 'brightness(1.05) contrast(1.02)',
                        }}
                      />

                      {/* Blog Category Badge */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: 16, sm: 24 },
                          left: { xs: 16, sm: 24 },
                          zIndex: 2,
                        }}
                      >
                        <Chip
                          icon={<ArticleIcon sx={{ fontSize: '16px !important' }} />}
                          label={data?.name || 'Article'}
                          size="medium"
                          sx={{
                            background: 'rgba(15, 23, 42, 0.9)',
                            backdropFilter: 'blur(10px)',
                            color: '#60a5fa',
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                            fontWeight: 600,
                            fontSize: { xs: '0.75rem', sm: '0.85rem' },
                            px: 1,
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
                          top: { xs: 16, sm: 24 },
                          right: { xs: 16, sm: 24 },
                          zIndex: 2,
                        }}
                      >
                        <Chip
                          icon={<AccessTimeIcon sx={{ fontSize: '14px !important' }} />}
                          label={calculateReadTime(data?.content || '')}
                          size="medium"
                          sx={{
                            background: 'rgba(15, 23, 42, 0.9)',
                            backdropFilter: 'blur(10px)',
                            color: '#a78bfa',
                            border: '1px solid rgba(167, 139, 250, 0.3)',
                            fontWeight: 500,
                            fontSize: { xs: '0.7rem', sm: '0.8rem' },
                            px: 1,
                            '& .MuiChip-icon': {
                              color: '#a78bfa',
                            }
                          }}
                        />
                      </Box>
                    </Box>
                  </motion.div>

                  <CardContent 
                    sx={{ 
                      p: { xs: 3, sm: 4, md: 6 }, // Responsive padding
                      position: 'relative', 
                      zIndex: 2,
                      margin: 0, // Ensure no margins
                    }}
                  >
                    {/* Blog Title */}
                    <motion.div variants={slideInRight}>
                      <Typography
                        component="h1"
                        sx={{
                          fontSize: { xs: '1.75rem', sm: '2.2rem', md: '2.8rem' },
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 800,
                          background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: { xs: 2, sm: 3 },
                          letterSpacing: '-0.02em',
                          lineHeight: 1.2,
                          margin: '0 0 16px 0', // Explicit margin control
                        }}
                      >
                        {data?.title}
                      </Typography>
                    </motion.div>

                    {/* Blog Meta Information */}
                    <motion.div variants={fadeInUp}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: { xs: 2, sm: 3 },
                          mb: { xs: 3, sm: 4 },
                          pb: { xs: 2, sm: 3 },
                          borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
                        }}
                      >
                        {/* Author */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PersonIcon sx={{ color: 'rgba(99, 102, 241, 0.8)', fontSize: '1.2rem' }} />
                          <Typography
                            sx={{
                              color: 'rgba(203, 213, 225, 0.8)',
                              fontFamily: '"Inter", sans-serif',
                              fontSize: { xs: '0.8rem', sm: '0.9rem' },
                              fontWeight: 500,
                            }}
                          >
                            Md. Sakib
                          </Typography>
                        </Box>

                        {/* Published Date */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CalendarTodayIcon sx={{ color: 'rgba(168, 85, 247, 0.8)', fontSize: '1.2rem' }} />
                          <Typography
                            sx={{
                              color: 'rgba(203, 213, 225, 0.8)',
                              fontFamily: '"Inter", sans-serif',
                              fontSize: { xs: '0.8rem', sm: '0.9rem' },
                              fontWeight: 500,
                            }}
                          >
                            {formatDate(data?.publishedAt || data?.createdAt)}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>

                    {/* Blog Content */}
                    <motion.div variants={fadeInUp}>
                      <Box
                        sx={{
                          color: 'rgba(203, 213, 225, 0.9)',
                          fontFamily: '"Inter", sans-serif',
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          lineHeight: 1.8,
                          '& > *': {
                            margin: '0 0 1.5rem 0 !important', // Force consistent margins
                          },
                          '& h1, & h2, & h3, & h4, & h5, & h6': {
                            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 700,
                            margin: '2rem 0 1rem 0 !important',
                          },
                          '& h1': { fontSize: { xs: '1.8rem', sm: '2.2rem' } },
                          '& h2': { fontSize: { xs: '1.5rem', sm: '1.9rem' } },
                          '& h3': { fontSize: { xs: '1.3rem', sm: '1.6rem' } },
                          '& h4': { fontSize: { xs: '1.2rem', sm: '1.4rem' } },
                          '& p': {
                            margin: '0 0 1.5rem 0 !important',
                            color: 'rgba(203, 213, 225, 0.9)',
                          },
                          '& a': {
                            color: '#60a5fa',
                            textDecoration: 'none',
                            borderBottom: '1px solid rgba(96, 165, 250, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: '#a78bfa',
                              borderBottomColor: '#a78bfa',
                            }
                          },
                          '& ul, & ol': {
                            paddingLeft: { xs: '1.5rem', sm: '2rem' },
                            margin: '0 0 1.5rem 0 !important',
                          },
                          '& li': {
                            marginBottom: '0.5rem',
                            color: 'rgba(203, 213, 225, 0.9)',
                          },
                          '& blockquote': {
                            background: 'rgba(99, 102, 241, 0.1)',
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                            borderLeft: '4px solid #60a5fa',
                            borderRadius: '8px',
                            padding: { xs: '1.5rem', sm: '2rem' },
                            margin: '1.5rem 0 !important',
                            fontStyle: 'italic',
                            color: 'rgba(203, 213, 225, 0.8)',
                          },
                          '& code': {
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(148, 163, 184, 0.2)',
                            borderRadius: '6px',
                            padding: '0.25rem 0.75rem',
                            fontSize: '0.9em',
                            color: '#f472b6',
                            fontFamily: '"Fira Code", monospace',
                          },
                          '& pre': {
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(148, 163, 184, 0.2)',
                            borderRadius: '12px',
                            padding: { xs: '1.5rem', sm: '2rem' },
                            margin: '1.5rem 0 !important',
                            overflow: 'auto',
                            '& code': {
                              background: 'none',
                              border: 'none',
                              padding: 0,
                              color: 'rgba(203, 213, 225, 0.9)',
                            }
                          },
                          '& img': {
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '12px',
                            margin: '1.5rem 0 !important',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                            display: 'block',
                          }
                        }}
                      >
                        {data?.content ? (
                          <Box dangerouslySetInnerHTML={{ __html: data.content }} />
                        ) : (
                          <Typography
                            sx={{
                              color: 'rgba(148, 163, 184, 0.7)',
                              fontSize: { xs: '1rem', sm: '1.1rem' },
                              fontStyle: 'italic',
                              textAlign: 'center',
                              py: { xs: 4, sm: 6 },
                            }}
                          >
                            Blog content is loading...
                          </Typography>
                        )}
                      </Box>
                    </motion.div>

                    {/* Bottom Actions */}
                    <motion.div variants={fadeInUp}>
                      <Divider sx={{ 
                        my: { xs: 4, sm: 6 }, 
                        background: 'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent)' 
                      }} />
                      
                      <Box sx={{ textAlign: 'center', margin: 0 }}>
                        <Typography
                          sx={{
                            color: 'rgba(148, 163, 184, 0.7)',
                            fontSize: { xs: '0.85rem', sm: '0.95rem' },
                            fontFamily: '"Inter", sans-serif',
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
                              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                              borderRadius: '12px',
                              px: { xs: 3, sm: 4 },
                              py: { xs: 1.5, sm: 2 },
                              color: 'white',
                              fontFamily: '"Inter", sans-serif',
                              fontWeight: 600,
                              textTransform: 'none',
                              fontSize: { xs: '0.9rem', sm: '1rem' },
                              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                              transition: 'all 0.3s ease',
                              margin: 0,
                              '&:hover': {
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                boxShadow: '0 12px 35px rgba(99, 102, 241, 0.4)',
                                transform: 'translateY(-2px)',
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