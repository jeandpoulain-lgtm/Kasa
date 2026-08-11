import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-noir.png'
import '../styles/Header.css'

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="header-logo" />
            <nav className="header-nav">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header