"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { colors } from "@/constant/design";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box textAlign={align} mb={{ xs: 6, md: 9 }}>
        {eyebrow && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              justifyContent: isCenter ? "center" : "flex-start",
              mb: 2.5,
            }}
          >
            <Box
              sx={{ width: 26, height: 2, bgcolor: colors.primary, borderRadius: 1 }}
            />
            <Typography
              sx={{
                color: colors.primary,
                fontWeight: 600,
                letterSpacing: "0.22em",
                fontSize: { xs: "0.7rem", md: "0.8rem" },
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </Typography>
            {isCenter && (
              <Box
                sx={{ width: 26, height: 2, bgcolor: colors.primary, borderRadius: 1 }}
              />
            )}
          </Box>
        )}
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem", lg: "3.25rem" },
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: colors.textPrimary,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            sx={{
              color: colors.textMuted,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              mt: 2.5,
              maxWidth: 640,
              mx: isCenter ? "auto" : 0,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
}