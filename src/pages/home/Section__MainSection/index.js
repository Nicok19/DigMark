import React from 'react';

import './Styles/MainSectionStyles.css';
import './Styles/Responsive__mainSectionStyles.css';

import ImageSection from './ImagesMainSection/ImagesMainSection';
import ChangeWords from './ChangeWords/ChangeWords'; 


const FirstSection = () => {
  return (
    <section className='MainBothElements'>

      <div className='HelpTo'>
        <h1 className='HelpTo__text'>We help <br/>you to:</h1>
        <ChangeWords/>
      </div>


      <div className='PhotosMain'>
        <ImageSection/>
      </div>
    </section>
  );
}


export default FirstSection;


