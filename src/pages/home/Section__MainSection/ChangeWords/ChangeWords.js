import React, { useState, useEffect } from 'react';

const ChangeWords = () => {
  const [text, setText] = useState('');
  const [words] = useState(['Get Clients', 'Sale More', 'Get Followers']);
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

    return () => clearInterval(interval);
  }, [currentIndex, words]); 

  return <div className='textChange'>{text}</div>;
};

export default ChangeWords;

