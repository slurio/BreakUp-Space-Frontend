import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import PostGallery from './Components/PostGallery';
import Quiz from './Components/Quiz';
import Login from './Components/Login';
import { Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPosts} from './Redux/actions';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>App Header</h1>
        <NavBar/>
        <Switch>
          <Route path={'/home'} render={ () => <HomePage/>} />
          <Route path={'/posts'} render={ () => <PostGallery/>} />
          <Route path={'/quiz'} render={ () => <Quiz/>} />
          <Route path={'/login'} render={ () => <Login/>} />
        </Switch>
      </div>
    );
  }

}

const msp = (state) => {
    return {
      posts: state.posts
    }
}

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts())
  }
}

export default connect(msp, mdp)(App);
