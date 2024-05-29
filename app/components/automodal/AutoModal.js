"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Modal,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./automodal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import MailInputAutoModal from "./MailInputAutoModal";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const AutoModal = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.AutoModalContainer}
    >
      <Box className={styles.AutoModalBox}>
        <CloseIcon
          onClick={handleClose}
          style={{
            position: "absolute",
            color: "black",
            top: "40px",
            right: "44px",
            zIndex: 1,
          }}
        />
        <Box className={styles.ContentBoxAutoModal}>
          <Grid container>
            <Grid item xs={0} md={6} className={styles.ImagePopupHidden}>
              <div className={styles.ImagePopupAutoModal}>
                <Image
                  src={"/assets/automodalpopupimage.png"}
                  alt="leafimg"
                  layout="fill"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography
                  className={styles.HeadingTypoAutoModal}
                  id="modal-modal-title"
                >
                  Welcome
                </Typography>
                <Typography
                  className={styles.DescriptionTextAutoModal}
                  id="modal-modal-description"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius mod.
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <MailInputAutoModal />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      color="default"
                      sx={{ padding: "8px 0px" }}
                      checkedIcon={<CancelPresentationIcon />}
                    />
                  }
                  label="Prevent This Pop-up"
                  className={styles.DescriptionTextAutoModal}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default AutoModal;
