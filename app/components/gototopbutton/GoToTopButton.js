"use client";
import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "./gototopbutton.module.css";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed">
      {isVisible && (
        <Fab
          size="small"
          onClick={scrollToTop}
          className={styles.GoToTopButton}
        >
          <ExpandLessIcon />
        </Fab>
      )}
    </div>
  );
};

export default GoToTopButton;
