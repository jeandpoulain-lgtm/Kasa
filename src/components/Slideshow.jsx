import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'
import { useState } from 'react'
import '../styles/Slideshow.css' 

function Slideshow({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    // On vérifie s'il y a plus d'une image
    const hasMultipleImages = images && images.length > 1

    const nextSlide = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div className="slideshow-container">
            <img src={images[currentIndex]} alt={title} className="photo-card" />
            {hasMultipleImages && (
                <>
                    <img 
                        src={arrowLeft} 
                        alt="Flèche précédente" 
                        className="arrow arrow-left" 
                        onClick={prevSlide} 
                    />
                    <img 
                        src={arrowRight} 
                        alt="Flèche suivante" 
                        className="arrow arrow-right" 
                        onClick={nextSlide} 
                    />
                    <span className="slide-counter">
                        {currentIndex + 1} / {images.length}
                    </span>
                </>
            )}
        </div>
    )
}

export default Slideshow