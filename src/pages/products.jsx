import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
        <h1>products & that</h1>
        <Link to='/products/hat'>Product 1</Link>
        <Link to='/products/shirt'>Product 2</Link>
    </>
  )
}

export default Products