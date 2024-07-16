import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Brands from './Brands';

describe('Brands Component', () => {
  it('renders the Brands component', () => {
    render(<Brands />);
    expect(screen.getByText('Companies we Work with')).toBeInTheDocument();
  });

  it('renders all brand images', () => {
    render(<Brands />);

    const images = [
      { src: '/Elements/adobe.png', alt: 'Adobe Logo' },
      { src: '/Elements/amazon.png', alt: 'Amazon Logo' },
      { src: '/Elements/evernote.png', alt: 'Evernote Logo' },
      { src: '/Elements/asana.png', alt: 'Asana Logo' },
      { src: '/Elements/paypal.png', alt: 'Paypal Logo' },
      { src: '/Elements/spotify.png', alt: 'Spotify Logo' },
      { src: '/Elements/shopify.png', alt: 'Shopify Logo' },
      { src: '/Elements/google.png', alt: 'Google Logo' },
    ];

    images.forEach(image => {
      const imgElement = screen.getByAltText(image.alt);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', image.src);
    });
  });
});
