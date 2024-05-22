"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button, Container, IconButton, TextField } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

const NavBar = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  return (
    <div className={`${styles.navbarcontainer} z-50`}>
      <Container>
        <nav className="bg-transparent">
          <div className="flex items-center justify-between p-4">
            <div className="navbarlogocontainer flex items-center">
              <Link href="/" draggable={false} legacyBehavior>
                <a className={styles.navbar_logo}>
                  <Image
                    src="/assets/foodcompanylogo.png"
                    alt="food-blogs-logo"
                    layout="fill"
                    draggable={false}
                  />
                </a>
              </Link>
            </div>
            <div className="hidden md:flex">
              <TextField
                id="standard-basic"
                color="error"
                variant="standard"
                type="search"
              />
              <IconButton type="button" sx={{ p: "6px", background: "red" }}>
                <SearchRounded color="white" />
              </IconButton>
            </div>
            <Button
              className={`${styles.navbartogglerbtn} md:hidden ${
                expanded ? styles.navbartogglerbtnExpanded : ""
              }`}
              aria-controls="navbarScroll"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
          </div>
        </nav>
        <nav className="bg-transparent">
          <div className="flex items-center justify-between md:p-4">
            <div
              id="navbarScroll"
              className={`w-full bg-white absolute top-full left-0 px-3 pb-3 md:static md:px-0 md:pb-0 md:flex-row items-center flex-0 flex-col ${
                expanded ? "h-[192px]" : "h-0"
              } overflow-hidden md:flex md:h-auto transition-all duration-700 ease-in-out`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:mt-0 md:mb-0 gap-[10px] min-[991px]:gap-[32px] items-start mt-2.5 mb-2.5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about-us", label: "About Us" },
                  { href: "/blogs", label: "Blogs" },
                  { href: "/orders", label: "Orders" },
                  { href: "/contact-us", label: "Contact Us" },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} passHref legacyBehavior>
                    <a
                      className={`${styles.navlinks} ${
                        pathname === href ? styles.selected : ""
                      }`}
                      onClick={handleLinkClick}
                      draggable={false}
                    >
                      {label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
