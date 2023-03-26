import React from 'react'
import { useState } from 'react'
import '../styles/style.scss'

function Header() {

    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

  return (

    <nav className='navbar'>
        <div className={`nav ${navActive ? '' : 'active'}`}>
            <a href='#' className='nav-link'>About</a>
            <a href='#' className='nav-link'>News</a>
            <a href='#' className='nav-link'>Services</a>
            <a href='#' className='nav-link'>Team</a>
            <a href='#' className='nav-link'>Make Enquiry</a>
        </div>
        <button className='btn hidden' onClick={toggleNav}>
            <span className='icon'> {navActive ? 'X' : '☰'}</span>
        </button>
        <div className='contact-btn'>
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
        </div>
    </nav>
  )
}

export default Header
