import React from "react";
import carData from "../../carData";
import CarItem from "./CarItem";
import "./carList.css"
const Cars = () => {
  const carList = carData.map((product) => (
    <CarItem key={product.id} product={product} />
  ));
  return (
    <div >
      <ul className="carList">{carList}</ul>
    </div>
  );
};

export default Cars;
