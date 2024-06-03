import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Heroimg2 from "../images/Heroimg2";
import Form from "../Form/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 header="CONTACT." text="Let's have a chat." />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
