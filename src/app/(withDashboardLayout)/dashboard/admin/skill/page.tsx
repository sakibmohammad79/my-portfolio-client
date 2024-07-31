"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SkillModal from "./components/SkillModal";
import { useState } from "react";

const Skill = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setIsModalOpen(true)}>Add New Skill</Button>
        <SkillModal open={isModalOpen} setOpen={setIsModalOpen}></SkillModal>
        <TextField placeholder="Search Skill" />
      </Stack>
    </Box>
  );
};

export default Skill;
