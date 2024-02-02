import React from 'react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <h1  className = "buttonComeBack" onClick={scrollToTop}>DigMark</h1>
  );
};

export default ScrollToTop;
