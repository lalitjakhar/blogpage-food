import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./comingsoon.module.css";
import CountdownTimer from "../countdowntimer/CountdownTimer";

const Hero = () => {
  return (
    <>
      <Box sx={{ padding: "93px 0px 140px 0px", backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box className="flex flex-col gap-4 items-center">
            <Typography className={styles.HeadingComingSoonPage}>
              Coming soon
            </Typography>
            <Typography className={styles.ParaComingSoonPage}>
              Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do
              eiusmod tempor inci didunt ut labore e dolore magna aliqua. Ut
              enim ad minim. quis nostrud exer citation ullamco laboris.
            </Typography>
            <CountdownTimer targetDate="2025-04-03T12:00:00" />
            <Button className="ButtonBlogPage" href="/">
              HomePage
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
