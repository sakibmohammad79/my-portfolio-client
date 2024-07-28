import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Education = () => {
  return (
    <Container sx={{ pb: 12 }}>
      <Typography pb={6} variant="h3" component="h1" fontWeight={600}>
        Education Quality
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ p: 3, height: 350, borderRadius: 2 }}>
            <CardContent>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    component="div"
                    pb={2}
                  >
                    BSc in Computer Science
                  </Typography>
                  <Typography>BGC Trust University (2021-present)</Typography>
                </Box>
                <Typography color="primary.main" fontWeight={600}>
                  present
                </Typography>
              </Stack>
              <Box
                my={3}
                sx={{
                  border: "1px dashed black",
                }}
              ></Box>
              <Typography variant="body2" fontSize={20} color="text.secondary">
                The training provided by universities in order to prepare people
                to work in various sectors of the economy or areas of culture.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ p: 3, height: 350 }}>
            <CardContent>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    component="div"
                    pb={2}
                  >
                    Higher Secondary Certificate
                  </Typography>
                  <Typography>
                    Sir. Ashotush Govt. College (2018-2020)
                  </Typography>
                </Box>
                <Typography color="primary.main" fontWeight={600}>
                  4.17/5
                </Typography>
              </Stack>
              <Box
                my={3}
                sx={{
                  border: "1px dashed black",
                }}
              ></Box>
              <Typography variant="body2" fontSize={20} color="text.secondary">
                The training provided by universities in order to prepare people
                to work in various sectors of the economy or areas of culture.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ p: 3, height: 350 }}>
            <CardContent>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    component="div"
                    pb={2}
                  >
                    Secondary School Certificate
                  </Typography>
                  <Typography>
                    Jaisthapura Ramani Mohan High School (2016-2018)
                  </Typography>
                </Box>
                <Typography color="primary.main" fontWeight={600}>
                  4.28/5
                </Typography>
              </Stack>
              <Box
                my={3}
                sx={{
                  border: "1px dashed black",
                }}
              ></Box>
              <Typography variant="body2" fontSize={20} color="text.secondary">
                The training provided by universities in order to prepare people
                to work in various sectors of the economy or areas of culture.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ p: 3, height: 350 }}>
            <CardContent>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    component="div"
                    pb={2}
                  >
                    Junior School Certificate
                  </Typography>
                  <Typography>
                    Jaisthapura Ramani Mohan High School (2013-2015)
                  </Typography>
                </Box>
                <Typography color="primary.main" fontWeight={600}>
                  3.90/4
                </Typography>
              </Stack>
              <Box
                my={3}
                sx={{
                  border: "1px dashed black",
                }}
              ></Box>
              <Typography variant="body2" fontSize={20} color="text.secondary">
                The training provided by universities in order to prepare people
                to work in various sectors of the economy or areas of culture.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Education;
