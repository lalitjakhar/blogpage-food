import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./sidebar.module.css";

const WorkImageSection = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "383px",
          height: "187px",
          overflow: "hidden",
          margin: "0 0 65px",
        }}
      >
        <Image
          src={"/assets/workimagesidebar.jpg"}
          alt="workimagesidebar"
          layout="fill"
          objectFit="cover"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "21px",
            left: "0",
            background: "#fff",
            padding: "9px 43px 9px 39px",
            transition: "transform 200ms linear",
            "&:hover": {
              transform: "translateX(-20px)",
            },
          }}
        >
          <Typography className={styles.HeadingWorkImageSection}>
            WorkShop
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default WorkImageSection;
