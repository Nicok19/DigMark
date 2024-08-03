import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Styles/OurWorkStyles.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 3, 
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1, 
        slidesToScroll: 1,
      }
    }
  ]
};

const Brands = () => {
    return (
      <div className='carousel'>
      <h2 className='carousel__title'>
      Companies we Work with
      </h2>



        <Slider {...settings}>
          <div><img className="carousel-image" src="https://imgur.com/6PgBDCu.png" alt="Adobe Logo" /></div>
          <div><img className="carousel-image" src="https://imgur.com/DCkhtLY.png" alt="Amazon Logo" /></div>
          <div><img className="carousel-image" src="https://imgur.com/VZBod9V.png" alt="Evernote Logo" /></div>
          <div><img className="carousel-image" src="https://imgur.com/xRYCr6O.png" alt="Asana Logo" /></div>
          <div><img className="carousel-image" src="https://imgur.com/YBg36PC.png" alt="Paypal Logo" /></div>
          <div><img className="carousel-image" src="https://imgur.com/4Z1sFwq.png" alt="Spotify Logo" /></div>
          <div><img className="carousel-image" src="https://imgur.com/CxLjm95.png" alt="Google Logo" /></div>
        </Slider>
      </div>
    );
  }

export default Brands;
