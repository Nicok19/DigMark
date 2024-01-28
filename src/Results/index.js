import React from "react";
import Revenues from "./Revenues";
import Audience from "./Audience";
import Brands from "./Brands";
import Awards from "./Awards";
import './CounterStyles.css';

const Results = () => {

return (

<div className="PhaderCounterText">
<div className="counterText">
<h2>Some of our results</h2>
</div>

<div className="allCounters">

<div id ="counterDiv">
<Revenues/>
<p>More revenues for the brand</p>
</div>

<div id="counterDiv">
<Audience/>
<p>Audiences reached</p>
</div>

<div id="counterDiv">
<Brands/>
<p>brands trust us</p>
</div>
              
<div id="counterDiv">
<Awards/>
<p>Worldwide awards</p>   
</div>             


</div>
</div>
    );
};

export default Results;
