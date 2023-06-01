import React from "react";
import Products from "../Components/Products";

const Home = () => {
//   const Loading = () => {
//     return <>Loading....</>;
//   };
//   const ShowProduct = () => {
  //   return (
  //     <>
  //       <div className="buttonsForItem">
  //         <button className="btn1">All</button>
  //         <button className="btn2">Men's Clothing</button>
  //         <button className="btn3">Electronics</button>
  //         <button className="btn4">Jewellary</button>
  //       </div>
  //     </>
  //   );
  // };
  return (
    <>
      <div>
        <h2 className="heading">Latest Products</h2>
      </div>
      <hr />
      {/* <div className="buttons">
           {Loading ? <Loading /> : <ShowProduct />}
      </div> */}
      <section>
        <Products />
      </section>
    </>
  );
};

export default Home;
