console.log('hello');

import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/style.css';
import css from './styles/style.css';
import App from './App';

//document.addEventListener('DOMContentLoaded', function() {
 ReactDOM.render(
    React.createElement(App),
    document.getElementById('mount')
  );
//});
