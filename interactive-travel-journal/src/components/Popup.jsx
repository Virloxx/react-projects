import './Popup.css';
import closeIcon from '../assets/close-icon.svg'

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup--inner">
                <button className="popup--close" onClick={props.close}>
                    <img src={closeIcon} alt="Close Icon" className="close--icon" />
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}