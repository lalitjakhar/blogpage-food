import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import SubscribeAbout from "./SubscribeAbout";

const AboutUs = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={4}>
        <Typography className={styles.HeadingTypoAboutPage}>
          Hello, I am Maggy. Welcome to recipes blog and food heaven!
        </Typography>
        <Box className={styles.ImageAboutUsContent}>
          <Image
            src={"/assets/aboutimagecontent.jpg"}
            alt="aboutimage"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Typography className={styles.ParaImageAboutContent}>
          Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod
          tempor inci didunt ut labore et dolore magna sea aliqua. Ut enim ad
          minim. quis nostrud exer citation ullamco laboris nisi ut aliquip ex
          ea commodo co nsequat. Duis aute irure do lor in repreh enderit in
          voluptate velit a esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat nostru cupidatat non per proident. sunt in
          culpa quis officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, eam consectetur adipicibe elit.
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Typography className={styles.HeadingAboutContent}>
            Where I find inspiration
          </Typography>
          <Typography className={styles.ParaImageAboutContent}>
            Purus viverra accumsan in nisl. Quis blandit turpis cursus in hac
            habitasse platea fuss-free udin tempor id eu nisl nunc mi ipsum
            imperdiet massa, Aliquam Ultrices Sagittis, orci a scelerisque purus
            semper.{" "}
          </Typography>
          <Typography className={styles.ParaImageAboutContent}>
            Leo in vitae turpis massa sed elementum tempus egestas sed:
          </Typography>
          <Typography className={styles.ParaImageAboutContent}>
            – Dolor sed viverra ipsum nunc alique <br /> – Nec tincidunt semper
            Neque Ornare, aenean euismod <br />– Pellentesque massa placerat
          </Typography>
          <Typography className={styles.ParaImageAboutContent}>
            Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu
            augue ut lectus arcu. Neque vitae tempus quam pellentesque nec.
            Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor
            massa id neque aliquam vestibulum morbi blandit. Amet consectetur
            adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus
            mat voluptatem accusantium doloremque laudantium, totam aperiam.
          </Typography>
          <Typography className={styles.ParaImageAboutContent}>
            Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do
            eiusmod tempor inci didunt ut labore e dolore magna aliqua. Ut enim
            ad minim. quis nostrud exer citation ullamco laboris nisi ut aliquip
            ex ea commodo co nsequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident. sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipicibe elit, sed do eiusmod.
          </Typography>
        </Box>
        <SubscribeAbout />
        <Typography className={styles.ParaImageAboutContent}>
          Eiusmod tempor inci didunt ut labore e dolore magna aliqua. Ut enim ad
          minim. quis nostrud exer ad citation ullamco laboris nisi ut aliquip
          ex ea commodo co nsequat. Duis aute irure dolor in reprehender in
          voluptate velit esse cillum dolore eu fugia nulla pariatur. Excepteur
          sint occaecat cupidatat non proid entsunt in culpa qui officia
          deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectet adipicibe elit, sed do eiusmod tempor.
        </Typography>
      </Box>
    </>
  );
};

export default AboutUs;
