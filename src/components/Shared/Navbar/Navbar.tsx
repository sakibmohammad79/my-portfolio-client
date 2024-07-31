import DownloadResume from "@/lib/UI/ResumeDownload/ResumeDownload";
import { getUserInfo } from "@/services/auth.services";

import { Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const AuthButton = dynamic(() => import("@/lib/UI/AuthButton/AuthButton"), {
    ssr: false,
  });
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUserRole(userInfo?.role);
    }
  }, [userRole]);
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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <AuthButton></AuthButton>
          <DownloadResume></DownloadResume>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
