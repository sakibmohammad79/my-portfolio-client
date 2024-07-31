import Modal from "@/components/Shared/Modal/Modal";
import { Box, Button, Stack, TextField } from "@mui/material";

const Skill = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button>Add New Skill</Button>
        <Modal />
        <TextField placeholder="Search Skill" />
      </Stack>
    </Box>
  );
};

export default Skill;
