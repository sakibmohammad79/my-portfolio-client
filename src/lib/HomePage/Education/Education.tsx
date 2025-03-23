"use client";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Education = () => {
  return (
    <Container sx={{ pb: 12 }}>
      <Typography
        pb={6}
        sx={{ fontSize: { xs: 30, lg: 45 } }}
        textAlign="center"
        color="primary.main"
        fontWeight={600}
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        EDUCATION QUALITY
      </Typography>
      <Grid container spacing={3}>
        {[
          {
            title: "BSc in Computer Science",
            institute: "BGC Trust University (2021-present)",
            score: "present",
          },
          {
            title: "Higher Secondary Certificate",
            institute: "Sir. Ashotush Govt. College (2018-2020)",
            score: "4.17/5",
          },
          {
            title: "Secondary School Certificate",
            institute: "Jaisthapura Ramani Mohan High School (2016-2018)",
            score: "4.28/5",
          },
          {
            title: "Junior School Certificate",
            institute: "Jaisthapura Ramani Mohan High School (2013-2015)",
            score: "4.35/5",
          },
        ].map((edu, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card
                sx={{
                  p: 3,
                  height: { xs: 350, lg: 300 },
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs={8}>
                      <Typography variant="h5" fontWeight={500} pb={1}>
                        {edu.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {edu.institute}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                      <Typography color="primary.main" fontWeight={600}>
                        {edu.score}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box
                    my={3}
                    sx={{
                      borderBottom: "2px solid",
                      borderColor: "primary.main",
                      width: "100%",
                    }}
                  ></Box>

                  {/* Add some text below the underline */}
                  <Typography color="text.secondary" textAlign="left">
                    {index === 0
                      ? "Currently pursuing my Bachelor's degree in Computer Science, gaining knowledge in programming, databases, and software development."
                      : index === 1
                      ? "Completed my HSC with a strong focus on Mathematics, Physics, and Computer Science."
                      : index === 2
                      ? "Completed my SSC with a keen interest in science and problem-solving."
                      : "Developed a strong academic foundation and an early interest in technology."}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Education;
