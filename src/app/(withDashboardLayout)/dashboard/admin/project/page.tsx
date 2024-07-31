"use client";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import ProjectModal from "./components/ProjectModal";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useDeleteProjectMutation,
  useGetAllProjectQuery,
} from "@/redux/api/projectApi";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "image",
      headerName: "Image",
      width: 200,

      renderCell: ({ row }) => {
        return (
          <Box>
            <Image
              src={row?.image}
              alt="skill image"
              height={100}
              width={100}
            />
          </Box>
        );
      },
    },
    {
      field: "startDate",
      headerName: "Start Date",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "endDate",
      headerName: "End Date",
      align: "center",
      headerAlign: "center",
      flex: 1,
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
              onClick={() => handleProjectDelete(row?.id)}
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
        <Button onClick={() => setIsModalOpen(true)}>Add New Project</Button>
        <ProjectModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
        ></ProjectModal>
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

export default Project;
