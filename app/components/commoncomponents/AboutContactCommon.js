import React from "react";
import ProfileSidebar from "../sidebarcommon/ProfileSidebar";
import WorkImageSection from "../sidebarcommon/WorkImageSection";
import LatestRecipes from "../sidebarcommon/LatestRecipes";

const Footer = () => {
  return (
    <>
      <ProfileSidebar />
      <WorkImageSection />
      <LatestRecipes />
    </>
  );
};

export default Footer;
