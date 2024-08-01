import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { insertCart } from '../../store/cartSlice';

function ItemSection() {

  const apiUrl = process.env.REACT_APP_API_URL;

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState([])
    const [cartData, setCartData] = useState([])

    const dispatch = useDispatch()

    const cartHandler = (productId) => {
      setCartData((prev) => ([...prev, productId]))
      dispatch(insertCart(cartData))
    }
  
    const items = async () => {
      try {
        const data = await fetch(`${apiUrl}/sellingItems`);
      const displayData = await data.json();
      if (!displayData) {
        setLoading(true)
      } else {
        setLoading(false)
        setItem(displayData)
      }
      
      } catch (error) {
        console.log(error)
        setLoading(true)
      }
      
      
    }

  useEffect(() => {
      items()
      
    }, []);  
  
    if (loading) {
      return <div className = 'flex justify-center items-center min-h-screen bg-gray-300'>Loading...</div>;
    }
  

  else return (
   
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-custom-green-3'>
          {item.map((data) => (
            <div key={data._id} className="border rounded-lg p-4 shadow-lg bg-custom-cream">
              <img
              src = {data.productImage}
              alt = {data.productName}
              className='w-full h-48 object-cover rounded-t-lg shadow'
              />
              <h2 className='text-xl font-bold mt-2'>{data.productName}</h2>
              <p className="text-gray-700 mt-1"> &#x20B9; {data.price}</p>
              <button
              onClick = {() => cartHandler(data._id)}
               className='mt-3 bg-custom-green-1 text-white border-2 border-custom-green-1 px-4 py-2 rounded-full hover:text-black hover:bg-transparent'>Add to Cart</button>
              <Link to ={`/product/${data._id}`} className='mt-3 ml-2 bg-custom-green-2 text-white border-2 border-custom-green-2 px-4 py-2 rounded-full hover:text-black hover:bg-transparent' target="_blank">Buy now</Link>

            </div>
          ))}
        </div>
    </div>

  );
}

export default ItemSection;
