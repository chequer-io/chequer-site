import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import AppRouter from './router';
import './scss/index.scss';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(AppRouter);
