import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./newsletter.module.css";
import Image from "next/image";
import EmailInputFooter from "../../footer/EmailInputFooter";

const Newsletter = () => {
  return (
    <>
      <Box className="md:py-[30px] py-[10px]" bgcolor={"white"}>
        <Container maxWidth="lg" className={styles.NewsletterContainer}>
          <Box sx={{ border: "1px solid red" }}>
            <Box className="md:py-[101px] py-[26px]">
              <Box className="flex flex-col gap-12 items-center">
                <Typography
                  className={`${styles.HeadingTypoNewsletter} flex md:hidden`}
                >
                  Our newsletter
                </Typography>
                <Box className="md:flex hidden gap-4 items-baseline">
                  <Typography className={styles.HeadingTypoNewsletter}>
                    Our newsletter
                  </Typography>
                  <Image
                    src={"/assets/leafnewsletter.svg"}
                    alt="leafimg"
                    width={56}
                    height={73}
                  />
                </Box>
                <Typography className={styles.ParaTypoNewsletter}>
                  Subscribe to our newsletter & keep up with our latest recipes
                  and organized workshops.
                </Typography>
                <EmailInputFooter />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Newsletter;
