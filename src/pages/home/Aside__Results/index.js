import React from "react";
import Revenues from "./Data/Revenues";

import Audience from "./Data/Audience";
import Brands from "./Data/Brands";
import Awards from "./Data/Awards";

import './Styles/CounterStyles.css';
import './Styles/Responsive__CounterStyles.css';


const Results = () => {

  return (
    <aside className="PhaderCounter">
        <h2 className="PhaderCounter__text" >Some of our results</h2>

      <div className="allCounters">

        <div className="counterDiv">
          <Revenues />
          <p className="counterDiv__paragraph" >More revenues for the brand</p>
        </div>

        <div className="counterDiv">
          <Audience />
          <p className="counterDiv__paragraph">Audiences reached</p>
        </div>

        <div className="counterDiv">
          <Brands />
          <p className="counterDiv__paragraph">brands trust us</p>
        </div>
                
        <div className="counterDiv">
          <Awards />
          <p className="counterDiv__paragraph">Worldwide awards</p>   
        </div>

      </div>
    </aside>
  );
};

export default Results;
