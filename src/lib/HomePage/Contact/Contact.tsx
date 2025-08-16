"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";

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

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
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
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Contact = () => {
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
      url: '#',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: '#',
      color: '#E4405F'
    }
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '(+880) 1870584779',
      href: 'tel:+8801870584779'
    },
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'mohammadsakib7679@gmail.com',
      href: 'mailto:mohammadsakib7679@gmail.com'
    },
    {
      icon: LocationOnIcon,
      label: 'Location',
      value: 'Chattogram, Bangladesh',
      href: '#'
    }
  ];

  return (
    <Box
      id="contact"
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
                Contact
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
                Get In Touch
              </Typography>
              
              <Typography
                sx={{
                  color: 'rgba(203, 213, 225, 0.8)',
                  fontSize: '1.1rem',
                  mt: 3,
                  fontFamily: '"Inter", sans-serif',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
              </Typography>
            </Box>
          </motion.div>

          {/* Contact Content */}
          <Grid container spacing={6} alignItems="stretch">
            {/* Contact Information Card */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
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
                  }}
                >
                  <CardContent sx={{ p: 6, position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Profile Section */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                        }}
                      >
                        <PersonIcon sx={{ fontSize: '3rem', color: 'white' }} />
                      </Box>
                      
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 700,
                          color: 'rgba(248, 250, 252, 0.95)',
                          mb: 1,
                        }}
                      >
                        Md. Sakib
                      </Typography>
                      
                      <Typography
                        sx={{
                          background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontWeight: 600,
                          fontSize: '1.2rem',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        FullStack Web Developer
                      </Typography>
                      
                      <Typography
                        sx={{
                          color: 'rgba(203, 213, 225, 0.8)',
                          fontSize: '1rem',
                          mt: 2,
                          fontFamily: '"Inter", sans-serif',
                          lineHeight: 1.6,
                        }}
                      >
                        Available for freelance opportunities. Let&apos;s connect and discuss your next project!
                      </Typography>
                    </Box>

                    {/* Contact Information */}
                    <motion.div variants={stagger}>
                      <Box sx={{ mb: 4, flexGrow: 1 }}>
                        {contactInfo.map((info, index) => (
                          <motion.div key={index} variants={fadeInUp}>
                            <Box
                              component={info.href !== '#' ? 'a' : 'div'}
                              href={info.href !== '#' ? info.href : undefined}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 3,
                                p: 2,
                                borderRadius: '16px',
                                background: 'rgba(99, 102, 241, 0.05)',
                                border: '1px solid rgba(99, 102, 241, 0.1)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                cursor: info.href !== '#' ? 'pointer' : 'default',
                                '&:hover': info.href !== '#' ? {
                                  background: 'rgba(99, 102, 241, 0.1)',
                                  transform: 'translateX(5px)',
                                  borderColor: 'rgba(99, 102, 241, 0.3)',
                                } : {},
                              }}
                            >
                              <Box
                                sx={{
                                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                  borderRadius: '12px',
                                  p: 1.5,
                                  mr: 3,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  minWidth: '48px',
                                  minHeight: '48px',
                                }}
                              >
                                <info.icon sx={{ color: 'white', fontSize: '1.5rem' }} />
                              </Box>
                              <Box>
                                <Typography
                                  sx={{
                                    color: 'rgba(148, 163, 184, 0.8)',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    mb: 0.5,
                                  }}
                                >
                                  {info.label}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: 'rgba(248, 250, 252, 0.9)',
                                    fontSize: '1rem',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 500,
                                  }}
                                >
                                  {info.value}
                                </Typography>
                              </Box>
                            </Box>
                          </motion.div>
                        ))}
                      </Box>
                    </motion.div>

                    {/* Social Media Links */}
                    <Box>
                      <Typography
                        sx={{
                          color: 'rgba(148, 163, 184, 0.8)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          mb: 2,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Find Me On
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        {socialLinks.map((social, index) => (
                          <IconButton
                            key={index}
                            component="a"
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              background: 'rgba(15, 23, 42, 0.8)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(148, 163, 184, 0.2)',
                              borderRadius: '12px',
                              p: 1.5,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                background: `${social.color}15`,
                                borderColor: `${social.color}40`,
                                transform: 'translateY(-2px) scale(1.1)',
                                boxShadow: `0 8px 25px ${social.color}30`,
                              },
                            }}
                          >
                            <social.icon 
                              sx={{ 
                                color: 'rgba(203, 213, 225, 0.8)',
                                fontSize: '1.5rem',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  color: social.color,
                                }
                              }} 
                            />
                          </IconButton>
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
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
                  }}
                >
                  <CardContent sx={{ p: 6, position: 'relative', zIndex: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 700,
                        color: 'rgba(248, 250, 252, 0.95)',
                        mb: 2,
                      }}
                    >
                      Send Me A Message
                    </Typography>
                    
                    <Typography
                      sx={{
                        color: 'rgba(203, 213, 225, 0.8)',
                        fontSize: '1rem',
                        mb: 4,
                        fontFamily: '"Inter", sans-serif',
                        lineHeight: 1.6,
                      }}
                    >
                      Have a project in mind? Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </Typography>

                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                          name="name"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              background: 'rgba(15, 23, 42, 0.6)',
                              borderRadius: '12px',
                              '& fieldset': {
                                borderColor: 'rgba(148, 163, 184, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(99, 102, 241, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#60a5fa',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(203, 213, 225, 0.7)',
                              '&.Mui-focused': {
                                color: '#60a5fa',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: 'rgba(248, 250, 252, 0.9)',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          variant="outlined"
                          name="phone"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              background: 'rgba(15, 23, 42, 0.6)',
                              borderRadius: '12px',
                              '& fieldset': {
                                borderColor: 'rgba(148, 163, 184, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(99, 102, 241, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#60a5fa',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(203, 213, 225, 0.7)',
                              '&.Mui-focused': {
                                color: '#60a5fa',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: 'rgba(248, 250, 252, 0.9)',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          variant="outlined"
                          name="email"
                          type="email"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              background: 'rgba(15, 23, 42, 0.6)',
                              borderRadius: '12px',
                              '& fieldset': {
                                borderColor: 'rgba(148, 163, 184, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(99, 102, 241, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#60a5fa',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(203, 213, 225, 0.7)',
                              '&.Mui-focused': {
                                color: '#60a5fa',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: 'rgba(248, 250, 252, 0.9)',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          variant="outlined"
                          name="subject"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              background: 'rgba(15, 23, 42, 0.6)',
                              borderRadius: '12px',
                              '& fieldset': {
                                borderColor: 'rgba(148, 163, 184, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(99, 102, 241, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#60a5fa',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(203, 213, 225, 0.7)',
                              '&.Mui-focused': {
                                color: '#60a5fa',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: 'rgba(248, 250, 252, 0.9)',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your Message"
                          variant="outlined"
                          multiline
                          rows={6}
                          name="message"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              background: 'rgba(15, 23, 42, 0.6)',
                              borderRadius: '12px',
                              '& fieldset': {
                                borderColor: 'rgba(148, 163, 184, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(99, 102, 241, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#60a5fa',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(203, 213, 225, 0.7)',
                              '&.Mui-focused': {
                                color: '#60a5fa',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: 'rgba(248, 250, 252, 0.9)',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                            sx={{
                              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                              borderRadius: '12px',
                              py: 2,
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              textTransform: 'none',
                              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                boxShadow: '0 12px 35px rgba(99, 102, 241, 0.4)',
                                transform: 'translateY(-2px)',
                              },
                            }}
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;