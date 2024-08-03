import React, { useState } from 'react';

const Card = ({ image, title, subtitle, paragraph }) => {
    return (
        <div className="ObjectCard">
            <div className='cardImg'>
                <img src={image} alt="" />
            </div>

            <div className='cardText'>
                <h2 className='cardText__title'>{title}</h2>
                <h3 className='cardText__subtitle'>{subtitle}</h3>
                <p className='cardText__paragraph'>{paragraph}</p>
            </div>
        </div>
    );
};

const CardCarousel = () => {
    const [cards] = useState([
        {
            image: 'https://imgur.com/bP0eaXD.png',
            title: 'Amelia Joseph',
            subtitle: 'Chief Manager - Google',
            paragraph: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.',
        },
        {
            image: 'https://imgur.com/P5GzNzZ.png',
            title: 'Elsa de los Santos',
            subtitle: 'Manager - Nike',
            paragraph: 'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it',
        },
        {
            image: 'https://imgur.com/x5Fdqkx.png',
            title: 'Jacob Joshua',
            subtitle: 'Marketing Director - Coca Cola',
            paragraph: 'Embrace really nails it! Creative brilliance, approachable style. They are the partners you want—artistry meets strategy. Thrilled with what they achieved!',
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="cardCarousel">
            <div className='buttonCarrusel'>
                <button className="buttonCarrusel__Button" onClick={handlePrevious}> Next &#8594;</button>
            </div>
            <div className="card-container">
                <Card {...cards[currentIndex]} />
            </div>
        </div>
    );
};

export default CardCarousel;

