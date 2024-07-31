"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SkillModal from "./components/SkillModal";
import { useState } from "react";
import { useGetAllSkillQuery } from "@/redux/api/skillApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";

const Skill = () => {
  const { data, isLoading } = useGetAllSkillQuery({});
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: "image", headerName: "Image", width: 70 },
    { field: "name", headerName: "Skill", width: 70 },
    { field: "parcentage", headerName: "Parcentage", width: 70 },
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
