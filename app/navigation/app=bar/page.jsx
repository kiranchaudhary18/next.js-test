"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AppbarPage() {
  return (
    <div>
      <h1>/mui/navigation/appbar</h1>
      <AppBar>
        <Toolbar>
          <Typography>My AppBar</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
