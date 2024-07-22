import React from "react";
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Grid container sx={{ margin: "auto", padding: 3 }}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                variant="outlined"
                size="small"
                type="text"
                fullWidth
                color="secondary"
                InputLabelProps={{
                  style: { color: "#636363" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    "& fieldset": {
                      borderColor: "#636363",
                    },
                    "&:hover fieldset": {
                      borderColor: "#636363",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#636363",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  backgroundColor: "#404041",
                  borderRadius: "10px",
                }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                variant="outlined"
                size="small"
                fullWidth
                type="email"
                InputLabelProps={{
                  style: { color: "#636363" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    "& fieldset": {
                      borderColor: "#636363",
                    },
                    "&:hover fieldset": {
                      borderColor: "#636363",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#636363",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  backgroundColor: "#404041",
                  borderRadius: "10px",
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Type Your Message/Comment"
                variant="outlined"
                size="small"
                type="text"
                fullWidth
                multiline
                rows={4}
                InputLabelProps={{
                  style: { color: "#636363" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    "& fieldset": {
                      borderColor: "#636363",
                    },
                    "&:hover fieldset": {
                      borderColor: "#636363",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#636363",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  backgroundColor: "#404041",
                  borderRadius: "10px",
                }}
                required
              />
            </Grid>
            <Grid color={"white"} fontSize={"12px"} item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": { color: "#fff" },
                    }}
                  />
                }
                label="GDPR Agreement: I consent to Pacific ..."
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#FFF",
                  color: "#404041",
                  "&:hover": {
                    backgroundColor: "#FFF",
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
