import { Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="md:py-[56px] py-[26px]" style={{ background: "#ffffff" }}>
        <Container style={{ background: "#f4eea9", borderRadius: "16px" }}>
          <div className="flex flex-col items-center gap-4 p-4">
            <Typography
              style={{ color: "#503838", fontWeight: "800" }}
              variant="h2"
            >
              About Food Company
            </Typography>
            <Typography
              style={{ color: "#d002ff", fontSize: "20px", fontWeight: "400" }}
              variant="h5"
            >
              The customer call is the voice of the enterprise. We make tools
              for better conversations.
            </Typography>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
