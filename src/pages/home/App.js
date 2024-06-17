import React from 'react';
import './App.css';
import Menu from '../../components/shared/Header';
import FirstSection from '../../components/home/Section__MainSection';
import AboutUs from '../../components/home/Section__AboutUs';
import Results from '../../components/home/Aside__Results';
import OurProducts from '../../components/home/Section__OurWork';
import References from '../../components/home/Section__References';
import Contact from '../../components/home/Section__ContactUs';
import Footer from '../../components/shared/Footer/Index';


function App() {
  return (
    <div>
      <Menu />
      <div id='generalOptions'>
        <FirstSection />
        <div id='aboutUs'>
          <AboutUs />
        </div>
        <div id='results'>
          <Results />
        </div>
      </div>
      
      <div id='ourProducts'>
          <OurProducts />
        </div>
        
      <div id='generalOptions'>
        <div id='references'>
          <References />
        </div>
        <div id='contact'>
          <Contact/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
