import { useState, useEffect } from 'react'
import { decode } from 'html-entities';
import Question from './Question'
import './Quiz.css'

export default function Quiz() {
    const [allQuestions, setAllQuestions] = useState([])

    useEffect(() => {
        async function getQuestions() {
            const response = await fetch("https://opentdb.com/api.php?amount=5")
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

    // allQuestions is an array of OBJECTS; each object has a question,
    // an array of incorrect answers, and a correct answer
  
    const questionElements = allQuestions.map((question, index) => (
        <Question
            key={index}
            question={question.question}
            answers={question.incorrect_answers.concat(question.correct_answer)}
        />
    ))

    return (
        <div className="quiz-container">
            {questionElements}
            <button className="check-answers-button" type="button">
                Check answers
            </button>
        </div>
    )
}