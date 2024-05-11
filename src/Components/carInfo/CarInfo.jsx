import React from "react";
import "./CarInfo.css";
import question from "../Gallery/question.png";
import exclamation from "../Gallery/unlem.jpeg";

const CarInfo = () => {
  return (
    <div className="carInfo">
      <div className="infoItem">
        <div className="infoText">
          <h1>How to rent a car</h1>
          <p>
            You can pick up vehicles from our dealerships around the world and
            drop them off at any point you want.
          </p>
        </div>

        <img src={question} alt="" />
      </div>
      <div className="infoItem">
        <div className="infoText">
          <h1>Things to pay attention</h1>
          <p>
            In case of any damage to the vehicle, all damage is covered by the
            driver.
          </p>
        </div>
        <img src={exclamation} alt="" />
      </div>
    </div>
  );
};

export default CarInfo;
