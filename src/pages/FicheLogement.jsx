import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import '../styles/FicheLogement.css'

function FicheLogement() {
    
    const { id } = useParams()
    const logement = logements.find((item) => item.id === id)

    // Si le logement n'existe pas avec cet ID, on redirige vers la page 404
    if (!logement) {
        return <Navigate to="/404" replace />
    }

    return (
        <main className="logement-page">
            {/* Le carrousel d'images */}
            <Slideshow images={logement.pictures} title={logement.title} />

            <div className="logement-header">
                {/* Infos principales : Titre, Localisation et Tags */}
                <div className="logement-info">
                    <h1 className="logement-title">{logement.title}</h1>
                    <p className="logement-location">{logement.location}</p>
                    <div className="logement-tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Hôte et Note sous forme d'étoiles */}
                <div className="logement-host-rating">
                    <div className="host-info">
                        <span className="host-name">{logement.host.name}</span>
                        <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                    </div>
                    <div className="rating">
                        <Rating rating={logement.rating} />
                    </div>
                </div>
            </div>

            {/* Les deux dépliants (Collapse) */}
            <div className="logement-collapses">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Équipements" content={logement.equipments} />
            </div>
        </main>
    )
}

export default FicheLogement