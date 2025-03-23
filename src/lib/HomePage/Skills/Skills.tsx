"use client";
import { useGetAllSkillQuery } from "@/redux/api/skillApi";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  const { data } = useGetAllSkillQuery({});

  return (
    <Container>
      <Box textAlign="center" mb={4}>
        <Typography
          sx={{
            fontSize: { xs: 35, md: 35, lg: 40 },
          }}
          color="primary.main"
          fontWeight={600}
        >
          MY SKILLS
        </Typography>
        <Typography pb={4}>
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {data?.map((skill: any) => (
          <Grid item xs={6} sm={6} md={4} lg={2} key={skill.id}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  boxShadow: 2,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 180,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 100,
                  }}
                >
                  <Image
                    src={skill?.image}
                    alt="skill image"
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography color="primary.main" pt={2} fontWeight={600}>
                  {skill?.parcentage}%
                </Typography>
              </Box>
              <Typography textAlign="center" fontWeight={600} pt={2}>
                {skill.name}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
