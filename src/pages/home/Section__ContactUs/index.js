import React from "react";
import Form from "./Form/Form";
import "./Styles/ContactStyles.css";
import "./Styles/Responsive__ContactStyles.css";


import SectionTitle from "../../../components/Title/h2__Title";

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