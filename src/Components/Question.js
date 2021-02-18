import React from 'react';

const Question = (props) => {

    const renderAnswers = () => {
        let answers = props.answers.split('|')
        return answers.map(answer => <li>{answer}</li>)
    }

    return (
        <>
            <h3>{props.question}</h3>
            {renderAnswers()}
        </>
    )
}

export default Question;