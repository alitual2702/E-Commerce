import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductsEach from "../Feature Products/ProductsEach";
import { collection } from "../Feature Products/Featureproductobj";

const Shop = () => {
  return (
    <>
      <Navbar />
      <h1
        style={{ textAlign: "center", margin: "2rem 0", fontSize: "3rem" }}
        className="Coll"
      >
        Our Collection
      </h1>

      <div className="product-main-container shop-sec">
        {
          collection[0].map((productsAll , productsKey) =>{
           return (

             <ProductsEach
               cardImg={productsAll.cardImg}
               cardTitle={productsAll.cardTitle}
               cardName={productsAll.cardName}
               cartPrice={productsAll.cartPrice}
             />
           )
          })
        }
        
      </div>
      <Footer />
    </>
  );
};

export default Shop;
