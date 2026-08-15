"use client";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { getUserInfo } from "@/services/auth.services";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { toast } from "sonner";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface BlogFormData {
  name: string;
  title: string;
  userId: string;
}

const Page = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [addBlog, { isLoading }] = useAddBlogMutation();
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

      try {
        if (imageUrl) {
          const res = await addBlog(BlogData).unwrap();
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-[900px] space-y-6"
    >
      <h2 className="text-lg font-bold text-foreground">Write Blog</h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title", { required: true })} aria-invalid={!!errors.title} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name", { required: true })} aria-invalid={!!errors.name} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Content</Label>
        <div className="overflow-hidden rounded-lg border border-border">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="project-image">Image</Label>
        <Input id="project-image" type="file" onChange={handleProjectImageChange} />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_10px_25px_var(--primary-glow)] transition-all duration-300 hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        Add Blog
      </button>
    </form>
  );
};

export default Page;