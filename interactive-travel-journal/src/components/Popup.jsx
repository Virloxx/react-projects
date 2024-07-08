import './Popup.css';

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup--inner">
                <button className="popup--close" onClick={props.close}>X</button>
                {props.children}
            </div>
        </div>
    ) : "";
}