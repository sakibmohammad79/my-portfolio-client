"use client";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { getUserInfo } from "@/services/auth.services";

import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import { toast } from "sonner";

// Dynamically import ReactQuill to prevent SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface BlogFormData {
  name: string;
  title: string;
  userId: string;
}

const Page = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [addBlog] = useAddBlogMutation();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUserId(userInfo?.adminId);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogFormData>();

  const onSubmit = async (data: BlogFormData) => {
    data.userId = userId;
    const formData = new FormData();
    const file: any = selectedImage;
    formData.append("image", file);
    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      const imageUrl: string = result?.data?.url;

      const BlogData = {
        ...data,
        content,
        image: imageUrl,
      };
      console.log(BlogData);

      try {
        if (imageUrl) {
          const res = await addBlog(BlogData).unwrap();
          console.log(res);
          if (res?.id) {
            toast.success("Added blog successfully!");
          }
        }
      } catch (err: any) {
        console.log(err.message);
      }
    } catch (error) {
      console.log(error);
      throw new Error("image upload failed!");
    }
  };

  const handleProjectImageChange = (event: any) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setSelectedImage(selectedImage);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: 900,
        height: 900,
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
      }}
    >
      <Typography variant="h6" component="h2">
        Add Skill
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextField
            fullWidth
            label="Title"
            {...register("title", { required: true })}
            error={!!errors.title}
            helperText={errors.name?.message}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextField
            fullWidth
            label="Name"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth={true}>
            <Input
              size="medium"
              type="file"
              id="project-image"
              onChange={handleProjectImageChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Add Blog
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
