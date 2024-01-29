
import React, { useState } from 'react';

const Card = ({ image, title, subtitle, paragraph }) => {
    return (
        <div className="ObjectCard">
<div className='cardImg'>
            <img src={image} alt="Card Image" />
</div>

            <div className='cardText'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{paragraph}</p>
            </div>
        </div>
    );
};

const CardCarousel = () => {
    const [cards, setCards] = useState([
        {
            image: '/Elements/reference1.png',
            title: 'Amelia Joseph',
            subtitle: 'Chief Manager - Google',
            paragraph: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.',
        },
        {
            image: '/Elements/reference2.png',
            title: 'Elsa de los Santos',
            subtitle: 'Manager - Nike',
            paragraph: 'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it',
        },
        {
            image: '/Elements/reference3.png',
            title: 'Jacob Joshua',
            subtitle: 'Marketing Director - Coca Cola',
            paragraph: 'Embrace really nails it! Creative brilliance, approachable style. They are the partners you want—artistry meets strategy. Thrilled with what they achieved!',
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="cardCarousel">
        
        <div className='buttonCarrusel'>
        <button  id="nextButton" onClick={handlePrevious}>&#8594;</button>
        </div>
            <div className="card-container">
                <Card {...cards[currentIndex]} />
            </div>
            
        </div>
    );
};

export default CardCarousel;
