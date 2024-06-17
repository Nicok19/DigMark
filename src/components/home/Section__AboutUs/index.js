import React from "react";
import FinalCard from "./cards";
import "./AboutUsStyles.css";
import "./Responsive__AboutUsStyles.css";
import SectionTitle from "../../../styles/h2__Title";

const AboutUs = () => {
  return (
    <section className="generalContainer">
    <div className="generalContainer__elements elementsCards"> 
      <div className="generalContainer__text">
        <SectionTitle>About Us</SectionTitle>
        <p className="generalContainer__paragraph" >We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.</p>
      </div>
      <div className="phaderCustomCard">
        <FinalCard />
      </div>
    </div>
    </section>
  );
}

export default AboutUs;
