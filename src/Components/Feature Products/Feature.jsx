import React from "react";
import "./feature.css";
import ProductsEach from "./ProductsEach";
const Feature = () => {
  return (
    <section className="feature-pro-sec">
      <h1 className="feature-title">Featured Products</h1>
      <p className="feature-paragraph">Summer Collection New Modern Design</p>

      <div className="product-main-container">
        <ProductsEach
          cardImg="images/products/f1.jpg"
          cardTitle="adidas"
          cardName="Cartoon Astronaut T-Shirts"
          cartPrice="$78"
        />
        <ProductsEach
          cardImg="images/products/f2.jpg"
          cardTitle="Nike"
          cardName="Cartoon Astronaut T-Shirts"
          cartPrice="$70"
        />
        <ProductsEach
          cardImg="images/products/f3.jpg"
          cardTitle="Gucci"
          cardName="Cartoon Astronaut T-Shirts"
          cartPrice="$75"
        />
        <ProductsEach
          cardImg="images/products/f4.jpg"
          cardTitle="Ralph Lauren"
          cardName="Cartoon Astronaut T-Shirts"
          cartPrice="$80"
        />
        <ProductsEach
          cardImg="images/products/f5.jpg"
          cardTitle="Versace"
          cardName="Cartoon Astronaut T-Shirts"
          cartPrice="$90"
        />
        <ProductsEach
          cardImg="images/products/f6.jpg"
          cardTitle="Allen Solly"
          cardName="Men Regular Fit Checkered Casual Shirt"
          cartPrice="$115"
        />
        <ProductsEach
          cardImg="images/products/f7.jpg"
          cardTitle="Tommy Hilfiger"
          cardName="Men Regular Fit Beige Cotton Blend Trousers"
          cartPrice="$180"
        />
        <ProductsEach
          cardImg="images/products/f8.jpg"
          cardTitle="Calvin Klein"
          cardName="Women  Pure Cotton Purple T-Shirt"
          cartPrice="$50"
        />


      </div>
    </section>
  );
};

export default Feature;
