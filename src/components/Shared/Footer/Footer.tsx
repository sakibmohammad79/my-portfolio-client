import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Grid spacing={4} container alignItems="center" justifyContent="center">
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            {" "}
            <Typography color="white" component={Link} href="#skill">
              SKILL
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            <Typography color="white" component={Link} href="#about">
              ABOUT
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            <Typography color="white" component={Link} href="#project">
              PROJECT
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            <Typography color="white" component={Link} href="#education">
              EDUCATION
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            <Typography color="white" component={Link} href="#contact">
              CONTACTS
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            <Typography color="white" component={Link} href="#blog">
              BLOG
            </Typography>
          </Grid>
        </Grid>

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

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          pt={3}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography color="white">
              @Sakib PortFolio. All Rights Reserved
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography
              color="primary.main"
              fontWeight={600}
              variant="h4"
              component="h1"
            >
              SAKIB PORTFOLIO
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography color="white">
              Privacy Policy! Terms & Conditions
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
