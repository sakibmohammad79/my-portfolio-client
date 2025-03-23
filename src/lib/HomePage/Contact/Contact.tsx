"use client";

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
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <Container>
      <Box sx={{ pb: 12 }}>
        {/* Heading */}
        <Box
          textAlign="center"
          pb={6}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Typography pb={2} color="primary.main">
            CONTACT
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 30, md: 30, sm: 30, lg: 45 } }}
            fontWeight={600}
            pb={4}
          >
            CONTACT WITH ME
          </Typography>
        </Box>

        {/* Contact Section */}
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {/* Contact Card */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Card sx={{ maxWidth: 445, borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                style={{ borderRadius: 3 }}
                sx={{ height: 240, p: 2 }}
                image="https://i.postimg.cc/ZRJstF54/handshake.jpg"
                title="Hand Shake"
              />
              <CardContent>
                <Typography gutterBottom variant="h4">
                  Md. Sakib
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  FullStack Web Developer
                </Typography>
                <Typography color="text.secondary" py={2}>
                  I am available for website development. Connect with me via
                  email or phone.
                </Typography>
                <Typography color="text.secondary">
                  📞 (+880) 1870584779
                </Typography>
                <Typography color="text.secondary">
                  ✉️ mohammadsakib7679@gmail.com
                </Typography>
                <Typography color="text.secondary" pt={2}>
                  Find Me On:
                </Typography>
              </CardContent>

              {/* Social Icons */}
              <CardActions>
                <Stack direction="row" gap={2} py={2}>
                  <Box
                    component="a"
                    href="https://www.linkedin.com/in/md-sakib79/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      boxShadow: 1,
                      p: 1,
                      borderRadius: "50%",
                      transition: "0.3s",
                      "&:hover": {
                        color: "primary.main",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </Box>
                  <Box
                    component="a"
                    href="#"
                    sx={{
                      boxShadow: 1,
                      p: 1,
                      borderRadius: "50%",
                      transition: "0.3s",
                      "&:hover": {
                        color: "primary.main",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <FacebookIcon fontSize="large" />
                  </Box>
                  <Box
                    component="a"
                    href="#"
                    sx={{
                      boxShadow: 1,
                      p: 1,
                      borderRadius: "50%",
                      transition: "0.3s",
                      "&:hover": {
                        color: "primary.main",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <InstagramIcon fontSize="large" />
                  </Box>
                  <Box
                    component="a"
                    href="https://github.com/sakibmohammad79"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      boxShadow: 1,
                      p: 1,
                      borderRadius: "50%",
                      transition: "0.3s",
                      "&:hover": {
                        color: "primary.main",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <GitHubIcon fontSize="large" />
                  </Box>
                </Stack>
              </CardActions>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Box borderRadius={3} p={4} boxShadow={3} width="100%">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                        transform: "scale(1.05)",
                      },
                    }}
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
