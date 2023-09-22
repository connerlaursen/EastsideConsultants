import React, { useState } from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Engineering from '../pages/Engineering'
import Surveying from '../pages/Surveying'
import Contact from '../pages/Contact'
import Planning from '../pages/Planning'
import Location from '../pages/Location'
import Resources from '../pages/Resources'
import "../App.css"
// import Footer from './Footer'


function Navbar() {
    const [page, setPage] = useState("Home")
    const handleClick = (click) => {
        const {target} = click
        setPage (target.textContent)
    }
  return (
    <div>
        <nav>
            <div className="navWrapper">
                <ul className="navLinks">
                {page === "Home" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Home</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Home</a></li>)}
                {page === "Services" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Services???</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Services</a></li>)}
                {page === "Contact" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Contact</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Contact</a></li>)}
                {page === "Engineering" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Engineering</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Engineering</a></li>)}
                {page === "Surveying" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Surveying</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Surveying</a></li>)}
                {page === "Planning" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Planning</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Planning</a></li>)}
                {page === "Location" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Location</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Location</a></li>)}
                {page === "Resources" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Resources</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Resources</a></li>)}
                
                </ul>
            </div>
        </nav>
        {
            {
                "Home":<Home/>,
                "Services":<Services/>,
                "Engineering":<Engineering/>,
                "Surveying":<Surveying/>,
                "Contact":<Contact/>,
                "Planning":<Planning/>,
                "Location":<Location/>,
                "Resources":<Resources/>
            }
            [page]
        }
       
    </div>
  )
}

export default Navbar
