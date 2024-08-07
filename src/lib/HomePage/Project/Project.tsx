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

const Project = () => {
  // const res = await fetch("http://localhost:5000/api/v1/project", {
  //   next: {
  //     revalidate: 10,
  //   },
  // });
  // const { data: projects } = await res.json();
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
            fontSize: {
              xs: 30,
              md: 30,
              sm: 30,
              lg: 45,
            },
          }}
          fontWeight={600}
        >
          MY PROJECT
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {data?.map((project: any) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={project.id}>
            <Link href={`/project/${project.id}`}>
              <Card sx={{ p: 3, height: 400, borderRadius: 4 }}>
                <Image
                  style={{ borderRadius: 4 }}
                  src={project?.image}
                  height={300}
                  width={500}
                  alt="project-image"
                />
                <CardContent>
                  <Typography color="primary.main">WEBSITE</Typography>

                  <Typography
                    sx={{
                      "&:hover": {
                        color: "primary.main",
                      },
                      fontSize: { xs: 20, md: 20, sm: 20, lg: 30 },
                    }}
                    component="h1"
                    fontWeight={520}
                  >
                    {project?.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Project;
