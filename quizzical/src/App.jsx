import { useState } from 'react'
import StartScreen from './components/StartScreen'
import Quiz from './components/Quiz'
import './App.css'

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