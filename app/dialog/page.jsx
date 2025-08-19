"use client";
import { Dialog, DialogTitle, Button } from "@mui/material";
import { useState } from "react";

export default function DialogPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>/mui/dialog</h1>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog Opened</DialogTitle>
      </Dialog>
    </div>
  );
}
