import { Container, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <div style={{ background: "#ffffff", padding: "9px 0px 107px 0px" }}>
        <Container maxWidth="lg">
          <Typography className="HeadingTypoMainBlogPage">
            Blog list with stunning posts
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Hero;
