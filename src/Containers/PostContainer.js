import React from 'react';
import PostPage from '../Components/PostPage';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

const PostContainer = props => {
    
    return(
        <div>
            <h1>Post Container</h1>
            {/* <PostPage/> */}
            {/* <Switch>
                <Route path={'/posts/:id'} render={ (routerProps) => {
                    let id = parseInt(routerProps.match.params.id);
                    
                    if (props.posts.length > 0) {
                        let foundPost = props.posts.find(post => post.id === id)
                        return (<PostPage key={foundPost.id} post={foundPost}/>)
                    }
                }
                } />
            </Switch> */}
        </div>
    )
}

const msp = state => {
    return {
        posts: state.posts
    }
}

export default connect(msp)(PostContainer);