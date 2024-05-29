import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="title">
      <img src="/images/hero4.png" alt="" className="heroimg" />
      <div className="title-box">
        <span className="title-first-line">Trade-in-offer</span>
        <h1 className="title-sec-line">Super value deals</h1>
        <h1 className="title-sec-line-sec">On all products</h1>
        <p className="title-paragraph">
          Save more with coupons & upto 70% off!
        </p>
        <button className="title-shop">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
