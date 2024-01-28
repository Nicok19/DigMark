import React from "react";
import NavMenu from "./NavMenu";
import './HeaderStyles.css';

const Menu = () => {
  return (
<div>

    <div className="containerMenuElements">
    <div className="menuElements">
      <h1>DigMark</h1>
      <NavMenu className ="navMenu"/>
      <button className="BookCall">Book a call</button>
      </div>
    </div>

</div>
  );
};

export default Menu;
