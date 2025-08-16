"use client";
import { useGetAllProjectQuery } from "@/redux/api/projectApi";
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
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

const Project = () => {
  const { data } = useGetAllProjectQuery({});

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

  return (
    <Box
      id="project"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
                  width: '100px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                  borderRadius: '1px',
                }
              }}
            >
              Visit My Projects & Keep Your Feedback
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
                  width: '150px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)',
                  borderRadius: '2px',
                  opacity: 0.7,
                }
              }}
            >
              My Projects
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {data?.map((project: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <motion.div variants={cardVariants}>
                  <Link
                    href={`/project/${project.id}`}
                    style={{ textDecoration: "none", display: "block", height: "100%" }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        rotateY: 5,
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
                        {/* Project Image */}
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
                            src={project?.image}
                            alt={`${project?.title} project preview`}
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

                          {/* Project Type Badge */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 16,
                              left: 16,
                              zIndex: 4,
                            }}
                          >
                            <Chip
                              icon={<CodeIcon sx={{ fontSize: '16px !important' }} />}
                              label="Website"
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
                        </Box>

                        {/* Card Content */}
                        <CardContent sx={{ p: 4, position: 'relative', zIndex: 2 }}>
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
                            Featured Project
                          </Typography>
                          
                          <Typography
                            component="h2"
                            sx={{
                              fontSize: { xs: '1.3rem', lg: '1.5rem' },
                              fontWeight: 700,
                              color: 'rgba(248, 250, 252, 0.95)',
                              fontFamily: '"Inter", sans-serif',
                              lineHeight: 1.3,
                              mb: 2,
                              transition: 'all 0.3s ease',
                              '&:hover': { 
                                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                              },
                            }}
                          >
                            {project?.title}
                          </Typography>

                          {/* Project Description */}
                          {project?.description && (
                            <Typography
                              sx={{
                                color: 'rgba(203, 213, 225, 0.8)',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                fontFamily: '"Inter", sans-serif',
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                mb: 3,
                              }}
                            >
                              {project.description}
                            </Typography>
                          )}

                          {/* Technologies */}
                          {project?.technologies && (
                            <Box>
                              <Typography
                                sx={{
                                  color: 'rgba(148, 163, 184, 0.8)',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                  mb: 1,
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.05em',
                                }}
                              >
                                Tech Stack
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                                  <Chip
                                    key={techIndex}
                                    label={tech}
                                    size="small"
                                    sx={{
                                      background: 'rgba(99, 102, 241, 0.1)',
                                      border: '1px solid rgba(99, 102, 241, 0.2)',
                                      color: '#60a5fa',
                                      fontSize: '0.7rem',
                                      height: '24px',
                                      fontWeight: 500,
                                      transition: 'all 0.2s ease',
                                      '&:hover': {
                                        background: 'rgba(99, 102, 241, 0.2)',
                                        transform: 'scale(1.05)',
                                      }
                                    }}
                                  />
                                ))}
                                {project.technologies.length > 3 && (
                                  <Chip
                                    label={`+${project.technologies.length - 3}`}
                                    size="small"
                                    sx={{
                                      background: 'rgba(148, 163, 184, 0.1)',
                                      border: '1px solid rgba(148, 163, 184, 0.2)',
                                      color: 'rgba(148, 163, 184, 0.8)',
                                      fontSize: '0.7rem',
                                      height: '24px',
                                      fontWeight: 500,
                                    }}
                                  />
                                )}
                              </Box>
                            </Box>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Project;