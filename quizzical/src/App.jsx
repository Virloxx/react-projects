import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import StartScreen from './components/StartScreen'

function App() {
  const [startQuiz, setStartQuiz] = useState(false)

  function toggleStart() {
    setStartQuiz(prevState => !prevState)
  }

  return (
    <>
      {startQuiz ? <Quiz /> : <StartScreen toggleStart={toggleStart} />}
    </>
  )
}

export default App