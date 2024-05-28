import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./sidebar.module.css";

const socialLinks = [
  { href: "https://www.facebook.com/QodeInteractive/", label: "fb" },
  { href: "https://www.instagram.com/qodeinteractive/", label: "ig" },
  { href: "https://www.linkedin.com/company/qode-themes/", label: "in" },
  { href: "https://www.pinterest.com/qodeinteractive/", label: "p" },
];
const ProfileSidebar = () => {
  return (
    <>
      <Box
        className="flex flex-col gap-4 items-center"
        sx={{ margin: "0 0 65px" }}
      >
        <div className={styles.SidebarProfilePic}>
          <Image
            src={"/assets/profileimagesidebar.png"}
            alt="profileimagesidebar"
            layout="fill"
            draggable={false}
          />
        </div>
        <Typography className={styles.HeadingTypoSidebarProfile}>
          I’m Jessica, your new guide. Welcome to my Cookbook!
        </Typography>
        <Typography className={styles.ParaSidebarProfile}>
          Lorem ipsum dolor sit amet, ad consectetur adi picibe elit, sed do
          eiusmod tempor inci didunt quo labore e dolore magna aliqua ut.
        </Typography>
        <div>
          <div className={`${styles.TextLinksSidebarProfile} flex gap-2`}>
            {socialLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link href={link.href} className={styles.HoverTextLinkSidebar}>
                  {link.label}
                </Link>
                {index < socialLinks.length - 1 && "-"}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Box>
    </>
  );
};

export default ProfileSidebar;
