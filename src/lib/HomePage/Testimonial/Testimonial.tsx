"use client";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { colors, radii } from "@/constant/design";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Quote, Star, Linkedin } from "lucide-react";

const testimonial = {
  id: 1,
  name: "Adam Blumenfeld",
  position: "CEO at CSX Labs",
  review:
    "Mohammad always completed work on time. He's dedicated to learning and can do so autonomously. He's very respectful and diligent. It was a pleasure working with him and I wish him well for his next position!",
  rating: 5,
  avatar: "https://i.postimg.cc/bwDdxzmf/image.png",
  linkedIn: "https://linkedin.com/in/adam-blumenfeld",
  connection: "1st degree connection",
};

const Testimonials = () => {
  return (
    <Section id="testimonials" sx={{ py: { xs: 7, sm: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              What Clients <Box component="span" sx={{ color: colors.primary }}>Say</Box>
            </>
          }
          subtitle="Real feedback from amazing clients I've had the pleasure to work with."
        />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: 800,
              mx: "auto",
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: radii.xl,
              p: { xs: 4, sm: 6, md: 8 },
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: colors.borderHover,
                transform: "translateY(-4px)",
                boxShadow: `0 30px 60px ${colors.primaryGlow}`,
              },
            }}
          >
            {/* Decorative quote */}
            <Box
              sx={{
                position: "absolute",
                top: -20,
                right: -10,
                fontSize: { xs: "9rem", md: "12rem" },
                fontFamily: "Georgia, serif",
                color: colors.primarySofter,
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              &rdquo;
            </Box>

            {/* Quote icon */}
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: radii.md,
                background: colors.primary,
                color: colors.background,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 4,
              }}
            >
              <Quote size={26} strokeWidth={2.4} />
            </Box>

            {/* Stars */}
            <Box sx={{ display: "flex", gap: 0.75, mb: 4 }}>
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <Star size={22} fill={colors.primary} color={colors.primary} />
                </motion.div>
              ))}
            </Box>

            {/* Review */}
            <Typography
              sx={{
                color: colors.textPrimary,
                fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.35rem" },
                lineHeight: 1.75,
                fontWeight: 400,
                mb: 6,
              }}
            >
              &ldquo;{testimonial.review}&rdquo;
            </Typography>

            {/* Author */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                flexWrap: "wrap",
              }}
            >
              <Box
                component="img"
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `2px solid ${colors.borderHover}`,
                  background: colors.backgroundSecondary,
                }}
              />
              <Box sx={{ flex: 1, minWidth: 180 }}>
                <Typography sx={{ color: colors.textPrimary, fontWeight: 700, fontSize: "1.1rem" }}>
                  {testimonial.name}
                </Typography>
                <Typography sx={{ color: colors.primary, fontWeight: 600, fontSize: "0.9rem" }}>
                  {testimonial.position}
                </Typography>
                <Typography sx={{ color: colors.textMuted, fontSize: "0.8rem", fontWeight: 500 }}>
                  {testimonial.connection}
                </Typography>
              </Box>
              <Box
                component="a"
                href={testimonial.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${testimonial.name} on LinkedIn`}
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: radii.md,
                  border: `1px solid ${colors.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.textSecondary,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    color: colors.primary,
                    borderColor: colors.borderHover,
                    background: colors.primarySofter,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Linkedin size={20} />
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Testimonials;