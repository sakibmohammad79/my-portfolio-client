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

const Project = async () => {
  const res = await fetch("http://localhost:5000/api/v1/project", {
    next: {
      revalidate: 30,
    },
  });
  const { data: projects } = await res.json();

  return (
    <Container sx={{ pb: 12 }}>
      <Box textAlign="center">
        <Typography pb={2} color="primary.main">
          VISIT MY PROJECT AND KEEP YOUR FEEDBACK
        </Typography>
        <Typography variant="h3" pb={6} component="h1" fontWeight={600}>
          My Project
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {projects.map((project: any) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={project.key}>
            <Link href={`/project/${project.id}`}>
              <Card sx={{ p: 3, height: 470, borderRadius: 4 }}>
                <Image
                  style={{ borderRadius: 4 }}
                  src={project?.image}
                  height={400}
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
                    }}
                    variant="h4"
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
