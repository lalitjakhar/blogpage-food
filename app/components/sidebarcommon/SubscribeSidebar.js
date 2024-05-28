import { Box, Typography } from "@mui/material";
import React from "react";
import EmailInputFooter from "../footer/EmailInputFooter";
import styles from "./sidebar.module.css";

const SubscribeSidebar = () => {
  return (
    <>
      <Box
        sx={{
          margin: "0 0 65px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography className={styles.HeadingLatestRecipes}>
          Subscribe
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={4}>
          <Typography className={styles.HeadingSubscribeSidebar}>
            Subscribe to our newsletter and be informed about new recipes &
            workshops.
          </Typography>
          <EmailInputFooter />
        </Box>
      </Box>
    </>
  );
};

export default SubscribeSidebar;
