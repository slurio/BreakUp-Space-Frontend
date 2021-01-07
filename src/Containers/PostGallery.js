import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PostPage from '../Components/PostPage';
import PostDisplay from '../Components/PostDisplay';

const PostGallery = (props) => {

    return (
        <div>
            <Switch>
                <Route path={'/posts/:id'} render={ (routerProps) => {
                    let id = parseInt(routerProps.match.params.id);
                    
                    if (props.posts.length > 0) {
                        let foundPost = props.posts.find(post => post.id === id)
                        return (<PostPage key={foundPost.id} post={foundPost}/>)
                    }
                }
                } />
                <Route path={'/posts'} render={() => <PostDisplay />}/>
            </Switch>
        </div>
    )
}

const msp = state => {
    return {
        posts: state.posts
    }
}

export default connect(msp)(PostGallery);