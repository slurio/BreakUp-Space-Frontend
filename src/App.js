import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer'
import PostGallery from './Containers/PostGallery';
import Quiz from './Components/Quiz';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import About from './Components/About'
import { Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getTopics, getPosts, getBreakUpMessages, fetchUsers, fetchFavorites, getComments} from './Redux/actions';
import ContactUs from './Components/ContactUs';
import Partners from './Components/Partners';
import styled from 'styled-components';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchMessages();
    this.props.fetchUsers();
    this.props.fetchFavorites();
    this.props.fetchComments();
    this.props.fetchTopics();
  }

  render() {
    return (
      <>
        <NavBar/>
        <Switch>
          <Route path={'/quiz'} render={ () => <Quiz/>} />
          <Route path={'/profile'} render={ () => <UserProfile/>} />
          <Route path={'/login'} render={ () => <Login/>} />
          <Route path={'/posts'} render={ () => <PostGallery/>} />
          <Route path={'/about'} render={ () => <About/>} />
          <Route path={'/contact_us'} render={ () => <ContactUs/>} />
          <Route path={'/partners'} render={ () => <Partners/>} />
          <Route path={'/'} render={ () => <HomePage/>} />
        </Switch>
        <Footer/>
      </>
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
    fetchUsers: () => dispatch(fetchUsers()), 
    fetchFavorites: () => dispatch(fetchFavorites()),
    fetchComments: () => dispatch(getComments()),
    fetchTopics: () => dispatch(getTopics()),
  }
}

export default connect(msp, mdp)(App);

// const AppContainer = styled.div`
//   z-index: -10;
//   background-color: #EAEAEA;
// `