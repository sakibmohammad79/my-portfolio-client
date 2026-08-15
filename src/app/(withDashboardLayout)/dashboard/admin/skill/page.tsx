"use client";
import SkillModal from "./components/SkillModal";
import { useState } from "react";
import {
  useDeleteSkillMutation,
  useGetAllSkillQuery,
} from "@/redux/api/skillApi";
import { Input } from "@/components/ui/input";
import { Loader2, Trash2, Plus } from "lucide-react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Skill = () => {
  const { data, isLoading } = useGetAllSkillQuery({});
  const [deleteSkill] = useDeleteSkillMutation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSkillDelete = async (id: string) => {
    try {
      if (id) {
        await deleteSkill(id);
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
          Add New Skill
        </button>
        <SkillModal open={isModalOpen} setOpen={setIsModalOpen} />
        <Input placeholder="Search Skill" className="max-w-xs" />
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
                  <TableHead className="w-[400px]">Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead className="w-[200px] text-center">Percentage</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>
                      <div className="h-10 w-10 overflow-hidden rounded-md border border-border">
                        <Image
                          src={row?.image}
                          alt="skill image"
                          height={40}
                          width={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {row.parcentage}
                    </TableCell>
                    <TableCell className="text-center">
                      <button
                        onClick={() => handleSkillDelete(row?.id)}
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

export default Skill;