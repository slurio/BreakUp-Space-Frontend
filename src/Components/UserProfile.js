import React from 'react';
import {connect} from 'react-redux';
import FavoritesContainer from '../Containers/FavoritesContainer';

const UserProfile = (props) => {
    return (
        <div>
            <h1>Your Profile!</h1>
            <img alt="profile_image" src={props.user.profile_image} />
            <p>Name: {props.user.name}</p>
            <p>Username: {props.user.username}</p>
            <p>E-mail: {props.user.email}</p>
            <p>Relationship Status: {props.user.relationship_status}</p>
            <FavoritesContainer/>
        </div>
    )
}

const msp = state => {
    return {
        user: state.user
    }
}

export default connect(msp, null)(UserProfile);