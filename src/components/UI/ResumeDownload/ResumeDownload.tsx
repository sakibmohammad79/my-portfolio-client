"use client";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import React from "react";
import * as FileSaver from "file-saver";
import { Button } from "@mui/material";

const DownloadResume = () => {
  const handleDownload = () => {
    const url =
      "https://drive.google.com/uc?export=download&id=1B8fyDX9bYvtARFf_Luu51HskGAt_vb59";
    FileSaver.saveAs(url, "resume.pdf");
  };

  return (
    <Button onClick={handleDownload}>
      Resume <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>
    </Button>
  );
};

export default DownloadResume;
