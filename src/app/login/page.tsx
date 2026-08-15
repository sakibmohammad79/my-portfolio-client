"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { adminLogin } from "@/services/actions/adminLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { KeyRound, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 25%, var(--primary-softer) 0%, transparent 50%), radial-gradient(circle at 75% 75%, oklch(28% 0.05 290 / 0.16) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-[1] w-full px-4">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} className="mx-auto w-full max-w-[460px]">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-[0_25px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-6">
              <motion.div variants={fadeInUp}>
                <div className="mb-4 flex flex-col items-center">
                  <div className="mb-3 flex items-center justify-center rounded-xl bg-primary p-2 shadow-[0_8px_25px_var(--primary-glow)]">
                    <KeyRound className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h1 className="text-center text-[1.8rem] font-extrabold tracking-tight text-foreground">
                    ADMIN <span className="text-primary">LOGIN</span>
                  </h1>
                  <p className="mt-1 text-center text-[15px] text-muted-foreground">
                    Welcome back! Please enter your credentials
                  </p>
                </div>
              </motion.div>

              {error && (
                <motion.div variants={fadeInUp}>
                  <Alert variant="destructive" className="mb-3">
                    <AlertTitle>Login Failed</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <motion.div variants={fadeInUp}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          className="pl-9"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          aria-invalid={!!errors.email}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs font-medium text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-9 pr-10"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                            },
                          })}
                          aria-invalid={!!errors.password}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-xs font-medium text-destructive">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-[17px] font-bold text-primary-foreground shadow-[0_12px_35px_var(--primary-glow)] transition-all duration-300 hover:bg-primary-light disabled:cursor-not-allowed disabled:bg-primary-dark"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Signing In...
                          </>
                        ) : (
                          "Sign In"
                        )}
                      </button>
                    </motion.div>
                  </div>
                </form>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Not an admin?{" "}
                    <Link href="/" className="font-semibold text-primary transition-colors hover:text-primary-light">
                      Back to Home
                    </Link>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;