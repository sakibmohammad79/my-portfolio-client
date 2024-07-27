import { Box, Container, Typography } from "@mui/material";

const Skills = () => {
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
    </Container>
  );
};

export default Skills;
