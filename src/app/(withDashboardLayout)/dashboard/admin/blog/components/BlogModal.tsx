import Modal from "@/components/Shared/Modal/Modal";
import { TextField } from "@mui/material";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const BlogModal = ({ open, setOpen }: TProps) => {
  return (
    <Modal open={open} setOpen={setOpen} title="Add New Blog">
      <form>
        <TextField />
      </form>
    </Modal>
  );
};

export default BlogModal;
