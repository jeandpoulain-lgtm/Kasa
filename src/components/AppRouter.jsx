import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FicheLogement from '../pages/FicheLogement'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<FicheLogement/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter