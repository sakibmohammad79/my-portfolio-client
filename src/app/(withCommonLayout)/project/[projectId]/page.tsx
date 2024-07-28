"use client";

import { Box, Card, Container } from "@mui/material";

const Page = ({ params }: any) => {
  const { projectId } = params;
  console.log(projectId);
  return (
    <Container sx={{ py: 12 }}>
      <Box>
        <Card></Card>
      </Box>
    </Container>
  );
};

export default Page;
