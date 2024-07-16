import React from "react";

import './Styles/HeaderStyles.css';
import './Styles/Responsive__HeaderStyles.css';

import Popup from "../Modals";

import ScrollToTop from "./Nav/ScrollUp";
import NavMenu from "./Nav/NavMenu";

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
