import { getUserInfo } from "@/services/auth.services";
import dynamic from "next/dynamic";
import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import { colors, radii } from "@/constant/design";

const sectionIds = [
  "about",
  "skill",
  "experience",
  "project",
  "education",
  "blog",
  "testimonials",
  "contact",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [userRole, setUserRole] = React.useState("");
  const [activeSection, setActiveSection] = React.useState("");

  const AuthButton = dynamic(() => import("@/lib/UI/AuthButton/AuthButton"), {
    ssr: false,
  });

  React.useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo?.role) {
      setUserRole(userInfo.role);
    }
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skill" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#project" },
    { label: "EDUCATION", href: "#education" },
    { label: "BLOG", href: "#blog" },
    { label: "TESTIMONIALS", href: "#testimonials" },
    { label: "CONTACT", href: "#contact" },
    ...(userRole ? [{ label: "Dashboard", href: "/dashboard" }] : []),
  ];

  const navItemSx = (href: string) => {
    const active =
      href.startsWith("#") &&
      activeSection === href.slice(1) &&
      activeSection !== "";
    return {
      color: active ? colors.primary : colors.textSecondary,
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      fontSize: { md: "0.78rem", lg: "0.82rem" },
      letterSpacing: "0.03em",
      textDecoration: "none",
      padding: { md: "8px 10px", lg: "10px 13px" },
      borderRadius: radii.md,
      transition: "color 0.25s ease",
      position: "relative",
      whiteSpace: "nowrap",
      "&::after": {
        content: '""',
        position: "absolute",
        left: "50%",
        bottom: 2,
        transform: active
          ? "translateX(-50%) scaleX(1)"
          : "translateX(-50%) scaleX(0)",
        width: "60%",
        height: 2,
        borderRadius: 1,
        background: colors.primary,
        transition: "transform 0.3s ease",
      },
      "&:hover": {
        color: colors.primary,
        "&::after": {
          transform: "translateX(-50%) scaleX(1)",
        },
      },
    } as const;
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? "oklch(10% 0.015 260 / 0.78)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${colors.border}`
            : "1px solid transparent",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: "62px", md: "72px" },
              px: { xs: 1.5, sm: 2 },
            }}
          >
            {/* Mobile menu button */}
            <IconButton
              aria-label="open navigation"
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: colors.textPrimary,
                mr: 1,
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Typography
              noWrap
              component={Link}
              href="/"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 800,
                fontSize: { xs: "1.15rem", md: "1.8rem" },
                letterSpacing: "-0.02em",
                color: colors.textPrimary,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                flex: { xs: "1 1 auto", md: "0 0 auto" },
              }}
            >
              sakib
              <Box component="span" sx={{ color: colors.primary }}>
                .
              </Box>
              dev
            </Typography>

            {/* Desktop nav */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              flex={1}
              sx={{ display: { xs: "none", md: "flex" }, px: 2 }}
            >
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  component={Link}
                  href={item.href}
                  sx={navItemSx(item.href)}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>

            {/* Auth button */}
            <Box sx={{ flex: "0 0 auto" }}>
              <AuthButton />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            background: "oklch(10% 0.015 260 / 0.97)",
            backdropFilter: "blur(16px)",
            borderLeft: `1px solid ${colors.border}`,
            px: 2,
            py: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
            px: 1,
          }}
        >
          <Typography
            component={Link}
            href="/"
            onClick={() => setMobileOpen(false)}
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 800,
              fontSize: "1.15rem",
              color: colors.textPrimary,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            sakib
            <Box component="span" sx={{ color: colors.primary }}>
              .
            </Box>
            dev
          </Typography>
          <IconButton
            aria-label="close navigation"
            onClick={() => setMobileOpen(false)}
            sx={{ color: colors.textPrimary }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack spacing={0.5}>
          {navItems.map((item, index) => {
            const active =
              item.href.startsWith("#") &&
              activeSection === item.href.slice(1) &&
              activeSection !== "";
            return (
              <Typography
                key={index}
                component={Link}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                sx={{
                  color: active ? colors.primary : colors.textSecondary,
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  px: 2,
                  py: 1.4,
                  borderRadius: radii.md,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: colors.primary,
                    background: colors.primarySoft,
                  },
                }}
              >
                {item.label}
              </Typography>
            );
          })}
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
