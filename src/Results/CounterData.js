import React, { useState, useEffect } from 'react';

function Counter({ maxCount }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition >= 900) {
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
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [count, maxCount, isInView]);

  return (
    <div id="counterSection" style={{ marginTop: '100vh' }}>
      <h2>Contador hasta {maxCount}:</h2>
      <h1>{count}</h1>
    </div>
  );
}

function Revenues() {
  return (
    <div>
      <Counter maxCount={125} />
    </div>
  );
}

export default Revenues;
