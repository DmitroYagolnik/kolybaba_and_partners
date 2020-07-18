import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import App from './components/App';
import favicon from './img/favicon.ico';

ReactDOM.render(
  <>
    <Favicon url={favicon} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);
