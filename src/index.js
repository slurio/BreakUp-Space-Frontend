import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

const rootReducer = (currentState = {
  posts: [],
  messages: [], 
  users: [],
  user: '',
}, action) => { 
  if (action.type === "GET_POSTS") {
    return { ...currentState, posts: action.payload};
  } else if (action.type === "GET_MESSAGES") {
    return {...currentState, messages: action.payload}
  } else if (action.type === "FETCH_USERS") {
    return {...currentState, users: action.payload}
  } else if (action.type === "SET_USER") {
    return {...currentState, user: action.payload}
  } else if (action.type === "NEW_POST") {
    return {...currentState, posts: [...currentState.posts, action.payload]}
  } else if (action.type === "UPDATED_POST") {
      let newArray = currentState.posts.filter(post => post.id !== action.payload.id)
    return {...currentState, posts: [...newArray, action.payload]}
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