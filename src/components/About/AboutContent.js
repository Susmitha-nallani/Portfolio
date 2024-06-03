import "../About/AboutContentStyles.css";
import React1 from "../assests/React1.jpg";
import React3 from "../assests/React3.jpg";
import { Link } from "react-router-dom";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm FullStack Developer. I create Portfolio website.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack-top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="image-stack-bottom">
            <img src={React3} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
