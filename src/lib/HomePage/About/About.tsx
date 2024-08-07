import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
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
          <Image height={500} width={550} src={aboutImage} alt="profile" />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
          <Button>ABOUT ME</Button>
          <Typography
            py={2}
            sx={{
              fontSize: { xs: 25, sm: 25, md: 25, lg: 50 },
            }}
            fontWeight={600}
          >
            I AM AVAILABLE FOR<br></br>{" "}
            <Box component="span" color="primary.main">
              WEB DEVELOPMENT
            </Box>{" "}
            PROJECTS
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
