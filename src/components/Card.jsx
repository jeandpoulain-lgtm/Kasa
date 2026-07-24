import { Link } from 'react-router-dom'
import "../styles/Card.css"

function Card( {image, title} ) {
    return (
        <div className="card-container">
            <img src={image} alt= {title} className="photo-card"/>
            <h2> {title} </h2>
        </div>
    )
}

export default Card