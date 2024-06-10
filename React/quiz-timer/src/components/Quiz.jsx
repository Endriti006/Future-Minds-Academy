import { useState, useEffect } from 'react';
import QUESTIONS from '../assets/js/questions.js';

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleAnswer(selectedAnswer) {
        setUserAnswers((previousAnswers) => [...previousAnswers, selectedAnswer]);
    }

    const activeQuestion = QUESTIONS[activeQuestionIndex];
    const shuffledAnswers = shuffleArray(activeQuestion.answers);

    useEffect(() => {
        const timer = setTimeout(() => {
            setUserAnswers((previousAnswers) => [...previousAnswers, null]); 
        }, 3000);

        return () => clearTimeout(timer);
    }, [activeQuestionIndex]);

    return (
        <main>
            <div id="quiz">
                <div id="question">
                    <h2>{activeQuestion.text}</h2>
                    <ul id="answers">
                        {shuffledAnswers.map((answer) => (
                            <li key={answer} className="answer">
                                <button onClick={() => handleAnswer(answer)}>{answer}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
