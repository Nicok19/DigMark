import React from 'react';

const Card = ({ title, text, imageUrl }) => (

  <div className="card customCard">
  <div className='imgCard'>
    <img src={process.env.PUBLIC_URL + imageUrl} alt="Imagen" />
    </div>
    <div className="cardbody">
      <h5 className="cardTitle">{title}</h5>
      <p className="cardText">{text}</p>
    </div>
  
  </div>
);


const CardContainer = () => {
  const cardData = [
    {
      title: 'Work Ethics',
      text: 'Our work ethics include integrity, honesty, responsibility, being fair and respectable. We aim to maintain our work ethics while delivering quality.',
      imageUrl: '/Elements/icon1.png', 
    },
    {
      title: '24/7 Support',
      text: 'Our team is available 24/7 for support and help or to solve any query of yours. Believe in us and we’ll prove you right.',
      imageUrl: '/Elements/icon2.png',
    },
    {
      title: 'Digital Marketing',
      text: 'Online Marketing is becoming more and more competitive. We experience, learn, and implement new strategies to make you stay ahead of your competitors.',
      imageUrl: '/Elements/icon3.png',
    },
    {
      title: 'Consultancy',
      text: 'We meet with you to learn about your business, your goals, and your target audience.',
      imageUrl: '/Elements/icon4.png',
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardContainer;

