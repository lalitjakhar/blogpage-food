import React from "react";
import FaqContactUs from "./FaqContactUs";
import SubscribeAbout from "../about-us/SubscribeAbout";
import { Box, Typography } from "@mui/material";
import styles from "./contact.module.css";
import Link from "next/link";
import FormContactUs from "./FormContactUs";

const ContactUs = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={4}>
        <Typography className={styles.HeadingContentContactUs}>
          Did you try my recipe?
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Typography className={styles.ParaContentContactUs}>
            Vim no iudicabit vulputate, debet congue iuvaret ut vis. Te sale
            vulputate nec. Ut graecis deseruisse sit, pro quem elit pericula ad,
            facilisis scripserit dissentiunt no qui. Eam ea illum indoctum
            mediocritatem. Eam graece nusquam ei, eos at pertinacia appellantur,
            usu meliore feugait in. Te dolorum aliquando pri. Ex stet moderatius
            est, cu probo copiosae sed. Cum erroribus comprehensam ex. Denique
            assueverit reprehendunt per te, inani voluptua epicurei ut mei.
            Simul decore sed eu. Ex sea voluptatum inci derint sadipscing, posse
            suavitate no vix.
          </Typography>
          <Typography className={styles.ParaContentContactUs}>
            Elit solet eu has, in has paulo debitis recteque. Cu pri apeirian
            vituperata, justo nostro inermis sit an. Qui zril contentiones ne,
            sanctus probatus ullamcorper eam at.
          </Typography>
          <Typography className={styles.ParaContentContactUs}>
            Email:
            <Link
              href="mailto:braise@qodeinteractive.com"
              className="HoverTextNavbarHome"
            >
              braise@qodeinteractive.com
            </Link>
          </Typography>
        </Box>
        <FormContactUs />
      </Box>
      <SubscribeAbout />
      <FaqContactUs />
    </>
  );
};

export default ContactUs;
