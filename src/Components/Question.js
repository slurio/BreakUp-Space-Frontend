import React from 'react';

const Question = (props) => {

    const handleClick = (event) => {
        props.handleClick(event.target.innerText)
    }

    const renderAnswers = () => {
        let answers = props.answers.split('|')
        return answers.map(answer => <li onClick={handleClick}>{answer}</li>)
    }

    return (
        <>
            <h3>{props.question}</h3>
            {renderAnswers()}
        </>
    )
}

export default Question;