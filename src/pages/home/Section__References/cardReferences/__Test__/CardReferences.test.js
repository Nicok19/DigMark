import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardCarousel from './CardCarousel';

describe('CardCarousel Component', () => {
  it('renders the CardCarousel component', () => {
    render(<CardCarousel />);
    expect(screen.getByText('Amelia Joseph')).toBeInTheDocument();
    expect(screen.getByText('Chief Manager - Google')).toBeInTheDocument();
    expect(screen.getByText('My vision came alive effortlessly.')).toBeInTheDocument();
  });

  it('renders the initial card correctly', () => {
    render(<CardCarousel />);
    const cardTitle = screen.getByText('Amelia Joseph');
    expect(cardTitle).toBeInTheDocument();
    expect(screen.getByText('Chief Manager - Google')).toBeInTheDocument();
    expect(screen.getByText('My vision came alive effortlessly.')).toBeInTheDocument();
  });

  it('changes card on button click', () => {
    render(<CardCarousel />);
    const nextButton = screen.getByText('Next ➡️');

   
    expect(screen.getByText('Amelia Joseph')).toBeInTheDocument();

   
    fireEvent.click(nextButton);

  
    expect(screen.getByText('Elsa de los Santos')).toBeInTheDocument();
    expect(screen.getByText('Manager - Nike')).toBeInTheDocument();
    expect(screen.getByText('I found the digital expertise I needed.')).toBeInTheDocument();
  });

  it('loops cards correctly', () => {
    render(<CardCarousel />);
    const nextButton = screen.getByText('Next ➡️');

   
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);


    expect(screen.getByText('Amelia Joseph')).toBeInTheDocument();
    expect(screen.getByText('Chief Manager - Google')).toBeInTheDocument();
    expect(screen.getByText('My vision came alive effortlessly.')).toBeInTheDocument();
  });
});
