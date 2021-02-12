import React from 'react';
import {connect} from 'react-redux';
import FavoritesContainer from '../Containers/FavoritesContainer';
import styled from 'styled-components';

const UserProfile = (props) => {
    return (
        <Container>
            <DataContainer>
                <ProfileImage alt="profile_image" src={props.user.profile_image} />
                <ProfileContainer> 
                    <UsernameTitle>{props.user.username}</UsernameTitle>
                    <ProfileButton>Edit Profile</ProfileButton>
                </ProfileContainer>
            </DataContainer>
               

            {/* <h1>name: {props.user.name}!</h1>
            <p>E-mail: {props.user.email}</p>
            <p>Relationship Status: {props.user.relationship_status}</p> */}

            <DataContainer>
                <FavoritesContainer/>
            </DataContainer>
        </Container>
    )
}

const msp = state => {
    return {
        user: state.user
    }
}

export default connect(msp, null)(UserProfile);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EAEAEA;
`

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`

const UsernameTitle = styled.h3`
    margin: 0px;
`

const ProfileButton = styled.button`
    color: #bfa0e2;
    background-color: white;
    text-transform: uppercase;
    width: 8vw;
    height: 32px;
    letter-spacing: 0.7px;
    border-radius: 16px;
    border: 1px solid #bfa0e2;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    margin-top: 10px;
    align-items: center;
    min-width: 120px;
    padding: 0px 12px 2px;
    &:hover {
        cursor: pointer;
        color: white;
        background-color: #bfa0e2;
    }
`
const ProfileImage = styled.img``

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    margin: 20px;
    padding: 20px 15px;
    background-color: white;
    border-radius: 4px;
`