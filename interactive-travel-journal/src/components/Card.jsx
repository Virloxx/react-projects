import './Card.css';
import trashIcon from '../assets/trash-icon.svg'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt={`${props.title} Image`} className="card--image" />
            <div className="card--text">
                <div className="location">
                    <img src="src/assets/pin-icon.svg" alt="Pin Icon" className="pin--icon"/>
                    <h2 className="country">{props.location.toUpperCase()}</h2>
                    <a href={props.googleMapsUrl}
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="location--link">View on Google Maps
                    </a>
                    <button className="delete--button" type="button">
                        <img src={trashIcon} alt="Trash Icon" className="trash-icon"/>
                    </button>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div> 
        </div>
    )
}