import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const ResultCard = (props) => {

    const renderResult = () => {  
        let selectedTone = '';
        for (let tone in props.messageTone) {
            if(selectedTone !== '' && props.messageTone[tone] > props.messageTone[selectedTone]) {
                selectedTone = tone;
            } else if (selectedTone === '') {
                selectedTone = tone;
            }
        }

        let message;

        if (props.topic === 'no connection' && props.messageSubject === 'made me feel uncomfortable') {
            message = props.messages.find(message =>  message.tone === props.messageTone && message.subject === props.messageSubject)
        } else if(!props.messageSubject) {
            message = props.messages.find(message => message.topic.theme === props.topic && message.tone === selectedTone)
        } else {
            message = props.messages.find(message => message.topic.theme === props.topic && message.tone === selectedTone && message.subject === props.messageSubject)
        }
        return <Message>{message.message}</Message>
    }

    
    const sendMessage = () => {

        let smsObj = {
            user_number: '+1' + '',
            message: 'This is a test'
        }
       
        fetch('http://localhost:3000/sms_messages/', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                accepts: "application/json"
            },
            body: JSON.stringify(smsObj)
        })
        .then(resp => resp.json())
        .then(result => console.log(result))
    }

    return (
        <>
            <h3>Done! Quiz Complete</h3>
            {renderResult()}
            <button onClick={props.resetQuiz}>Try Again</button> 
            <button onClick={sendMessage}>Send</button>       
        </>
    )
}

const msp = state => {
    return {
        messages: state.messages
    }
}

export default connect(msp, null)(ResultCard);

const Message = styled.div`
border-radius: 20px;
padding: 8px 15px;
margin-top: 5px;
margin-bottom: 5px;
display: inline-block;
color: white;
margin-left: 25%;
background: #bfa0e2;
background-attachment: fixed;
position: relative;

    &:hover {
        cursor: pointer;
    }

margin-bottom: 30px;
&:before{
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: -8px;
    height: 20px;
    width: 20px;
    background: #bfa0e2;
    background-attachment: fixed;
    border-bottom-left-radius: 15px;
  }
  &:after{
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: -10px;
    width: 10px;
    height: 20px;
    background: white;
    border-bottom-left-radius: 10px;
  }
`