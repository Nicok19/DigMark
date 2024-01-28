import React from 'react';
import './App.css';
import Menu from './Header';
import FirstSection from './MainSection';
import AboutUs from './AboutUs';
import Results from './Results';
import OurProducts from './OurWork';



function App() {
  return (
    <div>
     <Menu/>
    <div id='generalOptions'>
     <FirstSection/>
     <AboutUs/>
     <Results/>
</div>
<OurProducts/>
    </div>
  );
}

export default App;
