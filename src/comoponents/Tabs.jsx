import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Sidebar from "./SideBar";

const DashTabs = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleChange = (event, newValue) => {
    // Add a delay between tab switches
    setTimeout(() => setSelectedTab(newValue), 500);
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Tabs Bar */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", backgroundColor: "#f5f5f5" }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          TabIndicatorProps={{ sx: { display: "none" } }} // Hide the default indicator
          sx={{
            ".MuiTabs-flexContainer": {
              gap: "8px", // Space between tabs
            },
          }}
        >
          {/* Custom Tabs */}
          <Tab
            value="tab1"
            label="Dashboard"
            sx={{
              backgroundColor: selectedTab === "tab1" ? "#b0b0b0" : "#d3d3d3",
              color: "black",
              borderRadius: "8px 8px 0 0", // Slanted edges
              textTransform: "none", // Keep text normal case
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#c0c0c0",
              },
            }}
          />
          <Tab
            value="tab2"
            label="Coach Billiam"
            sx={{
              backgroundColor: selectedTab === "tab2" ? "#b0b0b0" : "#d3d3d3",
              color: "black",
              borderRadius: "8px 8px 0 0", // Slanted edges
              textTransform: "none", // Keep text normal case
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#c0c0c0",
              },
            }}
          />
          <Tab
            value="tab3"
            label="Coach Leffrey"
            sx={{
              backgroundColor: selectedTab === "tab3" ? "#b0b0b0" : "#d3d3d3",
              color: "black",
              borderRadius: "8px 8px 0 0", // Slanted edges
              textTransform: "none", // Keep text normal case
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#c0c0c0",
              },
            }}
          />
        </Tabs>
      </Box>

      {/* Main Content */}
      <Box display="flex" flexGrow={1}>
        {/* Collapsible Sidebar */}
        <Sidebar selectedTab={selectedTab} />

        {/* Tab Content */}
        <Box flexGrow={1} p={3}>
          {selectedTab === "tab1" && <div>Dashboard</div>}
          {selectedTab === "tab2" && <div>Content from Coach Billiam</div>}
          {selectedTab === "tab3" && <div>Content from Coach Leffrey</div>}
        </Box>
      </Box>
    </Box>
  );
};

export default DashTabs;