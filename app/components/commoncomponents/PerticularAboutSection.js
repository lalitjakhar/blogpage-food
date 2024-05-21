import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const PerticularAboutSection = ({ data }) => {
  return (
    <>
      <div
        className="md:py-[36px] py-[20px]"
        style={{ backgroundColor: data.background }}
      >
        <Container>
          <Grid
            container
            spacing={4}
            direction={data.id % 2 === 1 ? "row" : "row-reverse"}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <div className="flex flex-col items-center gap-[16px] text-yellow-900">
                <Typography variant="h6">{data.desc1}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={data.imageclass}>
                <Image
                  src={data.img}
                  alt="Vision"
                  layout="fill"
                  objectFit="cover"
                  draggable={false}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default PerticularAboutSection;
