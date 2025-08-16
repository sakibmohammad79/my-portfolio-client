"use client";
import { useGetAllSkillQuery } from "@/redux/api/skillApi";
import { Box, Container, Grid, Typography, CircularProgress } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Skills = () => {
  const { data } = useGetAllSkillQuery({});
  const [animatedPercentages, setAnimatedPercentages] = useState<{[key: string]: number}>({});

  useEffect(() => {
    if (data) {
      const timeouts: NodeJS.Timeout[] = [];
      data.forEach((skill: any, index: number) => {
        const timeout = setTimeout(() => {
          setAnimatedPercentages(prev => ({
            ...prev,
            [skill.id]: skill.parcentage
          }));
        }, index * 200);
        timeouts.push(timeout);
      });

      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [data]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
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
      id="skill"
      sx={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: 10,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 90% 40%, rgba(244, 114, 182, 0.03) 0%, transparent 50%)
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
            linear-gradient(-45deg, rgba(148, 163, 184, 0.01) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(148, 163, 184, 0.01) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(148, 163, 184, 0.01) 75%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
          opacity: 0.5,
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
                fontSize: { xs: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                position: 'relative',
                display: 'inline-block',
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
                  opacity: 0.8,
                }
              }}
            >
              My Skills
            </Typography>
            
            <Typography 
              sx={{
                color: 'rgba(203, 213, 225, 0.8)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                fontFamily: '"Inter", sans-serif',
                maxWidth: '600px',
                margin: '0 auto',
                mt: 4,
                background: 'rgba(15, 23, 42, 0.3)',
                backdropFilter: 'blur(10px)',
                padding: '16px 24px',
                borderRadius: '12px',
                border: '1px solid rgba(148, 163, 184, 0.1)',
              }}
            >
              Transforming ideas into unique web experiences that inspire both you and your customers through cutting-edge technologies.
            </Typography>
          </Box>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {data?.map((skill: any, index: number) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={skill.id}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  <Box
                    sx={{
                      background: 'rgba(15, 23, 42, 0.6)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      borderRadius: '24px',
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: '220px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)',
                        transition: 'left 0.6s ease',
                      },
                      '&:hover': {
                        borderColor: 'rgba(99, 102, 241, 0.4)',
                        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)',
                        transform: 'translateY(-8px)',
                      },
                      '&:hover::before': {
                        left: '100%',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.02) 100%)',
                        borderRadius: '24px',
                        pointerEvents: 'none',
                      }
                    }}
                  >
                    {/* Skill Icon */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: '80px',
                        height: '80px',
                        background: 'rgba(248, 250, 252, 0.1)',
                        borderRadius: '16px',
                        mb: 2,
                        position: 'relative',
                        zIndex: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(248, 250, 252, 0.15)',
                          transform: 'scale(1.1)',
                        }
                      }}
                    >
                      <Image
                        src={skill?.image}
                        alt={`${skill?.name} skill`}
                        width={50}
                        height={50}
                        style={{ 
                          objectFit: "contain",
                          filter: 'brightness(1.2)',
                        }}
                      />
                    </Box>

                    {/* Progress Circle */}
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, zIndex: 1 }}>
                      <CircularProgress
                        variant="determinate"
                        value={100}
                        size={60}
                        thickness={4}
                        sx={{
                          color: 'rgba(148, 163, 184, 0.2)',
                          position: 'absolute',
                        }}
                      />
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: (animatedPercentages[skill.id] || 0) / 100 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: index * 0.1 }}
                      >
                        <CircularProgress
                          variant="determinate"
                          value={animatedPercentages[skill.id] || 0}
                          size={60}
                          thickness={4}
                          sx={{
                            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                            borderRadius: '50%',
                            '& .MuiCircularProgress-circle': {
                              stroke: 'url(#gradient)',
                            }
                          }}
                        />
                      </motion.div>
                      <Typography
                        sx={{
                          position: 'absolute',
                          color: 'rgba(248, 250, 252, 0.9)',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        {animatedPercentages[skill.id] || 0}%
                      </Typography>
                    </Box>

                    {/* SVG Gradient Definition */}
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#60a5fa" />
                          <stop offset="50%" stopColor="#a78bfa" />
                          <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Box>

                  {/* Skill Name */}
                  <Typography 
                    textAlign="center" 
                    sx={{
                      fontWeight: 600,
                      pt: 2,
                      color: 'rgba(248, 250, 252, 0.9)',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#60a5fa',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    {skill.name}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;