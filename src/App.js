import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import PostGallery from './Containers/PostGallery';
import Quiz from './Components/Quiz';
import Login from './Components/Login';
import { Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPosts, getBreakUpMessages} from './Redux/actions';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchMessages();
  }

  render() {
    return (
      <div>
        <h1>App Header</h1>
        <NavBar/>
        <Switch>
          <Route path={'/quiz'} render={ () => <Quiz/>} />
          <Route path={'/login'} render={ () => <Login/>} />
          <Route path={'/posts'} render={ () => <PostGallery/>} />
          <Route path={'/'} render={ () => <HomePage/>} />
        </Switch>
      </div>
    );
  }

}

const msp = (state) => {
    return {
      posts: state.posts,
      messages: state.messages
    }
}

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts()),
    fetchMessages: () => dispatch(getBreakUpMessages())
  }
}

export default connect(msp, mdp)(App);
