import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import aboutImage from "../../../../public/image/profile.png";

const About = () => {
  return (
    <Container sx={{ pb: 12 }}>
      <Box>
        <Typography textAlign="center" color="primary.main" pb={2}>
          About Me
        </Typography>
        <Typography
          textAlign="center"
          variant="h3"
          component="h1"
          fontWeight={600}
          pb={8}
        >
          Who I Am?
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
          <Image
            style={{ borderRadius: "10px", boxShadow: "24px" }}
            height={400}
            width={450}
            src={aboutImage}
            alt="Image"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
          <Button>ABOUT ME</Button>
          <Typography py={2} variant="h3" component="h1" fontWeight={600}>
            I AM AVAILABLE FOR<br></br>{" "}
            <Box color="primary.main">WEB DEVELOPMENT</Box> PROJECTS
          </Typography>
          <Typography>
            My name is Md. Sakib, I am 21 years old. I am a dedicated and
            passionate Full Stack Web Developer. I am from Bangladesh.
            Currently, I am studying for a bachelors degree in computer science.
            I am always try to explore new technologies. I believe in working
            hard and never giving up. Challenges motivate me, and I approach
            each project with determination. I always strive to provide the best
            solutions possible. My goal is to become a senior developer and
            achieve success in my life. Last one year I consistently lear Full
            Stack development. Now I am seeking an opportunity to start my
            professional development career.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
