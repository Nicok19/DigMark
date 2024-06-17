import React from "react";
import Brands from "./brands";
import OurProducts from "./OurWork";
import './OurWorkStyles.css';
import './Responsive__OurWorkStyles.css';

import SectionTitle from "../../../styles/h2__Title";

const OurWork = () => {
  return (
    <div className="greyBackground">
      <div className="definitionOurWork">
        <SectionTitle style={{ paddingTop: "5rem", marginBottom: "1rem" }}>Our Work</SectionTitle>
        <p className="definitionOurWork__paragraph">
          We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.
        </p>
        <OurProducts/>
        <Brands/>



      </div>
    </div>
  );
}

export default OurWork;


