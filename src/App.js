import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import PostGallery from './Containers/PostGallery';
import Quiz from './Components/Quiz';
import Login from './Components/Login';
import { Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPosts, getBreakUpMessages, fetchUsers} from './Redux/actions';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchMessages();
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
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
    fetchMessages: () => dispatch(getBreakUpMessages()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(msp, mdp)(App);
