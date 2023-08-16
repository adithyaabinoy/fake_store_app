import React from 'react';
import "../styles/Cart.css";

const Cart = () => {
  return (
    <div className='cart_container'>
      <img className="cart_image" src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg'/>
      <span className='cart_btn'>
        <button>+</button>
        <button>-</button>
      </span>
      <p>PRICE</p>
      <button className='dlt_btn'>delete</button>
    </div>
  )
}

export default Cart
