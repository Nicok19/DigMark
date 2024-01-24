import React from 'react';
import './MainSectionStyles.css';
import ImageSection from './ImagesMainSection'; 
import ChangeWords from './ChangeWords'; 


const FirstSection = () => {
  return (
    <div className='MainBothElements'>

      <div className='HelpTo'>
        <h1>We help <br/>you to:</h1>
        <ChangeWords/>
      </div>


      <div className='PhotosMain'>
        <ImageSection/>
      </div>
    </div>
  );
}


export default FirstSection;


