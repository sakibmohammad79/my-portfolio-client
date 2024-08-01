"use client";
import { useDeleteBlogMutation, useGetAllBlogQuery } from "@/redux/api/blogApi";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import BlogModal from "./components/BlogModal";

const Blog = () => {
  const { data, isLoading, error } = useGetAllBlogQuery({});
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
    {
      field: "image",
      headerName: "Image",
      width: 300,
      renderCell: ({ row }) => (
        <Box>
          <Image src={row?.image} alt="blog image" height={100} width={100} />
        </Box>
      ),
    },
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "Details",
      headerName: "Details",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box>
          <Link href={`/blog/${row?.id}`}>
            <IconButton
              sx={{
                color: "primary.main",
              }}
            >
              <DescriptionIcon />
            </IconButton>
          </Link>
        </Box>
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
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
      ),
    },
  ];

  const rows = data || [];

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
        ) : error ? (
          <Box>Error loading blogs. Please try again later.</Box>
        ) : (
          <Box style={{ width: "100%" }}>
            <DataGrid rows={rows} columns={columns} hideFooter />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Blog;
