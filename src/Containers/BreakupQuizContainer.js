import React, {useState} from 'react';
import {connect} from 'react-redux';
import Quiz from '../Components/Quiz';
import styled from 'styled-components';

const BreakupQuizContainer = (props) => {
    const [startQuiz, setStartQuiz] = useState(true);
    const [topic, setTopic] = useState('')
    const [questions, setQuestions] = useState('');

    const resetQuiz = () => {
        setStartQuiz(true);
    }

    const handleClick = (event) => {
        setStartQuiz(false);
        let selectedTopic = event.target.innerText.toLowerCase();
        let topicQuestions = props.topics.find(topic => topic.theme === selectedTopic);
        setTopic(topicQuestions.theme);
        setQuestions(topicQuestions.quizzes);
    }

    return (
        <QuizContainer>
            <ScreenContainer>
                {startQuiz ?
                <div>
                    <h3>Why is it time to say goodbye?</h3>
                    <TopicList onClick={handleClick}>
                        <TopicLi>Not ready to date</TopicLi>
                        <TopicLi>Bad timing</TopicLi>
                        <TopicLi>Friendzone</TopicLi>
                        <TopicLi>No connection</TopicLi>
                    </TopicList>
                </div>
                :
                <Quiz resetQuiz={resetQuiz} topic={topic} questions={questions}/>}
            </ScreenContainer>
        </QuizContainer>
    )
}

const msp = state => {
    return {
        topics: state.topics,
    }
}

export default connect(msp, null)(BreakupQuizContainer);

const QuizContainer = styled.div`
    font-family: helvetica;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ScreenContainer = styled.div`
    width: 450px;
    border: solid 1px grey;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-top: 20px;
`

const TopicList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
const TopicLi = styled.li`
    &:hover {
        cursor: pointer;
    }
`