import { Link } from 'react-router-dom'
import '../styles/Card.css'

function Card({ image, title, id }) {
    return (
        <Link to={`/logement/${id}`} className="card-container">
            <img src={image} alt={title} className="photo-card" />
            <h2>{title}</h2>
        </Link>
    )
}

export default Card