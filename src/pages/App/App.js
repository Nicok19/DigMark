import React from 'react';
import './App.css';

import Menu from '../../components/Header';
import Footer from '../../components/Footer/Index';

import FirstSection from '../home/Section__MainSection/index';
import AboutUs from '../home/Section__AboutUs/index';
import Results from '../home/Aside__Results/index';
import OurProducts from '../home/Section__OurWork/index';
import References from '../home/Section__References/index';
import Contact from '../home/Section__ContactUs/index';



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