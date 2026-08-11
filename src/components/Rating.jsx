import starRed from '../assets/starRed.png'   
import starGrey from '../assets/starGrey.png' 

import '../styles/Rating.css'

function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="rating-container">
            {stars.map((level) => (
                <img
                    key={level}
                    src={level <= parseInt(rating) ? starRed : starGrey}
                    alt={level <= parseInt(rating) ? "Étoile rouge" : "Étoile grise"}
                    className="star-icon"
                />
            ))}
        </div>
    )
}

export default Rating