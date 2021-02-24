import React, {useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const ResultCard = (props) => {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const [area, setArea] = useState('');
    const [middle, setMiddle] = useState('');
    const [end, setEnd] = useState('');
    // const [text, setText] = useState('');

    

    // const renderResult = () => {  
    //     let selectedTone = '';
    //     for (let tone in props.messageTone) {
    //         if(selectedTone !== '' && props.messageTone[tone] > props.messageTone[selectedTone]) {
    //             selectedTone = tone;
    //         } else if (selectedTone === '') {
    //             selectedTone = tone;
    //         }
    //     }

    //     let foundMessage;

    //     if (props.topic === 'no connection' && props.messageSubject === 'made me feel uncomfortable') {
    //         foundMessage = props.messages.find(message =>  message.tone === props.messageTone && message.subject === props.messageSubject);
    //     } else if(!props.messageSubject) {
    //         foundMessage = props.messages.find(message => message.topic.theme === props.topic && message.tone === selectedTone)
    //     } else {
    //         foundMessage = props.messages.find(message => message.topic.theme === props.topic && message.tone === selectedTone && message.subject === props.messageSubject)
    //     }

    //     // setText(foundMessage.message);

    //     return <Message>{foundMessage.message}</Message>
    // }

    
    const sendMessage = () => {

        let smsObj = {
            user_number: '+1' + area + middle + end,
            message: 'test'
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

    const changeHandle = (event) => {
        if (event.target.name === "area") {
            setArea(event.target.value);
        } else if (event.target.name === "middle") {
            setMiddle(event.target.value);
        } else if (event.target.name === "end") {
            setEnd(event.target.value);
        }
    }

    const phoneNumber = (
            <form style={modalStyle} className={classes.paper} onSubmit={sendMessage}>
                <label>Please enter the phone number that you would like this message sent to: </label>
                <span>(</span>
                <input name="area" type="number" onChange={changeHandle} max="3" min="3" />
                <span>)</span>
                <input name="middle" type="number" onChange={changeHandle} max="3" min="3" />
                <span> - </span>
                <input name="end" type="number" onChange={changeHandle} max="3" min="3" />
                <button>Submit</button>
            </form>   
        )

    return (
        <>
            <h3>Done! Quiz Complete</h3>
            {/* {renderResult()} */}
            <Message>{props.result}</Message>
            <button onClick={props.resetQuiz}>Try Again</button> 
            {/* <button type="button" onClick={handleOpen}>Send Text!</button> 
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {phoneNumber}
            </Modal>        */}
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