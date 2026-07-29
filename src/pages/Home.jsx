import Banner from '../components/Banner'
import Card from '../components/Card'
import homeBannerImg from '../assets/home-banner.png'
import logements from '../data/logements.json'

function Home() {
    return (
        <div>
            <Banner image={homeBannerImg} text="Chez vous, partout et ailleurs" />
            <div className="cards-grid">
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        image={logement.cover}
                        title={logement.title}
                    />
                ))}    
            </div>
        </div>
    )
}

export default Home