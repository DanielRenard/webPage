import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Tooltip,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircleOutline,
  Message,
  AssignmentTurnedIn,
  Notifications,
  Schedule,
} from "@mui/icons-material";

const Sidebar = ({ selectedTab }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box
      sx={{
        width: collapsed ? "80px" : "300px",
        height: "720px",
        backgroundColor: "#f5f5f5",
        padding: collapsed ? "8px" : "16px",
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s ease",
        overflow: "auto",
      }}
    >
      {/* Collapse Button */}
      <Box display="flex" justifyContent={collapsed ? "center" : "flex-end"}>
        <IconButton
          onClick={() => setCollapsed(!collapsed)}
          sx={{
            color: "#1976d2",
            "&:hover": { backgroundColor: "#e3f2fd" },
          }}
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Box>

      {/* Sidebar Content */}
      {!collapsed ? (
        <>
          {/* Section 1: Objectives / Big Goals */}
          <Typography variant="h6" sx={{ marginY: 1 }}>
            Objectives / Big Goals
          </Typography>
          <List dense>
            <ListItemButton>
              <CheckCircleOutline sx={{ marginRight: 1, color: "#1976d2" }} />
              <ListItemText primary="Goal 1: Build React App" />
            </ListItemButton>
            <ListItemButton>
              <AssignmentTurnedIn sx={{ marginRight: 1, color: "#1976d2" }} />
              <ListItemText primary="Goal 2: Implement Sidebar" />
            </ListItemButton>
            <ListItemButton>
              <Notifications sx={{ marginRight: 1, color: "#1976d2" }} />
              <ListItemText primary="Goal 3: Style Tabs" />
            </ListItemButton>
            <ListItemButton>
              <Schedule sx={{ marginRight: 1, color: "#1976d2" }} />
              <ListItemText primary="Goal 4: Add Animations" />
            </ListItemButton>
          </List>
          <Divider sx={{ marginY: 2 }} />

          {/* Section 2: Messages */}
          <Typography variant="h6" sx={{ marginY: 1 }}>
            Messages
          </Typography>
          <List dense>
            <ListItemButton>
              <Message sx={{ marginRight: 1, color: "#1976d2" }} />
              <ListItemText primary="Message 1: Meeting at 3 PM" />
            </ListItemButton>
            <ListItemButton>
              <Message sx={{ marginRight: 1, color: "#1976d2" }} />
              <ListItemText primary="Message 2: Update on Project" />
            </ListItemButton>
            <ListItemButton>
              <Message sx={{ marginRight: 1, color: "#1976d2" }} />
              <ListItemText primary="Message 3: New Notification" />
            </ListItemButton>
          </List>
        </>
      ) : (
        <>
          {/* Collapsed Sidebar with Tooltips */}
          <List dense>
            {/* Section 1: Objectives */}
            <Tooltip title="Objectives / Big Goals" placement="right">
              <ListItemButton>
                <CheckCircleOutline sx={{ color: "#1976d2" }} />
              </ListItemButton>
            </Tooltip>
            <Tooltip title="Goal 1: Build React App" placement="right">
              <ListItemButton>
                <AssignmentTurnedIn sx={{ color: "#1976d2" }} />
              </ListItemButton>
            </Tooltip>
            <Tooltip title="Goal 3: Notifications" placement="right">
              <ListItemButton>
                <Notifications sx={{ color: "#1976d2" }} />
              </ListItemButton>
            </Tooltip>
            <Tooltip title="Goal 4: Animations" placement="right">
              <ListItemButton>
                <Schedule sx={{ color: "#1976d2" }} />
              </ListItemButton>
            </Tooltip>

            <Divider sx={{ marginY: 2 }} />

            {/* Section 2: Messages */}
            <Tooltip title="Messages" placement="right">
              <ListItemButton>
                <Message sx={{ color: "#1976d2" }} />
              </ListItemButton>
            </Tooltip>
            <Tooltip title="Message 1: Meeting at 3 PM" placement="right">
              <ListItemButton>
                <Message sx={{ color: "#1976d2" }} />
              </ListItemButton>
            </Tooltip>
            <Tooltip title="Message 2: Update on Project" placement="right">
              <ListItemButton>
                <Message sx={{ color: "#1976d2" }} />
              </ListItemButton>
            </Tooltip>
          </List>
        </>
      )}
    </Box>
  );
};

export default Sidebar;