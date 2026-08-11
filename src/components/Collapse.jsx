import { useState } from 'react'
import arrowUp from '../assets/arrow_back_ios-24px.png'
import '../styles/Collapse.css'

function Collapse({ title, content }) {
    
    const [isOpen, setIsOpen] = useState(false)

    
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse-container">
            
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img 
                    src={arrowUp} 
                    alt="Flèche de déroulement" 
                    className={`collapse-arrow ${isOpen ? 'rotate' : ''}`} 
                />
            </div>

            
            {isOpen && (
                <div className="collapse-content">
                    
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Collapse