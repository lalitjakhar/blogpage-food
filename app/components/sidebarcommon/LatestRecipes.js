import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";

const blogData = [
  {
    id: 1,
    blogImage: "/assets/latestrecipe1image.jpg",
    blogHeading: "Crispy choco croissants",
    blogDate: "September 21, 2021",
  },
  {
    id: 2,
    blogImage: "/assets/latestrecipe2image.jpg",
    blogHeading: "Celery soup with carrot, parsley and red pepper",
    blogDate: "September 21, 2021",
  },
];

const LatestRecipes = () => {
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
          Latest Recipes
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={4}>
          {blogData.map((data) => (
            <Grid
              container
              key={data.id}
              sx={{ gap: { xs: "10px", md: "24px" }, alignItems: "center" }}
            >
              <Grid item xs={3} md={4}>
                <div className={styles.LatestRecipesImage}>
                  <Image
                    src={data.blogImage}
                    alt="blogcard"
                    layout="fill"
                    draggable={false}
                  />
                </div>
              </Grid>
              <Grid item xs={8} md={7}>
                <Box className="gap-[8px] flex flex-col p-0">
                  <Typography
                    className={`${styles.HeadingBlogLatestRecipes} mb-0`}
                  >
                    {data.blogHeading}
                  </Typography>
                  <Typography className={styles.ParaDateBlogLatestRecipes}>
                    {data.blogDate}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default LatestRecipes;
