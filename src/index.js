import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import Landing from './components/Landing';

ReactDOM.render(
  <HashRouter>
    <Landing />
    <App />
  </HashRouter>,
  document.getElementById('root')
);
