import { Link } from 'react-router-dom'
import logo from '../assets/logo-noir.png'
import "../styles/Header.css"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo-Kasa" className="header-logo"/>
            <nav className="header-nav">
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
}

export default Header