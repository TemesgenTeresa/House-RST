import React,{useEffect,useState } from 'react'
import './Navbar.css'

import logo from '../../assets/Images/logo.png'

const Navbar = () => {

const[sticky,setSticky] = useState(false);
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
}

)


  return (
    <nav className = {`container ${sticky? 'dark-nav' : ''}`}>
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
