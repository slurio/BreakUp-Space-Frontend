import React, {useState} from 'react';

const Quiz = () => {
    const [startQuiz, setStartQuiz] = useState(true);

    const handleClick = () => {
        setStartQuiz(false);
    }

    return (
        <div>
            {startQuiz ?
            <>
                <h3>Why is it time to say goodbye?</h3>
                <ul onClick={handleClick}>
                    <li>Not ready to date (theme: Not Ready For A Relationship Right Now)</li>
                    <li>Bad timing (theme: Too Busy To Date)</li>
                    <li>Friendzone (theme: Getting A Friendship vibe)</li>
                    <li>No connection (theme: Not Feeling A Connection)</li>
                </ul>
            </>
            :
            <h3>Questions Start From Backend</h3>}
        </div>
    )
}

export default Quiz;