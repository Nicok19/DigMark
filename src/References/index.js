import React from "react";
import CardCarousel from "./cardReferences";
import './referencesStyle.css';


const References = () =>{


    return(
        <div>
        <div className="CarrouselsDiv">
        <h2>References</h2>
            <CardCarousel />
        </div>

        <div className="BookACall">

        <div className="elevateText">
<h2>Elevate your <br/>brand Today!</h2>
</div>

<div className="buttonCall">
<p>Ready to transform your digital dresence? <br/> Let's create  magic together! book our services now!</p>
<button>Book Call</button>
</div>

        </div>
        </div>
    )
}

export default References