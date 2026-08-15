"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  IconButton,
  Alert,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";
import { useAddContactMutation } from "@/redux/api/contact";
import { colors, radii } from "@/constant/design";
import Section from "@/components/Shared/Section/Section";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const inputSx = (hasError: boolean, helper?: string) => ({
  "& .MuiOutlinedInput-root": {
    background: colors.backgroundSecondary,
    borderRadius: radii.md,
    fontSize: { xs: "0.9rem", sm: "1rem" },
    "& fieldset": {
      borderColor: hasError ? "oklch(60% 0.17 25 / 0.5)" : colors.border,
    },
    "&:hover fieldset": {
      borderColor: hasError ? "oklch(60% 0.17 25 / 0.7)" : colors.borderHover,
    },
    "&.Mui-focused fieldset": {
      borderColor: hasError ? "oklch(60% 0.17 25)" : colors.primary,
      borderWidth: "1px",
    },
  },
  "& .MuiInputLabel-root": {
    color: colors.textMuted,
    fontSize: { xs: "0.9rem", sm: "1rem" },
    "&.Mui-focused": {
      color: hasError ? "oklch(60% 0.17 25)" : colors.primary,
    },
    "&.Mui-error": {
      color: "oklch(60% 0.17 25)",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: colors.textPrimary,
    py: { xs: 1.5, sm: 1.75 },
  },
  "& .MuiFormHelperText-root": {
    color: hasError ? "oklch(60% 0.17 25)" : colors.textMuted,
    fontSize: "0.75rem",
    mt: 0.75,
  },
  ...(helper
    ? {
        "& .MuiFormHelperText-root": {
          display: "flex",
          justifyContent: "space-between",
          color: hasError ? "oklch(60% 0.17 25)" : colors.textMuted,
          fontSize: "0.75rem",
          mt: 0.75,
        },
      }
    : {}),
});

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const [addContact, { isLoading }] = useAddContactMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = "Subject must be less than 100 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await addContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      }).unwrap();

      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
    } catch (err: any) {
      setSubmitStatus("error");
      setSubmitMessage(err?.data?.message || "Failed to send message. Please try again.");
    }
  };

  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const socialLinks = [
    { name: "LinkedIn", icon: LinkedInIcon, url: "https://www.linkedin.com/in/md-sakib79/" },
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/sakibmohammad79" },
    { name: "Facebook", icon: FacebookIcon, url: "https://www.facebook.com/profile.php?id=100011373134077" },
    { name: "Instagram", icon: InstagramIcon, url: "https://www.instagram.com/md_sakib75/" },
  ];

  const contactInfo = [
    { icon: PhoneIcon, label: "Phone", value: "(+880) 1870584779", href: "tel:+8801870584779" },
    { icon: EmailIcon, label: "Email", value: "mohammadsakib7679@gmail.com", href: "mailto:mohammadsakib7679@gmail.com" },
    { icon: LocationOnIcon, label: "Location", value: "Chattogram, Bangladesh", href: "#" },
  ];

  return (
    <Section id="contact" sx={{ py: { xs: 7, sm: 9, md: 12 } }}>
      <Container maxWidth="xl">
        {/* Strong final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
              py: { xs: 4, md: 6 },
              px: 2,
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "90%", md: 560 },
                height: 220,
                background: `radial-gradient(ellipse at center, ${colors.primaryGlow} 0%, transparent 70%)`,
                filter: "blur(30px)",
                opacity: 0.6,
                pointerEvents: "none",
              },
            }}
          >
            <Typography
              sx={{
                color: colors.textMuted,
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Typography
              component="h2"
              sx={{
                position: "relative",
                color: colors.textPrimary,
                fontWeight: 800,
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem", lg: "3.75rem" },
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Let&apos;s build something{" "}
              <Box component="span" sx={{ color: colors.primary }}>
                together.
              </Box>
            </Typography>
            <Typography
              sx={{
                position: "relative",
                color: colors.textMuted,
                fontSize: { xs: "1rem", md: "1.1rem" },
                mt: 2.5,
              }}
            >
              Have a project in mind? Let&apos;s discuss your next idea and create something amazing.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch" mt={{ xs: 2, md: 4 }}>
          {/* Contact info */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  height: "100%",
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radii.xl,
                  p: { xs: 4, md: 5 },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    color: colors.primary,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    mb: 3,
                  }}
                >
                  Contact Info
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      component={info.href !== "#" ? "a" : "div"}
                      href={info.href !== "#" ? info.href : undefined}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 1.75,
                        borderRadius: radii.md,
                        background: colors.backgroundSecondary,
                        border: `1px solid ${colors.border}`,
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                        cursor: info.href !== "#" ? "pointer" : "default",
                        "&:hover": info.href !== "#"
                          ? {
                              borderColor: colors.borderHover,
                              transform: "translateX(4px)",
                              background: colors.primarySofter,
                            }
                          : {},
                      }}
                    >
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 44,
                          height: 44,
                          borderRadius: radii.md,
                          background: colors.primary,
                          color: colors.background,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <info.icon sx={{ fontSize: "1.3rem" }} />
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          sx={{
                            color: colors.textMuted,
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            mb: 0.25,
                          }}
                        >
                          {info.label}
                        </Typography>
                        <Typography
                          sx={{
                            color: colors.textPrimary,
                            fontSize: { xs: "0.88rem", md: "0.93rem" },
                            fontWeight: 500,
                            wordBreak: "break-word",
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Typography
                    sx={{
                      color: colors.textMuted,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      mb: 2,
                    }}
                  >
                    Find Me On
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        sx={{
                          border: `1px solid ${colors.border}`,
                          borderRadius: radii.md,
                          background: colors.backgroundSecondary,
                          color: colors.textSecondary,
                          width: 44,
                          height: 44,
                          transition: "all 0.25s ease",
                          "&:hover": {
                            color: colors.primary,
                            borderColor: colors.borderHover,
                            background: colors.primarySofter,
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <social.icon sx={{ fontSize: "1.2rem" }} />
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Form */}
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  height: "100%",
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radii.xl,
                  p: { xs: 4, md: 5 },
                }}
              >
                <Typography
                  sx={{
                    color: colors.textPrimary,
                    fontWeight: 700,
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                    mb: 1,
                  }}
                >
                  Send Me A Message
                </Typography>
                <Typography
                  sx={{
                    color: colors.textMuted,
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    mb: 4,
                  }}
                >
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </Typography>

                {submitStatus === "success" && (
                  <Alert
                    icon={<CheckCircleIcon />}
                    severity="success"
                    sx={{
                      mb: 3,
                      background: "oklch(72% 0.16 145 / 0.12)",
                      border: "1px solid oklch(72% 0.16 145 / 0.35)",
                      color: "oklch(82% 0.18 145)",
                      "& .MuiAlert-icon": { color: "oklch(82% 0.18 145)" },
                      borderRadius: radii.md,
                    }}
                  >
                    {submitMessage}
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert
                    icon={<ErrorIcon />}
                    severity="error"
                    sx={{
                      mb: 3,
                      background: "oklch(60% 0.17 25 / 0.12)",
                      border: "1px solid oklch(60% 0.17 25 / 0.35)",
                      color: "oklch(72% 0.17 25)",
                      "& .MuiAlert-icon": { color: "oklch(72% 0.17 25)" },
                      borderRadius: radii.md,
                    }}
                  >
                    {submitMessage}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        disabled={isLoading}
                        sx={inputSx(!!errors.name)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        disabled={isLoading}
                        sx={inputSx(!!errors.email)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        disabled={isLoading}
                        sx={inputSx(!!errors.subject)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        variant="outlined"
                        multiline
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message || `${formData.message.length}/1000 characters`}
                        disabled={isLoading}
                        sx={inputSx(!!errors.message, "count")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div whileHover={{ y: isLoading ? 0 : -2 }} whileTap={{ scale: isLoading ? 1 : 0.99 }}>
                        <Button
                          fullWidth
                          type="submit"
                          variant="contained"
                          disabled={isLoading}
                          endIcon={
                            isLoading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />
                          }
                          sx={{
                            background: isLoading ? colors.primaryDark : colors.primary,
                            color: colors.background,
                            borderRadius: radii.md,
                            py: { xs: 1.6, md: 1.9 },
                            fontSize: { xs: "0.95rem", md: "1.05rem" },
                            fontWeight: 700,
                            textTransform: "none",
                            transition: "all 0.25s ease",
                            "&:hover": isLoading
                              ? {}
                              : {
                                  background: colors.primaryLight,
                                  boxShadow: `0 14px 35px ${colors.primaryGlow}`,
                                },
                            "&:disabled": {
                              background: colors.primaryDark,
                              color: "oklch(90% 0.02 260 / 0.7)",
                            },
                          }}
                        >
                          {isLoading ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom CTA line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{ textAlign: "center", mt: { xs: 8, md: 10 } }}>
            <Button
              component="a"
              href="mailto:mohammadsakib7679@gmail.com"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: colors.primary,
                color: colors.background,
                fontWeight: 700,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                px: { xs: 4, md: 5 },
                py: { xs: 1.6, md: 1.9 },
                borderRadius: 999,
                transition: "all 0.25s ease",
                "&:hover": {
                  background: colors.primaryLight,
                  transform: "translateY(-2px)",
                  boxShadow: `0 14px 35px ${colors.primaryGlow}`,
                },
              }}
            >
              Let&apos;s Talk
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;