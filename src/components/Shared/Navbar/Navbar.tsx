import DownloadResume from "@/components/UI/ResumeDownload/ResumeDownload";
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
          <Typography
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
            component={Link}
            href="#skill"
          >
            SKILL
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
            component={Link}
            href="#about"
          >
            ABOUT
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
            component={Link}
            href="#project"
          >
            PROJECT
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
            component={Link}
            href="#education"
          >
            EDUCATION
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
            component={Link}
            href="#contact"
          >
            CONTACTS
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
            component={Link}
            href="#blog"
          >
            BLOG
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
            component={Link}
            href="dashboard"
          >
            DASHBOARD
          </Typography>
        </Stack>
        <DownloadResume></DownloadResume>
      </Stack>
    </Container>
  );
};

export default Navbar;
