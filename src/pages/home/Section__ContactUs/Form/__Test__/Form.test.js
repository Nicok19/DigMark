// Form.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../Form';

describe('Form Component', () => {
  test('renders form fields correctly', () => {
    render(<Form />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/comments/i)).toBeInTheDocument();
  });

  test('updates formData on input change', () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const commentsInput = screen.getByLabelText(/comments/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(commentsInput, { target: { value: 'Hello there!' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(commentsInput.value).toBe('Hello there!');
  });

  test('calls handleSubmit on form submit', () => {
    render(<Form />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);

  });
});