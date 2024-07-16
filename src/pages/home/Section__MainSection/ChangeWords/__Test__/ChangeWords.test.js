import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChangeWords from './ChangeWords';

jest.useFakeTimers();

describe('ChangeWords Component', () => {
  it('renders the ChangeWords component', () => {
    render(<ChangeWords />);
    expect(screen.getByText('')).toBeInTheDocument();
  });

  it('changes words over time', () => {
    render(<ChangeWords />);

    const words = ['Get Clients', 'Sale More', 'Get Followers'];
    
    words.forEach((word, index) => {
      act(() => {
        jest.advanceTimersByTime(500 * (word.length + 1));
      });
      expect(screen.getByText(word)).toBeInTheDocument();
    });
  });

  it('loops through words', () => {
    render(<ChangeWords />);

    const words = ['Get Clients', 'Sale More', 'Get Followers'];
    
  
    const loopTime = 500 * words.reduce((acc, word) => acc + word.length + 1, 0) * 2;

    act(() => {
      jest.advanceTimersByTime(loopTime);
    });

    expect(screen.getByText(words[1])).toBeInTheDocument();
  });
});
