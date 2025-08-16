import { Box, Container, Grid, Stack, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const Footer = () => {
  const navigationLinks = [
    { name: 'SKILL', href: '#skill' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECT', href: '#project' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'BLOG', href: '#blog' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/md-sakib79/',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com/sakibmohammad79',
      color: '#333'
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: 'https://www.facebook.com/profile.php?id=100011373134077',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: 'https://www.instagram.com/md_sakib75/',
      color: '#E4405F'
    }
  ];

  return (
    <Box
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
            radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.02) 0%, transparent 50%)
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
            linear-gradient(45deg, rgba(148, 163, 184, 0.003) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(148, 163, 184, 0.003) 25%, transparent 25%)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
          pointerEvents: 'none',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: 8 }}>
          {/* Main Footer Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand Section */}
            <motion.div variants={fadeInUp}>
              <Box textAlign="center" mb={6}>
                <Typography
                  sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em',
                    mb: 2,
                  }}
                >
                  SAKIB PORTFOLIO
                </Typography>
                
                <Typography
                  sx={{
                    color: 'rgba(203, 213, 225, 0.8)',
                    fontSize: '1.1rem',
                    fontFamily: '"Inter", sans-serif',
                    maxWidth: '500px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  FullStack Web Developer passionate about creating amazing digital experiences
                </Typography>
              </Box>
            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={fadeInUp}>
              <Grid container spacing={2} justifyContent="center" mb={6}>
                {navigationLinks.map((link, index) => (
                  <Grid item xs={6} sm={4} md={2} key={index}>
                    <Box
                      component={Link}
                      href={link.href}
                      sx={{
                        display: 'block',
                        textAlign: 'center',
                        textDecoration: 'none',
                        p: 2,
                        borderRadius: '12px',
                        background: 'rgba(15, 23, 42, 0.4)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(148, 163, 184, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(99, 102, 241, 0.1)',
                          borderColor: 'rgba(99, 102, 241, 0.3)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      <Typography
                        sx={{
                          color: 'rgba(203, 213, 225, 0.9)',
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          letterSpacing: '0.05em',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }
                        }}
                      >
                        {link.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={fadeInUp}>
              <Box textAlign="center" mb={6}>
                <Typography
                  sx={{
                    color: 'rgba(148, 163, 184, 0.8)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    mb: 3,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  Connect With Me
                </Typography>
                
                <Stack direction="row" justifyContent="center" spacing={2}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: 'rgba(15, 23, 42, 0.6)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(148, 163, 184, 0.2)',
                          borderRadius: '16px',
                          p: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: `${social.color}15`,
                            borderColor: `${social.color}40`,
                            boxShadow: `0 8px 25px ${social.color}30`,
                          },
                        }}
                      >
                        <social.icon 
                          sx={{ 
                            color: 'rgba(203, 213, 225, 0.8)',
                            fontSize: '1.8rem',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: social.color,
                            }
                          }} 
                        />
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeInUp}>
              <Box
                sx={{
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent)',
                  mb: 6,
                }}
              />
            </motion.div>

            {/* Bottom Section */}
            <motion.div variants={fadeInUp}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Box textAlign={{ xs: 'center', md: 'left' }}>
                    <Typography
                      sx={{
                        color: 'rgba(148, 163, 184, 0.7)',
                        fontSize: '0.9rem',
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      © 2025 Sakib Portfolio. All Rights Reserved
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Box textAlign="center">
                    <Typography
                      sx={{
                        color: 'rgba(203, 213, 225, 0.8)',
                        fontSize: '0.9rem',
                        fontFamily: '"Inter", sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                      }}
                    >
                      Made with 
                      <FavoriteIcon sx={{ 
                        color: '#f472b6', 
                        fontSize: '1rem',
                        animation: 'pulse 2s infinite'
                      }} /> 
                      by Md. Sakib
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Box textAlign={{ xs: 'center', md: 'right' }}>
                    <Stack direction="row" spacing={3} justifyContent={{ xs: 'center', md: 'flex-end' }}>
                      <Typography
                        component="a"
                        href="#"
                        sx={{
                          color: 'rgba(148, 163, 184, 0.7)',
                          fontSize: '0.9rem',
                          fontFamily: '"Inter", sans-serif',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: '#60a5fa',
                          }
                        }}
                      >
                        Privacy Policy
                      </Typography>
                      <Typography
                        component="a"
                        href="#"
                        sx={{
                          color: 'rgba(148, 163, 184, 0.7)',
                          fontSize: '0.9rem',
                          fontFamily: '"Inter", sans-serif',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: '#60a5fa',
                          }
                        }}
                      >
                        Terms & Conditions
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </motion.div>
        </Box>
      </Container>

      {/* CSS Animation for Heart */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Box>
  );
};

export default Footer;