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
import { Stack, useScrollTrigger, useTheme, useMediaQuery } from "@mui/material";

// Color scheme constants for consistency
const COLORS = {
  primary: '#60a5fa', // Blue
  secondary: '#a78bfa', // Purple
  tertiary: '#f472b6', // Pink
  background: {
    light: 'rgba(15, 23, 42, 0.8)',
    dark: 'rgba(15, 23, 42, 0.95)',
  },
  text: {
    primary: 'rgba(248, 250, 252, 0.9)',
    secondary: 'rgba(248, 250, 252, 0.7)',
  },
  accent: 'rgba(99, 102, 241, 0.1)',
  border: 'rgba(148, 163, 184, 0.1)',
} as const;

const Navbar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [userRole, setUserRole] = React.useState("");
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const AuthButton = dynamic(() => import("@/lib/UI/AuthButton/AuthButton"), {
    ssr: false,
  });

  // Scroll trigger for glassmorphism effect
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  React.useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo?.role) {
      setUserRole(userInfo.role);
    }
  }, []);

  // Navigation items
  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILL', href: '#skill' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECT', href: '#project' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'BLOG', href: '#blog' },
    { label: 'CONTACTS', href: '#contact' },
    ...(userRole ? [{ label: 'DASHBOARD', href: '/dashboard' }] : [])
  ];

  return (
    <AppBar 
      elevation={0}
      sx={{ 
        py: { xs: 0.5, sm: 1 },
        background: trigger 
          ? COLORS.background.dark
          : COLORS.background.light,
        backdropFilter: 'blur(20px)',
        borderBottom: trigger 
          ? `1px solid ${COLORS.border}` 
          : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${COLORS.primary}0D 0%, ${COLORS.secondary}0D 100%)`,
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            minHeight: { xs: '56px', sm: '64px' },
            px: { xs: 1, sm: 2 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Changed to space-between for better control
            width: '100%'
          }}
        >
          {/* Mobile Menu Button and Logo Container */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            flex: { xs: '1 1 auto', md: '0 0 auto' } // Flexible on mobile, fixed on desktop
          }}>
            {/* Mobile Menu Button */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: COLORS.text.primary,
                transition: 'all 0.2s ease',
                mr: 1, // Add margin right
                '&:hover': {
                  backgroundColor: COLORS.accent,
                  transform: 'scale(1.05)',
                  color: COLORS.primary,
                }
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo - Desktop */}
            <Typography
              variant={isSmallMobile ? "h5" : "h4"}
              noWrap
              component={Link}
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                fontWeight: 800,
                letterSpacing: "-0.02em",
                background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 50%, ${COLORS.tertiary} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: "none",
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
                  background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                }
              }}
            >
              PORTFOLIO
            </Typography>

            {/* Logo - Mobile */}
            <Typography
              variant={isSmallMobile ? "h6" : "h5"}
              noWrap
              component={Link}
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
                fontWeight: 800,
                letterSpacing: "-0.02em",
                background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 50%, ${COLORS.tertiary} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: "none",
              }}
            >
              PORTFOLIO
            </Typography>
          </Box>

          {/* Desktop Navigation - Centered */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: 'absolute', // Position absolutely to center it
              left: '50%',
              // transform: 'translateX(-50%)', // Center horizontally
              top: '50%',
              transform: 'translate(-50%, -50%)', // Center both horizontally and vertically
            }}
          >
            <Stack 
              direction="row" 
              alignItems="center" 
              gap={{ md: 0.5, lg: 1 }}
              flexWrap="nowrap" // Prevent wrapping on desktop
            >
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: COLORS.text.primary,
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                    fontSize: { md: '0.85rem', lg: '0.9rem' },
                    letterSpacing: '0.025em',
                    textDecoration: 'none',
                    padding: { md: '10px 12px', lg: '12px 16px' },
                    borderRadius: '10px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)`,
                      transition: 'left 0.5s ease',
                    },
                    '&:hover': {
                      color: COLORS.primary,
                      backgroundColor: COLORS.accent,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 4px 8px ${COLORS.primary}33`,
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

          {/* Auth Button Container - Always right aligned */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flex: '0 0 auto', // Don't grow or shrink
            '& > *': {
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            },
            // Style the AuthButton to match color scheme
            '& button': {
              background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
              border: 'none',
              borderRadius: '10px',
              padding: { xs: '8px 16px', sm: '10px 20px' },
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              fontWeight: 600,
              color: 'white',
              fontFamily: '"Inter", sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.025em',
              boxShadow: `0 4px 14px ${COLORS.primary}40`,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              whiteSpace: 'nowrap', // Prevent button text wrapping
              '&:hover': {
                background: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.tertiary} 100%)`,
                boxShadow: `0 6px 20px ${COLORS.secondary}50`,
                transform: 'translateY(-2px) scale(1.05)',
              },
              '&:active': {
                transform: 'translateY(0px) scale(1.02)',
              }
            },
            // Alternative styling for links that might be in AuthButton
            '& a': {
              background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
              border: 'none',
              borderRadius: '10px',
              padding: { xs: '8px 16px', sm: '10px 20px' },
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              fontWeight: 600,
              color: 'white !important',
              fontFamily: '"Inter", sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.025em',
              textDecoration: 'none',
              boxShadow: `0 4px 14px ${COLORS.primary}40`,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-block',
              whiteSpace: 'nowrap',
              '&:hover': {
                background: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.tertiary} 100%)`,
                boxShadow: `0 6px 20px ${COLORS.secondary}50`,
                transform: 'translateY(-2px)',
              }
            }
          }}>
            <AuthButton />
          </Box>

          {/* Mobile Menu */}
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
                background: COLORS.background.dark,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${COLORS.border}`,
                borderRadius: '12px',
                marginTop: '8px',
                minWidth: { xs: '180px', sm: '200px' },
                maxWidth: '90vw',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }
            }}
          >
            <Stack
              px={3}
              py={2}
              direction="column"
              justifyContent="space-between"
              gap={1.5}
            >
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: COLORS.text.primary,
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    letterSpacing: '0.025em',
                    textDecoration: 'none',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    '&:hover': {
                      color: COLORS.primary,
                      backgroundColor: COLORS.accent,
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;