import { Container } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import FavoriteCard from '../Components/FavoriteCard'

const FavoritesContainer = (props) => {

    const renderFavorites = () => {
        let userFavorites = props.favorites.filter(favorite => favorite.user.id === props.user.id)
        return userFavorites.map(favorite => < FavoriteCard key={favorite.id} message={favorite.breakup_message}/>)
    }

    return(
        <FavoriteContainer>
            <MessageTitle>Saved Messages</MessageTitle>
            <TextContainer>
                {renderFavorites()}
            </TextContainer>
        </FavoriteContainer>
    )
}

const msp = state => {
    return {
        user: state.user,
        favorites: state.favorites
    }
}

export default connect(msp, null)(FavoritesContainer);

const FavoriteContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

`
const MessageTitle = styled.h3`
    margin: 0px;
`