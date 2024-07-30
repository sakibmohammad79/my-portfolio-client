import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import profile from "./../../../../public/image/profile-image.png";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { getUserInfo } from "@/services/auth.services";

const Banner = () => {
  return (
    <Container sx={{ pb: 12 }}>
      <Stack
        py={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Box>
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
        </Box>
        <Box height={550} width={750} sx={{ boxShadow: 1 }}>
          <Image
            style={{ borderRadius: "6px" }}
            height={500}
            width={700}
            src={profile}
            alt="profile"
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default Banner;
