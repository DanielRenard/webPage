import React, { useState, useEffect } from "react"; 
import { Box, Typography, IconButton, Collapse, useMediaQuery } from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  ExpandMore,
  ExpandLess,
  Email,
  LinkedIn,
  AccountBox,
  School,
  Work,
  EmojiEvents,
} from "@mui/icons-material";
import profileImage from "../assets/images/dan2.png";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isAwardsOpen, setIsAwardsOpen] = useState(false);

  // Check if the screen width is medium or smaller (e.g., mobile/tablet)
  const isSmallScreen = useMediaQuery("(max-width: 900px)"); 

  // Collapse the sidebar if the screen is medium or smaller
  useEffect(() => {
    setCollapsed(isSmallScreen);  // Set collapsed state based on screen size
  }, [isSmallScreen]);

  return (
    <Box
      sx={{
        width: collapsed ? "80px" : "300px", // Set the width based on collapse state
        minWidth: collapsed ? "80px" : "300px", 
        height: "720px",
        minHeight: '100vh',
        backgroundColor: "#f5f5f5",
        padding: collapsed ? "8px" : "16px", // Padding when collapsed vs open
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s ease", // Smooth transition for width change
        overflow: "auto",
      }}
    >
      {/* Collapse Button */}
      <Box
        display="flex"
        justifyContent={collapsed ? "center" : "flex-end"}
        width="100%"
      >
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
          {/* Image and Email Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Image Section */}
            <Box
              component="img"
              src={profileImage}
              alt="Profile"
              sx={{
                width: "50%",
                height: "150px",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* Name Text */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 1,
                }}
              >
                Daniel Renard, M.A.
              </Typography>

              {/* Icon Links */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                {/* Email Icon Link */}
                <IconButton
                  href="mailto:danieljuderenard@gmail.com"
                  target="_blank"
                  sx={{
                    color: "#1976d2",
                    "&:hover": { backgroundColor: "#e3f2fd" },
                  }}
                >
                  <Email />
                </IconButton>

                {/* LinkedIn Icon Link */}
                <IconButton
                  href="https://www.linkedin.com/in/daniel-renard/"
                  target="_blank"
                  sx={{
                    color: "#1976d2",
                    "&:hover": { backgroundColor: "#e3f2fd" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Collapsible Sections */}
          {[{
            title: "Biography",
            isOpen: isBioOpen,
            setIsOpen: setIsBioOpen,
            content: "With 7+ years’ experience in news broadcasting, I have gained skills in leadership, collaboration, and urgency. Recently, I have received certification in Software Engineering from the University of Louisiana at Lafayette, where I gained practical skills in design and implementing software solutions. Looking to begin my career as a Technical Professional, I am eager to land a role on your team. Some of the key workplace skills I can bring to an organization include attention to detail, problem-solving, and understanding the end-user."
          }, {
            title: "Education",
            isOpen: isEducationOpen,
            setIsOpen: setIsEducationOpen,
            content: (
              <>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }} >
                  2023 - 2024
                </Typography>
                <Typography variant="body2">University of Louisiana at Lafayette/Institute of Data</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  Software Bootcamp – Professional Certificate in Software Engineering
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }} >
                  2014 - 2016
                </Typography>
                <Typography variant="body2">California State Polytechnic University, Pomona</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>History – Master of Arts</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }} >
                  2007 - 2011
                </Typography>
                <Typography variant="body2">University of New Orleans</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  Film, Theatre, and Communication Arts – Bachelor of Arts
                </Typography>
              </>
            ),
          }, {
            title: "Work Experience",
            isOpen: isWorkOpen,
            setIsOpen: setIsWorkOpen,
            content: (
              <>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }} >
                  2024 - 
                </Typography>
                <Typography variant="body2">Institue of Data</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>Assistant Trainer</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }} >
                  2017 - 2024
                </Typography>
                <Typography variant="body2">KLFY News 10/Nexstar Media Group</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>Newscast Director</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }} >
                  2011 - 2015
                </Typography>
                <Typography variant="body2">Disneyland Resort</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>Working Lead/Photographer</Typography>
              </>
            ),
          }, {
            title: "Awards",
            isOpen: isAwardsOpen,
            setIsOpen: setIsAwardsOpen,
            content: (
              <>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }} >
                  2023
                </Typography>
                <Typography variant="body2">
                  LAB Prestige Award - Uniquely Louisiana "Passe Partout"
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }} >
                  2019
                </Typography>
                <Typography variant="body2">
                  LAB Prestige Award - Best Morning Show "Passe Partout"
                </Typography>
              </>
            ),
          }].map((section, index) => (
            <Box key={index} sx={{ marginTop: 2 }}>
              {/* Section Header */}
              <Box
                onClick={() => section.setIsOpen(!section.isOpen)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: "#e3f2fd",
                  padding: "8px 12px",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="h6" sx={{ fontSize: "12px", fontWeight: "bold" }} >
                  {section.title}
                </Typography>
                {section.isOpen ? <ExpandLess /> : <ExpandMore />}
              </Box>

              {/* Collapsible Section Content */}
              <Collapse in={section.isOpen} timeout="auto" unmountOnExit>
                <Typography variant="body1" sx={{ textAlign: "left", fontSize: "12px", lineHeight: "1.6", marginTop: 1, paddingX: 1 }} >
                  {section.content}
                </Typography>
              </Collapse>
            </Box>
          ))}
        </>
      ) : (
        <>
          {/* When collapsed, show icons for each section */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            {/* Biography Icon */}
            <IconButton
              sx={{
                color: "#1976d2",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={() => {
                setCollapsed(false);  // Open the sidebar
                setIsBioOpen(!isBioOpen);  // Toggle the Biography dropdown
              }}
            >
              <AccountBox />
            </IconButton>

            {/* Education Icon */}
            <IconButton
              sx={{
                color: "#1976d2",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={() => {
                setCollapsed(false);  // Open the sidebar
                setIsEducationOpen(!isEducationOpen);  // Toggle the Education dropdown
              }}
            >
              <School />
            </IconButton>

            {/* Work Experience Icon */}
            <IconButton
              sx={{
                color: "#1976d2",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={() => {
                setCollapsed(false);  // Open the sidebar
                setIsWorkOpen(!isWorkOpen);  // Toggle the Work Experience dropdown
              }}
            >
              <Work />
            </IconButton>

            {/* Awards Icon */}
            <IconButton
              sx={{
                color: "#1976d2",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={() => {
                setCollapsed(false);  // Open the sidebar
                setIsAwardsOpen(!isAwardsOpen);  // Toggle the Awards dropdown
              }}
            >
              <EmojiEvents />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;