import React from "react";
import Hero from "./Hero";
import blogsjson from "./blogsjson";
import PerticularBlogsSection from "../commoncomponents/PerticularBlogsSection";
import { Container, Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <Hero />
      <div style={{ background: "#ffffff" }}>
        <Container sx={{ display: "flex", gap: 5, flexDirection: "column" }}>
          {blogsjson.map((json, index) => (
            <Grid
              container
              key={index}
              p={1}
              sx={{
                flexWrap: "nowrap",
                flexDirection: {
                  xs: "column",
                  md: index % 2 === 0 ? "column" : "row",
                },
              }}
            >
              <PerticularBlogsSection
                data={json}
                isEvenBlog={index % 2 === 0}
              />
            </Grid>
          ))}
        </Container>
      </div>
    </>
  );
};

export default About;
