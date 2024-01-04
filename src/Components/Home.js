import React, { useEffect, useState } from 'react'

const Home = () => {

const [products, setProducts] = useState([])

useEffect(() => {
  async function fetchResult() {
    try {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()
      setProducts(data.products)
    }
    catch (error) {
      console.log(error);
    }
  }
  fetchResult()
}, [])


function handleAdd(){
  
}
return (
  <div className='home'>
    <h1>All Items</h1>
    <div className='products'>
      {
        products.map((product, index) =>
          <div className='product' key={index}>
            <img src={product.thumbnail} />
            <div className='product-details'>
              <p>Title: {product.title}</p>
              <p>Price: ${product.price}</p>
            </div>
            <button onClick={handleAdd} id='add-btn'>Add to Cart</button>
          </div>)
      }
    </div>
  </div>
)
}

export default Home