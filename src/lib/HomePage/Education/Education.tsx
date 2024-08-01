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
          <Card
            sx={{
              p: 3,
              height: { xs: 400, sm: 400, md: 400, lg: 350, xl: 350 },
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    component="div"
                    pb={2}
                  >
                    BSc in Computer Science
                  </Typography>
                  <Typography>BGC Trust University (2021-present)</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  {" "}
                  <Typography
                    sx={{
                      textAlign: {
                        xs: "left",
                        sm: "left",
                        md: "left",
                        lg: "right",
                        xl: "right",
                      },
                    }}
                    color="primary.main"
                    fontWeight={600}
                  >
                    present
                  </Typography>
                </Grid>
              </Grid>
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
          <Card
            sx={{
              p: 3,
              height: { xs: 400, sm: 400, md: 400, lg: 350, xl: 350 },
            }}
          >
            <CardContent>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Typography
                    sx={{
                      textAlign: {
                        xs: "left",
                        sm: "left",
                        md: "left",
                        lg: "right",
                        xl: "right",
                      },
                    }}
                    color="primary.main"
                    fontWeight={600}
                  >
                    4.17/5
                  </Typography>
                </Grid>
              </Grid>
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
          <Card
            sx={{
              p: 3,
              height: { xs: 400, sm: 400, md: 400, lg: 350, xl: 350 },
            }}
          >
            <CardContent>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Typography
                    sx={{
                      textAlign: {
                        xs: "left",
                        sm: "left",
                        md: "left",
                        lg: "right",
                        xl: "right",
                      },
                    }}
                    color="primary.main"
                    fontWeight={600}
                  >
                    4.28/5
                  </Typography>
                </Grid>
              </Grid>
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
          <Card
            sx={{
              p: 3,
              height: { xs: 400, sm: 400, md: 400, lg: 350, xl: 350 },
            }}
          >
            <CardContent>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Typography
                    sx={{
                      textAlign: {
                        xs: "left",
                        sm: "left",
                        md: "left",
                        lg: "right",
                        xl: "right",
                      },
                    }}
                    color="primary.main"
                    fontWeight={600}
                  >
                    4.35/4
                  </Typography>
                </Grid>
              </Grid>
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
