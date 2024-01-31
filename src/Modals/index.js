import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './modalStyles.css'; 

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
            <div className="popupContent">

              <div className='imgPopUp'> 
                <button onClick={togglePopup}>X</button>
                <img src="/Elements/modalContact.jpg"  alt="Instagram Logo" />
              </div>

              <div className='inputPopUp'>
                <h2>Book a call</h2>
                <p>An advisor will contact you!</p>
                <label>
                  <input text= "text" name='name' placeholder='Name'/>
                </label>
                <label>
                  <input text= "email" name='email' placeholder='E-Mail'/>
                </label>
                <label>
                  <input text= "text" name='company' placeholder='Company'/>
                </label>
                <button>Contact Us</button>
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



