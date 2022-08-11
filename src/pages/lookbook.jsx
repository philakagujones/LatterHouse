import React from 'react'
import Footer from '../comps/footer'
import Latter from '../comps/latter'
import Navbar from '../comps/navbar'
import '../styles/lookbook.css'

function Lookbook() {
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

export default Lookbook