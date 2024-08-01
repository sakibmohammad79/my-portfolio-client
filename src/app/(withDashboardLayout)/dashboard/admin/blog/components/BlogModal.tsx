"use client";
import Modal from "@/components/Shared/Modal/Modal";
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
// import JoditEditor from "jodit-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface blogFormData {
  name: string;
  title: string;
  content: string;
  userId: string;
}
const BlogModal = ({ open, setOpen }: TProps) => {
  // const editor = useRef(null);
  // const [content, setContent] = useState("");

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
  } = useForm<blogFormData>();

  const onSubmit = async (data: blogFormData) => {
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
        // content,
        image: imageUrl,
      };
      console.log(BlogData);

      try {
        if (imageUrl) {
          const res = await addBlog(BlogData).unwrap();
          console.log(res);
          if (res?.id) {
            toast.success("Added blog successfully!");
            setOpen(false);
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
    <Modal open={open} setOpen={setOpen} title="Add New Blog">
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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

          {/* <Grid item xs={12}>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContnt) => setContent(newContnt)}
            />
          </Grid> */}

          <Grid item xs={12}>
            <TextField
              {...register("content", { required: true })}
              label="Content"
              placeholder="Content"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
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
    </Modal>
  );
};

export default BlogModal;
