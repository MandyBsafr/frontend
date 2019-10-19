import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store';
import Routes from './Routes';

export default () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);
