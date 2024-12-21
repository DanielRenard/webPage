import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Sidebar from "./SideBar";
import ResumeTab from "./Resume/ResumeTab";
import Calculator from "./Calculator/Calculator";

const DashTabs = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleChange = (event, newValue) => {
    setTimeout(() => setSelectedTab(newValue), 250);
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Tabs Bar */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{
            ".MuiTabs-flexContainer": {
              gap: "8px",
            },
          }}
        >
          <Tab
            value="tab1"
            label="Resume"
            sx={{
              backgroundColor: selectedTab === "tab1" ? "#b0b0b0" : "#d3d3d3",
              color: "black",
              borderRadius: "8px 8px 0 0",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#c0c0c0",
              },
            }}
          />
          <Tab
            value="tab2"
            label="Project - eCommerce"
            sx={{
              backgroundColor: selectedTab === "tab2" ? "#b0b0b0" : "#d3d3d3",
              color: "black",
              borderRadius: "8px 8px 0 0",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#c0c0c0",
              },
            }}
          />
          <Tab
            value="tab3"
            label="Project - Calculator"
            sx={{
              backgroundColor: selectedTab === "tab3" ? "#b0b0b0" : "#d3d3d3",
              color: "black",
              borderRadius: "8px 8px 0 0",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#c0c0c0",
              },
            }}
          />
          <Tab
            value="tab4"
            label="Project - Dice Roll"
            sx={{
              backgroundColor: selectedTab === "tab4" ? "#b0b0b0" : "#d3d3d3",
              color: "black",
              borderRadius: "8px 8px 0 0",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#c0c0c0",
              },
            }}
          />
          <Tab
            value="tab5"
            label="Newscast Directing"
            sx={{
              backgroundColor: selectedTab === "tab5" ? "#b0b0b0" : "#d3d3d3",
              color: "black",
              borderRadius: "8px 8px 0 0",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#c0c0c0",
              },
            }}
          />
        </Tabs>
      </Box>

      {/* Main Content */}
      <Box display="flex" flexGrow={1} sx={{ overflow: "auto", paddingBottom: "80px" }}>
        {/* Collapsible Sidebar */}
        <Sidebar selectedTab={selectedTab} />

        {/* Tab Content */}
        <Box
          flexGrow={1}
          p={3}
          sx={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
        >
          {selectedTab === "tab1" && <ResumeTab />}
          {selectedTab === "tab2" && <div>Content from Coach Billiam</div>}
          {selectedTab === "tab3" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                marginTop: "10px",
                width: "100%",
                height: "100%",
                overflow: "auto",
              }}
            >
              <Calculator />
            </Box>
          )}
          {selectedTab === "tab4" && <div>Content from Coach Jimmothy</div>}
          {selectedTab === "tab5" && <div>Content from Coach Dichard</div>}
        </Box>
      </Box>
    </Box>
  );
};

export default DashTabs;
