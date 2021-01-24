import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateVote, deletePost} from '../Redux/actions';
import styled from 'styled-components';

const PostCard = (props) => {

    const clickHandle = (event) => {
        if (event.target.name === "up") {
            let upVote = {
                up_votes: props.info.up_votes + 1
            }
            props.updateUpVote(upVote, props.info.id);
        } else if (event.target.name === "down") {
            let downVote = {
                up_votes: props.info.up_votes - 1
            }
            props.updateUpVote(downVote, props.info.id);
        } else if (event.target.name === "delete") {
            props.deletePost(props.info.id);
        }
    }

    return (
        <Container>
            <ButtonContainer>
                <PostButton name="up" onClick={clickHandle}>👍</PostButton>
                <PostButton name="down" onClick={clickHandle}>👎</PostButton>
                <PostButton name="delete" onClick={clickHandle}>X</PostButton>
            </ButtonContainer>
            <PostContainer>
                <span>posted: {props.info.date}</span>
                <NavLink to={`/posts/${props.info.id}`}>
                    <h1>{props.info.title}</h1>
                </NavLink>
                <span>{props.info.content}</span>
                <span>Username: {props.info.user.username}</span>
                <span>Up-Votes: {props.info.up_votes}</span>
            </PostContainer> 
        </Container>    
    )
}

const mdp = dispatch => {
    return {
        updateUpVote: (upVote, postId) => dispatch(updateVote(upVote, postId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default connect(null, mdp)(PostCard);

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border-style: solid; 
    height: 50%;
    justify-content: center;
`

const PostContainer = styled.div`
    float: right;
    display: flex;
    flex-direction: column;
    text-align: left;
    border-style: solid;
    width: auto;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-style: solid;
    width: 35%;
    top: 0%;
`
const PostButton = styled.button`
    postion: static;
    justify-content: center;
    width: 50%;
`