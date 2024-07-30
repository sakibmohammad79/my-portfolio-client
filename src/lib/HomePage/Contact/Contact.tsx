import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <Container>
      <Box sx={{ pb: 12 }}>
        <Box textAlign="center" pb={6}>
          <Typography pb={2} color="primary.main">
            CONTACT
          </Typography>
          <Typography variant="h3" component="h1" fontWeight={600} pb={4}>
            Contact With Me
          </Typography>
        </Box>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6} md={6}>
            {" "}
            <Card sx={{ maxWidth: 445, borderRadius: 3 }}>
              <CardMedia
                style={{ borderRadius: 3 }}
                sx={{ height: 240, p: 2 }}
                image="https://i.postimg.cc/ZRJstF54/handshake.jpg"
                title="Hand Shake"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Md. Sakib
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  FullStack Web Developer
                </Typography>
                <Typography color="text.secondary" py={2}>
                  I am available for website development. Connect with me via
                  email and call in to my account.
                </Typography>
                <Typography color="text.secondary">
                  Phone: (+880) 1870584779
                </Typography>
                <Typography color="text.secondary">
                  Email: mohammadsakib7679@gmail.com
                </Typography>
                <Typography color="text.secondary" pt={2}>
                  Find With Me
                </Typography>
              </CardContent>
              <CardActions>
                <Stack direction="row" gap={2} py={2}>
                  <Link href="https://www.linkedin.com/in/md-sakib79/">
                    <Box sx={{ boxShadow: 1, p: 1 }}>
                      <LinkedInIcon
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                        fontSize="large"
                      ></LinkedInIcon>
                    </Box>
                  </Link>
                  <Link href="">
                    <Box sx={{ boxShadow: 1, p: 1 }}>
                      <FacebookIcon
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                        fontSize="large"
                      ></FacebookIcon>
                    </Box>
                  </Link>
                  <Link href="">
                    <Box sx={{ boxShadow: 1, p: 1 }}>
                      <InstagramIcon
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                        fontSize="large"
                      ></InstagramIcon>
                    </Box>
                  </Link>
                  <Link href="https://github.com/sakibmohammad79">
                    <Box sx={{ boxShadow: 1, p: 1 }}>
                      <GitHubIcon
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                        fontSize="large"
                      ></GitHubIcon>
                    </Box>
                  </Link>
                </Stack>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box borderRadius={3} p={4} boxShadow={1} width="100%">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    name="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    name="subject"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    name="message"
                  />
                </Grid>{" "}
                 
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
