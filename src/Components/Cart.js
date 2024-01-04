import React from 'react'

const Cart = () => {
function handleCheckout(){
  alert("Thank you for shopping with us!")
  window.location.assign('');
}

  return (
    <div className='cart-container'>
      <h1>My Cart</h1>
      <div className='container'>
        <div className='cart-product'>
          <img src="https://i.dummyjson.com/data/products/17/thumbnail.jpg" />
          <div className='product-details'>
            <p>Title : iPhone X</p>
            <p>Price : $899</p>
          </div>
          <button id='remove-btn'>Remove from Cart</button>
        </div>
        <div className='checkout-box'>
          <h3 style={{ textAlign: 'center', marginBottom: '3rem' }}>Checkout List</h3>
          <ol>
            <li>1. Tree Oil 30ml<span>$ 12</span> </li>
            <hr />
            <p className='total'><span>Total </span> <span>$ 12</span></p>
            <hr />
          </ol>
          <button className='checkout-btn' onClick={handleCheckout}>Click To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart