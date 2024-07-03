import './Navbar.css';
import worldIcon from '../assets/world-icon.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={worldIcon} alt="World Icon" className="world-icon"/>
            <h1 className="navbar--title">my travel journal.</h1>
        </nav>
    )
}