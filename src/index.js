import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import './index.css';

const startApp = () => {
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
}

if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', startApp, false)
}
