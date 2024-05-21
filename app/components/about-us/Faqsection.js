"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import VectorAdd from "../../../public/assets/plus.svg";
import VectorMinus from "../../../public/assets/minus.svg";
import Image from "next/image";

const faqItems = [
  {
    question: "Where are you located?",
    answer:
      "Our Seattle | Downtown restaurant is located at 1401 3rd Ave, Seattle, WA 98101 (on the corner of 3rd and Union, across the street from Benaroya Hall).",
  },
  {
    question: "What type of food do you serve?",
    answer: "Authentic cuisines from India and Southeast Asia.",
  },
  {
    question: "When did you open?",
    answer:
      "The original Wild Ginger location opened on Western Ave in Seattle on July 29th, 1989.",
  },
  {
    question: "Who designed your restaurant interiors?",
    answer:
      "Our flagship location was designed by NBBJ. Wild Ginger McKenzie and Wild Ginger Bellevue were designed by SKB Architects.",
  },
  {
    question: "How do I make reservation?",
    answer:
      "Reservations are always recommended, but not required. We welcome walk-ins. If you join us without a reservation and there is a wait list, the maitre'd will give you an estimate of how long your wait will be. We have comfortable lounges available to start your evening. Alternatively, the full menu is available in the lounge or at the Downtown or McKenzie satay bar.",
  },
  {
    question: "Do you book large groups?",
    answer:
      "We can accommodate large parties in the main dining rooms. In addition we have beautiful private rooms available for groups of up to 64 people. Click here for complete private dining information. For parties of 7 or more, a large party gratuity of 20% will be added to your bill. 100% of this is paid directly to the service staff of our guests.",
  },
  {
    question: "Which credit cards do you accept?",
    answer: "Visa, Mastercard, American Express, Discover, Diners Club.",
  },
  {
    question: "Who are your Chefs?",
    answer:
      "Dimuthu Senarathne | Chef de Cuisine, Downtown Seattle Suneth Nakandala | Chef de Cuisine, McKenzie Seattle Milan Waduge | Chef de Cuisine, Bellevue",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <>
      <div className="md:py-[56px] py-[26px]" style={{ background: "#ffffff" }}>
        <Container>
          <div className="row">
            <div className="flex flex-col sm:gap-[16px] gap-[8px] ">
              <Typography
                className="md:text-center text-left jus"
                variant="h2"
                style={{ color: "black", fontWeight: "800" }}
              >
                Frequently Asked Questions
              </Typography>
              <Typography
                className="md:text-center text-left"
                variant="h5"
                style={{ color: "grey" }}
              >
                Here are some basic questions and answers to help you get
                started.
              </Typography>
            </div>
            <div className="col-12 pt-[32px] lg:pt-[60px]">
              <Box>
                {faqItems.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={() => handleAccordionChange(index)}
                    sx={{
                      boxShadow: "none",
                      borderBottom: "1px solid rgba(229, 231, 235, 1)",
                      "&.MuiPaper-root.MuiAccordion-root::before": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <AccordionSummary
                      aria-controls={`faq-content-${index}`}
                      id={`faq-header-${index}`}
                    >
                      <Image
                        src={expanded === index ? VectorMinus : VectorAdd}
                        alt={expanded === index ? "minus" : "add"}
                        width={14}
                        height={14}
                        style={{ marginRight: "18px" }}
                      />
                      <Typography className="QuestionFaqSection">
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AnswerContentFaqSection">
                      <Typography className="AnswerTypoFaqSection">
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FaqSection;
