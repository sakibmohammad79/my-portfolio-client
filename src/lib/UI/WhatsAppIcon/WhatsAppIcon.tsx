"use client";
import React, { useState, useEffect } from 'react';
import { Box, Fab, Zoom, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion, AnimatePresence } from 'framer-motion';

// Color scheme to match your design
const COLORS = {
  whatsapp: '#25D366',
  whatsappHover: '#128C7E',
  whatsappDark: '#075E54',
} as const;

interface FloatingWhatsAppProps {
  phoneNumber: string; // WhatsApp number with country code (without +)
  message?: string; // Pre-filled message
  showAfter?: number; // Show after scrolling (pixels)
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '8801234567890', // আপনার নাম্বার দিন
  message = 'Hello! I would like to discuss a project with you.',
  showAfter = 300
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show/hide based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Check initial position
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6
          }}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1000,
          }}
        >
          <Tooltip 
            title="Chat with me on WhatsApp!" 
            placement="left"
            arrow
            sx={{
              '& .MuiTooltip-tooltip': {
                backgroundColor: COLORS.whatsappDark,
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '8px',
              },
              '& .MuiTooltip-arrow': {
                color: COLORS.whatsappDark,
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Fab
                onClick={handleWhatsAppClick}
                sx={{
                  backgroundColor: COLORS.whatsapp,
                  color: 'white',
                  width: { xs: '56px', sm: '64px' },
                  height: { xs: '56px', sm: '64px' },
                  boxShadow: `0 8px 25px ${COLORS.whatsapp}40`,
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
                    background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                    transform: 'scale(0)',
                    transition: 'transform 0.6s ease',
                  },
                  '&:hover': {
                    backgroundColor: COLORS.whatsappHover,
                    boxShadow: `0 12px 35px ${COLORS.whatsapp}60`,
                    transform: 'translateY(-2px)',
                  },
                  '&:hover::before': {
                    transform: 'scale(1)',
                  },
                  '&:active': {
                    transform: 'translateY(0px) scale(0.98)',
                  }
                }}
              >
                <motion.div
                  animate={isHovered ? {
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5, ease: "easeInOut" }
                  } : {}}
                >
                  <WhatsAppIcon 
                    sx={{ 
                      fontSize: { xs: '28px', sm: '32px' },
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                    }} 
                  />
                </motion.div>
              </Fab>
            </motion.div>
          </Tooltip>

          {/* Pulse Animation Ring */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '56px', sm: '64px' },
              height: { xs: '56px', sm: '64px' },
              borderRadius: '50%',
              border: `2px solid ${COLORS.whatsapp}`,
              pointerEvents: 'none',
              animation: 'whatsappPulse 2s infinite',
              '@keyframes whatsappPulse': {
                '0%': {
                  transform: 'translate(-50%, -50%) scale(1)',
                  opacity: 1,
                },
                '100%': {
                  transform: 'translate(-50%, -50%) scale(1.4)',
                  opacity: 0,
                }
              }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;