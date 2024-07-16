
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Brands from '../Brands';

describe('Brands Component', () => {
  test('renders Counter with initial count', () => {
    render(<Brands />);
    const counterElement = screen.getByText(/0\+/);
    expect(counterElement).toBeInTheDocument();
  });

  test('changes isInView state on scroll', () => {
    render(<Brands />);
    

    window.scrollY = 500;
    window.dispatchEvent(new Event('scroll'));

    const counterElement = screen.getByText(/InView/); 
    expect(counterElement).toBeInTheDocument();
  });
});