"use client";
import Modal from "@/components/Shared/Modal/Modal";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { getUserInfo } from "@/services/auth.services";
import { useAddSkillMutation } from "@/redux/api/skillApi";
import { toast } from "sonner";

interface SkillFormData {
  name: string;
  parcentage: number;
  userId: string;
}

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SkillModal = ({ open, setOpen }: TProps) => {
  const [addSkill, { isLoading }] = useAddSkillMutation();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUserId(userInfo?.adminId);
    }
  }, []);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SkillFormData>();

  const percentage = watch("parcentage") || 0;

  const onSubmit = async (data: SkillFormData) => {
    const parcentageValue = Number(data.parcentage);
    data.parcentage = parcentageValue;
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

      const skillData = {
        ...data,
        image: imageUrl,
      };
      try {
        if (imageUrl) {
          const res = await addSkill(skillData).unwrap();
          if (res?.id) {
            toast.success("Added skill successfully!");
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

  const handleSkillImageChange = (event: any) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setSelectedImage(selectedImage);
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Add New skill">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="space-y-1.5">
          <Label htmlFor="name">Skill Name</Label>
          <Input id="name" {...register("name", { required: true })} aria-invalid={!!errors.name} />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="parcentage">Percentage</Label>
            <span className="text-sm font-semibold text-primary">{percentage}%</span>
          </div>
          <input
            id="parcentage"
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            className="w-full accent-primary"
            {...register("parcentage", { required: true, min: 0, max: 100 })}
            onChange={(e) => setValue("parcentage", Number(e.target.value))}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="skill-image">Image</Label>
          <Input id="skill-image" type="file" onChange={handleSkillImageChange} />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_10px_25px_var(--primary-glow)] transition-all duration-300 hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          Add Skill
        </button>
      </form>
    </Modal>
  );
};

export default SkillModal;