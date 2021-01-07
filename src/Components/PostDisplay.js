import React from 'react';
import PostCard from '../Components/PostCard';
import {connect} from 'react-redux';

const PostDisplay = props => {


    const renderPosts = () => {
         return props.posts.map(post => <PostCard key={post.id} info={post} />)
    }

    return (
        <div>
            <h1>Post Display</h1>
            {renderPosts()}
        </div>
    )
}

const msp = state => {
    return {
        posts: state.posts
    }
}

export default connect (msp)(PostDisplay);