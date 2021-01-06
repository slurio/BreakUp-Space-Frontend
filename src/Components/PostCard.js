import React from 'react';
import {NavLink} from 'react-router-dom';

const PostCard = (props) => {

    return (
        <div>
            <NavLink to={`/posts/${props.info.id}`}>
                <h1>Title: {props.info.title}</h1>
            </NavLink>
            <p>Content: {props.info.content}</p>
            <p>Date: {props.info.date}</p>
            <p>Username: {props.info.user.username}</p>
        </div>
    )
}

export default PostCard;