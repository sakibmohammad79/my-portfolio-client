import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Skills = async () => {
  const res = await fetch("http://localhost:5000/api/v1/skill", {
    next: {
      revalidate: 10,
    },
  });
  const { data: skills } = await res.json();

  return (
    <Container>
      <Box textAlign="center">
        <Typography
          variant="h3"
          component="h1"
          color="primary.main"
          fontWeight={600}
        >
          My Skills
        </Typography>
        <Typography>
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </Typography>
      </Box>
      <Grid
        spacing={4}
        container
        justifyContent="center"
        alignItems="center"
        py={12}
      >
        {skills?.map((skill: any) => (
          <Grid item xs={6} sm={6} md={4} lg={2} xl={2} key={skill.id}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: 1,
                p: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                height={130}
                width={130}
                src={skill?.image}
                alt="skill image"
              />
              <Typography
                color="primary.main"
                textAlign="center"
                pt={2}
                fontWeight={600}
              >
                {skill?.parcentage}%
              </Typography>
            </Box>
            <Typography textAlign="center" fontWeight={600} pt={2}>
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
