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
import { Stack, useScrollTrigger } from "@mui/material";

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

  // Scroll trigger for glassmorphism effect
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  React.useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUserRole(userInfo?.role);
    }
  }, [userRole]);

  return (
    <AppBar 
      elevation={0}
      sx={{ 
        py: 1,
        background: trigger 
          ? 'rgba(15, 23, 42, 0.95)' 
          : 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: trigger 
          ? '1px solid rgba(148, 163, 184, 0.1)' 
          : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
          pointerEvents: 'none',
        }
      }}
    >
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
              fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
              fontWeight: 800,
              letterSpacing: "-0.02em",
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: "none",
              flexGrow: 1,
              position: 'relative',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-1px)',
                filter: 'brightness(1.1)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                transition: 'width 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
              }
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
              sx={{
                color: 'rgba(248, 250, 252, 0.9)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  transform: 'scale(1.05)',
                }
              }}
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
                '& .MuiPaper-root': {
                  background: 'rgba(15, 23, 42, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  borderRadius: '12px',
                  marginTop: '8px',
                  minWidth: '200px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }
              }}
            >
              <Stack
                px={3}
                py={2}
                direction="column"
                justifyContent="space-between"
                gap={2}
              >
                {[
                  { label: 'ABOUT', href: '#about' },
                  { label: 'SKILL', href: '#skill' },
                  { label: 'EXPERIENCE', href: '#experience' },
                  { label: 'PROJECT', href: '#project' },
                  { label: 'EDUCATION', href: '#education' },
                  { label: 'BLOG', href: '#blog' },
                  { label: 'CONTACTS', href: '#contact' },
                  ...(userRole ? [{ label: 'DASHBOARD', href: 'dashboard' }] : [])
                ].map((item, index) => (
                  <Typography
                    key={index}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: 'rgba(248, 250, 252, 0.9)',
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      letterSpacing: '0.025em',
                      textDecoration: 'none',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      '&:hover': {
                        color: '#60a5fa',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        transform: 'translateX(4px)',
                      }
                    }}
                    onClick={handleCloseNavMenu}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Stack>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="h1"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
              fontWeight: 800,
              letterSpacing: "-0.02em",
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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
            <Stack 
              pl={1} 
              direction="row" 
              alignItems="center" 
              gap={1}
            >
              {[
                { label: 'ABOUT', href: '#about' },
                { label: 'SKILL', href: '#skill' },
                { label: 'EXPERIENCE', href: '#experience' },
                { label: 'PROJECT', href: '#project' },
                { label: 'EDUCATION', href: '#education' },
                { label: 'BLOG', href: '#blog' },
                { label: 'CONTACTS', href: '#contact' },
                ...(userRole ? [{ label: 'DASHBOARD', href: 'dashboard' }] : [])
              ].map((item, index) => (
                <Typography
                  key={index}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: 'rgba(248, 250, 252, 0.9)',
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    letterSpacing: '0.025em',
                    textDecoration: 'none',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)',
                      transition: 'left 0.5s ease',
                    },
                    '&:hover': {
                      color: '#60a5fa',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(99, 102, 241, 0.2)',
                    },
                    '&:hover::before': {
                      left: '100%',
                    },
                    '&:active': {
                      transform: 'translateY(0px)',
                    }
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Box sx={{
              '& > *': {
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }
            }}>
              <AuthButton />
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;