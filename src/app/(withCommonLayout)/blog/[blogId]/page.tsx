"use client";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const Page = ({ params }: any) => {
  const { blogId } = params;
  const { data } = useGetSingleBlogQuery(blogId);
  console.log(data);
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
              variant="body2"
              color="primary.main"
              component="div"
              py={2}
            >
              {data?.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              color="primary.main"
              component="div"
            >
              {data?.title}
            </Typography>
            <Typography py={1} variant="body2" color="text.secondary">
              <Box dangerouslySetInnerHTML={{ __html: data?.content }} />
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Page;
