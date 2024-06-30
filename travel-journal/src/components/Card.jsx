import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt={`${props.title} Image`} className="card--image" />
            <div className="location">
                <img src="src/assets/pin-icon.svg" alt="Pin Icon" />
                <h2>{props.location.toUpperCase()}</h2>
                <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <p className="card--date">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>        
        </div>
    )
}