import Dropdown from './dropdownmenu/dropdown.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));



var displayDropdown = (
      <div style={{display: 'flex', justifyContent: 'center'}} >
        <Dropdown />
      </div>
      );

ReactDOM.render(displayDropdown, document.getElementById('root'));

serviceWorker.unregister();
