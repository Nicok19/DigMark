import React from 'react';
import './App.css';
import Menu from './Header';
import FirstSection from './MainSection';
import AboutUs from './AboutUs';
import Results from './Results';



function App() {
  return (
    <div className='generalOptions'>
     <Menu/>
     <FirstSection/>
     <AboutUs/>
     <Results/>
     

    </div>
  );
}

export default App;
