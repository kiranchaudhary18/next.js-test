"use client";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

export default function TabsPage() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>/mui/navigation/tabs</h1>
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label="One" />
        <Tab label="Two" />
        <Tab label="Three" />
      </Tabs>
      <p>Selected: {value + 1}</p>
    </div>
  );
}
