import React from 'react'
import '../styles/landing.css'
import Navbar from './navbar'
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className='background'>
      <div className="container">
        <Navbar />
        <div className="centertext">
          <span>
            {/* <Link to="/"> */}
              <h1 className='latter'>LATTER HOUSE</h1>
              <h4 className='latter'>VANCOUVER</h4>
            {/* </Link> */}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Landing