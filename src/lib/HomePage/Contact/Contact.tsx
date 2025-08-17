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
  Alert,
  CircularProgress,
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useState, useEffect } from "react";
import { useAddContactMutation } from "@/redux/api/contact";


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

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const [addContact, { isLoading, error, isSuccess }] = useAddContactMutation();

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = 'Subject must be less than 100 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await addContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      }).unwrap();

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      
    } catch (err: any) {
      setSubmitStatus('error');
      setSubmitMessage(err?.data?.message || 'Failed to send message. Please try again.');
    }
  };

  // Clear status messages after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

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
          backgroundSize: { xs: '30px 30px', sm: '40px 40px', md: '60px 60px' },
          opacity: 0.4,
          pointerEvents: 'none',
        }
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Box sx={{ 
          pb: { xs: 6, sm: 8, md: 10, lg: 12 }, 
          pt: { xs: 6, sm: 8, md: 10, lg: 12 } 
        }}>
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Box textAlign="center" pb={{ xs: 4, sm: 6, md: 8 }}>
              <Typography
                sx={{
                  color: 'rgba(99, 102, 241, 0.9)',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
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
                    width: { xs: '60px', sm: '70px', md: '80px' },
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
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem', xl: '3.5rem' },
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1, #94a3b8)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                  mt: { xs: 2, sm: 2.5, md: 3 },
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  lineHeight: { xs: 1.2, sm: 1.1, md: 1 }
                }}
              >
                Get In Touch
              </Typography>
              
              <Typography
                sx={{
                  color: 'rgba(203, 213, 225, 0.8)',
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                  mt: { xs: 2, sm: 2.5, md: 3 },
                  fontFamily: '"Inter", sans-serif',
                  maxWidth: { xs: '100%', sm: '500px', md: '600px' },
                  mx: 'auto',
                  lineHeight: 1.6,
                  px: { xs: 1, sm: 0 }
                }}
              >
                Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
              </Typography>
            </Box>
          </motion.div>

          {/* Contact Content */}
          <Grid container spacing={{ xs: 3, sm: 4, md: 5, lg: 6 }} alignItems="stretch">
            {/* Contact Information Card */}
            <Grid item xs={12} lg={5}>
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
                    borderRadius: { xs: '16px', sm: '20px', md: '24px' },
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
                  <CardContent sx={{ 
                    p: { xs: 3, sm: 4, md: 5, lg: 6 }, 
                    position: 'relative', 
                    zIndex: 1, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}>
                    {/* Profile Section */}
                    <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4 } }}>
                      <Box
                        sx={{
                          width: { xs: 80, sm: 100, md: 120 },
                          height: { xs: 80, sm: 100, md: 120 },
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: { xs: 2, sm: 2.5, md: 3 },
                          boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                          p: '2px',
                          overflow: 'hidden'
                        }}
                      >
                        <Box
                          component="img"
                          src="https://i.postimg.cc/rFgZTjJp/121812378.png"
                          alt="Md. Sakib"
                          sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            background: '#f1f5f9'
                          }}
                        />
                      </Box>
                      
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 700,
                          color: 'rgba(248, 250, 252, 0.95)',
                          mb: 1,
                          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
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
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        FullStack Web Developer
                      </Typography>
                      
                      <Typography
                        sx={{
                          color: 'rgba(203, 213, 225, 0.8)',
                          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                          mt: { xs: 1.5, sm: 2 },
                          fontFamily: '"Inter", sans-serif',
                          lineHeight: 1.6,
                          px: { xs: 1, sm: 0 }
                        }}
                      >
                        Available for freelance opportunities. Let&apos;s connect and discuss your next project!
                      </Typography>
                    </Box>

                    {/* Contact Information */}
                    <motion.div variants={stagger}>
                      <Box sx={{ mb: { xs: 3, sm: 4 }, flexGrow: 1 }}>
                        {contactInfo.map((info, index) => (
                          <motion.div key={index} variants={fadeInUp}>
                            <Box
                              component={info.href !== '#' ? 'a' : 'div'}
                              href={info.href !== '#' ? info.href : undefined}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: { xs: 2, sm: 2.5, md: 3 },
                                p: { xs: 1.5, sm: 2 },
                                borderRadius: { xs: '12px', sm: '14px', md: '16px' },
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
                                  borderRadius: { xs: '8px', sm: '10px', md: '12px' },
                                  p: { xs: 1, sm: 1.25, md: 1.5 },
                                  mr: { xs: 2, sm: 2.5, md: 3 },
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  minWidth: { xs: '36px', sm: '42px', md: '48px' },
                                  minHeight: { xs: '36px', sm: '42px', md: '48px' },
                                }}
                              >
                                <info.icon sx={{ 
                                  color: 'white', 
                                  fontSize: { xs: '1.2rem', sm: '1.35rem', md: '1.5rem' } 
                                }} />
                              </Box>
                              <Box sx={{ minWidth: 0, flex: 1 }}>
                                <Typography
                                  sx={{
                                    color: 'rgba(148, 163, 184, 0.8)',
                                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
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
                                    fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 500,
                                    wordBreak: 'break-word',
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
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                          fontWeight: 600,
                          mb: { xs: 1.5, sm: 2 },
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Find Me On
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        gap: { xs: 1.5, sm: 2 }, 
                        flexWrap: 'wrap',
                        justifyContent: { xs: 'center', sm: 'flex-start' }
                      }}>
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
                              borderRadius: { xs: '8px', sm: '10px', md: '12px' },
                              p: { xs: 1, sm: 1.25, md: 1.5 },
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
                                fontSize: { xs: '1.2rem', sm: '1.35rem', md: '1.5rem' },
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
            <Grid item xs={12} lg={7}>
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
                    borderRadius: { xs: '16px', sm: '20px', md: '24px' },
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
                  <CardContent sx={{ 
                    p: { xs: 3, sm: 4, md: 5, lg: 6 }, 
                    position: 'relative', 
                    zIndex: 1 
                  }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 700,
                        color: 'rgba(248, 250, 252, 0.95)',
                        mb: { xs: 1.5, sm: 2 },
                        fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' }
                      }}
                    >
                      Send Me A Message
                    </Typography>
                    
                    <Typography
                      sx={{
                        color: 'rgba(203, 213, 225, 0.8)',
                        fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                        mb: { xs: 3, sm: 4 },
                        fontFamily: '"Inter", sans-serif',
                        lineHeight: 1.6,
                      }}
                    >
                      Have a project in mind? Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </Typography>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <Alert 
                        icon={<CheckCircleIcon />} 
                        severity="success" 
                        sx={{ 
                          mb: 3,
                          background: 'rgba(34, 197, 94, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.3)',
                          '& .MuiAlert-message': {
                            color: 'rgba(34, 197, 94, 0.9)'
                          }
                        }}
                      >
                        {submitMessage}
                      </Alert>
                    )}

                    {submitStatus === 'error' && (
                      <Alert 
                        icon={<ErrorIcon />} 
                        severity="error" 
                        sx={{ 
                          mb: 3,
                          background: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          '& .MuiAlert-message': {
                            color: 'rgba(239, 68, 68, 0.9)'
                          }
                        }}
                      >
                        {submitMessage}
                      </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit}>
                      <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Full Name"
                            variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            disabled={isLoading}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                background: 'rgba(15, 23, 42, 0.6)',
                                borderRadius: { xs: '8px', sm: '10px', md: '12px' },
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                '& fieldset': {
                                  borderColor: errors.name ? 'rgba(239, 68, 68, 0.5)' : 'rgba(148, 163, 184, 0.3)',
                                },
                                '&:hover fieldset': {
                                  borderColor: errors.name ? 'rgba(239, 68, 68, 0.7)' : 'rgba(99, 102, 241, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: errors.name ? 'rgba(239, 68, 68, 0.8)' : '#60a5fa',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(203, 213, 225, 0.7)',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                '&.Mui-focused': {
                                  color: errors.name ? 'rgba(239, 68, 68, 0.8)' : '#60a5fa',
                                },
                                '&.Mui-error': {
                                  color: 'rgba(239, 68, 68, 0.8)',
                                },
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'rgba(248, 250, 252, 0.9)',
                                py: { xs: 1.25, sm: 1.5 }
                              },
                              '& .MuiFormHelperText-root': {
                                color: 'rgba(239, 68, 68, 0.8)',
                                fontSize: '0.75rem',
                                mt: 1,
                              }
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            variant="outlined"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            disabled={isLoading}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                background: 'rgba(15, 23, 42, 0.6)',
                                borderRadius: { xs: '8px', sm: '10px', md: '12px' },
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                '& fieldset': {
                                  borderColor: errors.email ? 'rgba(239, 68, 68, 0.5)' : 'rgba(148, 163, 184, 0.3)',
                                },
                                '&:hover fieldset': {
                                  borderColor: errors.email ? 'rgba(239, 68, 68, 0.7)' : 'rgba(99, 102, 241, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: errors.email ? 'rgba(239, 68, 68, 0.8)' : '#60a5fa',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(203, 213, 225, 0.7)',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                '&.Mui-focused': {
                                  color: errors.email ? 'rgba(239, 68, 68, 0.8)' : '#60a5fa',
                                },
                                '&.Mui-error': {
                                  color: 'rgba(239, 68, 68, 0.8)',
                                },
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'rgba(248, 250, 252, 0.9)',
                                py: { xs: 1.25, sm: 1.5 }
                              },
                              '& .MuiFormHelperText-root': {
                                color: 'rgba(239, 68, 68, 0.8)',
                                fontSize: '0.75rem',
                                mt: 1,
                              }
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            variant="outlined"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            error={!!errors.subject}
                            helperText={errors.subject}
                            disabled={isLoading}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                background: 'rgba(15, 23, 42, 0.6)',
                                borderRadius: { xs: '8px', sm: '10px', md: '12px' },
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                '& fieldset': {
                                  borderColor: errors.subject ? 'rgba(239, 68, 68, 0.5)' : 'rgba(148, 163, 184, 0.3)',
                                },
                                '&:hover fieldset': {
                                  borderColor: errors.subject ? 'rgba(239, 68, 68, 0.7)' : 'rgba(99, 102, 241, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: errors.subject ? 'rgba(239, 68, 68, 0.8)' : '#60a5fa',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(203, 213, 225, 0.7)',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                '&.Mui-focused': {
                                  color: errors.subject ? 'rgba(239, 68, 68, 0.8)' : '#60a5fa',
                                },
                                '&.Mui-error': {
                                  color: 'rgba(239, 68, 68, 0.8)',
                                },
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'rgba(248, 250, 252, 0.9)',
                                py: { xs: 1.25, sm: 1.5 }
                              },
                              '& .MuiFormHelperText-root': {
                                color: 'rgba(239, 68, 68, 0.8)',
                                fontSize: '0.75rem',
                                mt: 1,
                              }
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
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message || `${formData.message.length}/1000 characters`}
                            disabled={isLoading}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                background: 'rgba(15, 23, 42, 0.6)',
                                borderRadius: { xs: '8px', sm: '10px', md: '12px' },
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                '& fieldset': {
                                  borderColor: errors.message ? 'rgba(239, 68, 68, 0.5)' : 'rgba(148, 163, 184, 0.3)',
                                },
                                '&:hover fieldset': {
                                  borderColor: errors.message ? 'rgba(239, 68, 68, 0.7)' : 'rgba(99, 102, 241, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: errors.message ? 'rgba(239, 68, 68, 0.8)' : '#60a5fa',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(203, 213, 225, 0.7)',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                '&.Mui-focused': {
                                  color: errors.message ? 'rgba(239, 68, 68, 0.8)' : '#60a5fa',
                                },
                                '&.Mui-error': {
                                  color: 'rgba(239, 68, 68, 0.8)',
                                },
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'rgba(248, 250, 252, 0.9)',
                              },
                              '& .MuiFormHelperText-root': {
                                color: errors.message ? 'rgba(239, 68, 68, 0.8)' : 'rgba(148, 163, 184, 0.6)',
                                fontSize: '0.75rem',
                                mt: 1,
                                display: 'flex',
                                justifyContent: 'space-between',
                              }
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <motion.div
                            whileHover={{ scale: isLoading ? 1 : 1.02 }}
                            whileTap={{ scale: isLoading ? 1 : 0.98 }}
                          >
                            <Button
                              fullWidth
                              type="submit"
                              variant="contained"
                              disabled={isLoading}
                              endIcon={
                                isLoading ? (
                                  <CircularProgress size={20} color="inherit" />
                                ) : (
                                  <SendIcon />
                                )
                              }
                              sx={{
                                background: isLoading 
                                  ? 'rgba(99, 102, 241, 0.3)' 
                                  : 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                borderRadius: { xs: '8px', sm: '10px', md: '12px' },
                                py: { xs: 1.5, sm: 1.75, md: 2 },
                                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                                fontWeight: 600,
                                textTransform: 'none',
                                boxShadow: isLoading 
                                  ? 'none' 
                                  : '0 8px 25px rgba(99, 102, 241, 0.3)',
                                transition: 'all 0.3s ease',
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                '&:hover': isLoading ? {} : {
                                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                  boxShadow: '0 12px 35px rgba(99, 102, 241, 0.4)',
                                  transform: 'translateY(-2px)',
                                },
                                '&:disabled': {
                                  background: 'rgba(99, 102, 241, 0.3)',
                                  color: 'rgba(255, 255, 255, 0.5)',
                                }
                              }}
                            >
                              {isLoading ? 'Sending...' : 'Send Message'}
                            </Button>
                          </motion.div>
                        </Grid>
                      </Grid>
                    </Box>
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