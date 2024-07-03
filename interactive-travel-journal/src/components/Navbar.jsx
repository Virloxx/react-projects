import './Navbar.css';
import worldIcon from '../assets/world-icon.svg'
import plusIcon from '../assets/plus-icon.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar--logo">
                <img src={worldIcon} alt="World Icon" className="world-icon"/>
                <h1 className="navbar--title">my travel journal.</h1>
            </div>
            <button className="navbar--button" type="button">
                <img src={plusIcon} alt="Plus Icon" className="plus-icon"/>
            </button>
        </nav>
    )
}