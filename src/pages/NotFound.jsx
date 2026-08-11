import { Link } from 'react-router-dom'
import '../styles/NotFound.css' 

function NotFound() {
    return (
        <main className="notfound-container">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="notfound-link">
                Retourner sur la page d'accueil
            </Link>
        </main>
    )
}

export default NotFound