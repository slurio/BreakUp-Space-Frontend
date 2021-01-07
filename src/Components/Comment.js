import React from 'react';

const Comment = props => {
    return(
        <div>
            <p>Comment: {props.comment.content}</p>
            <p>{props.comment.date}</p>
            <p>{props.comment.time}</p>
            <p>{props.comment.user.username}</p>
        </div>
    )
}

export default Comment;