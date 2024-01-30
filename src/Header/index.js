import React from "react";
import NavMenu from "./NavMenu";
import './HeaderStyles.css';
import Popup from "../Modals";

const Menu = () => {
  return (
<div>

    <div className="containerMenuElements">
    <div className="menuElements">
      <h1>DigMark</h1>
      <NavMenu className ="navMenu"/>
      <Popup />
  
      </div>
    </div>

</div>
  );
};

export default Menu;
