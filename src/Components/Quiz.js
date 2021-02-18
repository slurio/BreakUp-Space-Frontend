import React, {useState} from 'react';
import {connect} from 'react-redux';
import Question from './Question';

const Quiz = (props) => {
    const [startQuiz, setStartQuiz] = useState(true);
    const [questions, setQuestions] = useState('');

    const handleClick = (event) => {
        setStartQuiz(false);
        let selectedTopic = event.target.innerText.toLowerCase();
        let topicQuestions = props.topics.find(topic => topic.theme === selectedTopic);
        setQuestions(topicQuestions.quizzes);
    }

    const renderQuestions = () => {
        if (questions) {
            return questions.map(question => <Question key={question.id} question={question.question} answers={question.answers}/>)
        }
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
            renderQuestions()}
        </div>
    )
}

const msp = state => {
    return {
        topics: state.topics
    }
}

export default connect(msp, null)(Quiz);