"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { Quote, Star, LinkedinIcon } from "lucide-react";

const Testimonials = () => {
  // Animation variants
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  const testimonial = {
    id: 1,
    name: "Adam Blumenfeld",
    position: "CEO at CSX Labs",
    company: "CSX Labs",
    review: "Mohammad always completed work on time. He's dedicated to learning and can do so autonomously. He's very respectful and diligent. It was a pleasure working with him and I wish him well for his next position!",
    rating: 5,
    avatar: "/api/placeholder/80/80", // Placeholder avatar
    linkedIn: "https://linkedin.com/in/adam-blumenfeld",
    connection: "1st degree connection"
  };

  return (
    <Box
      id="testimonials"
      sx={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
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
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(244, 114, 182, 0.04) 0%, transparent 50%)
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
            linear-gradient(45deg, rgba(148, 163, 184, 0.008) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(148, 163, 184, 0.008) 25%, transparent 25%)
          `,
          backgroundSize: { xs: '40px 40px', md: '60px 60px' },
          opacity: 0.6,
          pointerEvents: 'none',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, maxWidth: 'lg' }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box textAlign="center" mb={{ xs: 6, sm: 8, md: 10 }}>
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
              Testimonials
            </Typography>
            
            <Typography
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1, #94a3b8)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                mt: { xs: 2, sm: 3 },
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                lineHeight: 1.1,
              }}
            >
              What Clients Say
            </Typography>
            
            <Typography
              sx={{
                color: 'rgba(203, 213, 225, 0.8)',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                mt: { xs: 2, sm: 3 },
                fontFamily: '"Inter", sans-serif',
                maxWidth: { xs: '100%', sm: '500px', md: '600px' },
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Real feedback from amazing clients I&apos;ve had the pleasure to work with
            </Typography>
          </Box>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                maxWidth: '800px',
                width: '100%',
                background: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: { xs: '20px', sm: '24px', md: '32px' },
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 35px 70px rgba(99, 102, 241, 0.15)',
                  borderColor: 'rgba(99, 102, 241, 0.3)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.03) 100%)',
                  pointerEvents: 'none',
                }
              }}
            >
              <CardContent sx={{ 
                p: { xs: 4, sm: 5, md: 6, lg: 8 },
                position: 'relative',
                zIndex: 1
              }}>
                {/* Quote Icon */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: { xs: 3, sm: 4 }
                  }}
                >
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                      borderRadius: '50%',
                      p: 2,
                      boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                    }}
                  >
                    <Quote size={32} color="white" />
                  </Box>
                </Box>

                {/* Stars Rating */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 0.5, 
                  mb: { xs: 3, sm: 4 } 
                }}>
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Star 
                        size={24} 
                        fill="#fbbf24" 
                        color="#fbbf24"
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3))'
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>

                {/* Review Text */}
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    fontFamily: '"Inter", sans-serif',
                    color: 'rgba(248, 250, 252, 0.95)',
                    lineHeight: 1.7,
                    fontWeight: 400,
                    textAlign: 'center',
                    mb: { xs: 4, sm: 5, md: 6 },
                    fontStyle: 'italic',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      bottom: '-16px',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                      borderRadius: '1px',
                      opacity: 0.6,
                    }
                  }}
                >
                  {testimonial.review}
                </Typography>

                {/* Client Info */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: { xs: 2, sm: 3 }
                  }}
                >
                  {/* Avatar */}
                  <Box sx={{ position: 'relative' }}>
                    <Avatar
                      sx={{
                        width: { xs: 70, sm: 80 },
                        height: { xs: 70, sm: 80 },
                        background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                        fontSize: '2rem',
                        fontWeight: 700,
                        border: '3px solid rgba(99, 102, 241, 0.2)',
                        boxShadow: '0 8px 25px rgba(99, 102, 241, 0.2)',
                      }}
                    >
                      AB
                    </Avatar>
                    
                    {/* LinkedIn Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -2,
                        right: -2,
                        background: '#0077B5',
                        borderRadius: '50%',
                        p: 0.5,
                        border: '2px solid rgba(15, 23, 42, 0.8)',
                      }}
                    >
                      <LinkedinIcon size={16} color="white" />
                    </Box>
                  </Box>

                  {/* Client Details */}
                  <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography
                      sx={{
                        fontSize: { xs: '1.2rem', sm: '1.3rem' },
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 700,
                        color: 'rgba(248, 250, 252, 0.95)',
                        mb: 0.5,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    
                    <Typography
                      sx={{
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 0.5,
                      }}
                    >
                      {testimonial.position}
                    </Typography>
                    
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        fontFamily: '"Inter", sans-serif',
                        color: 'rgba(148, 163, 184, 0.8)',
                        fontWeight: 500,
                      }}
                    >
                      {testimonial.connection}
                    </Typography>
                  </Box>
                </Box>

                {/* Decorative Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 60,
                    height: 60,
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.05))',
                    borderRadius: '50%',
                    opacity: 0.6,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(168, 85, 247, 0.05))',
                    borderRadius: '50%',
                    opacity: 0.6,
                  }}
                />
              </CardContent>
            </Card>
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Box textAlign="center" mt={{ xs: 6, sm: 8 }}>
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontFamily: '"Inter", sans-serif',
                color: 'rgba(203, 213, 225, 0.8)',
                mb: 2,
              }}
            >
              Ready to work together?
            </Typography>
            
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Let&apos;s create something amazing together!
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Testimonials;