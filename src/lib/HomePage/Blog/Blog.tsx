"use client";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
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

const Blog = () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blog`, {
  //   next: {
  //     revalidate: 10,
  //   },
  // });
  // const { data: blogs } = await res.json();
  const { data } = useGetAllBlogQuery({});

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
        {data?.map((blog: any) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <Card sx={{ p: 3, height: 480, borderRadius: 4 }}>
                <Image
                  style={{ borderRadius: 4 }}
                  src={blog?.image}
                  height={400}
                  width={500}
                  alt="blog-image"
                />
                <CardContent>
                  <Typography py={2} color="primary.main">
                    {blog.name}
                  </Typography>
                  <Typography
                    sx={{
                      "&:hover": {
                        color: "primary.main",
                      },
                      fontSize: { xs: 20, md: 20, sm: 20, lg: 30 },
                    }}
                    fontWeight={520}
                    component="h1"
                  >
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
