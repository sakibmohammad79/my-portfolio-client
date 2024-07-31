"use client";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import BlogModal from "./components/BlogModal";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDeleteBlogMutation, useGetAllBlogQuery } from "@/redux/api/blogApi";
import Image from "next/image";

const Blog = () => {
  const { data, isLoading } = useGetAllBlogQuery({});
  const [deleteBlog] = useDeleteBlogMutation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleBlogDelete = async (id: string) => {
    try {
      if (id) {
        await deleteBlog(id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    //{ field: "content", headerName: "Content", flex: 1 },
    {
      field: "content",
      headerName: "Content",
      flex: 1,
      renderCell: ({ row }) => {
        return <div dangerouslySetInnerHTML={{ __html: row.content }} />;
      },
    },
    {
      field: "image",
      headerName: "Image",
      width: 300,

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
    { field: "title", headerName: "Title", flex: 1 },
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
              onClick={() => handleBlogDelete(row?.id)}
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
        <Button onClick={() => setIsModalOpen(true)}>Add New Blog</Button>
        <BlogModal open={isModalOpen} setOpen={setIsModalOpen}></BlogModal>
        <TextField placeholder="Search Blog" />
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

export default Blog;
