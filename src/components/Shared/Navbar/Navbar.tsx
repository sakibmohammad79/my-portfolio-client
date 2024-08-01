import { getUserInfo } from "@/services/auth.services";
import dynamic from "next/dynamic";
import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const AuthButton = dynamic(() => import("@/lib/UI/AuthButton/AuthButton"), {
    ssr: false,
  });
  const [userRole, setUserRole] = React.useState("");

  React.useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUserRole(userInfo?.role);
    }
  }, [userRole]);
  return (
    <AppBar sx={{ py: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            PORTFOLIO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Stack
                px={1}
                direction="column"
                justifyContent="space-between"
                gap={4}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      color: "primary.white",
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
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="h1"
            sx={{
              mr: 2,
              display: { xs: "none", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PORTFOLIO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Stack pl={1} direction="row" alignItems="center" gap={3}>
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

              {userRole && (
                <Typography color="white" component={Link} href="dashboard">
                  DASHBOARD
                </Typography>
              )}
            </Stack>
          </Box>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <AuthButton></AuthButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
