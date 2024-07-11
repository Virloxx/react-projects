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
            setAllQuestions(data.results)
        }
        getQuestions()
    }, [])
  
    const questionElements = allQuestions.map((question, index) => (
        <Question
            key={index}
            question={decode(question.question)}
            answers={decode(question.incorrect_answers).concat(decode(question.correct_answer))}
        />
    ))

    return (
        <>
            {questionElements}
        </>
    )
}