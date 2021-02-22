import React from 'react';
import {connect} from 'react-redux';

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
        return <p>{message.message}</p>
    }

    return (
        <>
            <h3>Done! Quiz Complete</h3>
            {renderResult()}
            <button onClick={props.resetQuiz}>Try Again</button>        
        </>
    )
}

const msp = state => {
    return {
        messages: state.messages
    }
}

export default connect(msp, null)(ResultCard);