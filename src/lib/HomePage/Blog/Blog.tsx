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
import { motion } from "framer-motion";

const Blog = () => {
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
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {data?.map((blog: any) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={blog.id}>
            <Link href={`/blog/${blog.id}`} style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Image Wrapper for uniform height */}
                  <Box
                    sx={{ width: "100%", height: 250, position: "relative" }}
                  >
                    <Image
                      src={blog?.image}
                      alt="blog-image"
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: 4 }}
                    />
                  </Box>
                  <CardContent>
                    <Typography py={2} color="primary.main">
                      {blog.name}
                    </Typography>
                    <Typography
                      sx={{
                        "&:hover": { color: "primary.main" },
                        fontSize: { xs: 20, lg: 25 },
                        fontWeight: 520,
                      }}
                      component="h1"
                    >
                      {blog?.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
