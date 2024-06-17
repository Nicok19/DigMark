import React from "react";
import Form from "./Form";
import "./ContactStyles.css";
import "./Responsive__ContactStyles.css";
import SectionTitle from "../../../styles/h2__Title";

const Contact = () =>{

return(
    
<section className="contactElements">
        
<div className="contactForm">
<SectionTitle style={{ paddingTop: "1vh", marginBottom: "2rem" }}>Contact Us</SectionTitle>
<Form/>
</div>

<img className="photoContact" src="/Elements/ContactPhoto.png" alt="Contact" />



        </section>
    )
}

export default Contact