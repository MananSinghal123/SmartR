import React from "react";
import Img from "./Img";
import "./card.css";

function Card({ src, title }) {
  return (
    <div className="card">
      <div className="cardImg">
        <Img className="img" src={src} alt="" />
      </div>
      <span className="cardTitle">{title}</span>
    </div>
  );
}

export default Card;
