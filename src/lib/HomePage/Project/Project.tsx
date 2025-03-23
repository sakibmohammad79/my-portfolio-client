"use client";
import { useGetAllProjectQuery } from "@/redux/api/projectApi";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = () => {
  const { data } = useGetAllProjectQuery({});

  return (
    <Container sx={{ pb: 12 }}>
      <Box textAlign="center">
        <Typography pb={2} color="primary.main">
          VISIT MY PROJECT KEEP YOUR FEEDBACK
        </Typography>
        <Typography
          pb={6}
          sx={{
            fontSize: { xs: 30, md: 30, sm: 30, lg: 45 },
          }}
          fontWeight={600}
        >
          MY PROJECT
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {data?.map((project: any) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={project.id}>
            <Link
              href={`/project/${project.id}`}
              style={{ textDecoration: "none" }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{ width: "100%", height: 250, position: "relative" }}
                  >
                    <Image
                      src={project?.image}
                      alt="project-image"
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: 4 }}
                    />
                  </Box>
                  <CardContent>
                    <Typography color="primary.main">WEBSITE</Typography>
                    <Typography
                      sx={{
                        "&:hover": { color: "primary.main" },
                        fontSize: { xs: 20, lg: 25 },
                        fontWeight: 520,
                      }}
                      component="h1"
                    >
                      {project?.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Project;
