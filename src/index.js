import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import { createStore, combineReducers } from 'redux';

import listReducer from './store/Reducers/ListReducer'
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';




<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />




const rootReducer = combineReducers({
   lists: listReducer
});

const store = createStore(rootReducer);

store.subscribe( () => {
   console.log('state\n', store.getState());
   
 });

ReactDOM.render(
 
   <Provider store={store}>
      <Router >
         <App />
         </Router>
         </Provider> ,  document.getElementById('root'));



