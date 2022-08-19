import React from 'react'
import '../styles/latter.css'
import { Link } from "react-router-dom";

function Latter() {
  return (
    <div className="centertext">
          <span>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">
              <h1>LATTER HOUSE</h1>
              <h4>VANCOUVER</h4>
            </Link>
          </span>
        </div>
  )
}

export default Latter
