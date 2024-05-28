import React from "react";
import ProfileSidebar from "../sidebarcommon/ProfileSidebar";
import WorkImageSection from "../sidebarcommon/WorkImageSection";
import LatestRecipes from "../sidebarcommon/LatestRecipes";
import CategoriesSidebar from "../sidebarcommon/CategoriesSidebar";

const Footer = () => {
  return (
    <>
      <ProfileSidebar />
      <WorkImageSection />
      <LatestRecipes />
      <CategoriesSidebar />
    </>
  );
};

export default Footer;
