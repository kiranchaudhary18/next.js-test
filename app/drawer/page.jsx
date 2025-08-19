"use client";
import { Drawer, Button } from "@mui/material";
import { useState } from "react";

export default function DrawerPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>/mui/drawer</h1>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div>Drawer Content</div>
      </Drawer>
    </div>
  );
}
