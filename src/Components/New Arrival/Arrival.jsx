import React from "react";
import ProductsEach from "../Feature Products/ProductsEach";
const Arrival = () => {
  return (
    <section className="feature-pro-sec">
      <h1 className="feature-title">New Arrivals</h1>
      <p className="feature-paragraph">Summer Collection New Modern Design</p>

      <div className="product-main-container">
      <ProductsEach
          cardImg="images/products/n1.jpg"
          cardTitle="adidas"
          cardName="Casual Astronaut Shirts"
          cartPrice="$55"
        />
        <ProductsEach
          cardImg="images/products/n2.jpg"
          cardTitle="Nike"
          cardName="Casual Astronaut Shirts"
          cartPrice="$70"
        />
        <ProductsEach
          cardImg="images/products/n3.jpg"
          cardTitle="Gucci"
          cardName="Casual Astronaut Shirts"
          cartPrice="$100"
        />
        <ProductsEach
          cardImg="images/products/n4.jpg"
          cardTitle="Ralph Lauren"
          cardName="Cartoon Astronaut T-Shirts"
          cartPrice="$145"
        />
        <ProductsEach
          cardImg="images/products/n5.jpg"
          cardTitle="Versace"
          cardName="Casual Astronaut Shirts"
          cartPrice="$90"
        />
        <ProductsEach
          cardImg="images/products/n6.jpg"
          cardTitle="Allen Solly"
          cardName="Solid Men Grey Regular Shorts"
          cartPrice="$110"
        />
        <ProductsEach
          cardImg="images/products/n7.jpg"
          cardTitle="Tommy Hilfiger"
          cardName="Casual Astronaut Shirts"
          cartPrice="$170"
        />
        <ProductsEach
          cardImg="images/products/n8.jpg"
          cardTitle="Calvin Klein"
          cardName="Casual Half Sleeve Shirts"
          cartPrice="$78"
        />
       
      </div>
    </section>
  );
};

export default Arrival;
