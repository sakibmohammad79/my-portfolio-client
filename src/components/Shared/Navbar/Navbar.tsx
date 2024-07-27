import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={3}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          color="primary.main"
          variant="h4"
          fontWeight={600}
          component={Link}
          href="/"
        >
          PORTFOLIO
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="about-me">
            About Me
          </Typography>
          <Typography component={Link} href="about-me">
            Project
          </Typography>
          <Typography component={Link} href="contact-me">
            Contact Me
          </Typography>
          <Typography component={Link} href="blog">
            Blog
          </Typography>
          <Typography component={Link} href="dashboard">
            Dashboard
          </Typography>
        </Stack>
        <Button>Resume</Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
