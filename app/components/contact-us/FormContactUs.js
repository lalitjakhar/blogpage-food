import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormContactUs = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            placeholder="Your Name"
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              "& .MuiInputBase-root": {
                color: "#686868",
                borderBottom: "1px solid #e0e0e0",
              },
              "& .Mui-focused": { backgroundColor: "transparent" },
              "& .MuiInputBase-input:focus": {
                backgroundColor: "transparent",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#595959",
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            placeholder="Your Email"
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              "& .MuiInputBase-root": {
                color: "#686868",
                borderBottom: "1px solid #e0e0e0",
              },
              "& .Mui-focused": { backgroundColor: "transparent" },
              "& .MuiInputBase-input:focus": {
                backgroundColor: "transparent",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#595959",
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            placeholder="Subject"
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              "& .MuiInputBase-root": {
                color: "#686868",
                borderBottom: "1px solid #e0e0e0",
              },
              "& .Mui-focused": { backgroundColor: "transparent" },
              "& .MuiInputBase-input:focus": {
                backgroundColor: "transparent",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#595959",
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            placeholder="Inquery Type"
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              "& .MuiInputBase-root": {
                color: "#686868",
                borderBottom: "1px solid #e0e0e0",
              },
              "& .Mui-focused": { backgroundColor: "transparent" },
              "& .MuiInputBase-input:focus": {
                backgroundColor: "transparent",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#595959",
              },
            }}
          />
        </Grid>
      </Grid>
      <Box>
        <TextField
          id="standard-basic"
          variant="standard"
          type="text"
          multiline
          minRows={3}
          placeholder="Your Message"
          fullWidth
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            "& .MuiInputBase-root": {
              color: "#686868",
              borderBottom: "1px solid #e0e0e0",
            },
            "& .Mui-focused": { backgroundColor: "transparent" },
            "& .MuiInputBase-input:focus": {
              backgroundColor: "transparent",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#595959",
            },
          }}
        />
      </Box>
      <Box width={"auto"}>
        <Button className="ButtonBlogPage">Submit</Button>
      </Box>
    </>
  );
};

export default FormContactUs;
