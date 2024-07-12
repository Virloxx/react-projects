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
                    correct_answer: decode(question.correct_answer),
                    all_answers: randomizedAnswers(question.incorrect_answers, question.correct_answer)
                }
            })
            setAllQuestions(decodedData)
        }
        getQuestions()
    }, [])

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