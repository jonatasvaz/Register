import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
          <header className='header'>
         <nav>
             <h1>mini<span>storage</span></h1>
             <ul>
                 <li > <NavLink to="/">HOME</NavLink>  </li>
                 <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
             </ul>
         </nav>
     </header>
    </div>
  )
}

export default Navbar
