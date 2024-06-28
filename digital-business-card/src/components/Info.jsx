import './Info.css';

export default function Info() {
    return (
        <div className="info">
            <img src="src/assets/Me.JPEG" alt="Picture of me" />
            <h1>Oskar Pankowski</h1>
            <h3>Student</h3>
            <p className="info--website">oskarpankowski.website</p>
            <button type="button">
                <img className="email--icon" src="src/assets/Email Icon.svg" alt="Email Icon"/>
                <div>Email</div>
            </button>
        </div>
    )
}