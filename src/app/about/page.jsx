import React from "react";
import HeroSection from "../components/HeroSection";

const page = () => {
  return (
    <HeroSection
      title={"OUR STORY"}
      content={
        "From award-winning dramas to blockbuster action movies,we\'ve got you covered. Browse our selection of the latestand greatest movies, and find your new favorite daily"
      }
      Imgurl={"/about1.svg"}
    />
  );
};

export default page;
