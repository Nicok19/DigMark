import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Styles/modalStyles.css'; 
import './Styles/Responsive__modalStyles.css'; 

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className='BookCall' onClick={togglePopup}>Book a call</button>
      <div id="popup-container"></div> 

      {isOpen && (
        ReactDOM.createPortal(
          <div className="popup">
            <div className="popup__content">

              <div className='popup__imgAndButton'> 
                <button className='popup__button' onClick={togglePopup}>X</button>
                <img className='popup__image' src="/Elements/modalContact.jpg"  alt="Instagram Logo" />
              </div>

              <div className='inputPopUp'>
                <h2  className='inputPopUp__title'>Book a call</h2>
                <p className='inputPopUp__paragraph'>An advisor will contact you!</p>
                <label>
                  <input text= "text" name='name' placeholder='Name'/>
                </label>
                <label>
                  <input text= "email" name='email' placeholder='E-Mail'/>
                </label>
                <label>
                  <input text= "text" name='company' placeholder='Company'/>
                </label>
                <button  className='inputPopUp__button'>Contact Us</button>
              </div>

            </div>
          </div>,
          document.getElementById('popup-container') 
        )
      )}
      {isOpen && <div className="modalBackdrop" onClick={togglePopup}></div>}
    </div>
  );
};

export default Popup;



