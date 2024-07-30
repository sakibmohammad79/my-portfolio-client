"use client";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Box
        sx={{
          minHeight: {
            xs: "auto",
            sm: "600px",
            md: "900px",
            lg: "1200px",
            xl: "1536px",
          },
        }}
      >
        {children}
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
