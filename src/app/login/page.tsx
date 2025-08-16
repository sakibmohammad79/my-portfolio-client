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
import HomeIcon from "@mui/icons-material/Home";
import { SubmitHandler, useForm } from "react-hook-form";
import { adminLogin } from "@/services/actions/adminLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type Inputs = {
  email: string;
  password: string;
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
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
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 50% 0%, rgba(244, 114, 182, 0.03) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(45deg, rgba(148, 163, 184, 0.005) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(148, 163, 184, 0.005) 25%, transparent 25%)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.4,
          pointerEvents: 'none',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Stack alignItems="center" justifyContent="center" minHeight="100vh">
            <motion.div variants={slideInLeft}>
              <Box
                sx={{
                  maxWidth: 480,
                  width: "100%",
                  background: 'rgba(15, 23, 42, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  p: 6,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.02) 100%)',
                    pointerEvents: 'none',
                  },
                }}
              >
                {/* Header */}
                <motion.div variants={fadeInUp}>
                  <Stack alignItems="center" mb={4}>
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
                        borderRadius: '20px',
                        p: 2,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 25px rgba(96, 165, 250, 0.3)',
                      }}
                    >
                      <KeyIcon sx={{ fontSize: "48px", color: "white" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                      }}
                    >
                      ADMIN LOGIN
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(148, 163, 184, 0.8)',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '1rem',
                        textAlign: 'center',
                        mt: 1,
                      }}
                    >
                      Welcome back! Please enter your credentials
                    </Typography>
                  </Stack>
                </motion.div>

                {/* Error Alert */}
                {error && (
                  <motion.div variants={fadeInUp}>
                    <Alert 
                      severity="error" 
                      sx={{ 
                        mb: 3,
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '12px',
                        color: '#fca5a5',
                        '& .MuiAlert-icon': {
                          color: '#f87171',
                        }
                      }}
                    >
                      {error}
                    </Alert>
                  </motion.div>
                )}

                {/* Login Form */}
                <motion.div variants={slideInRight}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                      {/* Email Field */}
                      <TextField
                        label="Email Address"
                        type="email"
                        fullWidth
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon sx={{ color: 'rgba(148, 163, 184, 0.6)' }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            background: 'rgba(15, 23, 42, 0.4)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '12px',
                            '& fieldset': {
                              borderColor: 'rgba(148, 163, 184, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(99, 102, 241, 0.4)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#60a5fa',
                            },
                            '& input': {
                              color: 'rgba(203, 213, 225, 0.9)',
                              fontFamily: '"Inter", sans-serif',
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(148, 163, 184, 0.8)',
                            fontFamily: '"Inter", sans-serif',
                            '&.Mui-focused': {
                              color: '#60a5fa',
                            }
                          },
                          '& .MuiFormHelperText-root': {
                            color: '#fca5a5',
                            fontFamily: '"Inter", sans-serif',
                          }
                        }}
                      />

                      {/* Password Field */}
                      <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                          }
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon sx={{ color: 'rgba(148, 163, 184, 0.6)' }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                                sx={{ color: 'rgba(148, 163, 184, 0.6)' }}
                              >
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            background: 'rgba(15, 23, 42, 0.4)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '12px',
                            '& fieldset': {
                              borderColor: 'rgba(148, 163, 184, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(99, 102, 241, 0.4)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#60a5fa',
                            },
                            '& input': {
                              color: 'rgba(203, 213, 225, 0.9)',
                              fontFamily: '"Inter", sans-serif',
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(148, 163, 184, 0.8)',
                            fontFamily: '"Inter", sans-serif',
                            '&.Mui-focused': {
                              color: '#60a5fa',
                            }
                          },
                          '& .MuiFormHelperText-root': {
                            color: '#fca5a5',
                            fontFamily: '"Inter", sans-serif',
                          }
                        }}
                      />

                      {/* Submit Button */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          fullWidth
                          disabled={isLoading}
                          sx={{
                            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
                            borderRadius: '12px',
                            py: 2,
                            color: 'white',
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            textTransform: 'none',
                            boxShadow: '0 8px 25px rgba(96, 165, 250, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: '0 12px 35px rgba(96, 165, 250, 0.4)',
                            },
                            '&:disabled': {
                              opacity: 0.7,
                            }
                          }}
                        >
                          {isLoading ? (
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <CircularProgress size={20} sx={{ color: 'white' }} />
                              <Typography>Signing In...</Typography>
                            </Stack>
                          ) : (
                            'Sign In'
                          )}
                        </Button>
                      </motion.div>
                    </Stack>
                  </form>
                </motion.div>

                {/* Footer */}
                <motion.div variants={fadeInUp}>
                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography
                      sx={{
                        color: 'rgba(148, 163, 184, 0.8)',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.95rem',
                      }}
                    >
                      Not an admin?{" "}
                      <Link href="/" style={{ textDecoration: 'none' }}>
                        <Box
                          component="span"
                          sx={{
                            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              textShadow: '0 0 8px rgba(96, 165, 250, 0.5)',
                            }
                          }}
                        >
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