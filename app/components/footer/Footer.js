import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import styles from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      component="footer"
      className={styles.footerContainer}
      sx={{
        padding: "2rem 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Link href="/" draggable={false}>
              <div className={styles.footerLogo}>
                <Image
                  src={"/assets/foodcompanylogo.png"}
                  alt="foodcompanylogo"
                  layout="fill"
                  draggable={false}
                />
              </div>
            </Link>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about-us" variant="body1">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/blogs" variant="body1">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/orders" variant="body1">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/contact-us" variant="body1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#">
                <GoogleIcon />
              </IconButton>
              <IconButton href="#">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body1">
              Get the latest updates and offers.
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.footerInput}
              />
              <button type="submit" className={styles.footerButton}>
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Typography variant="body1" align="center">
            {"Copyright © "}
            <Link href="/">Food Blogs</Link> {new Date().getFullYear()}
            {". All rights reserved."}
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
