import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaTrash } from 'react-icons/fa';

function Dashboard() {

    const apiUrl = process.env.REACT_APP_API_URL; 
    const {user, isAuthenticated} = useSelector((state) => state.auth)

    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)

    const removeHandler = async(productId) => {
          await fetch(`${apiUrl}/removeproduct`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({id: productId})
        })
    }

    const fetchUserProducts = async () => {
        try {
            const response = await fetch(`${apiUrl}/userdashboard`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({seller: user.user})
            })
            const displayData = await response.json()
            setproducts(displayData)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
        fetchUserProducts()
    },[removeHandler])

    if(!isAuthenticated){
       return( <div className = 'min-h-screen text-4xl font-mono bg-gray-500 flex justify-center items-center'>Please Login</div>
    )}

    if(loading){
      return (<div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
      </div>)
    }
  else return (
    <div className="max-w-6xl mx-auto p-6 py-2 bg-transparent rounded-lg ">
        <h2 className = 'md:text-8xl sm:text flex justify-center text-black '><b>Dashboard</b></h2>
      <h2 className="md:text-2xl font-semibold text-blacks mb-4 mt-4"> Welcome {user.user}</h2>

      <div>
        {products.map((product) => (
      <div className = 'py-2'>
          <div key={product._id} className="md:flex justify-between items-center py-2 bg-transparent border-2 border-black rounded shadow-lg">
            <img
             src = {product.productImage}
             alt = {product.productName}
             className = 'h-64 md:w-auto md:object-cover lg:object-fit mx-10 rounded shadow-md border border-black bg-white'
             />
            <span className="text-2xl sm:m-4 w-64 text-gray-500"><b>{product.productName}</b></span>
            <span className="text-lg text-gray-500">&#x20B9; {product.price}</span>
            <button 
                onClick = {() => removeHandler(product._id)}
                className="bg-red-500 text-white px-3 mx-5 py-1 rounded">
              <FaTrash size = '25' />
            </button>
          </div>
      </div>

        ))}
      </div>
    </div>
  )
}

export default Dashboard
