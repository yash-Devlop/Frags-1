import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function ProductForm() {

  const apiUrl = process.env.REACT_APP_API_URL;

  const [productName, setProductName ] = useState('')
  const [productImage, setProductImage] = useState('')
  const [price, setPrice] = useState('')
  const [productDescription, setProductDescription] = useState('')

  const {user} = useSelector((state) => (state.auth))

    const submitHandler = async (e) => {
        e.preventDefault()
        const response = await fetch(`${apiUrl}/products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({productName, productImage, price, productDescription, sellerName: user.user})
        })
        console.log(response)
    }    

  return (
    <div className = 'flex items-center justify-center min-h-screen'>
    <div className=" bg-custom-black p-8 w-1/4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center text-white">Seller Form</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label htmlFor="Product Name" className="block text-gray-50 font-medium mb-2">Product Name</label>
          <input
            type="text"
            id = "Product Name"
            value = {productName}
            onChange = {(e) => setProductName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Product Image" className="block text-gray-50 font-medium mb-2">Product Image</label>
          <input
            type="text"
            id ="Product Image"
            value = {productImage}
            onChange = {(e) => setProductImage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="url"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Product Image" className="block text-gray-50 font-medium mb-2">Price</label>
          <input
            type="text"
            id ="Product Image"
            value = {price}
            onChange = {(e) => setPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Price"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Product Description" className="block text-gray-50 font-medium mb-2">Product Description</label>
          <input
            type="text"
            id = "Product Description"
            value = {productDescription}
            onChange = {(e) => setProductDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Description"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-custom-green-3 text-white p-3 rounded-lg hover:bg-custom-green-1 transition-colors mt-4"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ProductForm;

