"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import profile from "./../../../../public/image/profile-image.png";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadResume from "@/lib/UI/ResumeDownload/ResumeDownload";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{ pt: { xs: 14, md: 20, sm: 14, lg: 20 } }}
        pb={12}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={7}
          xl={7}
          justifyContent="center"
          alignItems="center"
        >
          <Typography>WELCOME TO MY WORLD</Typography>
          <Typography
            py={3}
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: 25, sm: 25, md: 25, lg: 50 },
            }}
            fontWeight={600}
          >
            HI, I’M{" "}
            <Box component="span" color="primary.main">
              MD. SAKIB
            </Box>{" "}
            <br></br>A FULL STACK DEVELOPER
          </Typography>
          <Typography>
            I am a dedicated and passionate full stack web developer. I believe
            in working hard and never giving up. Challenges motivate me, and I
            approach each project with determination. I always strive to provide
            the best solutions possible. My goal is to become a senior developer
            and achieve success.
          </Typography>
          <Typography pt={4}>FIND WITH ME</Typography>
          <Stack
            direction="row"
            sx={{ gap: { xs: 2, sm: 2, md: 2, lg: 4 } }}
            py={2}
          >
            <Link href="https://www.linkedin.com/in/md-sakib79/">
              <Box sx={{ boxShadow: 1, p: 1 }}>
                <LinkedInIcon
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  fontSize="large"
                ></LinkedInIcon>
              </Box>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100011373134077">
              <Box sx={{ boxShadow: 1, p: 1 }}>
                <FacebookIcon
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  fontSize="large"
                ></FacebookIcon>
              </Box>
            </Link>
            <Link href="https://www.instagram.com/md_sakib75/">
              <Box sx={{ boxShadow: 1, p: 1 }}>
                <InstagramIcon
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  fontSize="large"
                ></InstagramIcon>
              </Box>
            </Link>
            <Link href="https://github.com/sakibmohammad79">
              <Box sx={{ boxShadow: 1, p: 1 }}>
                <GitHubIcon
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  fontSize="large"
                ></GitHubIcon>
              </Box>
            </Link>
          </Stack>
          <Box mt={2}>
            <DownloadResume />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              style={{ borderRadius: "50%", objectFit: "cover" }}
              height={400}
              width={500}
              src={profile}
              alt="profile"
            />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
