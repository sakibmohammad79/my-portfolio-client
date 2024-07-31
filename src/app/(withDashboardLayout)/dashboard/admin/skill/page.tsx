"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SkillModal from "./components/SkillModal";
import { useState } from "react";
import { useGetAllSkillQuery } from "@/redux/api/skillApi";

const Skill = () => {
  const { data, isLoading } = useGetAllSkillQuery({});
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setIsModalOpen(true)}>Add New Skill</Button>
        <SkillModal open={isModalOpen} setOpen={setIsModalOpen}></SkillModal>
        <TextField placeholder="Search Skill" />
      </Stack>

      <Box>
        <h2>display data</h2>
      </Box>
    </Box>
  );
};

export default Skill;
