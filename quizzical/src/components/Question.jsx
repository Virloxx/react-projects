import './Question.css'

export default function Question(props) {

    function handleClick(answer) {
        props.setSelectedAnswer(answer)
    }

    const styles = (answer) => {
        if (props.checking) {
            if (answer === props.correctAnswer) {
                return {
                    backgroundColor: "#94D7A2",
                    border: "1px solid transparent"
                }
            }
            else if (props.selectedAnswer === answer && answer !== props.correctAnswer) {
                return {
                    backgroundColor: "#F8BCBC",
                    border: "1px solid transparent"
                }
            }
        }
        if (props.selectedAnswer === answer) {
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

    const answers = props.allAnswers.map((answer, index) => (
        <button 
            onClick={() => handleClick(answer)}
            className="answer-button"
            style={styles(answer)}
            key={index}
            disabled={props.checking}
        >
            {answer}
        </button>
    ))

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