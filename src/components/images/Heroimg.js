import React from "react";
import "../images/HeroimgStyles.css";
import heroimg from "../assests/hero.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={heroimg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI I'M FULLSTACKSTACK DEVELOPER. </p>
        <h1> React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className=" btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
