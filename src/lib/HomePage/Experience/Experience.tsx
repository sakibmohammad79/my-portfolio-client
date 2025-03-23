"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

// Experience Data (Easily Add More Here)
const experiences = [
  {
    id: 1,
    position: "Software Engineer",
    company: "CSX Labs",
    duration: "October 2024 - February 2025",
    description:
      "Worked as a Full Stack Software Engineer, developing scalable web applications using Next.js, TypeScript, PostgreSQL, and Prisma.",
  },
  // Add more experiences here in the future
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Experience = () => {
  return (
    <Container>
      <Box sx={{ pb: 12, pt: 12 }}>
        {/* Heading */}
        <Box
          textAlign="center"
          pb={6}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Typography
            pb={2}
            color="primary.main"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 1.5,
            }}
          >
            EXPERIENCE
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 30, md: 30, sm: 30, lg: 45 },
              fontWeight: 700,
              color: "#333",
            }}
            pb={2}
          >
            Work Experience
          </Typography>
        </Box>

        {/* Experience Cards (Dynamically Rendered) */}
        <Grid container spacing={4} justifyContent="center">
          {experiences.map((exp) => (
            <Grid
              key={exp.id}
              item
              xs={12}
              sm={8}
              md={6}
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                  p: 3,
                  transition: "transform 0.3s ease-in-out",
                  background: "linear-gradient(135deg, #ffffff, #f8f8f8)",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{ color: "#222", mb: 1 }}
                  >
                    {exp.position}
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontWeight={600}
                    sx={{ fontSize: 18, mb: 1 }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    py={1}
                    sx={{ fontSize: 16, fontStyle: "italic" }}
                  >
                    {exp.duration}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: 15, lineHeight: 1.6 }}
                  >
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Experience;
