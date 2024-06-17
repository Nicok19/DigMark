import React from 'react';
import './MainSectionStyles.css';
import './Responsive__mainSectionStyles.css';
import ImageSection from './ImagesMainSection';
import ChangeWords from './ChangeWords'; 


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

