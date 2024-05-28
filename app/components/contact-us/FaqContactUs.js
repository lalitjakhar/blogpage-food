import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./contact.module.css";

const FaqContactUs = () => {
  const faqData = [
    {
      question: "Fuisset accusam corrumpit sit ut eum cu dicunt?",
      answer:
        "Lorem ipsum dolor sit amet, pri ut autem salutandi, enim altera vis id. Nominati moderatius sadipscing ex qui. Usu at clita utamur euismod, simul reformidans sed cu, ne mea.",
    },
    {
      question: "Quod voluptat complectus duo?",
      answer:
        "Equidem accusata ea mei, no vel vivendo noluisse, et putent placerat antiopam.",
    },
    {
      question: "Sed ea dicat nobis ei vis movet volupta?",
      answer:
        "Lorem ipsum dolor sit amet, pri ut autem salutandi, enim altera vis id. Nominati moderatius probatus ex qui. Usu at clita utamur euismod, simul reformidans sed.",
    },
    {
      question: "Vide persecuti ei mei latine maiorum consequat sit minim?",
      answer:
        "Equidem accusata ea mei, no vel vivendo noluisse, et putent placerat antiopam.",
    },
    {
      question: "Ex homero ad possim instructior sea pri et quando?",
      answer:
        "Lorem ipsum dolor sit amet, pri ut autem salutandi, enim altera vis id. Nominati moderatius quodsi. Usu at clita utamur euismod, simul reformidans sed.",
    },
    {
      question: "Ad nostrud mediocrem expet?",
      answer:
        "Equidem accusata ea mei, no vel vivendo noluisse, et putent placerat antiopam.",
    },
  ];

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
      <Typography className={styles.HeadingContactFaq}>FaQ</Typography>
      {faqData.map((faq, index) => (
        <Box display={"flex"} flexDirection={"column"} gap={"16px"} key={index}>
          <Typography className={styles.QuestionContactFaq}>
            {faq.question}
          </Typography>
          <Typography className={styles.AnswerContactFaq}>
            {faq.answer}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FaqContactUs;
