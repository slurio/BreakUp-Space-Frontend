import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

const rootReducer = (currentState = {
  posts: []
}, action) => { 
  if (action.type === "GET_POSTS") {
    return { ...currentState, posts: action.payload};
  } else {
    return currentState;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk)) 

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);