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
<<<<<<< HEAD
=======

>>>>>>> 18427adffdb6414c96c232e0990bb399399554ed

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

<<<<<<< HEAD
      <Footer/>
=======
      <div>
        <Footer/>
      </div>
>>>>>>> 18427adffdb6414c96c232e0990bb399399554ed
    </div>
  );
}

export default App;
