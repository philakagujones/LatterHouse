import React from 'react'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/faq.module.css'

import { UilHome } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'



function Sizes() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="centertext">
          <p>
            IF IT FITS IT FITS FR
          </p>
        </div>
      </div>

      <div className={styles.home}>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/">
          <UilHome />
        </Link>
      </div>

      <Footer />
    </>
  )
}

export default Sizes