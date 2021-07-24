import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from '../src/data/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
