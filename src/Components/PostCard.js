import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateVote} from '../Redux/actions';

const PostCard = (props) => {

    const clickHandle = (event) => {
        if (event.target.name === "up") {
            let upVote = {
                up_votes: props.info.up_votes + 1
            }
            props.updateUpVote(upVote, props.info.id)
        } else if (event.target.name === "down") {
            let downVote = {
                up_votes: props.info.up_votes - 1
            }
            props.updateUpVote(downVote, props.info.id)
        }
    }

    return (
        <div>
            <NavLink to={`/posts/${props.info.id}`}>
                <h1>Title: {props.info.title}</h1>
            </NavLink>
            <p>Content: {props.info.content}</p>
            <p>Date: {props.info.date}</p>
            <p>Username: {props.info.user.username}</p>
            <p>Up-Votes: {props.info.up_votes}</p>
            <button name="up" onClick={clickHandle}>👍</button>
            <button name="down" onClick={clickHandle}>👎</button>
        </div>
    )
}

const mdp = dispatch => {
    return {
        updateUpVote: (upVote, postId) => dispatch(updateVote(upVote, postId))
    }
}

export default connect(null, mdp)(PostCard);