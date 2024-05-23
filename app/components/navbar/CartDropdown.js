import React, { useState } from "react";
import { Badge, Menu, Typography } from "@mui/material";
import styles from "./navbar.module.css";

const CartDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setAnchorEl(null);
    }
  };

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
          sx={{ padding: "16px", display: "none", top: "calc(100% + 32px)" }}
          className={`${styles.TextDropdownCart} cart-hover-box absolute right-0`}
        >
          No products in the cart.
        </Typography>
      </Typography>
    </>
  );
};

export default CartDropdown;
