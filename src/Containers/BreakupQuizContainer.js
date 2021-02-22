import React, {useState} from 'react';
import {connect} from 'react-redux';
import Quiz from '../Components/Quiz';

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
        <div>
            {startQuiz ?
            <>
                <h3>Why is it time to say goodbye?</h3>
                <ul onClick={handleClick}>
                    <li>Not ready to date</li>
                    <li>Bad timing</li>
                    <li>Friendzone</li>
                    <li>No connection</li>
                </ul>
            </>
            :
            <Quiz resetQuiz={resetQuiz} topic={topic} questions={questions}/>}
        </div>
    )
}

const msp = state => {
    return {
        topics: state.topics,
    }
}

export default connect(msp, null)(BreakupQuizContainer);
