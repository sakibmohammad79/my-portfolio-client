"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadResume from "@/lib/UI/ResumeDownload/ResumeDownload";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

// Color scheme constants
const COLORS = {
  primary: '#60a5fa',
  secondary: '#a78bfa', 
  tertiary: '#f472b6',
  background: {
    dark: 'rgba(15, 23, 42, 0.6)',
    light: 'rgba(15, 23, 42, 0.4)',
  },
  text: {
    primary: 'rgba(248, 250, 252, 0.95)',
    secondary: 'rgba(203, 213, 225, 0.9)',
    accent: 'rgba(99, 102, 241, 0.9)',
  },
  border: 'rgba(148, 163, 184, 0.2)',
} as const;

// Typing Effect Hook
const useTypingEffect = (texts: string[], speed: number = 150) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, speed / 2);
      } else {
        // Move to next text
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, speed]);

  return displayText;
};

const Banner = () => {
  // Dynamic designations focusing on backend
  const designations = [
    "Backend Developer",
    "Full Stack Developer", 
    "Node.js Expert",
    "API Architect",
  ];
  
  const typedText = useTypingEffect(designations, 120);

  return (
    <Box
      sx={{
        minHeight: '100vh',
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
            radial-gradient(circle at 20% 30%, ${COLORS.primary}1A 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${COLORS.secondary}14 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, ${COLORS.tertiary}0F 0%, transparent 50%)
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
            linear-gradient(45deg, rgba(148, 163, 184, 0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(148, 163, 184, 0.02) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(148, 163, 184, 0.02) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(148, 163, 184, 0.02) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
          opacity: 0.3,
          pointerEvents: 'none',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            pt: { xs: 14, md: 20 },
            minHeight: 'calc(100vh - 120px)',
            alignItems: 'center'
          }} 
          pb={12}
        >
          {/* Left Section */}
          <Grid item xs={12} md={6} lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Typography 
                variant="body1"
                sx={{
                  color: COLORS.text.accent,
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  position: 'relative',
                  paddingLeft: '40px',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '30px',
                    height: '2px',
                    background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
                    borderRadius: '1px',
                  }
                }}
              >
                Welcome to my world
              </Typography>
              
              <Typography
                py={3}
                variant="h3"
                component="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: COLORS.text.primary,
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                Hi, I&apos;m{" "}
                <Box 
                  component="span" 
                  sx={{
                    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 50%, ${COLORS.tertiary} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-8px',
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary}, ${COLORS.tertiary})`,
                      borderRadius: '2px',
                      opacity: 0.6,
                    }
                  }}
                >
                  Md. Sakib
                </Box>{" "}
                <br />
                
                {/* Dynamic Typing Effect */}
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: { xs: '3rem', md: '4rem' },
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    A {typedText}
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-block',
                        width: '3px',
                        height: { xs: '2rem', md: '3rem' },
                        backgroundColor: COLORS.primary,
                        marginLeft: '4px',
                        animation: 'blink 1s infinite',
                        '@keyframes blink': {
                          '0%, 50%': { opacity: 1 },
                          '51%, 100%': { opacity: 0 },
                        },
                      }}
                    />
                  </motion.span>
                </Box>
              </Typography>
              
              <Typography
                sx={{
                  color: COLORS.text.secondary,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                  maxWidth: '600px',
                  background: COLORS.background.light,
                  backdropFilter: 'blur(10px)',
                  padding: '24px',
                  borderRadius: '16px',
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              >
                I am a dedicated backend-focused developer with strong expertise in server-side architecture, 
                RESTful API development, and database optimization. I specialize in building scalable, secure, 
                and high-performance systems, ensuring seamless integration between services. Passionate 
                about solving complex challenges, I continuously strive to deliver efficient, reliable, 
                and maintainable solutions that drive real impact.
              </Typography>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Typography 
                pt={6} 
                pb={3}
                sx={{
                  color: 'rgba(148, 163, 184, 0.9)',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                }}
              >
                Connect with me
              </Typography>
              
              <Stack direction="row" spacing={2}>
                {[
                  {
                    href: "https://www.linkedin.com/in/md-sakib79/",
                    icon: <LinkedInIcon fontSize="large" />,
                    color: '#0077b5',
                  },
                  {
                    href: "https://www.facebook.com/profile.php?id=100011373134077",
                    icon: <FacebookIcon fontSize="large" />,
                    color: '#1877f2',
                  },
                  {
                    href: "https://www.instagram.com/md_sakib75/",
                    icon: <InstagramIcon fontSize="large" />,
                    color: '#e4405f',
                  },
                  {
                    href: "https://github.com/sakibmohammad79",
                    icon: <GitHubIcon fontSize="large" />,
                    color: '#f8f9fa',
                  },
                ].map((item, index) => (
                  <Link key={index} href={item.href} target="_blank">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Box
                        sx={{
                          background: COLORS.background.dark,
                          backdropFilter: 'blur(10px)',
                          border: `1px solid ${COLORS.border}`,
                          borderRadius: '16px',
                          p: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '60px',
                          height: '60px',
                          color: 'rgba(248, 250, 252, 0.8)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(90deg, transparent, ${item.color}20, transparent)`,
                            transition: 'left 0.5s ease',
                          },
                          '&:hover': { 
                            color: item.color,
                            borderColor: `${item.color}40`,
                            boxShadow: `0 8px 25px ${item.color}20`,
                            transform: 'translateY(-2px)',
                          },
                          '&:hover::before': {
                            left: '100%',
                          }
                        }}
                      >
                        {item.icon}
                      </Box>
                    </motion.div>
                  </Link>
                ))}
              </Stack>
            </motion.div>

            {/* Enhanced Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Box 
                mt={4}
                sx={{
                  // Style the DownloadResume button to match color scheme
                  '& > *': {
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  '& button, & a': {
                    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                    border: 'none',
                    borderRadius: '16px',
                    padding: { xs: '12px 24px', sm: '16px 32px' },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 600,
                    color: 'white !important',
                    fontFamily: '"Inter", sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    boxShadow: `0 8px 24px ${COLORS.primary}40`,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    minWidth: '180px',
                    justifyContent: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
                      transition: 'left 0.6s ease',
                    },
                    '&:hover': {
                      background: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.tertiary} 100%)`,
                      boxShadow: `0 12px 32px ${COLORS.secondary}50`,
                      transform: 'translateY(-3px) scale(1.02)',
                    },
                    '&:hover::before': {
                      left: '100%',
                    },
                    '&:active': {
                      transform: 'translateY(-1px) scale(1.01)',
                    },
                    // Ensure SVG icons inside maintain good color
                    '& svg': {
                      color: 'white',
                      fontSize: '1.2rem',
                    }
                  }
                }}
              >
                <DownloadResume />
              </Box>
            </motion.div>
          </Grid>

          {/* Right Section (Image) */}
          <Grid item xs={12} md={6} lg={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    right: '-20px',
                    bottom: '-20px',
                    background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.secondary}20, ${COLORS.tertiary}20)`,
                    borderRadius: '32px',
                    filter: 'blur(20px)',
                    zIndex: -1,
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: COLORS.background.dark,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${COLORS.primary}1A 0%, transparent 50%, ${COLORS.secondary}1A 100%)`,
                      pointerEvents: 'none',
                    }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Image
                      style={{ 
                        borderRadius: "24px", 
                        objectFit: "cover",
                        filter: 'brightness(1.1) contrast(1.1)',
                      }}
                      height={500}
                      width={600}
                      src="https://i.postimg.cc/V6v625LY/sakib-s-image.png"
                      alt="Md. Sakib - Backend Developer"
                    />
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;