import { useState, useEffect } from 'react'
import { decode } from 'html-entities';
import Question from './Question'
import './Quiz.css'

export default function Quiz() {
    const [allQuestions, setAllQuestions] = useState([])
    const [quizState, setQuizState] = useState({checking: false, round: 0, points: 0})
    const [selectedAnswers, setSelectedAnswers] = useState({})

    useEffect(() => {
        async function getQuestions() {
            const response = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy")
            const data = await response.json()
            const decodedData = data.results.map(question => {
                const decodedIncorrectAnswers = question.incorrect_answers.map(answer => decode(answer));
                const decodedCorrectAnswer = decode(question.correct_answer);
                return {
                    question: decode(question.question),
                    incorrectAnswers: decodedIncorrectAnswers,
                    correctAnswer: decodedCorrectAnswer,
                    allAnswers: randomizedAnswers(decodedIncorrectAnswers, decodedCorrectAnswer)
                }
            })
            setAllQuestions(decodedData)
        }
        getQuestions()
    }, [quizState.round])
    
    function randomizedAnswers(incorrectAnswers, correctAnswer) {
        const randomizedAnswers = [...incorrectAnswers];
        const randomIndex = Math.floor(Math.random() * (randomizedAnswers.length + 1));
        randomizedAnswers.splice(randomIndex, 0, correctAnswer);
        return randomizedAnswers;
    }
    
    const questionElements = allQuestions.map((question, index) => (
        <Question
            key={index}
            question={question.question}
            correctAnswer={question.correctAnswer}
            allAnswers={question.allAnswers}
            checking={quizState.checking}
            selectedAnswer={selectedAnswers[index]}
            setSelectedAnswer={(answer) => setSelectedAnswers(prevState => ({ ...prevState, [index]: answer }))}
        />
    ))

    function toggleCheck() {
        if (!quizState.checking) {
            let points = 0
            allQuestions.forEach((question, index) => {
                if (selectedAnswers[index] === question.correctAnswer) {
                    points += 1
                }
            })
            setQuizState(prevState => ({
                ...prevState,
                checking: true,
                points: points
            }))
        } else {
            restartQuiz()
        }
    }
    
    function restartQuiz() {
        setQuizState(prevState => ({
            checking: false, 
            round: prevState.round + 1,
            points: 0
        }))
        setSelectedAnswers({})
    }

    return (
        <div className="quiz-container">
            {questionElements}
            <div className="quiz-bottom">
                {quizState.checking && <h3 className="quiz-score">
                    You scored {`${quizState.points ?? 0}/${allQuestions.length}`} correct answers
                </h3>}
                <button 
                    onClick={toggleCheck} 
                    className="check-answers-button" 
                    type="button"
                >
                    {quizState.checking ? "Play again" : "Check answers"}
                </button>
            </div>
        </div>
    )
}