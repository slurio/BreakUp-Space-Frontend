import React, {useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';
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

      const renderResuleHeader = () => {
          if (!props.result.subject) {
            return <Header>It seems you want a {props.result.tone} vibe...</Header>
          } else if (!props.result.tone) {
            return <Header>You {props.result.subject}...</Header>
          } else {
              return <Header>You {props.result.subject} and it seems you want a {props.result.tone} vibe...</Header>
          }
      }
    
    return (
        <>
        {renderResuleHeader()}
        <Message>{props.result.message}</Message>
        <ButtonContainer>
            <Button onClick={props.resetQuiz}>Try Again</Button> 
            <CopyButton text={props.result}
                onCopy={handleOpen}>
                <button>Copy Text!</button>
            </CopyButton>
        </ButtonContainer>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <h5 style={{color: 'white'}}>Copied!</h5>
        </Modal>       
        </>
    )
}

const msp = state => {
    return {
        messages: state.messages
    }
}

export default connect(msp, null)(ResultCard);

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    display: inline-block;
    white-space: nowrap;
    width: 150px;
    border-radius: 12px;
    border: #bfa0e2;
    font-weight: 600;
    color: #2a2a2a;
    background-color: #bfa0e2;
    font-size: 14px;
    margin-top: 20px;
    padding: 15px 36px;
    text-align: center;
    &:hover {
        cursor: pointer;
    }
`

const CopyButton = styled(CopyToClipboard)`
    display: inline-block;
    white-space: nowrap;
    width: 150px;
    border-radius: 12px;
    border: #bfa0e2;
    font-weight: 600;
    color: #2a2a2a;
    background-color: #bfa0e2;
    font-size: 14px;
    margin-top: 20px;
    padding: 15px 36px;
    text-align: center;
    &:hover {
        cursor: pointer;
    }
`

const Header = styled.h1`
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    margin-right: 25%;
    background-color: white;
    position: relative;
    font-weight: 600;
    font-size: 16px;
    &:before {
        content: "";
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: -7px;
        height: 20px;
        width: 20px;
        background: white;
        border-bottom-right-radius: 15px;
    }
    &:after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: -10px;
        width: 10px;
        height: 20px;
        background: #EAEAEA;
        border-bottom-right-radius: 10px;
      }
`

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
margin-bottom: 20px;
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
    background: #eaeaea;
    border-bottom-left-radius: 10px;
  }
`