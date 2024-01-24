import React, { useState, useEffect } from 'react';

const ChangeWords = () => {
  const [text, setText] = useState('');
  const [words, setWords] = useState(['Get Clients', 'Sale More', 'Get Followers']);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === words[currentIndex]) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          return '';
        } else {
          return words[currentIndex].slice(0, prevText.length + 1);
        }
      });
    }, 500);

    // Limpia el intervalo cuando el componente se desmonta o cuando se actualiza currentIndex
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependencia actualizada

  return <div className='textChange'>{text}</div>;
};

export default ChangeWords;
