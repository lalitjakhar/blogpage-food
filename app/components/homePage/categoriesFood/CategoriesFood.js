import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CategoriesFood = () => {
  const ImagesCategoriesFood = [
    {
      src: "/assets/image1blogpage.jpg",
    },
    {
      src: "/assets/image2blogpage.jpg",
    },
    {
      src: "/assets/image3blogpage.jpg",
    },
    {
      src: "/assets/image4blogpage.jpg",
    },
    {
      src: "/assets/image5blogpage.jpg",
    },
    {
      src: "/assets/image6blogpage.jpg",
    },
  ];
  return (
    <>
      <div className="md:py-[56px] py-[26px]" style={{ background: "#FFFFFF" }}>
        <div className="custom-container">
          <Box display={"flex"} flexDirection={"column"} gap={4}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Box maxWidth="25rem" textAlign="center">
                <Typography
                  variant="h5"
                  component="h2"
                  className="HeadingCategoriesFood"
                >
                  Share Your Meals on Instagram with
                  <span style={{ color: "#e35640" }}> #plumaward</span> & We
                  Will Reward the Meal of the Month!
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
              <Grid container spacing={2}>
                {ImagesCategoriesFood.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                    <div className="ImagesCategoriesFoodHomePage">
                      <Image
                        src={item.src}
                        alt="imageshomepage"
                        layout="fill"
                        objectFit="cover"
                        draggable={false}
                      />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default CategoriesFood;
