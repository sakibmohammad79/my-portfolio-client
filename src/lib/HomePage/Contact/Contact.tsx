import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Container>
      <Box sx={{ pb: 12 }}>
        <Box width="500px" mx="auto" textAlign="center" pb={6}>
          <Typography pb={2} color="primary.main">
            CONTACT
          </Typography>
          <Typography variant="h3" component="h1" fontWeight={600} pb={4}>
            Contact With Me
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid xs={12} sm={6} md={6}>
            {" "}
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                sx={{ height: 240, p: 2 }}
                image="https://i.postimg.cc/ZRJstF54/handshake.jpg"
                title="Hand Shake"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Md. Sakib
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  FullStack Web Developer
                </Typography>
                <Typography color="text.secondary" py={2}>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </Typography>
                <Typography color="text.secondary">
                  Phone: (+880) 1870584779
                </Typography>
                <Typography color="text.secondary">
                  Email: mohammadsakib7679@gmail.com
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12} sm={6} md={6}>
            {" "}
            form
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
