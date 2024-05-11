import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./Header.css";
import Hero from "../Components/Hero/Hero";
import Sponsor from "../Components/Sponsors/Sponsor";
import Cars from "../Components/carGallery/Cars";
import CarInfo from "../Components/carInfo/CarInfo";
import CollapseText from "../Components/collapseText/CollapseText";
import Footer from "../Components/Footer/Footer";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Hero/>
      <Sponsor/>
      <Cars/>
      <CarInfo/>
      <CollapseText/>
      <Footer/>
    </div>
  );
};

export default Header;
