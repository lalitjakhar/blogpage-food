import React from "react";
import styles from "./about.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import EmailInputFooter from "../footer/EmailInputFooter";

const SubscribeAbout = () => {
  return (
    <>
      <Box className="md:py-[30px] py-[10px]" bgcolor={"white"}>
        <div className={`${styles.SubscribeSectionContainer} custom-container`}>
          <Box sx={{ border: "1px solid red" }}>
            <Box sx={{ padding: "42px 0px" }}>
              <Grid container alignItems={"center"}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  gap={"0px"}
                  alignItems={"center"}
                >
                  <Box className={styles.ImageSubscribeLeafAboutUs}>
                    <Image
                      src={"/assets/subscribeleafabout.svg"}
                      alt="leafimg"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                  <Box className={styles.ImageSubscribeAboutUs}>
                    <Image
                      src={"/assets/subscribeimageabout.png"}
                      alt="subscribeimageabout"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography className={styles.ParaTypoSubscribeAbout}>
                    My new book is out. Enjoy every meal!
                  </Typography>
                  <EmailInputFooter />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default SubscribeAbout;
