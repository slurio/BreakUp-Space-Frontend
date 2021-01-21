import React from 'react';
import styled from 'styled-components';
import logo from '../asset/navbar_logo.png';
import NavLink from 'react-router-dom';

const Footer = () => {
    return (
        <Container>
            <Logo src={logo} alt='logo' />
            <EmailContainer>
                <h3>Interested in partnering with us?</h3>
                <h3>Email <a href="info@breakupspace.com">info@breakupspace.com</a> to get started</h3>
                <h3>Copyright © 2020 Breakup Space. All rights reserved.</h3>
            </EmailContainer>
        </Container>
    )
}

export default Footer;

const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
    margin-left: 20%;
    margin-bottom: 5%;
    width: 500px;
    font-size: 10px;
`

const Logo = styled.img`
  margin-top: 5%;
  width: 10%;
  margin-left: 10%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 25px;
    width: 100%;
    background-color: #EAEAEA;
`