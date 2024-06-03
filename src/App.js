import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
