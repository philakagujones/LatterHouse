import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/product.css'

function Product() {
  const { id } = useParams()
  return (
    <div>Product {id}</div>
  )
}

export default Product