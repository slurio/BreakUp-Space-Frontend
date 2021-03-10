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
                <PostButton style={{fontSize: "20pt", marginBottom: "25%"}} name="up" onClick={clickHandle}>👍</PostButton>
                <span style={{fontWeight: 'bold', fontSize: "25pt"}}>{props.info.up_votes}</span>
                <PostButton style={{fontSize: "20pt", marginTop: "25%"}} name="down" onClick={clickHandle}>👎</PostButton>
            </ButtonContainer>
            {/* <NavLink to={`/posts/${props.info.id}`}> */}
            <PostContainer>
                <TopContainer>
                    <span style={{color: 'black', fontSize: '14px', marginLeft: '5px'}}>posted by {props.info.user.username} {props.info.date}</span>
                    <PostButton name="delete" onClick={clickHandle}>X</PostButton>
                </TopContainer>
                    {/* <h1>{props.info.title}</h1> */}
                    <Content>{props.info.content}</Content>
                <Image alt='text' src='https://i.pinimg.com/originals/44/d6/65/44d6651fdfac315e15a000b37a80ef83.jpg'/>
                {/* <span>{props.info.content}</span> */}
                <BottomContainer>
                    <span style={{marginLeft: '5px', color: 'black'}}>{props.info.comments.length} Comments</span>
                    <span style={{marginLeft: '10px', color: 'black'}}>Report</span>
                </BottomContainer>
            </PostContainer> 
            {/* </NavLink> */}
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
    border: solid red; 
    height: 50%;
    width: 100%;
    justify-content: space-evenly;
    text-decoration: none;
    margin-bottom: 50px;
    padding-top: 2%;
    padding-bottom: 2%;
`

const PostContainer = styled.div`
    float: right;
    display: flex;
    flex-direction: column;
    text-align: left;
    border: solid green;
    width: auto;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: solid blue;
    width: 10%;
    top: 0%;
`
const PostButton = styled.button`
    postion: static;
    justify-content: center;
    border: none;
    &:hover {
        cursor: pointer;
    }
`

const Image = styled.img`
    height: 70%;
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const BottomContainer = styled.div`
    display: flex;
    font-size: 14px;
`

const Content = styled.h3`
    margin-bottom: 10px;
    margin-left: 5px;
    color: black;
`