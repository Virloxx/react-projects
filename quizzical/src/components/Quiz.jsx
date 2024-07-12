import { useState, useEffect } from 'react'
import { decode } from 'html-entities';
import Question from './Question'
import './Quiz.css'

export default function Quiz() {
    const [allQuestions, setAllQuestions] = useState([])
    const [checking, setChecking] = useState(false)

    useEffect(() => {
        async function getQuestions() {
            const response = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy")
            const data = await response.json()
            const decodedData = data.results.map(question => {
                return {
                    question: decode(question.question),
                    incorrect_answers: question.incorrect_answers.map(answer => decode(answer)),
                    correct_answer: decode(question.correct_answer)
                }
            })
            setAllQuestions(decodedData)
        }
        getQuestions()
    }, [])
  
    const questionElements = allQuestions.map((question, index) => (
        <Question
            key={index}
            question={question.question}
            correct_answer={question.correct_answer}
            incorrect_answers={question.incorrect_answers}
            checking={checking}
        />
    ))

    function toggleCheck() {
        setChecking(prevState =>!prevState)
    }

    return (
        <div className="quiz-container">
            {questionElements}
            <button onClick={toggleCheck} className="check-answers-button" type="button">
                Check answers
            </button>
        </div>
    )
}