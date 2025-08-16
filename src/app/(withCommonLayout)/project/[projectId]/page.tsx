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
  IconButton,
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
  const { projectId } = params;
  const { data } = useGetSingleProjectQuery(projectId);
  const router = useRouter();

  const projectLinks = [
    {
      label: "Live Demo",
      url: data?.url,
      icon: LaunchIcon,
      color: "#60a5fa",
      gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    },
    {
      label: "Client Repo",
      url: data?.repoClientUrl,
      icon: GitHubIcon,
      color: "#a78bfa",
      gradient: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
    },
    {
      label: "Server Repo",
      url: data?.repoServerUrl,
      icon: CodeIcon,
      color: "#f472b6",
      gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    },
  ];

  const infoSections = [
    {
      icon: DescriptionIcon,
      label: "Description",
      content: data?.description,
      color: "#60a5fa",
    },
    {
      icon: InfoIcon,
      label: "Details",
      content: data?.details,
      color: "#a78bfa",
    },
    {
      icon: BuildIcon,
      label: "Technology Stack",
      content: data?.technology,
      color: "#f472b6",
    },
  ];

  return (
    <>
      {/* Global styles for consistent layout */}
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
            py: { xs: 8, sm: 8, md: 12 },
            px: { xs: 2, sm: 3, md: 4 },
            margin: 0,
            maxWidth: 'none !important',
            width: '100%',
          }}
        >
          <Box 
            sx={{ 
              maxWidth: { xs: '100%', sm: 800, md: 900 }, 
              width: "100%", 
              mx: "auto",
              px: { xs: 0, sm: 2 },
            }}
          >
            {/* Back Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Box mb={{ xs: 3, sm: 4 }}>
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
                  Back to Projects
                </Button>
              </Box>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Main Project Card */}
              <motion.div variants={slideInLeft}>
                <Card
                  sx={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: { xs: '16px', sm: '20px', md: '24px' },
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    overflow: 'hidden',
                    position: 'relative',
                    margin: 0,
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
                  {/* Project Image */}
                  <motion.div variants={slideInLeft}>
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: 200, sm: 300, md: 400, lg: 500 },
                        position: "relative",
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: { xs: '60px', sm: '80px', md: '100px' },
                          background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.3) 100%)',
                          pointerEvents: 'none',
                        }
                      }}
                    >
                      <Image
                        src={data?.image || '/placeholder-project.jpg'}
                        alt={data?.title || 'Project Image'}
                        fill
                        style={{ 
                          objectFit: "cover",
                          filter: 'brightness(1.05) contrast(1.02)',
                        }}
                      />
                    </Box>
                  </motion.div>

                  <CardContent 
                    sx={{ 
                      p: { xs: 3, sm: 4, md: 5, lg: 6 }, 
                      position: 'relative', 
                      zIndex: 2,
                      margin: 0,
                    }}
                  >
                    {/* Project Title */}
                    <motion.div variants={slideInRight}>
                      <Typography
                        component="h1"
                        sx={{
                          fontSize: { xs: '1.75rem', sm: '2.2rem', md: '2.5rem', lg: '2.8rem' },
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 800,
                          background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: { xs: 3, sm: 4 },
                          letterSpacing: '-0.02em',
                          lineHeight: 1.2,
                          margin: '0 0 24px 0',
                        }}
                      >
                        {data?.title}
                      </Typography>
                    </motion.div>

                    {/* Project Information Sections */}
                    {infoSections.map((section, index) => (
                      section.content && (
                        <motion.div key={index} variants={fadeInUp}>
                          <Box
                            sx={{
                              background: 'rgba(15, 23, 42, 0.4)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(148, 163, 184, 0.15)',
                              borderRadius: { xs: '12px', sm: '14px', md: '16px' },
                              p: { xs: 3, sm: 3.5, md: 4 },
                              mb: { xs: 2.5, sm: 3 },
                              position: 'relative',
                              overflow: 'hidden',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '4px',
                                height: '100%',
                                background: section.color,
                              }
                            }}
                          >
                            <Box 
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                mb: { xs: 1.5, sm: 2 },
                                flexWrap: 'wrap',
                                gap: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  background: `${section.color}20`,
                                  borderRadius: { xs: '8px', sm: '10px' },
                                  p: { xs: 0.75, sm: 1 },
                                  mr: { xs: 1, sm: 2 },
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                }}
                              >
                                <section.icon 
                                  sx={{ 
                                    color: section.color, 
                                    fontSize: { xs: '1.25rem', sm: '1.5rem' } 
                                  }} 
                                />
                              </Box>
                              <Typography
                                sx={{
                                  color: section.color,
                                  fontFamily: '"Inter", sans-serif',
                                  fontWeight: 700,
                                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                  letterSpacing: '0.02em',
                                  flex: 1,
                                }}
                              >
                                {section.label}
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                color: 'rgba(203, 213, 225, 0.9)',
                                fontFamily: '"Inter", sans-serif',
                                fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                                lineHeight: 1.7,
                                pl: { xs: 4, sm: 5, md: 6 },
                                whiteSpace: 'pre-wrap',
                              }}
                            >
                              {section.content}
                            </Typography>
                          </Box>
                        </motion.div>
                      )
                    ))}

                    {/* Project Timeline */}
                    {(data?.startDate || data?.endDate) && (
                      <motion.div variants={fadeInUp}>
                        <Box
                          sx={{
                            background: 'rgba(15, 23, 42, 0.4)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(148, 163, 184, 0.15)',
                            borderRadius: { xs: '12px', sm: '14px', md: '16px' },
                            p: { xs: 3, sm: 3.5, md: 4 },
                            mb: { xs: 3, sm: 4 },
                          }}
                        >
                          <Box 
                            sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              mb: { xs: 2, sm: 3 },
                              flexWrap: 'wrap',
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                background: 'rgba(34, 197, 94, 0.2)',
                                borderRadius: { xs: '8px', sm: '10px' },
                                p: { xs: 0.75, sm: 1 },
                                mr: { xs: 1, sm: 2 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              <CalendarTodayIcon 
                                sx={{ 
                                  color: '#22c55e', 
                                  fontSize: { xs: '1.25rem', sm: '1.5rem' } 
                                }} 
                              />
                            </Box>
                            <Typography
                              sx={{
                                color: '#22c55e',
                                fontFamily: '"Inter", sans-serif',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                flex: 1,
                              }}
                            >
                              Project Timeline
                            </Typography>
                          </Box>

                          <Stack 
                            direction={{ xs: 'column', sm: 'row' }} 
                            spacing={{ xs: 2, sm: 3, md: 4 }}
                            sx={{ pl: { xs: 4, sm: 5, md: 6 } }}
                          >
                            {data?.startDate && (
                              <Box sx={{ flex: 1 }}>
                                <Typography
                                  sx={{
                                    color: 'rgba(148, 163, 184, 0.8)',
                                    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                                    fontWeight: 600,
                                    mb: { xs: 0.5, sm: 1 },
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                  }}
                                >
                                  Start Date
                                </Typography>
                                <Typography
                                  sx={{
                                    color: 'rgba(203, 213, 225, 0.9)',
                                    fontFamily: '"Inter", sans-serif',
                                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                                    fontWeight: 600,
                                    wordBreak: 'break-word',
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
                                    color: 'rgba(148, 163, 184, 0.8)',
                                    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                                    fontWeight: 600,
                                    mb: { xs: 0.5, sm: 1 },
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                  }}
                                >
                                  End Date
                                </Typography>
                                <Typography
                                  sx={{
                                    color: 'rgba(203, 213, 225, 0.9)',
                                    fontFamily: '"Inter", sans-serif',
                                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                                    fontWeight: 600,
                                    wordBreak: 'break-word',
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

                    {/* Action Buttons */}
                    <motion.div variants={fadeInUp}>
                      <Divider sx={{ 
                        my: { xs: 3, sm: 4 }, 
                        background: 'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent)' 
                      }} />
                      
                      <Typography
                        sx={{
                          color: 'rgba(148, 163, 184, 0.8)',
                          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                          fontWeight: 600,
                          mb: { xs: 2.5, sm: 3 },
                          textAlign: 'center',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                        }}
                      >
                        Project Links
                      </Typography>

                      <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 2, sm: 2.5, md: 3 }}
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          '& > *': {
                            width: { xs: '100%', sm: 'auto' },
                            minWidth: { sm: '160px', md: '180px' },
                          }
                        }}
                      >
                        {projectLinks.map((link, index) => (
                          link.url && (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.05, y: -3 }}
                              whileTap={{ scale: 0.98 }}
                              style={{ width: '100%' }}
                            >
                              <Button
                                component="a"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<link.icon />}
                                sx={{
                                  background: link.gradient,
                                  borderRadius: { xs: '12px', sm: '14px', md: '16px' },
                                  px: { xs: 3, sm: 3.5, md: 4 },
                                  py: { xs: 1.5, sm: 1.75, md: 2 },
                                  color: 'white',
                                  fontFamily: '"Inter", sans-serif',
                                  fontWeight: 600,
                                  textTransform: 'none',
                                  fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                                  width: '100%',
                                  boxShadow: `0 8px 25px ${link.color}30`,
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    boxShadow: `0 12px 35px ${link.color}40`,
                                  },
                                  '& .MuiButton-startIcon': {
                                    marginRight: { xs: 1, sm: 1.5 },
                                  }
                                }}
                              >
                                {link.label}
                              </Button>
                            </motion.div>
                          )
                        ))}
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