import React, {useState} from 'react';
import {connect} from 'react-redux';
import QuestionCard from '../Components/QuestionCard';
import ResultCard from '../Components/ResultCard';

const Quiz = (props) => {
    const [count, setCount] = useState(0);
    const [messageSubject, setMessageSubject] = useState('');
    const [messageTone, setMessageTone] = useState({'casual': 0, 'friendly': 0, 'direct': 0});
    
    const resetQuiz = () => {
        props.resetQuiz();
        setCount(0);
        setMessageTone({'casual': 0, 'friendly': 0, 'direct': 0});
    }

    const nextQuestion = (answer) => {
        if(count === 0 && props.topic !== 'friendzone') {
            setMessageSubject(answer.innerText.toLowerCase());
            setCount(count+1)
            renderQuestions()
        } else if (messageSubject === 'made me feel uncomfortable' && count === 1) {
            setMessageTone(answer.innerText.toLowerCase())
            setCount(props.questions.length)
            renderQuestions()  
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

    const renderQuestions = () => {
        if (messageSubject === 'just not feeling it' && count === 1) {
            setCount(count + 1)
            let selectedQuestion = props.questions[count];
            return  <QuestionCard handleClick={nextQuestion} key={selectedQuestion.id} question={selectedQuestion.question} answers={selectedQuestion.answers}/>
        } else if(count < props.questions.length) {
            if (props.questions) {
                let selectedQuestion = props.questions[count]
                return  <QuestionCard handleClick={nextQuestion} key={selectedQuestion.id} question={selectedQuestion.question} answers={selectedQuestion.answers}/>
            }
        } else {
            return (
                <ResultCard resetQuiz={resetQuiz} topic={props.topic} messageTone={messageTone} messageSubject={messageSubject}/>
            )
        }
    }

    return (
        renderQuestions()
    )
}

export default Quiz;