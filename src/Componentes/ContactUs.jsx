import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactUs = () => {
  return (
    <>
      <Box
        id="contact"
        sx={{
          backgroundImage: `url('/contact-bg.png')`,
          backgroundColor: "#404041",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          borderBottom: "solid #fff 1px",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} sx={{ height: "100%" }}>
              <Typography color="white" fontWeight={500} variant="h3" mb={2}>
                Contact US
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={6} sm={6}>
                  <Typography color="white">0203 4325 621</Typography>
                  <Typography color="white" mb={2}>
                    sales@redbridgefire.com
                  </Typography>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.843895870934!2d0.06701027632096171!3d51.552761407388964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a65e1128c9d3%3A0xb1e48eb191e6a879!2s10%20Eltisley%20Rd%2C%20Ilford%20IG1%202EP%2C%20UK!5e0!3m2!1sen!2s!4v1720782743434!5m2!1sen!2s"
                    width="150"
                    height="150"
                    allowFullScreen=""
                    loading="lazy"
                    style={{
                      border: 0,
                      borderRadius: "8px",
                      filter: "grayscale(1)",
                    }}
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  display="flex"
                  direction="column"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography color="white" textTransform="uppercase">
                      Office
                    </Typography>
                    <Typography color="white">
                      10, Eltisley Road, Ilford, <br /> London IG1 2EP
                    </Typography>
                  </Box>
                  {/* <Box>
                    <Typography color="white">
                      Follow us on Social Media
                    </Typography>
                    <Stack direction="row">
                      <IconButton
                        sx={{ color: "#fff" }}
                        component="a"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                      </IconButton>
                      <IconButton
                        sx={{ color: "#fff" }}
                        component="a"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon />
                      </IconButton>
                      <IconButton
                        sx={{ color: "#fff" }}
                        component="a"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </Stack>
                  </Box> */}
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
          </Grid>

          <Typography color="white" textAlign="center" fontSize={12} mb={2}>
            © 2024 Redbridge Fire and Security Solutions
          </Typography>
        </Container>
      </Box>
      <Box height={8} bgcolor="secondary.main"></Box>
    </>
  );
};

export default ContactUs;
