import React from 'react';




const PostCard = (props) => {

    return (
        <div>
            <h1>{props.info.title}</h1>
            <p>{props.info.content}</p>
            <p>{props.info.date}</p>
            <p>{props.info.user.username}</p>
        </div>
    )
}



export default PostCard;