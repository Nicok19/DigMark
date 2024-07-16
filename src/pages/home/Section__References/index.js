import React from "react";
import CardCarousel from "./cardReferences/cardReferences";
import './Styles/ReferencesStyle.css';
import './Styles/Responsive__ReferencesStyle.css';


import SectionTitle from "../../../components/Title/h2__Title";



const References = () =>{


    return(
        <section className="reference">
        <div className="CarrouselsDiv">
        <SectionTitle style={{ marginTop: "12%", marginBottom: "8%" }}>References</SectionTitle>
            <CardCarousel />
        </div>

        <div className="cardCall">

        <div className="elevateText">
<h2>Elevate your <br/>brand Today!</h2>
</div>

<div className="buttonCall">
<p>Ready to transform your digital dresence? <br/> Let's create  magic together! book our services now!</p>
</div>

        </div>
        </section>
    )
}

export default References