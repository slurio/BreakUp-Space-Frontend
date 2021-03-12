import React from 'react';
import { connect } from 'react-redux';
import { updateVote, deletePost } from '../Redux/actions';
import styled from 'styled-components';
import ChatSvg from '../asset/chat.svg';
import FlagSvg from '../asset/flag.svg';

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
            {console.log(props.info)}
            <ButtonContainer>
                <PostButton style={{ fontSize: "20pt", marginBottom: "25%" }} name="up" onClick={clickHandle}>👍</PostButton>
                <span style={{ fontWeight: 'bold', fontSize: "25pt" }}>{props.info.up_votes}</span>
                <PostButton style={{ fontSize: "20pt", marginTop: "25%" }} name="down" onClick={clickHandle}>👎</PostButton>
            </ButtonContainer>
            <PostContainer>
                <TopContainer>
                    <span style={{ color: 'black', fontSize: '14px', marginLeft: '5px' }}>posted by {props.info.user.username} on {props.info.date}</span>
                    <PostButton name="delete" onClick={clickHandle}>X</PostButton>
                </TopContainer>
                <Content>{props.info.content}</Content>
                <Image alt='text' src={props.info.image} />
                <BottomContainer>
                    <ChatIcon src={ChatSvg} alt='chat icon' />
                    <Span>{props.info.comments.length} Comments</Span>
                    <FlagIcon src={FlagSvg} alt='flag icon' />
                    <Span>Report</Span>
                </BottomContainer>
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

const Span = styled.span`
    display: flex;
    width: 110px;
    align-items: center;
    margin-left: 7px;
    font-weight: bold;
`

const ChatIcon = styled.img`   
`

const FlagIcon = styled.img`
    margin-left: 5px;
`