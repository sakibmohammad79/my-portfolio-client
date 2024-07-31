import Modal from "@/components/Shared/Modal/Modal";
import { useAddProjectMutation } from "@/redux/api/projectApi";
import { getUserInfo } from "@/services/auth.services";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface ProjectFormData {
  name: string;
  title: string;
  description: string;
  details: string;
  url: string;
  technology: string;
  startDate: string;
  endDate: string;
  userId: string;
}
const ProjectModal = ({ open, setOpen }: TProps) => {
  const [addProject, { data }] = useAddProjectMutation();
  console.log(data);
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
  } = useForm<ProjectFormData>();

  const onSubmit = async (data: ProjectFormData) => {
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

      const projectData = {
        ...data,
        image: imageUrl,
      };
      console.log(projectData);
      //add skill using redux hooks
      try {
        if (imageUrl) {
          const res = await addProject(projectData).unwrap();
          console.log(res);
          if (res?.id) {
            toast.success("Added Project successfully!");
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
      // Check if a file is actually selected
      setSelectedImage(selectedImage);
    }
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Add Project">
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" component="h2">
          Add Skill
        </Typography>
        <Grid container spacing={2}>
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
              label="Project URL"
              {...register("url", { required: true })}
              error={!!errors.url}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              fullWidth
              label="technology"
              {...register("technology", { required: true })}
              error={!!errors.technology}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              fullWidth
              label="Start Date"
              {...register("startDate", { required: true })}
              error={!!errors.startDate}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              fullWidth
              label="End Date"
              {...register("endDate", { required: true })}
              error={!!errors.endDate}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <FormControl fullWidth>
              <Input
                size="medium"
                type="file"
                id="project-image"
                onChange={handleProjectImageChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              label="Description"
              multiline
              rows={3}
              {...register("description", { required: true })}
              error={!!errors.technology}
              helperText={errors.name?.message}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              label="Details"
              multiline
              rows={5}
              {...register("details", { required: true })}
              error={!!errors.details}
              helperText={errors.name?.message}
              fullWidth={true}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Add Project
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
