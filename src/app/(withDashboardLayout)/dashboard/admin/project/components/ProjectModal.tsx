"use client";
import Modal from "@/components/Shared/Modal/Modal";
import { useAddProjectMutation } from "@/redux/api/projectApi";
import { getUserInfo } from "@/services/auth.services";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
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
  repoClientUrl: string;
  repoServerUrl: string;
}
const ProjectModal = ({ open, setOpen }: TProps) => {
  const [addProject, { isLoading }] = useAddProjectMutation();
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

      try {
        if (imageUrl) {
          const res = await addProject(projectData).unwrap();
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
      setSelectedImage(selectedImage);
    }
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Add Project">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register("title", { required: true })} aria-invalid={!!errors.title} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="url">Project URL</Label>
            <Input id="url" {...register("url", { required: true })} aria-invalid={!!errors.url} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="technology">Technology</Label>
            <Input id="technology" {...register("technology", { required: true })} aria-invalid={!!errors.technology} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="startDate">Start Date</Label>
            <Input id="startDate" {...register("startDate", { required: true })} aria-invalid={!!errors.startDate} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="endDate">End Date</Label>
            <Input id="endDate" {...register("endDate", { required: true })} aria-invalid={!!errors.endDate} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="project-image">Image</Label>
            <Input id="project-image" type="file" onChange={handleProjectImageChange} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="repoClientUrl">Client Repo</Label>
            <Input id="repoClientUrl" {...register("repoClientUrl", { required: true })} aria-invalid={!!errors.repoClientUrl} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="repoServerUrl">Server Repo</Label>
            <Input id="repoServerUrl" {...register("repoServerUrl", { required: true })} aria-invalid={!!errors.repoServerUrl} />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            rows={3}
            {...register("description", { required: true })}
            aria-invalid={!!errors.description}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="details">Details</Label>
          <Textarea
            id="details"
            rows={5}
            {...register("details", { required: true })}
            aria-invalid={!!errors.details}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_10px_25px_var(--primary-glow)] transition-all duration-300 hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          Add Project
        </button>
      </form>
    </Modal>
  );
};

export default ProjectModal;