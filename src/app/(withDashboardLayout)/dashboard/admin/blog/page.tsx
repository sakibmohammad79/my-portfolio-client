"use client";
import { useDeleteBlogMutation, useGetAllBlogQuery } from "@/redux/api/blogApi";
import { Input } from "@/components/ui/input";
import { Loader2, FileText, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Blog = () => {
  const { data, isLoading, error } = useGetAllBlogQuery({});
  const [deleteBlog] = useDeleteBlogMutation();

  const handleBlogDelete = async (id: string) => {
    try {
      if (id) {
        await deleteBlog(id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const rows = data || [];

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <Input placeholder="Search Blog" className="max-w-xs" />
      </div>
      <div className="mt-5">
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="rounded-lg border border-border bg-card p-6 text-center text-muted-foreground">
            Error loading blogs. Please try again later.
          </div>
        ) : (
          <div className="w-full overflow-hidden rounded-lg border border-border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="text-center">Details</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>
                      <div className="h-[60px] w-[60px] overflow-hidden rounded-md border border-border">
                        <Image
                          src={row?.image}
                          alt="blog image"
                          height={60}
                          width={60}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[260px] truncate">{row.title}</TableCell>
                    <TableCell className="text-center">
                      <Link
                        href={`/blog/${row?.id}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-primary transition-colors hover:bg-primary/10"
                        aria-label="details"
                      >
                        <FileText className="h-4 w-4" />
                      </Link>
                    </TableCell>
                    <TableCell className="text-center">
                      <button
                        onClick={() => handleBlogDelete(row?.id)}
                        aria-label="delete"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-destructive transition-colors hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;