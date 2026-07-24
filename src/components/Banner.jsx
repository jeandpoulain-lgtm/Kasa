import { Link } from 'react-router-dom'

function Banner( {image, text} ) {
    return (
        <div className='banner-container'>
            <img src={image} alt="Bannièrre" className="banner-img"/>
            { text && <h1 className="Banner-title"> </h1>} {/* condition si text exist */}
        </div>
    )
}

export default Banner