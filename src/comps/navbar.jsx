import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <li>
          <Link className="link" to="/shop">SHOP</Link>
        </li>
      
        <li>
          <Link className='link' to="/lookbook">LOOKBOOK</Link>
        </li>
      
        <li>
          <Link className='link' to="/about">ABOUT</Link>
        </li>
      
        <li>
          <Link className='link' to="/">CART</Link>
        </li>
    </div>
  )
}

export default Navbar