import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/FoxBotLogo.png";
import { useTheme, useMediaQuery } from "@mui/material";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Detects medium or smaller screens

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        height: "125px",
        backgroundColor: "#f5f5f5",
        boxSizing: "border-box",
      }}
    >
      {/* Title and Subtitle */}
      <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
        Daniel Renard
      </Typography>
      <Typography variant="subtitle1" component="h2" sx={{ color: "gray" }}>
        Technical Professional
      </Typography>

      {/* Links Section or Hamburger Menu */}
      {!isSmallScreen ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4, // Spacing between icons
            marginTop: 1,
          }}
        >
          <IconButton
            component={Link}
            href="https://github.com/DanielRenard"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:danieljuderenard@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/daniel-renard-420037a9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.youtube.com/@RodezAllDay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </IconButton>
        </Box>
      ) : (
        <>
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ position: "absolute", right: 16 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: 250,
              },
            }}
          >
            <List>
              <ListItem
                button
                component={Link}
                href="https://github.com/DanielRenard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="GitHub" />
              </ListItem>
              <ListItem
                button
                component={Link}
                href="mailto:danieljuderenard@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Email" />
              </ListItem>
              <ListItem
                button
                component={Link}
                href="https://www.linkedin.com/in/daniel-renard-420037a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
              </ListItem>
              <ListItem
                button
                component={Link}
                href="https://www.youtube.com/@RodezAllDay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>
                  <YouTubeIcon />
                </ListItemIcon>
                <ListItemText primary="YouTube" />
              </ListItem>
            </List>
          </Drawer>
        </>
      )}

      {/* Logo */}
      {!isSmallScreen && (
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            position: "absolute", // Position the logo absolutely relative to the header
            right: 25, // Space it from the right edge
            width: 100,
          }}
        />
      )}
    </Box>
  );
};

export default Header;