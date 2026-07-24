import logements from '../data/logements.json'

function Home() {
    return (
        <div>
            <h1>Bienvenue sur l'Accueil</h1>
            <ul>
                {logements.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home