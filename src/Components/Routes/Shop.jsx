import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductsEach from "../Feature Products/ProductsEach";

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
      <Footer />
    </>
  );
};

export default Shop;
