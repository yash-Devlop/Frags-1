import React from 'react'
import { useSelector } from 'react-redux'
import ProductForm from '../utils/ProductForm'

function ProductFormPage() {

    const {isAuthenticated} = useSelector((state) => (state.auth))

  return (
    <div>
      {isAuthenticated? <ProductForm /> : <div>Please login</div>}
    </div>
  )
}

export default ProductFormPage
