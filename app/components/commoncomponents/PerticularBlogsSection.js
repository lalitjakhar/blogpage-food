import { Typography, Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const PerticularBlogsSection = ({ data, isEvenBlog }) => {
  return (
    <>
      <Box
        className="ImagesBlogsPage"
        sx={{
          flexShrink: 0,
          width: { xs: "100%", md: isEvenBlog ? "100%" : "50%" },
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
          src={data.src}
          alt={data.name}
          layout="fill"
          objectFit="cover"
          draggable={false}
        />
      </Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems={isEvenBlog ? "center" : "flex-start"}
        gap={4}
        p={5}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={isEvenBlog ? "center" : "flex-start"}
          gap={1}
        >
          <Typography className="HeadTextRecipesDetail">{data.name}</Typography>
          <Typography className="ParaTextRecipesDetail">
            {data.content}
          </Typography>
        </Box>
        <Typography className="DescriptionTextRecipesDetail">
          {data.description}
        </Typography>
        <Button className="ButtonBlogPage">View More</Button>
      </Stack>
    </>
  );
};

export default PerticularBlogsSection;
