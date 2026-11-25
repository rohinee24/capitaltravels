import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../compontes/layout";
import Home from "../compontes/Pages/Home";
import About from "../compontes/Pages/About";
import Explore from "../compontes/Pages/Explore";
import Contact from "../compontes/Pages/Contact";
import Gallery from "../compontes/Pages/Gallery";
import Services from "../compontes/Pages/Services";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="explore" element={<Explore />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
