import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar" id='navbar'>
        <div className="navleft">
          <Link className="link" to="/shop">STORE</Link>
          <Link className='link' to="/lookbook">LOOKBOOK</Link>
        </div>
        
        <div className="navmid">
          <Link style={{textDecoration: 'none', color: 'white'}} to="/">
            <h3 className='latter'>LATTER HOUSE</h3>
            <h3 className='lattermobile'>LH</h3>
          </Link>
        </div>
        
        
        <div className="navright">
          <Link className='link' to="/about">ABOUT</Link>
          <Link className='link' to="/">CART (0)</Link>
        </div>
    </div>
  )
}

export default Navbar