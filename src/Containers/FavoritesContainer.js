import React from 'react';
import {connect} from 'react-redux';
import FavoriteCard from '../Components/FavoriteCard'

const FavoritesContainer = (props) => {

    const renderFavorites = () => {
        let userFavorites = props.favorites.filter(favorite => favorite.user.id === props.user.id)
        return userFavorites.map(favorite => < FavoriteCard key={favorite.id} message={favorite.breakup_message}/>)
    }

    return(
        <div>
            <h3>Saved Messages</h3>
            {renderFavorites()}
        </div>
    )
}

const msp = state => {
    return {
        user: state.user,
        favorites: state.favorites
    }
}

export default connect(msp, null)(FavoritesContainer);