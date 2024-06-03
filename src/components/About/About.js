import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Heroimg2 from "../images/Heroimg2";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="I'm a FullStack Developer." />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
