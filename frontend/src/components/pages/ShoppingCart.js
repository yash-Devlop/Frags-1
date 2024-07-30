import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function ShoppingCart() {

    const {data} = useSelector((state) => state.cart)
    useEffect(() => {
        console.log(data)
    },[])

  return (
    <div>
        <h2>Shopping Cart</h2>

    </div>
  )
}

export default ShoppingCart
