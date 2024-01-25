import React from 'react';
import './App.css';
import Menu from './Header';
import FirstSection from './MainSection';
import AboutUs from './AboutUs';



function App() {
  return (
    <div className='generalOptions'>
     <Menu/>
     <FirstSection/>
     <AboutUs/>
     

    </div>
  );
}

export default App;
