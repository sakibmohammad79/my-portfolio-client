"use client";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({
  open = false,
  setOpen,
  title = "",
  children,
}: TModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-card p-6">
        <DialogHeader>
          <DialogTitle className="text-xl text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-2">{children}</div>
      </DialogContent>
    </Dialog>
  );
}