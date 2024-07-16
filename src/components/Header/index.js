import React from "react";
import NavMenu from "./NavMenu";
import './HeaderStyles.css';
import './Responsive__HeaderStyles.css';
import Popup from "../Modals";
import ScrollToTop from "./ScrollUp";

const Menu = () => {
  return (
<div>

    <div className="containerMenuElements">
    <div className="menuElements">
      <ScrollToTop/>
      <NavMenu/>
      <Popup />
  
      </div>
    </div>

</div>
  );
};

export default Menu;
