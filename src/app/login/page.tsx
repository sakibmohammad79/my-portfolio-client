"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { SubmitHandler, useForm } from "react-hook-form";
import { adminLogin } from "@/services/actions/adminLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await adminLogin(data);

      if (res?.success == true) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/dashboard/admin");
      } else {
        toast.error("User not found!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Stack height="100vh" alignItems="center" justifyContent="center">
        <Box
          maxWidth={600}
          width="100%"
          alignItems="center"
          justifyContent="center"
          boxShadow={1}
          borderRadius={1}
          p={3}
          textAlign="center"
        >
          <Stack justifyContent="center" alignItems="center">
            <KeyIcon sx={{ fontSize: "80px", color: "primary.main" }}></KeyIcon>
            <Typography fontWeight={600} pb={3}>
              ADMIN LOGIN
            </Typography>
          </Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  required={true}
                  fullWidth={true}
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth={true}
                  required={true}
                  {...register("password")}
                />
              </Grid>
            </Grid>
            <Button sx={{ mt: 3, mb: 2 }} type="submit" fullWidth={true}>
              Submit
            </Button>
          </form>
          <Typography>
            You are not a admin?{" "}
            <Link href="/">
              <Box component="span" fontWeight={600} color="primary.main">
                Home
              </Box>
            </Link>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
