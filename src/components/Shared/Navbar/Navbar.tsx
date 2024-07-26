import { Button, Container, Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          color="primary.main"
          variant="h4"
          component="h1"
          fontWeight={600}
        >
          PORTFOLIO
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography>About Me</Typography>
          <Typography>Project</Typography>
          <Typography>Contact Me</Typography>
          <Typography>Blog</Typography>
          <Typography>Dashboard</Typography>
        </Stack>
        <Button>Resume</Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
