import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../Redux/actions';
import {Link} from 'react-router-dom'
import styled from 'styled-components';



function NavBar(props) {
  
const logoutHandle = () => {
    props.setUser('')
}

  return (
    <Container>
       <Tab to="/home"><Logo src='https://uploads-ssl.webflow.com/5e6437bd68556a7f88367dcc/5ec461df6e203d0a9b69f125_logo_new_1.png' alt='logo'/></Tab>
      <TabContainer>
        <Tab to='/posts'>Community</Tab>
        <Tab to='/quiz'>Quiz</Tab>
      </TabContainer>
      
    </Container>
  )}

  const msp = state => {
    return {
      user: state.user
    }
  }

  const mdp = dispatch => {
    return {
      setUser: (a) => dispatch(loginUser(a))
    }
  }

export default connect(msp, mdp)(NavBar);

const Logo = styled.img`
  width: 200px;
  height: 30px;
`

const Tab = styled(Link)`
  display:inline-block;
  float: left;
  color: white;
  margin-left: 50px;
  text-decoration: none;
  font-size: 12pt;
  text-transform: uppercase;
  padding-top: 30px;
  padding-bottom: 30px;
`

const Container = styled.div`
    background-color: #333;
    height: 90px;
    width: 100%;
`

const TabContainer = styled.div`
  border-style: solid;
  border-color: transparent;
  height: 85px;
`



