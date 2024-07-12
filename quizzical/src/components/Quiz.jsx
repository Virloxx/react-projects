import { useState, useEffect } from 'react'
import { decode } from 'html-entities';
import Question from './Question'
import './Quiz.css'

export default function Quiz() {
    const [allQuestions, setAllQuestions] = useState([])
    const [quizState, setQuizState] = useState({checking: false, round: 0, points: 0})

    useEffect(() => {
        async function getQuestions() {
            const response = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy")
            const data = await response.json()
            const decodedData = data.results.map(question => {
                return {
                    question: decode(question.question),
                    incorrect_answers: question.incorrect_answers.map(answer => decode(answer)),
                    correct_answer: decode(question.correct_answer),
                    all_answers: randomizedAnswers(question.incorrect_answers, question.correct_answer)
                }
            })
            setAllQuestions(decodedData)
        }
        getQuestions()
    }, [quizState.round])

    function randomizedAnswers(incorrect_answers, correct_answer) {
        const decodedIncorrectAnswers = incorrect_answers.map(answer => decode(answer));
        const decodedCorrectAnswer = decode(correct_answer);
        const allAnswers = [...decodedIncorrectAnswers];
        const randomIndex = Math.floor(Math.random() * (allAnswers.length + 1));
        allAnswers.splice(randomIndex, 0, decodedCorrectAnswer);
        return allAnswers;
    }
  
    const questionElements = allQuestions.map((question) => (
        <Question
            key={question.question}
            question={question.question}
            correct_answer={question.correct_answer}
            all_answers={question.all_answers}
            checking={quizState.checking}
        />
    ))

    function toggleCheck() {
        setQuizState(prevState => ({
            ...prevState, 
            checking: !prevState.checking 
        }));
    }

    function restartQuiz() {
        setQuizState(prevState => ({
            checking: !prevState.checking, 
            round: prevState.round + 1
        }))
    }

    return (
        <div className="quiz-container">
            {questionElements}
            <div className="quiz-bottom">
                {quizState.checking && <h3 className="quiz-score">You scored X correct answers</h3>}
                <button 
                    onClick={() => quizState.checking ? restartQuiz() : toggleCheck()} 
                    className="check-answers-button" 
                    type="button"
                >
                    {quizState.checking ? "Play again" : "Check answers"}
                </button>
            </div>
        </div>
    )
}