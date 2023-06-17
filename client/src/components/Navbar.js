import React, { useState } from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'

import Footer from './Footer'
import Contact from '../pages/Contact'
import "../App.css"


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
                {page === "Services" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Services</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Services</a></li>)}
                {page === "Contact" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Contact</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Contact</a></li>)}
                </ul>
            </div>
        </nav>
        {
            {
                "Home":<Home/>,
                "Services":<Services/>,
                
                "Contact":<Contact/>
            }
            [page]
        }
       
    </div>
  )
}

export default Navbar
