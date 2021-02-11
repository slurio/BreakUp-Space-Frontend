import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import instagramLogo from '../asset/instagram_logo.svg';
import Icon from '@material-ui/core/Icon';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
//<Logo src='https://uploads-ssl.webflow.com/5e6437bd68556a7f88367dcc/5eb45a5b62e84d6509f34706_whitelogo.png' alt='logo' />

const Footer = () => {

    const clickHandler = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          })
    }

    return (
        <>
        <LinkContainer>
            <Container>
                <ListItem to='/about'>ABOUT</ListItem>
                <ListItem to='/contact_us'>CONTACT US</ListItem>
                <ListItem to='/partners'>PARTNER WITH US</ListItem>      
            </Container>

            <Container>
                <SocialLinks href='https://www.instagram.com/breakup_space/'>Instagram</SocialLinks>
                <SocialLinks href='https://www.facebook.com/breakupspace'>Facebook</SocialLinks>
            </Container>
        </LinkContainer>

        <LogoContainer>
            <Logo onClick={clickHandler} src='https://uploads-ssl.webflow.com/5e6437bd68556a7f88367dcc/5eb45a5b62e84d6509f34706_whitelogo.png' alt='logo' />
            <p>Copyright © 2020 Breakup Space. All rights reserved.</p>
        </LogoContainer>
        </>
    )
}

{/* <ContactContainer>
                <Icon style={{ fontSize: 30, borderRadius: 30, border: 'bfa0e2'  }}>photo_camera</Icon>
                <Icon style={{ fontSize: 30 }}> facebook</Icon>
            </ContactContainer> */}
            

export default Footer;

const Logo = styled.img`
    width: 10%;
    heigh: 10%;
    &:hover {
        cursor: pointer;
    }
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EAEAEA;
    padding-top: 2%;
`
 
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 2%;
    background-color: #EAEAEA;
    align-content: center;
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2% 0;    
    background-color: #EAEAEA;
    border-bottom: .5px solid #a9a9a9;
`

const ListItem = styled(NavLink)`
    padding-left: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    color: #2a2a2a;
    &:hover {
        cursor: pointer;
        color: #bfa0e2;
    }
`

const SocialLinks = styled.a`
    padding-left: 25px;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`
