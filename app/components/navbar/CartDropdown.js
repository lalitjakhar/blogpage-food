import React from "react";
import { Typography } from "@mui/material";
import styles from "./navbar.module.css";

const CartDropdown = () => {
  return (
    <>
      <Typography
        component="div"
        className={`${styles.TextNavbarCartHome} relative`}
        mr={0.5}
        sx={{
          cursor: "pointer",
          whiteSpace: "nowrap",
          "&:hover": {
            color: "#e35640",
            ".cart-hover-box": { display: "block" },
          },
        }}
      >
        Cart (0)
        <Typography
          sx={{
            padding: "30px",
            display: "none",
            top: "calc(100% + 21px)",
          }}
          className={`${styles.TextDropdownCart} cart-hover-box absolute right-0`}
        >
          No products in the cart.
        </Typography>
      </Typography>
    </>
  );
};

export default CartDropdown;
