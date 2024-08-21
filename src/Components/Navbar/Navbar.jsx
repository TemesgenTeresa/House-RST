import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Images/logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo not found" className="logo" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>House RST service</li>
        <li>Contact us</li>
        <li>
          <Link to="/register">  {/* Link to the registration page */}
            <button>Login/Sign up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
