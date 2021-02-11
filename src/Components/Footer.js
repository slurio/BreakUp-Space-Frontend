import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
               
                <SocialLink href='https://www.instagram.com/breakup_space/'>
                    <SocialIcon xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 30" x="0px" y="0px"><title>Artboard 98</title><path d="M20,0H4A4,4,0,0,0,0,4V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"/><path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/><circle cx="18.5" cy="5.5" r="1.5"/><text x="0" y="39" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Mas Dhimas</text><text x="0" y="44" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></SocialIcon>
                </SocialLink>

                <SocialLink href='https://www.facebook.com/breakupspace'>
                    <SocialIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></SocialIcon>
                </SocialLink>
              
            </Container>

        </LinkContainer>

        <LogoContainer>
            <Logo onClick={clickHandler} src='https://uploads-ssl.webflow.com/5e6437bd68556a7f88367dcc/5eb45a5b62e84d6509f34706_whitelogo.png' alt='logo' />
            <CopyRightText>Copyright © 2021 Breakup Space. All rights reserved.</CopyRightText>
        </LogoContainer>
        </>
    )
}


            

export default Footer;

const SocialIcon = styled.svg`
    &:hover {
        cursor: pointer;
        fill: #bfa0e2;
    }
`

const Logo = styled.img`
    width: 6%;
    heigh: 6%;
    &:hover {
        cursor: pointer;
    }
`

const CopyRightText = styled.p`
    font-size: 10px;
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EAEAEA;
    padding-top: 1%;
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

const SocialLink = styled.a`
text-decoration: none;
padding-left: 25px;
display: flex;
height: 35px;
width: 35px;
&:hover {
    cursor: pointer;
}
`


