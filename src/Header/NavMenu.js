import React from 'react';
import { Link } from 'react-scroll';

const NavMenu = () => {
  return (
    <div className='scrollElements'>
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
  );
};

export default NavMenu;

