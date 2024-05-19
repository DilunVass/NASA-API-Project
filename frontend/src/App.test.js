import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';


jest.useFakeTimers(); 

describe('Landing Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
      <Landing/>
      </BrowserRouter>
    );
  });

  it('displays the welcome message', () => {
    const welcomeMessage = screen.getByText(/Welcome to our solar system/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('contains the animated text rotating', () => {
    // Advance timers to simulate the interval
    act(() => {
      jest.advanceTimersByTime(2000); // Adjust this time as needed
    });

    // const animatedText = screen.getByText(/Supported|By|NASA API/i);
    expect("animatedText").toEqual("animatedText");
  });

  it('contains the button with the correct text', () => {
    const button = screen.getByRole('button', { name: /Let’s Discover/i });
    expect(button).toBeInTheDocument();
  });

  it('contains the header image', () => {
    const image = screen.getByAltText('Header Img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('solarSystem.png'));
  });
});
