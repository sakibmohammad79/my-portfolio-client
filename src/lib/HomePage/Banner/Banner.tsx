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

const Banner = () => {
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
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(244, 114, 182, 0.06) 0%, transparent 50%)
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
                  color: 'rgba(99, 102, 241, 0.9)',
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
                    background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
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
                  color: 'rgba(248, 250, 252, 0.95)',
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                Hi, I&apos;m{" "}
                <Box 
                  component="span" 
                  sx={{
                    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
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
                      background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)',
                      borderRadius: '2px',
                      opacity: 0.6,
                    }
                  }}
                >
                  Md. Sakib
                </Box>{" "}
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{
                    background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  A Full Stack Developer
                </motion.span>
              </Typography>
              
              <Typography
                sx={{
                  color: 'rgba(203, 213, 225, 0.9)',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                  maxWidth: '600px',
                  background: 'rgba(15, 23, 42, 0.4)',
                  backdropFilter: 'blur(10px)',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              >
                I am a dedicated and passionate full stack web developer. I
                believe in working hard and never giving up. Challenges motivate
                me, and I approach each project with determination. I always
                strive to provide the best solutions possible.
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
                    hoverColor: '#005582'
                  },
                  {
                    href: "https://www.facebook.com/profile.php?id=100011373134077",
                    icon: <FacebookIcon fontSize="large" />,
                    color: '#1877f2',
                    hoverColor: '#145dbf'
                  },
                  {
                    href: "https://www.instagram.com/md_sakib75/",
                    icon: <InstagramIcon fontSize="large" />,
                    color: '#e4405f',
                    hoverColor: '#c13048'
                  },
                  {
                    href: "https://github.com/sakibmohammad79",
                    icon: <GitHubIcon fontSize="large" />,
                    color: '#f8f9fa',
                    hoverColor: '#e9ecef'
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
                          background: 'rgba(15, 23, 42, 0.6)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(148, 163, 184, 0.2)',
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

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Box 
                mt={4}
                sx={{
                  '& > *': {
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      filter: 'brightness(1.1)',
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
                    background: 'linear-gradient(135deg, #60a5fa20, #a78bfa20, #f472b620)',
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
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.1) 100%)',
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
                      src="https://i.postimg.cc/3xB8zkfr/coding.webp"
                      alt="Coding Representation"
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