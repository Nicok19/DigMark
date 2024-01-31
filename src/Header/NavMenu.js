import React, { useState } from 'react';
import { Link } from 'react-scroll';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`scrollElements ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="menu-items">
        <Link to='aboutUs' spy={true} smooth={true} offset={-70} duration={500}>
          About Us
        </Link>
        <Link to='ourProducts' spy={true} smooth={true} offset={-70} duration={500}>
          Our Products
        </Link>
        <Link to='references' spy={true} smooth={true} offset={-70} duration={500}>
          References
        </Link>
        <Link to='contact' spy={true} smooth={true} offset={-70} duration={500}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;


