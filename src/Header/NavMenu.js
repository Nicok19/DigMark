import React, { useState } from 'react';
import { Link } from 'react-scroll';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Cierra el menú cuando se hace clic en un elemento del menú
  };

  return (
    <div className={`scrollElements ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="menu-items">
        <Link to='aboutUs' spy={true} smooth={true} offset={-70} duration={500} onClick={handleMenuItemClick}>
          About Us
        </Link>
        <Link to='ourProducts' spy={true} smooth={true} offset={-70} duration={500} onClick={handleMenuItemClick}>
          Our Products
        </Link>
        <Link to='references' spy={true} smooth={true} offset={-70} duration={500} onClick={handleMenuItemClick}>
          References
        </Link>
        <Link to='contact' spy={true} smooth={true} offset={-70} duration={500} onClick={handleMenuItemClick}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;


