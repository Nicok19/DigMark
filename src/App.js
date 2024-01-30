import React from 'react';
import './App.css';
import Menu from './Header';
import FirstSection from './MainSection';
import AboutUs from './AboutUs';
import Results from './Results';
import OurProducts from './OurWork';
import References from './References';
import Contact from './ContactUs';
import Footer from './Footer/Index';


function App() {
  return (
    <div>
      <div>
        <Menu />
        <div id='generalOptions'>
          <FirstSection />
          <AboutUs />
          <Results />
        </div>
        <OurProducts />
      </div>
      <div id='generalOptions'>
        <References />
        <Contact/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
