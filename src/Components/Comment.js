import React from 'react';
import {connect} from 'react-redux';
import {updateCommentVote, deleteComment} from '../Redux/actions.js'

const Comment = props => {
    
    const clickHandle = event => {
        if (event.target.name === 'up') {
            let upVotes = {
                up_votes: props.comment.up_votes + 1
            }
            props.upVoteHandle(upVotes, props.comment.id)
        } else if (event.target.name === 'down') {
            let upVotes = {
                up_votes: props.comment.up_votes - 1
            }
            props.upVoteHandle(upVotes, props.comment.id)
        } else if (event.target.name === 'delete') {
            props.removeComment(props.comment.id)
        }
    }


    return(
        <div>
            <p>Comment: {props.comment.content}</p>
            <p>Date: {props.comment.date}</p>
            <p>Time: {props.comment.time}</p>
            <p>Username: {props.comment.user.username}</p>
            <p>Up-Votes: {props.comment.up_votes}</p>
            <button name="up" onClick={clickHandle}>👍</button>
            <button name="down" onClick={clickHandle}>👎</button>
            <button name="delete" onClick={clickHandle}>X</button>
        </div>
    )
}

const mdp = dispatch => {
    return {
        upVoteHandle: (upVoteObj, commentId) => dispatch(updateCommentVote(upVoteObj, commentId)),
        removeComment: (commentId) => dispatch(deleteComment(commentId))
    }
}

export default connect(null, mdp)(Comment);