"use client";
import { useGetAllSkillQuery } from "@/redux/api/skillApi";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Skills = () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/skillm`, {
  //   next: {
  //     revalidate: 10,
  //   },
  // });
  // const { data: skills } = await res.json();
  const { data } = useGetAllSkillQuery({});

  return (
    <Container>
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: { xs: 35, md: 35, lg: 40 },
          }}
          color="primary.main"
          fontWeight={600}
        >
          MY SKILLS
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
        {data?.map((skill: any) => (
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
