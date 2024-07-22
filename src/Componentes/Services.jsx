import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SubTitle from "./SubTitle";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      imageUrl: "/services/fire-sys.png",
      title: "Fire System",
      description:
        "We provide a range of innovative fire protection systems to help you monitor and minimise threats, whilst meeting current building regulations and health and safety standards.",
    },
    {
      id: 2,
      imageUrl: "/services/security-sys.png",
      title: "Security System",
      description:
        "We supply the best security devices for every application: from access control and monitoring, right through to highly sophisticated, unified security systems.",
    },
    {
      id: 3,
      imageUrl: "/services/installation.png",
      title: "Installation",
      description:
        "We take immense pride in the quality of our installations. We will not leave your property until your level of security meets our incredibly high standards.",
    },
    {
      id: 4,
      imageUrl: "/services/maintenance.png",
      title: "Maintenance",
      description:
        "We provide tailored maintenance programmes to ensure that your fire or security system is working effectively and to its true potential all year round.",
    },
    {
      id: 5,
      imageUrl: "/services/protection.png",
      title: "Protection",
      description:
        "The newest member of the Pacific service offering, Fire Prevention is your first line of defence and an absolute “must have” in any building regardless of its size, or use",
    },
  ];

  return (
    <Box id="services" py={6} bgcolor="#FAF4F4">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} p={4}>
            <SubTitle>Our Services</SubTitle>
            <Typography
              variant="h3"
              fontSize={40}
              fontWeight={500}
              color="primary"
            >
              We offer a well complete design for Fire & Security
            </Typography>
          </Grid>

          {servicesData.map((service) => (
            <ServiceBox
              key={service.id}
              img={service.imageUrl}
              title={service.title}
              description={service.description}
              bt={service.id > 2 ? true : false}
              bl={service.id === 3 ? false : true}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const ServiceBox = ({ img, title, description, bt, bl }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      p={4}
      sx={{
        borderTop: bt ? "1px solid" : "none",
        borderLeft: bl ? "1px solid" : "none",
        borderColor: { xs: "transparent", md: "divider" },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <img src={img} alt={title} />
        <Typography variant="h4" fontWeight={500} color="primary">
          {title}
        </Typography>
      </Stack>
      <Typography fontSize={18} color="primary" paragraph>
        {description}
      </Typography>
    </Grid>
  );
};
