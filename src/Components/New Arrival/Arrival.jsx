import React from "react";
import ProductsEach from "../Feature Products/ProductsEach";
import { arrivalObj } from "../Feature Products/Featureproductobj";

const Arrival = () => {
  return (
    <section className="feature-pro-sec">
      <h1 className="feature-title">New Arrivals</h1>
      <p className="feature-paragraph">Summer Collection New Modern Design</p>

      <div className="product-main-container">
        {arrivalObj.map((arrItem, arrkey) => {
          return (
            <ProductsEach
              keyIndex={arrkey}
              cardImg={arrItem.cardImg}
              cardTitle={arrItem.cardTitle}
              cardName={arrItem.cardName}
              cartPrice={arrItem.cartPrice}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Arrival;
