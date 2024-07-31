import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {

    const apiUrl = process.env.REACT_APP_API_URL; 
    const {user, isAuthenticated} = useSelector((state) => state.auth)

    const [products, setproducts] = useState([])

    const removeHandler = async(productId) => {
        await fetch(`${apiUrl}/removeproduct`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({id: productId})
        })
        console.log(productId)
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

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
        fetchUserProducts()
    },[])

    if(!isAuthenticated){
       return( <div>Please Login</div>
    )}
  else return (
    <div className="max-w-6xl mx-auto p-6 py-2 bg-custom-green-1 rounded-lg shadow-md">
        <h2 className = 'text-8xl flex justify-center text-custom-green-3 bg-gray-200 border-2 border-black'><b>Dashboard</b></h2>
      <h2 className="text-2xl font-semibold text-blacks mb-4 m"> Welcome {user.user}</h2>

      <div>
        {products.map((product) => (
      <div className = 'py-2'>
          <div key={product._id} className="flex justify-between items-center py-2 bg-custom-cream border-2 border-black">
            <img
             src = {product.productImage}
             alt = {product.productName}
             className = 'h-64 w-auto object-cover mx-10 rounded shadow-md bg-white'
             />
            <span className="text-2xl w-64 text-custom-green-3"><b>{product.productName}</b></span>
            <span className="text-lg">&#x20B9; {product.price}</span>
            <button 
                onClick = {() => removeHandler(product._id)}
                className="bg-red-500 text-white px-3 mx-5 py-1 rounded">
              Remove
            </button>
          </div>
      </div>

        ))}
      </div>
    </div>
  )
}

export default Dashboard
