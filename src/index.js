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
  favorites: [],
  comments: [],
}, action) => { 
  if (action.type === "GET_POSTS") {
    return { ...currentState, posts: action.payload};
  } else if (action.type === "GET_MESSAGES") {
    return {...currentState, messages: action.payload}
  } else if (action.type === "GET_COMMENTS") {
    return {...currentState, comments: action.payload}
  } else if (action.type === "GET_FAVORITES") {
    return {...currentState, favorites: action.payload}
  }else if (action.type === "FETCH_USERS") {
    return {...currentState, users: action.payload}
  } else if (action.type === "SET_USER") {
    return {...currentState, user: action.payload}
  } else if (action.type === "NEW_POST") {
    return {...currentState, posts: [...currentState.posts, action.payload]}
  } else if (action.type === "UPDATED_POST") {
      let newArray = currentState.posts.filter(post => post.id !== action.payload.id)
    return {...currentState, posts: [...newArray, action.payload]}
  } else if (action.type === "DELETE_POST") {
    let newArray = currentState.posts.filter(post => post.id !== action.payload.id)
    return {...currentState, posts: newArray}
} else if (action.type === "NEW_COMMENT") {
    return {...currentState, comments: [...currentState.comments, action.payload]}
} else if (action.type === "UPDATE_COMMENT") {
  let newCommentsArray = currentState.comments.filter(comment => comment.id !== action.payload.id);
  return {...currentState, comments: [...newCommentsArray, action.payload]}
} else if (action.type === "DELETE_COMMENT") {
  let newCommentsArray = currentState.comments.filter(comment => comment.id !== action.payload.id);
  return {...currentState, comments: newCommentsArray}
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