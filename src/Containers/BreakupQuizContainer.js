import React, {useState} from 'react';
import {connect} from 'react-redux';
import QuestionCard from '../Components/QuestionCard';

const BreakupQuizContainer = (props) => {
    const [startQuiz, setStartQuiz] = useState(true);
    const [questions, setQuestions] = useState('');
    const [count, setCount] = useState(0);

    const resetQuiz = () => {
        setStartQuiz(true);
        setCount(0)
    }

    const handleClick = (event) => {
        setStartQuiz(false);
        let selectedTopic = event.target.innerText.toLowerCase();
        let topicQuestions = props.topics.find(topic => topic.theme === selectedTopic);
        setQuestions(topicQuestions.quizzes);
    }

    const nextQuestion = (answer) => {
        console.log(answer)
        setCount(count+1)
        renderQuestions()
    }

    const renderQuestions = () => {
        let total = questions.length;

        if(count < total) {
            if (questions) {
                let selectedQuestion = questions[count]
                return  <QuestionCard handleClick={nextQuestion} key={selectedQuestion.id} question={selectedQuestion.question} answers={selectedQuestion.answers}/>
            }
        } else {
            //here will need to render text result
            return (
                <>
                    <h3>Done! Quiz Complete</h3>
                    <button onClick={resetQuiz}>Try Again</button>
                </>
            )
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

export default connect(msp, null)(BreakupQuizContainer);