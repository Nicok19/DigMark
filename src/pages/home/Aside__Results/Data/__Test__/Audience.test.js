
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Audience from '../Audience';

describe('Audience Component', () => {
  test('renders counter section with initial count', () => {
    render(<Audience />);
    const counterElement = screen.getByText(/K\+/);
    expect(counterElement).toBeInTheDocument();
  });

  test('increments count correctly', () => {
    jest.useFakeTimers();
    render(<Audience />);
    
    const counterElement = screen.getByText(/0K\+/);
    expect(counterElement).toBeInTheDocument();

    jest.advanceTimersByTime(1500); 


    const updatedCounterElement = screen.getByText(/100K\+/); 
    expect(updatedCounterElement).toBeInTheDocument();

    jest.useRealTimers();
  });
});