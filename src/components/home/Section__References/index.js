import React from "react";
import CardCarousel from "./cardReferences";
import './referencesStyle.css';
import './Responsive__ReferencesStyle.css';
import SectionTitle from "../../../styles/h2__Title";



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