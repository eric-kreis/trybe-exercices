import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const renderWithRouter = (component) => {
  const history = createBrowserHistory();
  return {
    ...render(
      <Router history={ history }>{ component }</Router>
    ), history,
  };
};

export default renderWithRouter;
