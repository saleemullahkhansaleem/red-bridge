import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const NewsCard = ({ imageUrl, title, description, date }) => {
  return (
    <Card elevation={0} sx={{ display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt="News Image"
        sx={{ objectFit: "cover", borderRadius: "20px" }}
      />

      <CardContent sx={{ flex: "1 0 auto" }}>
        {title && (
          <Typography
            variant={description ? "h3" : "h5"}
            component="div"
            color={"primary"}
            sx={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>
        )}

        {description && (
          <Typography variant="body1" color="text.secondary" sx={{ my: 2 }}>
            {description}
          </Typography>
        )}

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton color="primary" aria-label="calendar" sx={{ mr: 1 }}>
            <EventIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
