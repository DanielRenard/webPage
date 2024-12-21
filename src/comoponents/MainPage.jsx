import React from "react";
import Header from "./Header";
import DashTabs from "./Tabs";
import Footer from "./Footer";
import { Box } from "@mui/material";

export default function MainPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flex: 1, overflow: "auto" }}>
        <DashTabs />
      </div>
      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "16px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
}
