import React from "react";
import FinalCard from "./cards";
import "./AboutUsStyles.css";

const AboutUs = ()=>{

return(
<div className="elementsCards">
<div className="TextAbout">
<h1>About us</h1>
<p>We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.</p>
</div>
<div className="phaderCustomCard">
<FinalCard/>
</div>
</div>


)
}

export default AboutUs;