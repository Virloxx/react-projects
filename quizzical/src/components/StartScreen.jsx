import './StartScreen.css'

export default function StartScreen(props) {
    return (
        <div className="start-screen">
            <h1 className="start-screen-title">Quizzical</h1>
            <p className="start-screen-description">A quiz app that uses the Open Trivia DB API.</p>
            <button className="start-screen-button" type="button" onClick={props.toggleStart}>Start quiz</button>
        </div>
    )
}