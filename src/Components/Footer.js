import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <FooterContainer>
            <LinkContainer>
                <Container>
                    <ListItem href="mailto:info@breakupspace.com?subject=Hello!">CONTACT US</ListItem>
                    <ListItem href="mailto:info@breakupspace.com?subject=I'd%20Like%20To%20Partner%20With%20You!">PARTNER WITH US</ListItem>
                </Container>

                <Container>     
                    <SocialLink href='https://www.instagram.com/breakup_space/' target="_blank" rel="noopener noreferrer">
                        <SocialIcon xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 30" x="0px" y="0px"><title>Artboard 98</title><path d="M20,0H4A4,4,0,0,0,0,4V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"/><path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/><circle cx="18.5" cy="5.5" r="1.5"/><text x="0" y="39" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Mas Dhimas</text><text x="0" y="44" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></SocialIcon>
                    </SocialLink>
                </Container>
            </LinkContainer>

            <LogoContainer>
                <HomeLink to='/'>
                    <Logo src='https://uploads-ssl.webflow.com/5e6437bd68556a7f88367dcc/5eb45a5b62e84d6509f34706_whitelogo.png' alt='logo' />
                </HomeLink>
                <CopyRightText>Copyright © 2021 Breakup Space. All rights reserved.</CopyRightText>
            </LogoContainer>
        </FooterContainer>
    )
}


            

export default Footer;

const FooterContainer = styled.div`
    width: 100%;
`

const SocialIcon = styled.svg`
    &:hover {
        cursor: pointer;
        fill: #bfa0e2;
    }
`

const Logo = styled.img`
    width: 15%;
    heigh: 15%;
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
    align-items: center;
    background-color: #EAEAEA;
    align-content: center;
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2% 0;    
    background-color: #EAEAEA;
    border-bottom: .5px solid #a9a9a9;
`

const ListItem = styled.a`
    padding-left: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    color: #2a2a2a;
    &:hover {
        cursor: pointer;
        color: #bfa0e2;
    }
`
const HomeLink = styled(NavLink)`
    text-align: center;
`

const SocialLink = styled.a`
    text-decoration: none;
    padding-right: 50px;
    display: flex;
    height: 35px;
    width: 35px;
    &:hover {
        cursor: pointer;
    }
`


