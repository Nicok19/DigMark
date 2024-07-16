import React, { useState, useEffect } from 'react';

function Counter({ maxCount }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition >= 500) {
        setIsInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        if (count < maxCount) {
          setCount(prevCount => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 5);

      return () => clearInterval(interval);
    }
  }, [count, maxCount, isInView]);

  return (
    <div className="counterSection" style={{ marginTop: '10vh' }}>
      <h1 className='counterElements'>{count}%</h1>
    </div>
  );
}

function Revenues() {
  return (
    <div>
      <Counter maxCount={245} />
    </div>
  );
}

export default Revenues;
