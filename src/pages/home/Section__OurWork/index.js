import React from "react";

import Brands from "./Brands/brands";
import OurProducts from "./OurWork/OurWork";

import './Styles/OurWorkStyles.css';
import './Styles/Responsive__OurWorkStyles.css';

import SectionTitle from "../../../components/Title/h2__Title";

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


