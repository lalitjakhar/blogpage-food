import React from "react";
import ProfileSidebar from "../sidebarcommon/ProfileSidebar";
import WorkImageSection from "../sidebarcommon/WorkImageSection";
import LatestRecipes from "../sidebarcommon/LatestRecipes";
import CategoriesSidebar from "../sidebarcommon/CategoriesSidebar";
import SubscribeSidebar from "../sidebarcommon/SubscribeSidebar";
import InstaImagesSidebar from "../sidebarcommon/InstaImagesSidebar";

const Footer = () => {
  return (
    <>
      <ProfileSidebar />
      <WorkImageSection />
      <LatestRecipes />
      <CategoriesSidebar />
      <SubscribeSidebar />
      <InstaImagesSidebar />
    </>
  );
};

export default Footer;
