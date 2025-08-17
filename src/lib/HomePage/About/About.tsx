"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "../../../../public/image/aboutPic.png";

const About = () => {
  return (
    <Box
      id="about"
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
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 60% 60%, rgba(244, 114, 182, 0.04) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      <Container sx={{ pb: 12, pt: 8, position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                  width: '60px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                  borderRadius: '1px',
                }
              }}
            >
              About Me
            </Typography>
            
            <Typography
              sx={{
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '4rem' },
                fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                fontWeight: 800,
                color: 'rgba(248, 250, 252, 0.95)',
                letterSpacing: '-0.02em',
                mt: 3,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1, #94a3b8)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Who I Am?
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {/* Image Section */}
          <Grid
            sx={{ display: { xs: "none", md: "block" } }}
            item
            xs={12}
            sm={12}
            md={6}
            lg={5}
            xl={5}
          >
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-30px',
                    left: '-30px',
                    right: '-30px',
                    bottom: '-30px',
                    background: 'linear-gradient(135deg, #60a5fa15, #a78bfa15, #f472b615)',
                    borderRadius: '40px',
                    filter: 'blur(30px)',
                    zIndex: -1,
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    background: 'rgba(15, 23, 42, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, transparent 50%, rgba(168, 85, 247, 0.05) 100%)',
                      pointerEvents: 'none',
                    }
                  }}
                >
                  <Image 
                    height={500} 
                    width={550} 
                    src={aboutImage} 
                    alt="profile"
                    style={{ 
                      borderRadius: "32px",
                      filter: 'brightness(1.1) contrast(1.05)',
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* About Me Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="contained" 
                  sx={{
                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                    border: 'none',
                    borderRadius: '25px',
                    px: 4,
                    py: 1.5,
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                      transition: 'left 0.5s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(99, 102, 241, 0.4)',
                    },
                    '&:hover::before': {
                      left: '100%',
                    }
                  }}
                >
                  About Me
                </Button>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
                    fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: 'rgba(248, 250, 252, 0.95)',
                    letterSpacing: '-0.02em',
                    py: 3,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  I am available for hire as a <br />
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
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)',
                        borderRadius: '2px',
                        opacity: 0.7,
                      }
                    }}
                  >
                    Backend-Focused Developer
                  </Box>{" "}
              
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box
                  sx={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                    borderRadius: '20px',
                    p: 4,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(168, 85, 247, 0.02) 100%)',
                      borderRadius: '20px',
                      pointerEvents: 'none',
                    }
                  }}
                >
                  <Typography
                    sx={{
                      color: 'rgba(203, 213, 225, 0.9)',
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 400,
                      position: 'relative',
                      zIndex: 1,
                      '& strong': {
                        background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 600,
                      }
                    }}
                  >
                    My name is Md. Sakib, and I am a dedicated and passionate Backend-Focused 
                    Web Developer from Bangladesh, currently pursuing a bachelor’s degree in 
                    Computer Science. I have been consistently learning and building expertise 
                    in server-side architecture, API development, and database optimization.
I enjoy exploring new technologies and believe in working hard, never giving up, and tackling 
challenges with determination. My focus is on creating robust, scalable, and efficient 
systems that deliver real impact. Now, I am seeking an opportunity to start my professional development 
career and apply my backend expertise in a real-world environment.
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;