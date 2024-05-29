import React, { useReducer } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./cardstyle.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardPage = () => {
  const changState = (state, action) => {
    switch (action.type) {
      case "increase":
        return (state += 1);
      case "decrease":
        return state <= 0 ? (state = 0) : (state -= 1);
    }
  };
  const goBack = useNavigate();
  const [state, dispatch] = useReducer(changState, 0);
  return (
    <div className="parent">
      <Navbar />

      <div className="card-sec">
        <div className="card-wrapper">
          <div className="card-img">
            <img src="/images/products/f1.jpg" />
          </div>
          <div className="card-content">
            <span>Nike</span>
            <h3>Cartoon Astronaut T-Shirts</h3>
            <p>100% Premium Cotton</p>
            <p>Small, Medium, Large, Extra Large, XXL</p>
            <p>White, Black, Heather Grey, Navy, Burgundy</p>
            <h3 className="pricing-product">$78</h3>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "increase" })}
                className="dec"
              >
                +
              </button>
              <p className="quantity-number">{state}</p>
              <button
                onClick={() => dispatch({ type: "decrease" })}
                className="inc"
              >
                -
              </button>
            </div>
            <div className="rated-div">
              <FaStar className="product-rated" />
              <FaStar className="product-rated" />
              <FaStar className="product-rated" />
              <FaStar className="product-rated" />
              <FaStar className="product-rated" />
            </div>
            <button className="backby" onClick={() => goBack(-1)}>
              Go Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CardPage;
