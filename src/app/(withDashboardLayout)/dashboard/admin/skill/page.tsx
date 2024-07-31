"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import SkillModal from "./components/SkillModal";
import { useState } from "react";
import {
  useDeleteSkillMutation,
  useGetAllSkillQuery,
} from "@/redux/api/skillApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 400 },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row?.image} alt="skill image" height={40} width={40} />
          </Box>
        );
      },
    },
    {
      field: "parcentage",
      headerName: "Parcentage",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              sx={{
                color: "red",
              }}
              onClick={() => handleSkillDelete(row?.id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setIsModalOpen(true)}>Add New Skill</Button>
        <SkillModal open={isModalOpen} setOpen={setIsModalOpen}></SkillModal>
        <TextField placeholder="Search Skill" />
      </Stack>

      <Box mt={5}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box style={{ width: "100%" }}>
            <DataGrid rows={data} columns={columns} hideFooter />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Skill;
