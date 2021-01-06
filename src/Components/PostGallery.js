import React from 'react';
import PostCard from './PostCard';
import {connect} from 'react-redux';

const PostGallery = (props) => {

    const renderPosts = () => {
        return props.posts.map(post => <PostCard key={post.id} info={post} />)
    }

    return (
        <div>
            <h1>Post Gallery</h1>
            {renderPosts()}
        </div>
    )
}

const msp = state => {
    return {
        posts: state.posts
    }
}

export default connect(msp)(PostGallery);