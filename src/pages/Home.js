import React from 'react'
import Products from '../Components/Products';
const Home = () => {
  return (
    <>
      <div>
        <h2 className='heading'>Welcome to React redux toolkit</h2>
      </div>
      <section>
        <h3>Products</h3>
        <Products/>
      </section>
    </>
  )
}

export default Home;
