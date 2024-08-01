"use client";

import { useGetSingleProjectQuery } from "@/redux/api/projectApi";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Page = ({ params }: any) => {
  const { projectId } = params;
  const { data } = useGetSingleProjectQuery(projectId);
  //console.log(data);
  return (
    <Container sx={{ py: 12 }}>
      <Box
        maxWidth={700}
        width="100%"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mx="auto"
      >
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
          }}
        >
          <CardMedia
            component="img"
            alt="Project Image"
            height={500}
            image={data?.image}
            sx={{ borderRadius: 3 }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="primary.main"
              component="div"
            >
              {data?.title}
            </Typography>
            <Typography py={1} variant="body2" color="text.secondary">
              <Box
                component="span"
                sx={{ fontSize: 20, color: "primary.main" }}
              >
                Description:
              </Box>{" "}
              {data?.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box
                component="span"
                sx={{ fontSize: 20, color: "primary.main" }}
              >
                Details:
              </Box>{" "}
              {data?.details}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box
                component="span"
                sx={{ fontSize: 20, color: "primary.main" }}
              >
                Technology:
              </Box>{" "}
              {data?.technology}
            </Typography>
            <Stack direction="row" gap={2}>
              <Typography py={1} variant="body1" color="text.secondary">
                <Box color="primary.main" component="span" fontSize={20}>
                  Start Date:{" "}
                </Box>{" "}
                {data?.startDate}
              </Typography>
              <Typography py={1} variant="body1" color="text.secondary">
                <Box color="primary.main" component="span" fontSize={20}>
                  End Date:{" "}
                </Box>{" "}
                {data?.endDate}
              </Typography>
            </Stack>
            <Stack
              gap={2}
              pt={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Link href={data?.url || ""}>
                <Chip
                  sx={{
                    p: 2,

                    fontSize: 16,
                    color: "white",
                    bgcolor: "primary.main",
                  }}
                  size="medium"
                  label="Live Link"
                  variant="outlined"
                />
              </Link>
              <Link href={data?.url || ""}>
                <Chip
                  sx={{
                    p: 2,

                    fontSize: 16,
                    color: "white",
                    bgcolor: "primary.main",
                  }}
                  size="medium"
                  label="Repo Client"
                  variant="outlined"
                />
              </Link>
              <Link href={data?.url || ""}>
                <Chip
                  sx={{
                    p: 2,

                    fontSize: 16,
                    color: "white",
                    bgcolor: "primary.main",
                  }}
                  size="medium"
                  label="Repo Server"
                  variant="outlined"
                />
              </Link>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Page;
