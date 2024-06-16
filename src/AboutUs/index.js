import React from "react";
import FinalCard from "./cards";
import "./AboutUsStyles.css";
import "./Responsive__AboutUsStyles.css";

const AboutUs = () => {
  return (
    <div className="generalContainer">
    <div className="generalContainer__elements elementsCards"> 
      <div className="generalContainer__text">
        <h1 className="generalContainer__title" >About us</h1>
        <p className="generalContainer__paragraph" >We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.</p>
      </div>
      <div className="phaderCustomCard">
        <FinalCard />
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
