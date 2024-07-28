import { Box, Button, Container, Stack, Typography } from "@mui/material";
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
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={8}
      >
        <Image
          style={{ borderRadius: "10px", boxShadow: "24px" }}
          height={400}
          width={500}
          src={aboutImage}
          alt="Image"
        />

        <Box>
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
        </Box>
      </Stack>
    </Container>
  );
};

export default About;
