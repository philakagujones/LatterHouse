import React from 'react'
import '../styles/landing.css'
import Navbar from './navbar'
import Latter from './latter';

function Landing() {
  return (
    <div className='background'>
      <div className="container">
        <Navbar />
        <Latter />
      </div>
    </div>
  )
}

export default Landing