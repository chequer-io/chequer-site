import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "babel-polyfill";
import AppRouter from './router';
import './scss/index.css';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
