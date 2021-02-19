import React, {useState} from 'react';
import {connect} from 'react-redux';
import QuestionCard from '../Components/QuestionCard';
import ResultCard from '../Components/ResultCard';

const BreakupQuizContainer = (props) => {
    const [startQuiz, setStartQuiz] = useState(true);
    const [topic, setTopic] = useState('')
    const [questions, setQuestions] = useState('');
    const [count, setCount] = useState(0);
    const [messageSubject, setMessageSubject] = useState('');
    const [messageTone, setMessageTone] = useState({'casual': 0, 'friendly': 0, 'direct': 0});

    const resetQuiz = () => {
        setStartQuiz(true);
        setCount(0);
        setMessageTone({'casual': 0, 'friendly': 0, 'direct': 0});
    }

    const handleClick = (event) => {
        setStartQuiz(false);
        let selectedTopic = event.target.innerText.toLowerCase();
        let topicQuestions = props.topics.find(topic => topic.theme === selectedTopic);
        setTopic(topicQuestions.theme);
        setQuestions(topicQuestions.quizzes);
    }

    const nextQuestion = (answer) => {
        if(count === 0 && topic !== 'friendzone') {
            setMessageSubject(answer.innerText.toLowerCase());
            setCount(count+1)
            renderQuestions()
        } else if (messageSubject === 'made me feel uncomfortable' && count === 1) {
            setMessageTone(answer.innerText.toLowerCase())
            setCount(questions.length)
            renderQuestions()  
        // } else if (topic === 'no connection') {
        //     setMessageTone(answer.innerText.toLowerCase())
        //     setCount(count+1)
        //     renderQuestions()
        } else {
            switch(parseInt(answer.id)) {
                case 1:
                    setMessageTone({...messageTone, casual: messageTone['casual']+1})
                    break;
                case 2:
                    setMessageTone({...messageTone, friendly: messageTone['friendly']+1})
                    break;
                case 3:
                    setMessageTone({...messageTone, direct: messageTone['direct']+1})
                    break;
                default:
                    break;
            }
            setCount(count+1)
            renderQuestions()
        }
    }

    const renderMessage = () => {  
        // which tone was most clicked / need case if all were clicked once
        let selectedTone = '';
        for (let tone in messageTone) {
            if(selectedTone !== '' && messageTone[tone] > messageTone[selectedTone]) {
                selectedTone = tone;
            } else if (selectedTone === '') {
                selectedTone = tone;
            }
        }

        let message;

        if (topic === 'no connection' && messageSubject === 'made me feel uncomfortable') {
            message = props.messages.find(message =>  message.tone === messageTone && message.subject === messageSubject)
        } else if(!messageSubject) {
            message = props.messages.find(message => message.topic.theme === topic && message.tone === selectedTone)
        } else {
            message = props.messages.find(message => message.topic.theme === topic && message.tone === selectedTone && message.subject === messageSubject)
        }

        return <ResultCard message={message}/>
    }

    const renderQuestions = () => {
        if (messageSubject === 'just not feeling it' && count === 1) {
            setCount(count + 1)
            let selectedQuestion = questions[count];
            return  <QuestionCard handleClick={nextQuestion} key={selectedQuestion.id} question={selectedQuestion.question} answers={selectedQuestion.answers}/>
        } else if(count < questions.length) {
            if (questions) {
                let selectedQuestion = questions[count]
                return  <QuestionCard handleClick={nextQuestion} key={selectedQuestion.id} question={selectedQuestion.question} answers={selectedQuestion.answers}/>
            }
        } else {
            return (
                <>
                    <h3>Done! Quiz Complete</h3>
                    {renderMessage()}
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
        topics: state.topics,
        messages: state.messages
    }
}

export default connect(msp, null)(BreakupQuizContainer);