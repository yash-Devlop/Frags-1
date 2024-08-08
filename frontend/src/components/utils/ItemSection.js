import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { insertCart } from '../../store/cartSlice';

function ItemSection() {

  const apiUrl = process.env.REACT_APP_API_URL;

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])
    const [cartData, setCartData] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartHandler = (productId) => {
      setCartData((prev) => ([...prev, productId]))
      dispatch(insertCart(cartData))
    }

    const buyNowHandler = (productId) => {
      navigate(`/product/${productId}`)
    }
  
    const items = async () => {
      try {
        const data = await fetch(`${apiUrl}/sellingItems`);
      const displayData = await data.json();
        setItem(displayData)
        setLoading(false)
      
      } catch (error) {
        console.log(error)
      }
      
      
    }

  useEffect(() => {
      items()
      
    }, []);  
  
    if (loading) return (
      <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
    </div>)
    
  

  else return (
   
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 '>
          {item.map((data) => (
            <div key={data._id} className="border rounded-lg p-4 shadow-lg border-2 border-black ">
              <img
              src = {data.productImage}
              alt = {data.productName}
              className='w-full h-48 object-cover rounded-t-lg shadow'
              />
              <h2 className='text-xl font-bold mt-2'>{data.productName}</h2>
              <p className="text-gray-700 mt-1"> &#x20B9; {data.price}</p>
              <button
              onClick = {() => cartHandler(data._id)}
               className='mt-3 bg-transparent text-black border border-black px-4 py-2 rounded hover:text-white hover:bg-black transition-colors'>Add to Cart</button>
              {/* <Link to ={`/product/${data._id}`} className='mt-3 ml-2 bg-black text-white border border-black px-4 py-2 rounded hover:text-black hover:bg-transparent transition-colors' target="_blank">Buy now</Link> */}
              <button onClick ={() => buyNowHandler(data._id)} className='mt-3 mx-2 bg-black text-white border border-black px-4 py-2 rounded hover:text-black hover:bg-transparent transition-colors' target="_blank">Buy now</button>
              

            </div>
          ))}
        </div>
    </div>


  );
}

export default ItemSection;
