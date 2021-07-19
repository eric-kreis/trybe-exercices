// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App';

const MockResolve = {
  "id":"1oGYLu4T7Ed",
  "joke":"Why is Peter Pan always flying? Because he Neverlands.",
  "status":200
};

describe('"App.js" API tests', () => {
  afterEach(() => jest.clearAllMocks());

  it('Mock and test the text', async () => {
    global.fetch = jest.fn(async () => ({ json: async () => MockResolve }))

    render(<App />);
    const joke = await screen
      .findByTestId('joke');
  
    expect(joke).toHaveTextContent("Why is Peter Pan always flying? Because he Neverlands.");
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toBeCalledTimes(1);
  });
})
