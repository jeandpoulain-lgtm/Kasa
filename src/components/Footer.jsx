import logo from '../assets/logo-blanc.png'
import "../styles/Footer.css"

function Footer() {
    return (
        <footer className="footer-container">
            <img src={logo} alt="logo-kasa" className="footer-logo"/>
            <p className="footer-title" >© 2020 Kasa. All rights reserved </p>
        </footer>
    )
}

export default Footer