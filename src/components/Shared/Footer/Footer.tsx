import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="white" component={Link} href="#skill">
            SKILL
          </Typography>
          <Typography color="white" component={Link} href="#about">
            ABOUT
          </Typography>
          <Typography color="white" component={Link} href="#project">
            PROJECT
          </Typography>
          <Typography color="white" component={Link} href="#education">
            EDUCATION
          </Typography>
          <Typography color="white" component={Link} href="#contact">
            CONTACTS
          </Typography>
          <Typography color="white" component={Link} href="#blog">
            BLOG
          </Typography>
          <Typography color="white" component={Link} href="dashboard">
            DASHBOARD
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="center" gap={4} py={3}>
          <Link href="https://www.linkedin.com/in/md-sakib79/">
            <LinkedInIcon
              sx={{
                color: "white",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              fontSize="large"
            ></LinkedInIcon>
          </Link>
          <Link href="">
            <FacebookIcon
              sx={{
                color: "white",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              fontSize="large"
            ></FacebookIcon>
          </Link>
          <Link href="">
            <InstagramIcon
              sx={{
                color: "white",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              fontSize="large"
            ></InstagramIcon>
          </Link>
          <Link href="https://github.com/sakibmohammad79">
            <GitHubIcon
              sx={{
                color: "white",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              fontSize="large"
            ></GitHubIcon>
          </Link>
        </Stack>
        <Box
          sx={{
            bgcolor: "white",
            border: "2px dashed #000",
          }}
        ></Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          pt={3}
        >
          <Typography color="white">
            @Sakib PortFolio. All Rights Reserved
          </Typography>
          <Typography
            color="primary.main"
            fontWeight={600}
            variant="h4"
            component="h1"
          >
            SAKIB PORTFOLIO
          </Typography>
          <Typography color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
