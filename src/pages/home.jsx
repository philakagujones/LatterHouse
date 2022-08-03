import React from 'react'
import Footer from '../comps/footer'
import Landing from '../comps/landing'
import Navbar from '../comps/navbar'
import '../styles/home.css'

function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  )
}

export default Home