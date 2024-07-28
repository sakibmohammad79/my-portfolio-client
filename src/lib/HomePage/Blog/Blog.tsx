import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blog", {
    next: {
      revalidate: 30,
    },
  });
  const { data: blogs } = await res.json();
  console.log(blogs);
  return (
    <Container sx={{ pb: 12 }}>
      <Box textAlign="center">
        <Typography pb={2} color="primary.main">
          VISIT MY BLOG AND KEEP YOUR FEEDBACK
        </Typography>
        <Typography variant="h3" pb={6} component="h1" fontWeight={600}>
          My Blog
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {blogs.map((blog: any) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={blog.key}>
            <Link href="">
              <Card sx={{ p: 3, height: 470, borderRadius: 4 }}>
                <Image
                  style={{ borderRadius: 4 }}
                  src={blog?.image}
                  height={500}
                  width={500}
                  alt="blog-image"
                />
                <CardContent>
                  <Typography py={2} color="primary.main">
                    {blog.name}
                  </Typography>
                  <Typography variant="h4" component="h1" fontWeight={520}>
                    {blog?.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
