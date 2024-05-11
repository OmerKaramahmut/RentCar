import React from "react";
import './CarItem.css'

const CarItem = ({ product }) => {
  const { id, name, description, img } = product;
  return (
    <div className="carCard">
      <div className="cardItem">
       
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{description}</p>
        <button>DETAILS</button>
      </div>
    </div>
  );
};

export default CarItem;
