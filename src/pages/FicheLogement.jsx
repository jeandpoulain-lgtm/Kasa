import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow'
import '../styles/FicheLogement.css'

function FicheLogement() {
    
    const { id } = useParams()
    const logement = logements.find((item) => item.id === id)

    // Optionnel : si l'ID n'existe pas dans le JSON, on peut gérer l'erreur plus tard (ex: rediriger vers 404)
    if (!logement) {
        return <p>Logement non trouvé</p>
    }

    return (
        <main className="logement-page">
            {/* Emplacement du carrousel plus tard */}
            <Slideshow images={logement.pictures} title={logement.title} />

            <div className="logement-header">
                <div className="logement-info">
                    <h1 className="logement-title">{logement.title}</h1>
                    <p className="logement-location">{logement.location}</p>
                    <div className="logement-tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="logement-host-rating">
                    <div className="host-info">
                        <span className="host-name">{logement.host.name}</span>
                        <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                    </div>
                    <div className="rating">
                        <span>Note : {logement.rating}/5</span>
                    </div>
                </div>
            </div>

            <div className="logement-collapses">
                {/* Les composants Collapse iront ici */}
            </div>
        </main>
    )
}

export default FicheLogement