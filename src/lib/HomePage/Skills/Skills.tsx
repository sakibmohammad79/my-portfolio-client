"use client";
import { useGetAllSkillQuery } from "@/redux/api/skillApi";
import { Box, Container, Typography, CircularProgress, IconButton } from "@mui/material";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const Skills = () => {
  const { data } = useGetAllSkillQuery({});
  const [animatedPercentages, setAnimatedPercentages] = useState<{[key: string]: number}>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [visibleSkills, setVisibleSkills] = useState(6);

  // Calculate visible skills based on screen size
  useEffect(() => {
    const updateVisibleSkills = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleSkills(2);
      else if (width < 768) setVisibleSkills(3);
      else if (width < 1024) setVisibleSkills(4);
      else if (width < 1280) setVisibleSkills(5);
      else setVisibleSkills(6);
    };

    updateVisibleSkills();
    window.addEventListener('resize', updateVisibleSkills);
    return () => window.removeEventListener('resize', updateVisibleSkills);
  }, []);

  // Animate percentages
  useEffect(() => {
    if (data) {
      const timeouts: NodeJS.Timeout[] = [];
      data.forEach((skill: any, index: number) => {
        const timeout = setTimeout(() => {
          setAnimatedPercentages(prev => ({
            ...prev,
            [skill.id]: skill.parcentage
          }));
        }, index * 100);
        timeouts.push(timeout);
      });

      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [data]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && data && data.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex + visibleSkills >= data.length ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, data, visibleSkills]);

  const nextSlide = () => {
    if (data && data.length > 0) {
      setCurrentIndex((prevIndex) => 
        prevIndex + visibleSkills >= data.length ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (data && data.length > 0) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? Math.max(0, data.length - visibleSkills) : prevIndex - 1
      );
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleSkills = () => {
    if (!data || data.length === 0) return [];
    
    const skills = [];
    for (let i = 0; i < visibleSkills; i++) {
      const skillIndex = (currentIndex + i) % data.length;
      skills.push(data[skillIndex]);
    }
    return skills;
  };

  const totalSlides = data ? Math.ceil(data.length / visibleSkills) : 0;
  const currentSlideIndex = Math.floor(currentIndex / visibleSkills);

  return (
    <Box
      id="skill"
      sx={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, sm: 10, md: 12 },
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
          backgroundSize: { xs: '20px 20px', sm: '30px 30px', md: '40px 40px' },
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          opacity: 0.5,
          pointerEvents: 'none',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, maxWidth: 'xl' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box textAlign="center" mb={{ xs: 6, sm: 7, md: 8 }}>
            <Typography
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
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
                  bottom: { xs: '-6px', sm: '-8px' },
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: { xs: '80px', sm: '100px', md: '120px' },
                  height: { xs: '3px', sm: '4px' },
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
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                fontFamily: '"Inter", sans-serif',
                maxWidth: { xs: '100%', sm: '500px', md: '600px' },
                margin: '0 auto',
                mt: { xs: 3, sm: 4 },
                background: 'rgba(15, 23, 42, 0.3)',
                backdropFilter: 'blur(10px)',
                padding: { xs: '12px 16px', sm: '16px 24px' },
                borderRadius: { xs: '8px', sm: '12px' },
                border: '1px solid rgba(148, 163, 184, 0.1)',
              }}
            >
              Transforming ideas into unique web experiences that inspire both you and your customers through cutting-edge technologies.
            </Typography>
          </Box>
        </motion.div>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative' }}>
          {/* Navigation Controls */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 4,
            px: { xs: 0, sm: 2 }
          }}>
            <IconButton
              onClick={prevSlide}
              sx={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                color: 'rgba(99, 102, 241, 0.8)',
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(99, 102, 241, 0.1)',
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                  color: '#60a5fa',
                  transform: 'translateX(-2px)',
                },
              }}
            >
              <ChevronLeft size={20} />
            </IconButton>

            {/* Auto-play Toggle */}
            <IconButton
              onClick={toggleAutoPlay}
              sx={{
                background: isAutoPlaying 
                  ? 'linear-gradient(135deg, #60a5fa, #a78bfa)' 
                  : 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isAutoPlaying ? 'transparent' : 'rgba(99, 102, 241, 0.2)'}`,
                color: isAutoPlaying ? 'white' : 'rgba(99, 102, 241, 0.8)',
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </IconButton>

            <IconButton
              onClick={nextSlide}
              sx={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                color: 'rgba(99, 102, 241, 0.8)',
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(99, 102, 241, 0.1)',
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                  color: '#60a5fa',
                  transform: 'translateX(2px)',
                },
              }}
            >
              <ChevronRight size={20} />
            </IconButton>
          </Box>

          {/* Skills Carousel */}
          <Box sx={{ 
            overflow: 'hidden', 
            borderRadius: { xs: '12px', sm: '16px', md: '20px' },
            background: 'rgba(15, 23, 42, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            p: { xs: 2, sm: 3, md: 4 }
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                    lg: 'repeat(5, 1fr)',
                    xl: 'repeat(6, 1fr)'
                  },
                  gap: { xs: 2, sm: 3, md: 4 },
                  alignItems: 'stretch'
                }}>
                  {getVisibleSkills().map((skill: any, index: number) => (
                    <motion.div
                      key={`${skill.id}-${currentIndex}`}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Box
                        sx={{
                          background: 'rgba(15, 23, 42, 0.6)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(148, 163, 184, 0.2)',
                          borderRadius: { xs: '16px', sm: '20px', md: '24px' },
                          p: { xs: 2, sm: 2.5, md: 3 },
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: { xs: '180px', sm: '200px', md: '220px' },
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
                            borderRadius: { xs: '16px', sm: '20px', md: '24px' },
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
                            width: { xs: '60px', sm: '70px', md: '80px' },
                            height: { xs: '60px', sm: '70px', md: '80px' },
                            background: 'rgba(248, 250, 252, 0.1)',
                            borderRadius: { xs: '12px', sm: '14px', md: '16px' },
                            mb: { xs: 1.5, sm: 2 },
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
                            width={40}
                            height={40}
                            style={{ 
                              objectFit: "contain",
                              filter: 'brightness(1.2)',
                            }}
                          />
                        </Box>

                        {/* Progress Circle */}
                        <Box sx={{ 
                          position: 'relative', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          mb: 1, 
                          zIndex: 1 
                        }}>
                          <CircularProgress
                            variant="determinate"
                            value={100}
                            size={50}
                            thickness={4}
                            sx={{
                              color: 'rgba(148, 163, 184, 0.2)',
                              position: 'absolute',
                            }}
                          />
                          <CircularProgress
                            variant="determinate"
                            value={animatedPercentages[skill.id] || 0}
                            size={50}
                            thickness={4}
                            sx={{
                              '& .MuiCircularProgress-circle': {
                                stroke: 'url(#gradient)',
                              }
                            }}
                          />
                          <Typography
                            sx={{
                              position: 'absolute',
                              color: 'rgba(248, 250, 252, 0.9)',
                              fontWeight: 700,
                              fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                              fontFamily: '"Inter", sans-serif',
                            }}
                          >
                            {animatedPercentages[skill.id] || 0}%
                          </Typography>
                        </Box>

                        {/* Skill Name */}
                        <Typography 
                          textAlign="center" 
                          sx={{
                            fontWeight: 600,
                            color: 'rgba(248, 250, 252, 0.9)',
                            fontFamily: '"Inter", sans-serif',
                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                            zIndex: 1,
                            position: 'relative',
                            transition: 'all 0.3s ease',
                            lineHeight: 1.2,
                            '&:hover': {
                              color: '#60a5fa',
                            }
                          }}
                        >
                          {skill.name}
                        </Typography>

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
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Pagination Dots */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 4,
            gap: 1 
          }}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index * visibleSkills)}
                sx={{
                  width: currentSlideIndex === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentSlideIndex === index 
                    ? 'linear-gradient(90deg, #60a5fa, #a78bfa)' 
                    : 'rgba(148, 163, 184, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: currentSlideIndex === index 
                      ? 'linear-gradient(90deg, #60a5fa, #a78bfa)'
                      : 'rgba(148, 163, 184, 0.5)',
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;