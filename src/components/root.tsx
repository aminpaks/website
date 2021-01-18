import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

export const renderApp = async () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
