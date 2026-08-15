"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Alert,
  CircularProgress,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { SubmitHandler, useForm } from "react-hook-form";
import { adminLogin } from "@/services/actions/adminLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { colors, radii } from "@/constant/design";

type Inputs = {
  email: string;
  password: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const inputSx = {
  "& .MuiOutlinedInput-root": {
    background: colors.backgroundSecondary,
    backdropFilter: "blur(10px)",
    borderRadius: radii.md,
    "& fieldset": {
      borderColor: colors.border,
    },
    "&:hover fieldset": {
      borderColor: colors.borderHover,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.primary,
      borderWidth: "1px",
    },
    "& input": {
      color: colors.textPrimary,
      fontFamily: '"Inter", sans-serif',
    },
  },
  "& .MuiInputLabel-root": {
    color: colors.textMuted,
    fontFamily: '"Inter", sans-serif',
    "&.Mui-focused": {
      color: colors.primary,
    },
  },
  "& .MuiFormHelperText-root": {
    color: "oklch(72% 0.17 25)",
    fontFamily: '"Inter", sans-serif',
  },
  "& .MuiInputAdornment-root .MuiSvgIcon-root": {
    color: colors.textMuted,
  },
};

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true);
      setError("");

      const res = await adminLogin(data);

      if (res?.success === true) {
        toast.success(res?.message || "Login successful!");
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/dashboard/admin");
      } else {
        setError(res?.message || "Invalid credentials. Please try again.");
        toast.error(res?.message || "Login failed!");
      }
    } catch (err: any) {
      const errorMessage = err?.response?.data?.message || "An error occurred. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: colors.background,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 25% 25%, ${colors.primarySofter} 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, oklch(28% 0.05 290 / 0.16) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <Stack alignItems="center" justifyContent="center" minHeight="100vh">
            <motion.div variants={fadeInUp}>
              <Box
                sx={{
                  maxWidth: 460,
                  width: "100%",
                  background: colors.card,
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${colors.border}`,
                  borderRadius: radii.xl,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
                  p: { xs: 4, sm: 6 },
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.div variants={fadeInUp}>
                  <Stack alignItems="center" mb={4}>
                    <Box
                      sx={{
                        background: colors.primary,
                        borderRadius: radii.lg,
                        p: 2,
                        mb: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 8px 25px ${colors.primaryGlow}`,
                      }}
                    >
                      <KeyIcon sx={{ fontSize: "40px", color: colors.background }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "1.8rem",
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        color: colors.textPrimary,
                        textAlign: "center",
                      }}
                    >
                      ADMIN <Box component="span" sx={{ color: colors.primary }}>LOGIN</Box>
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.textMuted,
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "0.95rem",
                        textAlign: "center",
                        mt: 1,
                      }}
                    >
                      Welcome back! Please enter your credentials
                    </Typography>
                  </Stack>
                </motion.div>

                {error && (
                  <motion.div variants={fadeInUp}>
                    <Alert
                      severity="error"
                      sx={{
                        mb: 3,
                        background: "oklch(60% 0.17 25 / 0.12)",
                        border: "1px solid oklch(60% 0.17 25 / 0.3)",
                        borderRadius: radii.md,
                        color: "oklch(72% 0.17 25)",
                        "& .MuiAlert-icon": { color: "oklch(72% 0.17 25)" },
                      }}
                    >
                      {error}
                    </Alert>
                  </motion.div>
                )}

                <motion.div variants={fadeInUp}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                      <TextField
                        label="Email Address"
                        type="email"
                        fullWidth
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={inputSx}
                      />

                      <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                                sx={{ color: colors.textMuted }}
                              >
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={inputSx}
                      />

                      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          fullWidth
                          disabled={isLoading}
                          sx={{
                            background: colors.primary,
                            color: colors.background,
                            borderRadius: radii.md,
                            py: 1.9,
                            fontWeight: 700,
                            fontSize: "1.05rem",
                            textTransform: "none",
                            transition: "all 0.25s ease",
                            "&:hover": {
                              background: colors.primaryLight,
                              boxShadow: `0 12px 35px ${colors.primaryGlow}`,
                            },
                            "&:disabled": {
                              background: colors.primaryDark,
                              color: "oklch(90% 0.02 260 / 0.7)",
                              opacity: 0.8,
                            },
                          }}
                        >
                          {isLoading ? (
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <CircularProgress size={20} sx={{ color: colors.background }} />
                              <Typography sx={{ color: colors.background, fontWeight: 600 }}>
                                Signing In...
                              </Typography>
                            </Stack>
                          ) : (
                            "Sign In"
                          )}
                        </Button>
                      </motion.div>
                    </Stack>
                  </form>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Box sx={{ mt: 4, textAlign: "center" }}>
                    <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem" }}>
                      Not an admin?{" "}
                      <Link href="/" style={{ textDecoration: "none" }}>
                        <Box component="span" sx={{ color: colors.primary, fontWeight: 600, "&:hover": { color: colors.primaryLight } }}>
                          Back to Home
                        </Box>
                      </Link>
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LoginPage;