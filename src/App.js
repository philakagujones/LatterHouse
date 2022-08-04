import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Lookbook from './pages/lookbook'
import About from './pages/about'
import Privacy from './pages/privacy'
import Terms from './pages/terms'
import Faq from './pages/faq'
import Size from './pages/sizeguide'
import Products from './pages/products'
import Product from './pages/product'

function App() {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/shop' element={<Shop />} />
    <Route path='/lookbok' element={<Lookbook />} />
    <Route path='/about' element={<About />} />
    <Route path='/privacy' element={<Privacy />} />
    <Route path='/terms' element={<Terms />} />
    <Route path='/faq' element={<Faq />} />
    <Route path='/size' element={<Size />} />
    <Route path='/products' element={<Products />} />
    <Route path='/products/:id' element={<Product />} />
  </Routes>
}

export default App