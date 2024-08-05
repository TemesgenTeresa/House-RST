import React from 'react'
import './Navbar.css'

import logo from '../../assets/Images/logo.png'

const Navbar = () => {
  return (
    <nav className = 'container dark-nav'>
        <img src = {logo} alt ="logo not found" className = "logo" />
        <ul>
            <li>Home</li>
            <li>House RST service</li>
            <li>About Us</li>
             <li>Contact us</li>
            <li><button>Login/Sign up</button></li>
       </ul>
  </nav>
  )
}

export default Navbar
