import { useState } from 'react'
import './Question.css'

export default function Question(props) {
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    function handleClick(index) {
        setSelectedAnswer(index)
    }

    const styles = (answer) => {
        if (props.checking) {
            if (answer == props.correct_answer) {
                return {
                    backgroundColor: "#94D7A2",
                    border: "1px solid transparent"
                }
            }
            else if (selectedAnswer === answer && answer != props.correct_answer) {
                return {
                    backgroundColor: "#F8BCBC",
                    border: "1px solid transparent"
                }
            }
        }
        if (selectedAnswer === answer) {
            return {
                backgroundColor: "#d6dbf5", 
                border: "1px solid transparent"
            }
        } 
        else {
            return { 
                backgroundColor: "#f5f7fb ",
                border: "1px solid #4D5B9E"
            }
        }
    }

    const answers = props.all_answers.map((answer) => (
            <button 
                onClick={() => handleClick(answer)}
                className="answer-button"
                style={styles(answer)}
                key={answer}
                disabled={props.checking}
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