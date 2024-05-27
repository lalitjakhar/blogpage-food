"use client";
import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import NearMeSharpIcon from "@mui/icons-material/NearMeSharp";

const EmailInputFooter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setError(!value.endsWith("@gmail.com"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.endsWith("@gmail.com")) {
      setError(true);
    } else {
      setError(false);
      console.log("Email submitted:", email);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          variant="standard"
          type="email"
          placeholder="Enter Your Email Address here"
          helperText={error ? "The e-mail address entered is invalid." : ""}
          error={error}
          style={{ width: "350px" }}
          value={email}
          onChange={handleEmailChange}
          sx={{
            "& .MuiInputBase-root": {
              color: "#595959",
              borderBottom: "1px solid #595959",
            },
          }}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <IconButton
                type="submit"
                sx={{
                  color: "#e35640",
                  backgroundColor: "transparent !important",
                }}
              >
                <NearMeSharpIcon
                  sx={{
                    transition: "transform 200ms linear",
                    "&:hover": {
                      backgroundColor: "#ffffff0a",
                      transform: "translateY(-5px)",
                      border: "none",
                    },
                  }}
                />
              </IconButton>
            ),
          }}
        />
      </form>
    </>
  );
};

export default EmailInputFooter;
