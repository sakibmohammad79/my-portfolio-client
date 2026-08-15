"use client";
import { Download } from "lucide-react";
import * as FileSaver from "file-saver";
import { cn } from "@/lib/utils";

const DownloadResume = () => {
  const handleDownload = () => {
    const url =
      "https://drive.google.com/uc?export=download&id=1B8fyDX9bYvtARFf_Luu51HskGAt_vb59";
    FileSaver.saveAs(url, "resume.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 sm:px-7 sm:py-3.5 sm:text-base",
        "hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10"
      )}
    >
      Resume
      <Download className="h-4 w-4 text-primary" />
    </button>
  );
};

export default DownloadResume;