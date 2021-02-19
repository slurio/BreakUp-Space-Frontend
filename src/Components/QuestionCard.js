import React from 'react';

const QuestionCard = (props) => {

    const handleClick = (event) => {
        props.handleClick(event.target)
    }

    const renderAnswers = () => {
        let answers = props.answers.split('|')
        return answers.map(answer => <li id={answers.indexOf(answer) + 1} onClick={handleClick}>{answer}</li>)
    }

    return (
        <>
            <h3>{props.question}</h3>
            {renderAnswers()}
        </>
    )
}

export default QuestionCard;