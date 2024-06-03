import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Heroimg2 from "../images/Heroimg2";
import PricingCard from "../Pricing/PricingCard";
import Work from "../Work/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
