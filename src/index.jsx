import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './components/App/App';

ReactDOM.render(
  <IntlProvider>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
