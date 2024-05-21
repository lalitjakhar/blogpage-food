import React from "react";
import Hero from "./Hero";
import blogsjson from "./blogsjson";
import PerticularBlogsSection from "../commoncomponents/PerticularBlogsSection";
import { Box, Container, Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <Hero />
      <div className="md:py-[56px] py-[26px]" style={{ background: "#000000" }}>
        <Container>
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
              {blogsjson.map((json, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box sx={{ textAlign: "center", padding: 1 }}>
                    <PerticularBlogsSection data={json} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default About;
