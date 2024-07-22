import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import Services from "./Services";
import SubTitle from "./SubTitle";

const AboutUs = () => {
  return (
    <>
      <Box
        id="about"
        sx={{
          backgroundImage: `url('/about-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={6}>
              <SubTitle>About Us</SubTitle>
              <Typography
                variant="h3"
                textTransform={"uppercase"}
                fontWeight={500}
                color="primary"
                gutterBottom
              >
                <span style={{ color: "#BC0012" }}>Redbridge’s</span> <br />
                Mission is clear
              </Typography>
              <Typography fontSize={18} color="primary" paragraph>
                To deliver the world's finest fire and security technology,
                supported by exceptional service that our clients can rely on.{" "}
                <br />
                Fire and security measures are critical, life-saving
                considerations for all businesses and organizations. We assist
                you in meeting your statutory obligations and ensure that your
                people, property, and assets receive the best available
                protection.
              </Typography>
              <Button variant="contained" color="secondary">
                Learn More Redbridge
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <img
                src="/about-us.png"
                alt="About Image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Services />
      <Box
        sx={{
          backgroundImage: `url('/about-bg-2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "320px",
          // maxHeight: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ maxWidth: "1000px" }}
          >
            <Grid item xs={12} sm={6}>
              <img src="/about-icon-1.png" alt="icon" />
              <Typography variant="h4" color="primary" paragraph>
                Free no obligation <br /> survey and quotation
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src="/about-icon-2.png" alt="icon" />
              <Typography variant="h4" color="primary" paragraph>
                Emergency Call-outs <br /> 24/7 Service
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
