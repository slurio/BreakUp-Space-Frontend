import React from 'react';
import styled from 'styled-components';

const QuestionCard = (props) => {

    const handleClick = (event) => {
        props.handleClick(event.target)
    }

    const renderAnswers = () => {
        let answers = props.answers.split('|')
        return answers.map(answer => <AnswerLi key={answer} id={answers.indexOf(answer) + 1} onClick={handleClick}>{answer}</AnswerLi>)
    }

    return (
        <>
            <h3>{props.question}</h3>
            <AnswerList>
                {renderAnswers()}
            </AnswerList>
        </>
    )
}

export default QuestionCard;

const AnswerList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
const AnswerLi = styled.li`
    &:hover {
        cursor: pointer;
    }
`