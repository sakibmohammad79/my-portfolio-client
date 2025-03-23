"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadResume from "@/lib/UI/ResumeDownload/ResumeDownload";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ pt: { xs: 14, md: 20 } }} pb={12}>
        {/* Left Section */}
        <Grid item xs={12} md={6} lg={7}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="body1">WELCOME TO MY WORLD</Typography>
            <Typography
              py={3}
              variant="h3"
              component="h1"
              sx={{
                fontSize: { xs: 25, md: 50 },
              }}
              fontWeight={600}
            >
              HI, I’M{" "}
              <Box component="span" color="primary.main">
                MD. SAKIB
              </Box>{" "}
              <br />A FULL STACK DEVELOPER
            </Typography>
            <Typography>
              I am a dedicated and passionate full stack web developer. I
              believe in working hard and never giving up. Challenges motivate
              me, and I approach each project with determination. I always
              strive to provide the best solutions possible. My goal is to
              become a senior developer and achieve success.
            </Typography>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography pt={4}>FIND WITH ME</Typography>
            <Stack direction="row" spacing={2} py={2}>
              {[
                {
                  href: "https://www.linkedin.com/in/md-sakib79/",
                  icon: <LinkedInIcon fontSize="large" />,
                },
                {
                  href: "https://www.facebook.com/profile.php?id=100011373134077",
                  icon: <FacebookIcon fontSize="large" />,
                },
                {
                  href: "https://www.instagram.com/md_sakib75/",
                  icon: <InstagramIcon fontSize="large" />,
                },
                {
                  href: "https://github.com/sakibmohammad79",
                  icon: <GitHubIcon fontSize="large" />,
                },
              ].map((item, index) => (
                <Link key={index} href={item.href} target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        boxShadow: 1,
                        p: 1,
                        transition: "all 0.3s ease-in-out",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {item.icon}
                    </Box>
                  </motion.div>
                </Link>
              ))}
            </Stack>
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box mt={2}>
              <DownloadResume />
            </Box>
          </motion.div>
        </Grid>

        {/* Right Section (Image) */}
        <Grid item xs={12} md={6} lg={5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              style={{ borderRadius: "20px", objectFit: "cover" }}
              height={500}
              width={600}
              src="https://i.postimg.cc/3xB8zkfr/coding.webp"
              alt="Coding Representation"
            />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
