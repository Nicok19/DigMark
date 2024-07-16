import React from "react";
import './Styles/FooterStyles.css';
import './Styles/Responsive__FooterStyles.css';

const Footer = () => {
  return (
    <footer className="phader"> 
      <div className="Phader__element">
        <div className="socialMedia">
          <h4 className="socialMedia__title">DigMark</h4>
          <div className="imageSocialMedia"></div>
          <img className="imageSocialMedia__image" src="/Elements/instagram.png" alt="instagram Logo" />
          <img className="imageSocialMedia__image" src="/Elements/x.png" alt="x Logo" />
          <img className="imageSocialMedia__image" src="/Elements/linkedin.png" alt="Linkedin Logo" />
          <img className="imageSocialMedia__image" src="/Elements/youtube.png" alt="Youtube Logo" />
        </div>

        <div className="linkElements">

          <div className="links">
            <button onClick={() => console.log('Work With Us clicked')}>Work With Us</button>
            <button onClick={() => console.log('Advertise With Us clicked')}>Advertise With Us</button>
            <button onClick={() => console.log('Support Us clicked')}>Support Us</button>
            <button onClick={() => console.log('Business Advices clicked')}>Business Advices</button>
          </div>

          <div className="links">
            <button onClick={() => console.log('Private Coaching clicked')}>Private Coaching</button>
            <button onClick={() => console.log('Our Work clicked')}>Our Work</button>
            <button onClick={() => console.log('Our Commitment clicked')}>Our Commitment</button>
            <button onClick={() => console.log('Our Team clicked')}>Our Team</button>
          </div>

          <div className="links">
            <button onClick={() => console.log('About Us clicked')}>About Us</button>
            <button onClick={() => console.log('FAQs clicked')}>FAQs</button>
            <button onClick={() => console.log('Report a Bug clicked')}>Report a Bug</button>
          </div>
        </div>
      </div>

      <div className="bottonFooter">
        <div className="BottonFooter__title">
          <p>© 2024 Nicolás Bertinat - Ux/Ui Designer and Front End Developer</p>
        </div>
      </div>
    </footer> 
  );
}

export default Footer;
