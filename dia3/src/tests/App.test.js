import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Home page', () => {
  it('Home page is the deafault', () => {
    const { getByRole } = renderWithRouter(<App />);
    const title = getByRole('heading');

    expect(title).toHaveTextContent('Home');
  });
});

describe('Links', () => {
  it('When click on the "About" link show About page', () => {
    const { getByRole, queryByRole, history } = renderWithRouter(<App />);
    const aboutLink = screen.getByText('About');

    userEvent.click(aboutLink);

    const aboutTitle = getByRole('heading', { name: 'About' });
    const homeTitle = queryByRole('heading', { name: 'Home' });
    
    expect(history.location.pathname).toBe('/about');
    expect(aboutTitle).toBeInTheDocument();
    expect(homeTitle).toBeNull();
  });

  it('When click on the "Home" link turn back to Home', () => {
    const { getByRole, queryByRole, history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/about');
  
    const homeLink = screen.getByText('Home');
    userEvent.click(homeLink);
    expect(history.location.pathname).toBe('/');
    const homeTitle = getByRole('heading', { name: 'Home' });
    const aboutTitle = queryByRole('heading', { name: 'About' });

    expect(homeTitle).toBeInTheDocument();
    expect(aboutTitle).toBeNull();
  });
});

describe('NotFound', () => {
  it ('When the path is undefined redirect to NotFound page', () => {
    const { getByRole, history } = renderWithRouter(<App />);
    history.push('/eric')
    expect(history.location.pathname).toBe('/eric');

    const notFoundTitle = getByRole('heading', { name: /notfound/i });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
