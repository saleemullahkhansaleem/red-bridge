import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Container,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import NewsCard from "./NewsCard";
import EventIcon from "@mui/icons-material/Event";
import SubTitle from "./SubTitle";

const news = [
  {
    title: "Fire safety and instructions",
    date: "May 10, 2024",
  },
  {
    title: "About fire department services",
    date: "May 10, 2024",
  },
  {
    title: "Fire safety and instructions",
    date: "May 10, 2024",
  },
  {
    title: "About fire department services",
    date: "May 10, 2024",
  },
  {
    title: "Fire safety and instructions",
    date: "May 10, 2024",
  },
  {
    title: "About fire department services",
    date: "May 10, 2024",
  },
  {
    title: "Fire safety and instructions",
    date: "May 10, 2024",
  },
];

const News = () => {
  return (
    <Box id="news" py={4} mt={6}>
      <Container>
        <Grid container spacing={3}>
          <Grid p={4} item xs={12} md={7}>
            <SubTitle>Latest News</SubTitle>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                <NewsCard
                  imageUrl="/news/news-1.png"
                  title="Fire Safety Tips and Instructions"
                  description="The newest member of the Pacific service offering, Fire Prevention is your first line of defence and an absolute “must have” in any building regardless of its size, or use."
                  date="May 10, 2024"
                />
              </Grid>

              <Grid item xs={12} sm={5}>
                <NewsCard
                  imageUrl="/news/news-2.png"
                  title="Fire Safety Tips and Instructions"
                  date="May 10, 2024"
                />
                <NewsCard
                  imageUrl="/news/news-3.png"
                  title="Fire Safety Tips and Instructions"
                  date="May 10, 2024"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid px={4} item xs={12} md={1}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid p={4} item xs={12} md={4}>
            <SubTitle>events</SubTitle>
            <Stack spacing={4}>
              {news?.map((item, index) => (
                <Event key={index} title={item?.title} date={item?.date} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default News;

const Event = ({ title, date }) => {
  return (
    <Box>
      <Typography
        variant={"h6"}
        component="h6"
        color={"primary"}
        sx={{ fontWeight: "bold" }}
      >
        {title}
      </Typography>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton p={0} color="text.primary" aria-label="calendar">
          <EventIcon color="text.primary" />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </Stack>
    </Box>
  );
};
