import React from "react";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import Image from "next/image";
import styles from "./footer.module.css";
import EmailInputFooter from "./EmailInputFooter";

const socialLinks = [
  { href: "https://www.facebook.com/QodeInteractive/", label: "fb" },
  { href: "https://www.instagram.com/qodeinteractive/", label: "ig" },
  { href: "https://www.linkedin.com/company/qode-themes/", label: "in" },
  { href: "https://www.pinterest.com/qodeinteractive/", label: "p" },
];
const Footer = () => {
  return (
    <Box component="footer" className={styles.footerContainer}>
      <Box className="md:py-[56px] py-[26px]">
        <Container maxWidth="xs">
          <Box className="flex flex-col gap-4 items-center">
            <Link href="/" draggable={false}>
              <div className={styles.footerLogo}>
                <Image
                  src={"/assets/foodcompanylogofooter.png"}
                  alt="foodcompanylogo"
                  layout="fill"
                  draggable={false}
                />
              </div>
            </Link>
            <Typography className={styles.ParaTextThemeFooter}>
              Theme especially made for cooking experts, novices & all who enjoy
              sharing their recipes.
            </Typography>
            <div>
              <div className={`${styles.TextLinksFooterHome} flex gap-2`}>
                {socialLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <Link
                      href={link.href}
                      className={styles.HoverTextFooterHome}
                    >
                      {link.label}
                    </Link>
                    {index < socialLinks.length - 1 && "-"}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <Box sx={{ mt: 2 }}>
              <EmailInputFooter />
              <Typography className={styles.TypoInputDescriptionFooter}>
                *Be informed about the latest recipes & workshops.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Divider />
      <Box className="md:py-[20px] py-[5px]">
        <Container maxWidth="lg">
          <Box className="flex justify-between">
            <Typography className={styles.ParaLinksTypoFooter}>
              <Link href="https://braise.qodeinteractive.com/privacy-policy/">
                Privacy Policy
              </Link>
            </Typography>
            <Typography className={styles.ParaLinksTypoFooter}>
              © 2021
              <Link href="https://qodeinteractive.com/">
                {" "}
                Qode Interactive,
              </Link>
              {" All rights reserved."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
