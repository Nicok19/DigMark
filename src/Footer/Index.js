import React from "react";
import './FooterStyles.css';

const Footer = () => {
  return (
  <div className="phader"> 

<div  className="PhaderElement">

<div className="socialMedia">
<h4>DigMark</h4>

<div className="imageSocialMedia"></div>

<img src="/Elements/instagram.png"  alt="instagram Logo" />
<img src="/Elements/x.png"  alt="x Logo" />
<img src="/Elements/linkedin.png"  alt="Linkedin Logo" />
<img src="/Elements/youtube.png"  alt="Youtube Logo" />
</div>


<div className="linkElements">

<div id="links">
    <a href="#">Work With Us</a>
    <a href="#">Advertise With Us</a>
    <a href="#">Support Us</a>
    <a href="#">Business Advices</a>
</div>

<div id="links">
    <a href="#">Private Coaching</a>
    <a href="#">Our Work</a>
    <a href="#">Our Commitment</a>
    <a href="#">Our Team</a>
</div>

<div id="links">
    <a href="#">About Us</a>
    <a href="#">FAQs</a>
    <a href="#">Report a Bug</a>
</div>


</div>
</div>

<div className="bottonFooter">
<div className="textBottonFooter">
<p>© 2024 Nicolás Bertinat - Ux/Ui Designer and Front End Developer</p>
</div>
</div>

</div> 
  );
}

export default Footer;
