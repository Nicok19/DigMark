
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../Awards';

describe('Counter Component', () => {
  test('renders with initial count', () => {
    render(<Counter maxCount={100} />);
    const counterElement = screen.getByText(/0/);
    expect(counterElement).toBeInTheDocument();
  });

  test('changes isInView state on scroll', () => {
    render(<Counter maxCount={100} />);
    
    // Simulate scroll event
    window.scrollY = 500;
    window.dispatchEvent(new Event('scroll'));


    const counterElement = screen.getByText(/InView/);
    expect(counterElement).toBeInTheDocument();
  });
});