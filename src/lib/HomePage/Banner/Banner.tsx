"use client";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import profile from "./../../../../public/image/profile-image.png";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadResume from "@/lib/UI/ResumeDownload/ResumeDownload";
import { useTheme } from "@mui/material/styles";

const Banner = () => {
  return (
    <Container>
      <Grid container spacing={4} pt={20} pb={12}>
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
            fontSize={60}
            fontWeight={600}
          >
            HI, I’m{" "}
            <Box component="span" color="primary.main">
              Md. Sakib
            </Box>{" "}
            <br></br>A Fullstack Developer
          </Typography>
          <Typography>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </Typography>
          <Typography pt={4}>FIND WITH ME</Typography>
          <Stack direction="row" gap={4} py={2}>
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
            <Link href="">
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
            <Link href="">
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
          <Image
            style={{ borderRadius: "6px" }}
            height={400}
            width={500}
            src={profile}
            alt="profile"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
