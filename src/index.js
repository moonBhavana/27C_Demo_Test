// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers';
import BankAccount from './bankAccount';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// const store = createStore(reducer);
const root = document.getElementById('root')
const rootE = createRoot(root);
const store = createStore(reducer);
rootE.render(

    <React.StrictMode>
       <Provider store={store}>
       <BankAccount />
       </Provider>
    
    </React.StrictMode>,
    root
  // document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();