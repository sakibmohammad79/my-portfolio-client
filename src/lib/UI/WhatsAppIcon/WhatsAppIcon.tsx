"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const COLORS = {
  whatsapp: "#25D366",
  whatsappHover: "#128C7E",
} as const;

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  showAfter?: number;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = "8801234567890",
  message = "Hello! I would like to discuss a project with you.",
  showAfter = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > showAfter);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showAfter]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <TooltipProvider>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.6 }}
            className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6"
          >
            <div className="relative">
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <button
                      onClick={handleWhatsAppClick}
                      aria-label="Chat on WhatsApp"
                      className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-white transition-all duration-300 sm:h-14 sm:w-14"
                      style={{
                        backgroundColor: COLORS.whatsapp,
                        boxShadow: `0 8px 25px ${COLORS.whatsapp}40`,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = COLORS.whatsappHover)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = COLORS.whatsapp)
                      }
                    >
                      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                    </button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-[#075E54] text-white">
                  Chat with me on WhatsApp!
                </TooltipContent>
              </Tooltip>

              {/* Pulse ring */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 animate-ping rounded-full border-2"
                style={{ borderColor: COLORS.whatsapp }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TooltipProvider>
  );
};

export default FloatingWhatsApp;