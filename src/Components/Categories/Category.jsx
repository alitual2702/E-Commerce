import React from "react";
import "./catgory.css";
import Cat_items from "./Cat_items.jsx";
const Category = () => {
  return (
    <section className="categories">
      <Cat_items
        catImg="images/features/f1.png"
        catDiscription="Free Shipping"
      />
      <Cat_items
        catImg="images/features/f2.png"
        catDiscription="Online Order"
      />

      <Cat_items
        catImg="images/features/f3.png"
        catDiscription="Save Money"
      />

      <Cat_items
        catImg="images/features/f4.png"
        catDiscription="Promotions"
      />

      <Cat_items
        catImg="images/features/f5.png"
        catDiscription="Happy Sell"
      />

      <Cat_items
        catImg="images/features/f6.png"
        catDiscription="F24/7 Support"
      />


    </section>
  );
};

export default Category;
