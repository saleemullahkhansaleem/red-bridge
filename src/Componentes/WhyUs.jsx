import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import React from "react";
import SubTitle from "./SubTitle";

const WhyUs = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/why-us.png')`,
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
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Box pl={{ xs: 0, sm: 8 }}>
              <SubTitle>Why Us?</SubTitle>
              <Typography variant="h4" color="primary" paragraph>
                Why Choose Us?
              </Typography>
              <FeaturesList />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;

const FeaturesList = () => {
  const features = [
    "Expert Engineers and Advanced Knowledge: Our team comprises highly skilled engineers with cutting-edge expertise.",
    "Outstanding Customer Service and Continued Support: We pride ourselves on delivering exceptional customer service and ongoing support.",
    "Tailored Solutions for Every Organization: We design solutions to fit the unique needs of every organization.",
    "Comprehensive Services: From design and supply to installation, commissioning, and maintenance, we offer a full suite of services.",
    "World-Class Fire and Safety Products: Our products are among the best in the industry.",
    "FREE No-Obligation Site Survey and Quotation: We offer complimentary site surveys and quotes without any obligation.",
    "Risk Assessments and Statutory Obligation Assistance: We help you manage risk assessments and meet statutory requirements.",
    "Prestigious Clients and Reputation: Our esteemed clientele and solid reputation speak for our reliability.",
    "24/7 Emergency Call-Outs: We provide round-the-clock emergency services.",
    "Flexible Finance Options: We offer various finance options to suit different needs.",
  ];

  return (
    <List
      sx={{
        listStyleType: "disc",
        paddingLeft: "20px",
        "& li": { display: "list-item" },
      }}
    >
      {features.map((feature, index) => (
        <ListItem component="li" sx={{ padding: "4px" }} key={index}>
          <ListItemText
            primary={<Typography variant="body1">{feature}</Typography>}
          />
        </ListItem>
      ))}
    </List>
  );
};
