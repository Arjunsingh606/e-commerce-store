import React from 'react'
import './cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
 const dispatch = useDispatch();
 const products = useSelector(state => state.cart)

 const handleRemove = (productId)=>{
     dispatch(remove(productId))
}
// const handleQuantity = (product)=>{
//   return product = product+1;

// }
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
               <h5>Quantity:</h5>
               <button onClick={() => handleRemove(product.id)} className="cart-btn">Remove</button>
              </div>
             ))
           }

       </div>
    </>
  )
}

export default Cart;
