import React from 'react'
import { useSelector } from 'react-redux'
import ProductForm from '../utils/ProductForm'

function ProductFormPage() {

    const {isAuthenticated} = useSelector((state) => (state.auth))

  return (
    <div>
      {isAuthenticated? <ProductForm /> : <div className = 'min-h-screen bg-gray-500 text-4xl font-mono flex justify-center items-center'>Please login</div>}
    </div>
  )
}

export default ProductFormPage
