import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";

const images = [
  { src: "/assets/instasidebar1image.jpg", alt: "Image 1" },
  { src: "/assets/instasidebar2image.jpg", alt: "Image 2" },
  { src: "/assets/instasidebar3image.jpg", alt: "Image 3" },
  { src: "/assets/instasidebar4image.jpg", alt: "Image 4" },
  { src: "/assets/instasidebar5image.jpg", alt: "Image 5" },
  { src: "/assets/instasidebar6image.jpg", alt: "Image 6" },
];

const InstaImagesSidebar = () => {
  return (
    <>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "126px",
                paddingBottom: "66.67%",
                objectFit: "cover",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default InstaImagesSidebar;
