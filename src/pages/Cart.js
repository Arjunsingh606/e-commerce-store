import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux';

const Cart = () => {
 const products = useSelector(state => state.cart)


  return (
    <>
       <h3>Cart Items</h3>
       <div className="cartWrapper">
           {
             products.map(product => (
             
              <div className="cartCard">
               <img src={product.image} alt="load ho rahi hai" />
               <h5>{product.title}</h5>
               <h5>{product.price}</h5>
               <button className="btn">Remove</button>
              </div>
             ))
           }

       </div>
    </>
  )
}

export default Cart;
