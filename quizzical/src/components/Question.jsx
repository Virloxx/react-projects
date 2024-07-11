import { useState } from 'react'
import './Question.css'

export default function Question(props) {
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    function handleClick(index) {
        setSelectedAnswer(index)
    }

    const answers = props.answers.map((answer) => (
            <button 
                onClick={() => handleClick(answer)}
                className={`answer-button ${selectedAnswer === answer ? "selected" : ""}`}
                key={answer}
            >
                {answer}
            </button>
        )
    )

    return (
        <div>
            <h2 className="question-title">{props.question}</h2>
            <div className="answers">
                {answers}
            </div>
            <hr />
        </div>
    );
}