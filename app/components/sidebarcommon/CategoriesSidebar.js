import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";

const CategoriesSidebar = () => {
  const images = [
    "/assets/catergories1sidebar.svg",
    "/assets/catergories2sidebar.svg",
    "/assets/catergories3sidebar.svg",
    "/assets/catergories4sidebar.svg",
    "/assets/catergories5sidebar.svg",
    "/assets/catergories6sidebar.svg",
  ];

  const texts = [
    "Raw Food",
    "Meat",
    "Snacks",
    "Desserts",
    "Main Dish",
    "Cereals",
  ];

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
          Categories
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={4}>
          <Grid container spacing={2}>
            {images.map((src, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  <Box className={styles.ImageCategoriesSidebar}>
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      objectFit="cover"
                      layout="fill"
                    />
                  </Box>
                  <Typography className={styles.TextCategoriesSidebar}>
                    {texts[index]}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CategoriesSidebar;
