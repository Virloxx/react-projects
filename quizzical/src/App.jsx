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
    <div className="wrapper">
      {startQuiz ? <Quiz /> : <StartScreen toggleStart={toggleStart} />}
    </div>
  )
}

export default App