import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Skills = async () => {
  const res = await fetch("http://localhost:5000/api/v1/skill", {
    next: {
      revalidate: 30,
    },
  });
  const { data: skills } = await res.json();

  return (
    <Container sx={{ pb: 8 }}>
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
      <Stack
        direction="row"
        gap={6}
        py={5}
        justifyContent="center"
        alignItems="center"
      >
        {skills?.map((skill: any) => (
          <Box key={skill.id}>
            <Box sx={{ backgroundColor: "lightgray", boxShadow: 1, p: 2 }}>
              <Image
                height={100}
                width={100}
                src={skill?.image}
                alt="skill image"
              />
              <Typography textAlign="center" pt={2} fontWeight={600}>
                {skill?.parcentage}%
              </Typography>
            </Box>
            <Typography textAlign="center" fontWeight={600} pt={2}>
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Skills;
