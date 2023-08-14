import React from 'react';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='logo'></div>
        <ul className='link_list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
            <li><Link to="/jewellery">Jewellery</Link></li>
            <li><Link to="/mens-clothing">Men's clothing</Link></li>
            <li><Link to="/womens-clothing">Women's clothing</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
        <div className='logout_button'>Logout</div>
      
    </div>
  )
}

export default Navbar
