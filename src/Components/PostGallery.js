import React from 'react';
import PostCard from './PostCard';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PostPage from '../Components/PostPage';

const PostGallery = (props) => {

    console.log(props.posts)

    const renderPosts = () => {
        return props.posts.map(post => <PostCard key={post.id} info={post} />)
    }

    return (
        <div>
            <h1>Post Gallery</h1>
            {renderPosts()}
          
            <Switch>
                <Route path={'/posts/:id'} render={ (routerProps) => {
                    let id = parseInt(routerProps.match.params.id);
                    
                    if (props.posts.length > 0) {
                        let foundPost = props.posts.find(post => post.id === id)
                        return (<PostPage key={foundPost.id} post={foundPost}/>)
                    }
                }
                } />
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