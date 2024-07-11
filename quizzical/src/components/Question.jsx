import './Question.css'

export default function Question(props) {
    const answers = props.answers.map((answer, index) => (
            <div key={index}>
                <input
                    type="radio"
                    id={answer}
                    name="question"
                    value={answer}
                />
                <label htmlFor={answer}>{answer}</label>
            </div>
        )
    )

    return (
        <div>
            <h2>{props.question}</h2>
            <form>
                {answers}
            </form>
            <hr />
        </div>
    );
}