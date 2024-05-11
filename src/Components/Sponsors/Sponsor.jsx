import React from "react";
import "./Sponsor.css";
import opet from "../Gallery/opet.png";
import nismo from "../Gallery/nismo.png";
import axis from "../Gallery/axis.png";
import michelline from "../Gallery/michelline.png";
import petrolofisi from "../Gallery/petrolofisi.svg";
import SponsorInfo from "./SponsorInfo";

const Sponsor = () => {
  return (
    <div className="sponsorPage">
      <div className="sponsorContent">
        <div className="SponsorText">
          <h1>
            Our sponsors who enable us to provide the highest quality service;
          </h1>
        </div>
        <div className="sponsorGallery">
          <img src={opet} alt="" />
          <img src={petrolofisi} alt="" />
          <img src={axis} alt="" />
          <img src={nismo} alt="" />
          <img src={michelline} alt="" />
        </div>
      </div>
      <SponsorInfo/>
    </div>
  );
};

export default Sponsor;
