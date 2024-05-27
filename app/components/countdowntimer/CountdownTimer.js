"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./countdown.module.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Box className="flex flex-col items-center justify-center">
      <Box className="flex space-x-4 text-center">
        <Box className="p-4 rounded">
          <Typography className={styles.HeadingCountDown}>
            {timeLeft.weeks || "0"}
          </Typography>
          <Typography className={styles.ParaCountDown}>Weeks</Typography>
        </Box>
        <Box className="p-4 rounded">
          <Typography className={styles.HeadingCountDown}>
            {timeLeft.days || "0"}
          </Typography>
          <Typography className={styles.ParaCountDown}>Days</Typography>
        </Box>
        <Box className="p-4 rounded">
          <Typography className={styles.HeadingCountDown}>
            {timeLeft.hours || "0"}
          </Typography>
          <Typography className={styles.ParaCountDown}>Hours</Typography>
        </Box>
        <Box className="p-4 rounded">
          <Typography className={styles.HeadingCountDown}>
            {timeLeft.minutes || "0"}
          </Typography>
          <Typography className={styles.ParaCountDown}>Minutes</Typography>
        </Box>
        <Box className="p-4 rounded">
          <Typography className={styles.HeadingCountDown}>
            {timeLeft.seconds || "0"}
          </Typography>
          <Typography className={styles.ParaCountDown}>Seconds</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CountdownTimer;
