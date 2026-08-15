"use client";
import ProjectModal from "./components/ProjectModal";
import { useState } from "react";
import {
  useDeleteProjectMutation,
  useGetAllProjectQuery,
} from "@/redux/api/projectApi";
import { Input } from "@/components/ui/input";
import { Loader2, FileText, Trash2, Plus } from "lucide-react";
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

const Project = () => {
  const [deleteProject] = useDeleteProjectMutation();
  const { data, isLoading } = useGetAllProjectQuery({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleProjectDelete = async (id: string) => {
    try {
      if (id) {
        await deleteProject(id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const rows = data || [];

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_10px_25px_var(--primary-glow)] transition-all duration-300 hover:bg-primary-light"
        >
          <Plus className="h-4 w-4" />
          Add New Project
        </button>
        <ProjectModal open={isModalOpen} setOpen={setIsModalOpen} />
        <Input placeholder="Search Project" className="max-w-xs" />
      </div>

      <div className="mt-5">
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="w-full overflow-hidden rounded-lg border border-border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead className="text-center">Start Date</TableHead>
                  <TableHead className="text-center">End Date</TableHead>
                  <TableHead className="text-center">Details</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell className="max-w-[220px] truncate font-medium">
                      {row.title}
                    </TableCell>
                    <TableCell>
                      <div className="h-[60px] w-[60px] overflow-hidden rounded-md border border-border">
                        <Image
                          src={row?.image}
                          alt="project image"
                          height={60}
                          width={60}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {row.startDate}
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {row.endDate}
                    </TableCell>
                    <TableCell className="text-center">
                      <Link
                        href={`/project/${row?.id}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-primary transition-colors hover:bg-primary/10"
                        aria-label="details"
                      >
                        <FileText className="h-4 w-4" />
                      </Link>
                    </TableCell>
                    <TableCell className="text-center">
                      <button
                        onClick={() => handleProjectDelete(row?.id)}
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

export default Project;