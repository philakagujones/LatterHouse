import React from 'react'
import '../styles/landing.css'
import Navbar from './navbar'

function Landing() {
  return (
    <div className='background'>
      <div className="container">
        <Navbar />
        <div className="centertext">
          <span>
            <h1>LATTER HOUSE</h1>
            <h4>VANCOUVER</h4>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Landing