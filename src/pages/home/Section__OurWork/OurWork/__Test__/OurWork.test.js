import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OurProducts from './OurProducts';

describe('OurProducts Component', () => {
  it('renders the OurProducts component', () => {
    render(<OurProducts />);
    products.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it('renders product images correctly', () => {
    render(<OurProducts />);

    products.forEach(product => {
      const imgElement = screen.getByAltText(`Project of ${product.name}`);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', product.imgSrc);
    });
  });

  it('changes images on hover', () => {
    render(<OurProducts />);

    products.forEach((product, index) => {
      const imgElement = screen.getByAltText(`Project of ${product.name}`);


      expect(imgElement).toHaveAttribute('src', product.imgSrc);


      fireEvent.mouseEnter(imgElement);
      expect(imgElement).toHaveAttribute('src', product.hoverImgSrc);


      fireEvent.mouseLeave(imgElement);
      expect(imgElement).toHaveAttribute('src', product.imgSrc);
    });
  });
});

const products = [
  {
    name: "Apple",
    imgSrc: "https://i.imgur.com/svsEwoG.jpg",
    hoverImgSrc: "https://imgur.com/bAg5OHD.jpg"
  },
  {
    name: "Coca-Cola",
    imgSrc: "https://i.imgur.com/PQpkasO.jpg",
    hoverImgSrc: "https://imgur.com/GQndGjc.jpg"
  },
  {
    name: "Nike",
    imgSrc: "https://i.imgur.com/SAoU42Y.jpg",
    hoverImgSrc: "https://imgur.com/btKqxn2.jpg"
  }
];
