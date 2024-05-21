import { Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const PerticularBlogsSection = ({ data }) => {
  return (
    <Box>
      <div className="ImagesBlogsPage">
        <Image
          src={data.src}
          alt={data.name}
          layout="fill"
          objectFit="cover"
          draggable={false}
        />
      </div>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {data.name}
      </Typography>
      <Typography variant="body1">{data.content}</Typography>
    </Box>
  );
};

export default PerticularBlogsSection;
