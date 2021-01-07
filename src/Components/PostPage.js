import React from 'react';
import Comment from './Comment';

function PostPage({post}) {

    console.log(post.comments)
    
    const renderComments = () => {
        return post.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
    }

    return(
        <div>
            <h1>hello I am postpage!</h1>
            <h1>{post.title}</h1>
            <h3>{post.date}</h3>
            <h3>{post.time}</h3>
            <h3>{post.user.username}</h3>
            <p>{post.content}</p>
            {renderComments()}
        </div>
    )
}

export default PostPage;
