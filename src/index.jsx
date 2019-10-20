import 'regenerator-runtime/runtime';
import 'core-js/stable';
import React from 'react';
import { render } from 'react-dom';
import Client from 'routers/Client';

render(
  <Client />,
  document.getElementById('app'),
);
