import { useState, useEffect } from 'react'
import './App.css'
import Question from './components/Question'

function App() {
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
      question={question.question}
      answers={question.incorrect_answers.concat(question.correct_answer)}
    />
  ))

  return (
    <>
      {questionElements}
    </>
  )
}

export default App