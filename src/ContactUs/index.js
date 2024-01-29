import React from "react";
import Form from "./Form";
import "./ContactStyles.css";

const Contact = () =>{

return(
    
<div className="contactElements">
        
<h2>Contact Us</h2>

<div className="contactPhotoAndForm">

<div className="contactForm">
<Form/>
</div>

<div className="photoContact">
<img src="/Elements/ContactPhoto.png" alt="Contact Photo" />
</div>

</div>
       
        </div>
    )
}

export default Contact