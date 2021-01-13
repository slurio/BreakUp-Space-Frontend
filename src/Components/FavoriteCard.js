import React from 'react';

const FavoriteCard = props => {

    return (
        <div>
            <p>Theme: {props.message.theme}</p>
            <p>Message: {props.message.message}</p>
        </div>
    )
}

export default FavoriteCard;