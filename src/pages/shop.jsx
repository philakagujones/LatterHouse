import React from 'react'
import Footer from '../comps/footer'
import Latter from '../comps/latter'
import Navbar from '../comps/navbar'
import '../styles/shop.css'

function Shop() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Latter />
      </div>

      <Footer />
    </>
  )
}

export default Shop