import React from 'react';
import styled from 'styled-components';
import logo from '../asset/navbar_logo.png';
import NavLink from 'react-router-dom';

const Footer = () => {
    return (
        <Container>
            <h1>Footer</h1>
            <Logo src={logo} alt='logo' />
            <div>
                <p>Interested in partnering with us?</p>
                <p>Email</p>
            </div>
        </Container>
    )
}

export default Footer;

const Logo = styled.img`
  width: 20%;
  margin-left: 20%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 25px;
    width: 35vw;
`