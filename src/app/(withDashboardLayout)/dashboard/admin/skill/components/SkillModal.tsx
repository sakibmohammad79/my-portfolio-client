import Modal from "@/components/Shared/Modal/Modal";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Slider,
  Button,
  Box,
  Typography,
  Grid,
  InputLabel,
  FormControl,
  Input,
} from "@mui/material";

interface SkillFormData {
  name: string;
  parcentage: number;
  image: File | null;
}

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SkillModal = ({ open, setOpen }: TProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SkillFormData>();

  const onSubmit = async (data: SkillFormData) => {
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
      console.log(imageUrl);
      const skillData = {
        ...data,
        image: imageUrl,
      };
      console.log(skillData);
      //   if (imageUrl) {
      //     const res = await donorUpdate({
      //       id: data?.id,
      //       data: { photo: imageUrl },
      //     });
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSkillImageChange = (event: any) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      // Check if a file is actually selected
      setSelectedImage(selectedImage);
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Add New skill">
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" component="h2">
          Add Skill
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Skill Name"
              {...register("name", { required: true })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <Slider
              {...register("skillPercentage", {
                required: true,
                min: 0,
                max: 100,
              })}
              aria-labelledby="skill-percentage-slider"
              valueLabelDisplay="auto"
              marks
              min={0}
              max={100}
              error={!!errors.skillPercentage}
              helperText={errors.skillPercentage?.message}
            />
          </Grid> */}
          <Grid item xs={12}>
            <Slider
              {...register("parcentage", {
                required: true,
                min: 0,
                max: 100,
              })}
              aria-labelledby="skill-percentage-slider"
              valueLabelDisplay="auto"
              marks
              min={0}
              max={100}
              //error={!!errors.skillPercentage}
              //helperText={errors.skillPercentage?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              {/* <InputLabel htmlFor="skill-image">Skill Image</InputLabel> */}
              <Input
                type="file"
                id="skill-image"
                onChange={handleSkillImageChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Add Skill
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SkillModal;
