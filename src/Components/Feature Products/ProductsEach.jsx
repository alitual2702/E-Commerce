import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductsEach = ({
  cardImg,
  cardTitle,
  cardName,
  cartPrice,
  keyIndex,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="feature-products"
      key={keyIndex}
      onClick={() => navigate("/product")}
    >
      <img src={cardImg} alt="" className="product-img" />

      <div className="products-props-div">
        <span className="brand-name">{cardTitle}</span>
        <h3 className="product-name">{cardName}</h3>
        <div className="rating">
          <FaStar className="all-stars" />
          <FaStar className="all-stars" />
          <FaStar className="all-stars" />
          <FaStar className="all-stars" />
          <FaStar className="all-stars" />
        </div>
        <h3 className="products-price">{cartPrice}</h3>
        <FaShoppingCart className="product-shop-cart" />
      </div>
    </div>
  );
};

export default ProductsEach;
