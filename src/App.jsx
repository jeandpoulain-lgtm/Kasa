import Header from './components/Header'
import AppRouter from './components/AppRouter'
import './styles/App.css'

export default function App() {
  return (
    <div className="app-container">
      {/* On appelle le composant Header ici */}
      <Header />
      {/* On appelle le composant routeur ici */}
      <AppRouter />
      
      {/* Tu pourras ajouter ton Footer ici plus tard */}
    </div>
  )
}