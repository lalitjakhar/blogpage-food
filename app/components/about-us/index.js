import React from "react";
import Hero from "./Hero";
import aboutjson from "./aboutjson";
import PerticularAboutSection from "../commoncomponents/PerticularAboutSection";
import FaqSection from "./Faqsection";

const About = () => {
  return (
    <>
      <Hero />
      {aboutjson.map((json, index) => (
        <PerticularAboutSection key={index} data={json} />
      ))}
      <FaqSection />
    </>
  );
};

export default About;
