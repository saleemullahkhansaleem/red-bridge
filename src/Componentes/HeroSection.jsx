import React from "react";
import { Box, Typography, Button, IconButton, Container } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/main-banner.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 160px)", // Adjust height as needed
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          component="h1"
          color={"secondary"}
          fontWeight={500}
          sx={{
            fontSize: {
              xs: "36px",
              sm: "48px",
              md: "64px",
              lg: "80px",
              xl: "100px",
            },
          }}
        >
          REDBRIDGE
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color={"primary"}
          fontWeight={500}
          sx={{
            mb: 4,
            fontSize: {
              xs: "36px",
              sm: "48px",
              md: "64px",
              lg: "76px",
              xl: "90px",
            },
          }}
        >
          FIRE AND SECURITY <br /> SOLUTIONS
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mb: 2,
            backgroundColor: "#FFF",
            color: "#404041",
            "&:hover": {
              backgroundColor: "#FFF",
            },
          }}
        >
          Get a Free Fire Safety Quote Today!
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
