import Header from './components/Header'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'
import './styles/App.css'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}