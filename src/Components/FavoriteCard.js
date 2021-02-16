import React, {useState} from 'react';
import styled from 'styled-components';

const FavoriteCard = props => {
    const [message, setMessage] = useState(false)

    const handleClick = () => {
        setMessage(!message);
    }

    return (
        <CardContainer onClick={handleClick}>
            {message ? <p>{props.message.message}</p> : <h3>{props.message.theme}</h3>}
        </CardContainer>
    )
}

export default FavoriteCard;

const CardContainer = styled.div`
    width: 28vw;
    height: 30vh;
    background-color: #78ff7d;
    &:hover {
        cursor: pointer;
        color: white;
    }
`