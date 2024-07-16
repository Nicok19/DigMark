import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubmitForm from './SubmitForm';


jest.mock('./Form', () => ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
    <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
    <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" />
    <button type="submit">Submit</button>
  </form>
));

describe('SubmitForm Component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders the SubmitForm component', () => {
    render(<SubmitForm />);
    expect(screen.getByText('Submit Form')).toBeInTheDocument();
  });

  it('submits the form data correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify({}), { status: 200 });

    render(<SubmitForm />);

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe', name: 'name' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com', name: 'email' } });
    fireEvent.change(screen.getByPlaceholderText('Comments'), { target: { value: 'This is a comment.', name: 'comments' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('Example_fetch_post_url', expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          comments: 'This is a comment.'
        })
      }));
    });
  });

  it('handles submit errors correctly', async () => {
    fetch.mockRejectOnce(new Error('We Cannot Submit'));

    console.error = jest.fn(); // Mock console.error

    render(<SubmitForm />);

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe', name: 'name' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com', name: 'email' } });
    fireEvent.change(screen.getByPlaceholderText('Comments'), { target: { value: 'This is a comment.', name: 'comments' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error:', 'We Cannot Submit');
    });
  });
});
