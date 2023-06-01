import React, { useState, useEffect } from 'react'
import './products.css';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {
        const  dispatch = useDispatch();

        const[products, setProducts] = useState([]);

        // console.log("cartSliceReducer",add)
        useEffect(()=>{
             const fetchproducts = async ()=>{
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                console.log(data);
                setProducts(data);

             }
             fetchproducts();
        }, []);

    //  const handleAdd = (product)=>{
    //         dispatch(add(product));
    //     };


  return (
      <div className='productswrapper'>
        {
            products.map(product =>(
                <div className='card' key={product.id}>
                   <img className='card-image' src={product.image} alt=''/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>dispatch(add(product))} className='btn' >Add to cart</button>

                </div>
            ))
        }
      </div>
  )
}

export default Products;