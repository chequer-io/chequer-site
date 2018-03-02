import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "babel-polyfill";
import AppRouter from './router';
import './scss/index.css';
import {AppContainer} from "react-hot-loader";


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(AppRouter);
