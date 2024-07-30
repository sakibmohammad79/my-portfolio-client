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

const LoginPage = () => {
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
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Button sx={{ mt: 3, mb: 2 }} type="submit" fullWidth={true}>
              Submit
            </Button>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
