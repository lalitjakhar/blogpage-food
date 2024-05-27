import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./recipes.module.css";

const recipeData = [
  {
    src: "/assets/recipelisthomepage11.jpg",
    alt: "Image 1",
    title: "BreakFast",
    description: "Rice pudding with apples",
  },
  {
    src: "/assets/recipelisthomepage12.jpg",
    alt: "Image 2",
    title: "BreakFast",
    description: "Quick tortilla sandwich with chicken breast",
  },
  {
    src: "/assets/recipelisthomepage13.jpg",
    alt: "Image 3",
    title: "BreakFast",
    description: "Easy chocolate mousse",
  },
  {
    src: "/assets/recipelisthomepage14.jpg",
    alt: "Image 4",
    title: "BreakFast",
    description: "Soft choco caramel crumble pie with apricots",
  },
  {
    src: "/assets/recipelisthomepage15.jpg",
    alt: "Image 5",
    title: "BreakFast",
    description: "Ginger cinnamon donuts",
  },
  {
    src: "/assets/recipelisthomepage16.jpg",
    alt: "Image 6",
    title: "BreakFast",
    description: "Mini sandwiches with tuna and sweet corn",
  },
  {
    src: "/assets/recipelisthomepage17.jpg",
    alt: "Image 7",
    title: "BreakFast",
    description: "Bun with vanilla cream",
  },
  {
    src: "/assets/recipelisthomepage18.jpg",
    alt: "Image 8",
    title: "BreakFast",
    description: "Celery soup with carrot, parsley and red pepper",
  },
  {
    src: "/assets/recipelisthomepage19.jpg",
    alt: "Image 9",
    title: "BreakFast",
    description: "Crispy choco croissants",
  },
];

const RecipesFood = () => {
  return (
    <>
      <Box className="md:py-[56px] py-[26px]" sx={{ background: "#ffffff" }}>
        <Container>
          <Typography className="HeadingTypoRecipesHome">
            Recipes for true foodies
          </Typography>
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {recipeData.map((recipe, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "400px",
                  overflow: "hidden",
                  "*": {
                    transition: "transform 200ms linear",
                  },
                  "&:hover img": {
                    transform: "scale(1.03) translateX(5px)",
                  },
                }}
              >
                <Image
                  src={recipe.src}
                  alt={recipe.alt}
                  layout="fill"
                  objectFit="cover"
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    background: "rgba(255, 255, 255, 0.9)",
                    padding: "16px",
                    width: "calc(100% - 20px)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <Typography className="HeadTextRecipesDetail">
                    {recipe.title}
                  </Typography>
                  <Typography className="ParaTextRecipesDetail">
                    {recipe.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RecipesFood;
