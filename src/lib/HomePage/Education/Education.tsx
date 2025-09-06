"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarIcon from "@mui/icons-material/Star";

// Education Data
const educationData = [
  {
    id: 1,
    title: "BSc in Computer Science",
    institute: "BGC Trust University",
    duration: "2021 - Present",
    score: "Currently Pursuing",
    level: "Bachelor's Degree",
    description: "Currently pursuing my Bachelor's degree in Computer Science, gaining comprehensive knowledge in programming, databases, software development, algorithms, and modern web technologies.",
    subjects: ["Programming", "Databases", "Software Development", "Algorithms"],
    current: true,
    icon: "bachelor"
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    institute: "Sir. Ashotush Govt. College",
    duration: "2018 - 2020",
    score: "4.17/5",
    level: "HSC",
    description: "Completed my HSC with a strong focus on Mathematics, Physics, and Computer Science, building a solid foundation for my technology career.",
    subjects: ["Mathematics", "Physics", "Computer Science", "English"],
    current: false,
    icon: "college"
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    institute: "Jaisthapura Ramani Mohan High School",
    duration: "2016 - 2018",
    score: "4.28/5",
    level: "SSC",
    description: "Completed my SSC with a keen interest in science and problem-solving, achieving excellent results across all subjects.",
    subjects: ["General Science", "Mathematics", "English", "Bengali"],
    current: false,
    icon: "school"
  },
];

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

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const Education = () => {
  const getIcon = (iconType: any, isCurrent: any) => {
    const iconStyle = {
      fontSize: '28px',
      filter: `drop-shadow(0 0 8px ${isCurrent ? 'rgba(96, 165, 250, 0.5)' : 'rgba(167, 139, 250, 0.5)'})`,
      color: isCurrent ? '#60a5fa' : '#a78bfa'
    };

    switch (iconType) {
      case 'bachelor':
        return <StarIcon sx={iconStyle} />;
      case 'college':
        return <MenuBookIcon sx={iconStyle} />;
      default:
        return <SchoolIcon sx={iconStyle} />;
    }
  };

  return (
    <Box
      id="education"
      sx={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 25% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 75% 70%, rgba(168, 85, 247, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.03) 0%, transparent 50%)
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
          backgroundSize: '60px 60px',
          opacity: 0.4,
          pointerEvents: 'none',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ pb: 12, pt: 12 }}>
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Box textAlign="center" pb={8}>
              <Typography
                sx={{
                  color: 'rgba(99, 102, 241, 0.9)',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
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
                    width: '80px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                    borderRadius: '1px',
                  }
                }}
              >
                Education
              </Typography>
              
              <Typography
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem', lg: '3.5rem' },
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1, #94a3b8)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                  mt: 3,
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                Academic Journey
              </Typography>
            </Box>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <Box sx={{ position: 'relative' }}>
              {/* Timeline Line */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  background: 'linear-gradient(180deg, #60a5fa, #a78bfa, #f472b6)',
                  borderRadius: '2px',
                  transform: 'translateX(-50%)',
                  opacity: 0.6,
                  display: { xs: 'none', md: 'block' },
                }}
              />

              <Grid container spacing={6} justifyContent="center">
                {educationData.map((edu, index) => (
                  <Grid
                    key={edu.id}
                    item
                    xs={12}
                    md={10}
                    lg={8}
                  >
                    <motion.div variants={cardVariants}>
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: { xs: 'center', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                          mb: 4,
                        }}
                      >
                        {/* Timeline Node */}
                        <Box
                          sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '70px',
                            height: '70px',
                            background: 'rgba(15, 23, 42, 0.9)',
                            backdropFilter: 'blur(20px)',
                            border: '3px solid',
                            borderImageSource: edu.current 
                              ? 'linear-gradient(135deg, #60a5fa, #a78bfa)' 
                              : 'linear-gradient(135deg, #a78bfa, #f472b6)',
                            borderImageSlice: 1,
                            borderRadius: '50%',
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2,
                            boxShadow: edu.current 
                              ? '0 8px 25px rgba(99, 102, 241, 0.3)' 
                              : '0 8px 25px rgba(167, 139, 250, 0.3)',
                          }}
                        >
                          {getIcon(edu.icon, edu.current)}
                        </Box>

                        {/* Education Card Container */}
                        <Box
                          sx={{
                            width: '100%',
                            maxWidth: { xs: '100%', md: '450px' },
                            ml: { xs: 0, md: index % 2 === 0 ? '70px' : 0 },
                            mr: { xs: 0, md: index % 2 === 1 ? '70px' : 0 },
                          }}
                        >
                          <motion.div
                            whileHover={{ 
                              scale: 1.02,
                              rotateY: index % 2 === 0 ? 2 : -2
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <Card
                              sx={{
                                background: 'rgba(15, 23, 42, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(148, 163, 184, 0.2)',
                                borderRadius: '24px',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                position: 'relative',
                                overflow: 'hidden',
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
                                '&:hover': {
                                  borderColor: 'rgba(99, 102, 241, 0.4)',
                                  boxShadow: '0 25px 50px rgba(99, 102, 241, 0.2)',
                                  transform: 'translateY(-8px)',
                                },
                              }}
                            >
                              <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                                {/* Current/Level Badge */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                  <Chip
                                    label={edu.level}
                                    size="small"
                                    sx={{
                                      background: 'rgba(168, 85, 247, 0.1)',
                                      border: '1px solid rgba(168, 85, 247, 0.2)',
                                      color: '#a78bfa',
                                      fontWeight: 600,
                                      fontSize: '0.75rem',
                                    }}
                                  />
                                  {edu.current && (
                                    <Box
                                      sx={{
                                        background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                        color: 'white',
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: '12px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                                      }}
                                    >
                                      Current
                                    </Box>
                                  )}
                                </Box>

                                {/* Education Title */}
                                <Typography
                                  variant="h5"
                                  sx={{
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 700,
                                    color: 'rgba(248, 250, 252, 0.95)',
                                    mb: 1,
                                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                                    lineHeight: 1.3,
                                  }}
                                >
                                  {edu.title}
                                </Typography>

                                {/* Institute */}
                                <Typography
                                  sx={{
                                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                    mb: 2,
                                    fontFamily: '"Inter", sans-serif',
                                  }}
                                >
                                  {edu.institute}
                                </Typography>

                                {/* Duration and Score */}
                                <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                                  <Typography
                                    sx={{
                                      color: 'rgba(168, 85, 247, 0.8)',
                                      fontSize: '0.95rem',
                                      fontStyle: 'italic',
                                      fontFamily: '"Inter", sans-serif',
                                      background: 'rgba(168, 85, 247, 0.1)',
                                      padding: '6px 12px',
                                      borderRadius: '8px',
                                      display: 'inline-block',
                                    }}
                                  >
                                    {edu.duration}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      color: 'rgba(244, 114, 182, 0.8)',
                                      fontSize: '0.95rem',
                                      fontWeight: 600,
                                      fontFamily: '"Inter", sans-serif',
                                      background: 'rgba(244, 114, 182, 0.1)',
                                      padding: '6px 12px',
                                      borderRadius: '8px',
                                      display: 'inline-block',
                                    }}
                                  >
                                    {edu.score}
                                  </Typography>
                                </Box>

                                {/* Description */}
                                <Typography
                                  sx={{
                                    color: 'rgba(203, 213, 225, 0.9)',
                                    fontSize: '1rem',
                                    lineHeight: 1.7,
                                    mb: 3,
                                    fontFamily: '"Inter", sans-serif',
                                  }}
                                >
                                  {edu.description}
                                </Typography>

                                {/* Key Subjects */}
                                <Box>
                                  <Typography
                                    sx={{
                                      color: 'rgba(148, 163, 184, 0.8)',
                                      fontSize: '0.85rem',
                                      fontWeight: 600,
                                      mb: 1,
                                      textTransform: 'uppercase',
                                      letterSpacing: '0.05em',
                                    }}
                                  >
                                    Key Subjects
                                  </Typography>
                                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {edu.subjects.map((subject, subjectIndex) => (
                                      <Chip
                                        key={subjectIndex}
                                        label={subject}
                                        size="small"
                                        sx={{
                                          background: 'rgba(99, 102, 241, 0.1)',
                                          border: '1px solid rgba(99, 102, 241, 0.2)',
                                          color: '#60a5fa',
                                          fontSize: '0.8rem',
                                          fontWeight: 500,
                                          transition: 'all 0.2s ease',
                                          '&:hover': {
                                            background: 'rgba(99, 102, 241, 0.2)',
                                            transform: 'scale(1.05)',
                                          }
                                        }}
                                      />
                                    ))}
                                  </Box>
                                </Box>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Education;