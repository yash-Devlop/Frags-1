import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BuyNowPage() {
  const apiUrl = process.env.REACT_APP_API_URL;
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${apiUrl}/product/${id}`)
                const data = await response.json()
                setProduct(data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])
    
    if (loading) {
        return <div className = 'min-h-screen bg-white flex items-center justify-center'>Loading...</div>;
      }
    
      if (!product) {
        return <div>Product not found</div>;
      }
    
      return (

        <div className="min-h-screen bg-gray-100 p-4">
          <div className=" mx-auto min-h-screen">
            <div className=" p-6 rounded-lg shadow-md flex flex-col md:flex-row min-h-screen bg-gray-200">
              <div className="md:w-1/2 p-4 shadow-md bg-white">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="md:w-1/2 p-4 flex flex-col">
                <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
                <p className="text-gray-700 mb-4">{product.productDescription}</p>
                <div className="flex items-center mb-4">
                </div>
                <div className="text-2xl font-bold text-green-600 mb-4"> &#x20B9; {product.price}</div>
                <div className="text-gray-500 mb-4">Sold by: {product.sellerName}</div>
                <button
                  className="w-1/4 bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition-colors font-bold"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default BuyNowPage;
