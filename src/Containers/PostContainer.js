import React from 'react';
import {connect} from 'react-redux';
import PostPage from '../Components/PostPage';
import PostGallery from '../Components/PostGallery';
import { Switch, Route } from 'react-router-dom';

const PostContainer = props => {
    return(
        <div>
            <h1>Post Container</h1>
            < PostPage />
        </div>
    )
}

const msp = state => {
    return {
        
    }
}

const mdp = dispatch => {
    return { }
}

export default connect(msp,mdp)(PostContainer);