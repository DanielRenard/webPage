import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import logo from "../assets/images/FoxBotLogo.png"; // import the logo

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 4, // added padding for more space
        fontSize: "12px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, row on medium and large screens
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          {/* Box for logo and copyright */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: { xs: 2, sm: 0 } }}>
            <img src={logo} alt="FoxBot Logo" style={{ width: '50px', marginBottom: '16px' }} />
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Daniel Renard. All rights reserved.
            </Typography>
          </Box>

          {/* Box for Useful Links */}
          <Box sx={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Link href="https://www.freeconvert.com/video-compressor" target="_blank" rel="noopener" display="block">
              Video Compressor
            </Link>
            <Link href="https://www.freeconvert.com/image-converter" target="_blank" rel="noopener" display="block">
              Image Converter
            </Link>
            <Link href="https://coolors.co/0a2e36-e8c547-adb6c4-92140c-a9714b" target="_blank" rel="noopener" display="block">
              Color Palette
            </Link>
            <Link href="https://miro.com/signup/" target="_blank" rel="noopener" display="block">
              Miro Signup
            </Link>
          </Box>

          {/* Box for Work History */}
          <Box sx={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Work History
            </Typography>
            <Link href="https://www.institutedata.com/us/" target="_blank" rel="noopener" display="block">
              Institute Data
            </Link>
            <Link href="https://www.klfy.com/" target="_blank" rel="noopener" display="block">
              KLFY
            </Link>
            <Link href="https://www.nexstar.tv/" target="_blank" rel="noopener" display="block">
              Nexstar
            </Link>
            <Link href="https://disneyland.disney.go.com/" target="_blank" rel="noopener" display="block">
              Disneyland
            </Link>
          </Box>

          {/* Box for Educational History */}
          <Box sx={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Educational History
            </Typography>
            <Link href="https://www.uno.edu/" target="_blank" rel="noopener" display="block">
              UNO
            </Link>
            <Link href="https://www.cpp.edu/" target="_blank" rel="noopener" display="block">
              CPP
            </Link>
            <Link href="https://www.institutedata.com/us/" target="_blank" rel="noopener" display="block">
              Institute Data
            </Link>
            <Link href="https://louisiana.edu/" target="_blank" rel="noopener" display="block">
              Louisiana.edu
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
