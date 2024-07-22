import { Typography } from "@mui/material";

const SubTitle = ({ children }) => {
  return (
    <Typography
      mb={4}
      textTransform={"uppercase"}
      variant="h6"
      fontWeight={400}
      color="secondary"
      gutterBottom
    >
      {children}
    </Typography>
  );
};

export default SubTitle;
