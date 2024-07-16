import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Popup from './Popup';

describe('Popup Component', () => {
  it('renders the Popup component', () => {
    render(<Popup />);
    expect(screen.getByText('Book a call')).toBeInTheDocument();
  });

  it('opens and closes the modal', () => {
    render(<Popup />);

    
    expect(screen.getByText('Book a call')).toBeInTheDocument();
    expect(screen.queryByTestId('popup-container')).toBeNull();

   
    fireEvent.click(screen.getByText('Book a call'));


    expect(screen.getByTestId('popup-container')).toBeInTheDocument();

   
    fireEvent.click(screen.getByText('X'));

    expect(screen.queryByTestId('popup-container')).toBeNull();
  });

  it('renders modal content correctly', () => {
    render(<Popup />);

    fireEvent.click(screen.getByText('Book a call'));

    expect(screen.getByText('Book a call')).toBeInTheDocument();
    expect(screen.getByText('An advisor will contact you!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-Mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Company')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });
});
