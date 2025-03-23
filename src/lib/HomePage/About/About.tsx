"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "../../../../public/image/aboutPic.png";

const About = () => {
  return (
    <Container sx={{ pb: 12 }}>
      <Box>
        <Typography textAlign="center" color="primary.main" pb={2}>
          ABOUT ME
        </Typography>
        <Typography
          textAlign="center"
          fontWeight={600}
          sx={{
            pb: { xs: 4, sm: 4, md: 4, lg: 8 },
            fontSize: { xs: 35, sm: 35, md: 35, lg: 45 },
          }}
        >
          WHO I AM?
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image height={500} width={550} src={aboutImage} alt="profile" />
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
          <Button variant="contained" color="primary">
            ABOUT ME
          </Button>
          <Typography
            py={2}
            sx={{
              fontSize: { xs: 25, sm: 25, md: 25, lg: 50 },
            }}
            fontWeight={600}
          >
            I AM AVAILABLE FOR <br />
            <Box component="span" color="primary.main">
              WEB DEVELOPMENT
            </Box>{" "}
            PROJECTS
          </Typography>
          <Typography>
            My name is Md. Sakib, and I am 23 years old. I am a dedicated and
            passionate Full Stack Web Developer from Bangladesh. Currently, I am
            pursuing a bachelor&apos;s degree in Computer Science. I always try
            to explore new technologies, and I believe in working hard and never
            giving up. Challenges motivate me, and I approach each project with
            determination. I always strive to provide the best solutions
            possible. For the past year, I have been consistently learning Full
            Stack development. Now, I am seeking an opportunity to start my
            professional development career.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
