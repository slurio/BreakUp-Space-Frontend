import React from 'react';
import { connect } from 'react-redux';
import getPosts from '../Redux/actions';


const PostCard = (props) => {
    console.log(props.posts)
    return (
        <div>
            <h1>Post Card</h1>
        </div>
    )
}

const msp = state => {
    return {
        posts: state.posts
    } 
}

export default connect(msp, null)(PostCard);