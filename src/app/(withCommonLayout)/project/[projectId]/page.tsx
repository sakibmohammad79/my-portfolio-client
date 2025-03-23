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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const Page = ({ params }: any) => {
  const { projectId } = params;
  const { data } = useGetSingleProjectQuery(projectId);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ py: 12 }}>
      <Box maxWidth={700} width="100%" mx="auto">
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
            sx={{ borderRadius: 3, width: "100%", objectFit: "cover" }}
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
            <Stack direction="row" gap={2} flexWrap="wrap">
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

            {/* Responsive Buttons Section */}
            <Stack
              gap={2}
              pt={3}
              direction="row"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
            >
              <Link href={data?.url || ""} style={{ textDecoration: "none" }}>
                <Chip
                  sx={{
                    p: 2,
                    fontSize: 16,
                    color: "white",
                    bgcolor: "primary.main",
                    width: isSmallScreen ? "100%" : "auto", // Full width on small screens
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                  size="medium"
                  label="Live Link"
                  variant="outlined"
                />
              </Link>

              <Link
                href={data?.repoClientUrl || ""}
                style={{ textDecoration: "none" }}
              >
                <Chip
                  sx={{
                    p: 2,
                    fontSize: 16,
                    color: "white",
                    bgcolor: "secondary.main",
                    width: isSmallScreen ? "100%" : "auto",
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "secondary.dark",
                    },
                  }}
                  size="medium"
                  label="Repo Client"
                  variant="outlined"
                />
              </Link>

              <Link
                href={data?.repoServerUrl || ""}
                style={{ textDecoration: "none" }}
              >
                <Chip
                  sx={{
                    p: 2,
                    fontSize: 16,
                    color: "white",
                    bgcolor: "success.main",
                    width: isSmallScreen ? "100%" : "auto",
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "success.dark",
                    },
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
