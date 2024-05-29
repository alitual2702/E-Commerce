import React from "react";
import "./feature.css";
import ProductsEach from "./ProductsEach";
import { featureObj } from "./Featureproductobj";
const Feature = () => {
  return (
    <section className="feature-pro-sec">
      <h1 className="feature-title">Featured Products</h1>
      <p className="feature-paragraph">Summer Collection New Modern Design</p>

      <div className="product-main-container">
        {featureObj.map((item, key) => {
          return (
            <ProductsEach
              keyIndex={key}
              cardImg={item.cardImg}
              cardTitle={item.cardTitle}
              cardName={item.cardName}
              cartPrice={item.cartPrice}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Feature;
