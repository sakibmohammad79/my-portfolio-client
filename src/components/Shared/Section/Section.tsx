"use client";
import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import { colors, sectionBg } from "@/constant/design";

interface SectionProps {
  id?: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
  background?: string;
}

export default function Section({
  id,
  children,
  sx,
  background,
}: SectionProps) {
  return (
    <Box
      id={id}
      className="section-anchor"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: background || colors.background,
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: sectionBg,
          pointerEvents: "none",
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
}