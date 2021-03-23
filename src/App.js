import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer'
import PostGallery from './Containers/PostGallery';
import BreakupQuizContainer from './Containers/BreakupQuizContainer';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import { Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getTopics, getPosts, getBreakUpMessages, fetchUsers, fetchFavorites, getComments} from './Redux/actions';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchUsers();
    this.props.fetchPosts();
    this.props.fetchFavorites();
    this.props.fetchComments();
    this.props.fetchTopics();
  }

  render() {
    return (
      <div>
        <NavBar/>
          <Switch>
            <Route path={'/quiz'} render={ () => <BreakupQuizContainer/>} />
            <Route path={'/profile'} render={ () => <UserProfile/>} />
            <Route path={'/login'} render={ () => <Login/>} />
            <Route path={'/posts'} render={ () => <PostGallery/>} />
            <Route path={'/'} render={ () => <HomePage/>} />
          </Switch>
        <Footer/>
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
    fetchMessages: () => dispatch(getBreakUpMessages()),
    fetchUsers: () => dispatch(fetchUsers()), 
    fetchFavorites: () => dispatch(fetchFavorites()),
    fetchPosts: () => dispatch(getPosts()),
    fetchComments: () => dispatch(getComments()),
    fetchTopics: () => dispatch(getTopics()),
  }
}

export default connect(msp, mdp)(App);
