import React from "react";
import "./news.css";
const New = () => {
  return (
    <section className="form-section">
      <div className="left-content">
        <h2 className="content-form-title">Sign Up For Newsletters</h2>
        <p className="content-form-discription">
          Get E-mail updates about our latest shop and
          <span className="form-offer">special offers.</span>
        </p>
      </div>
      <form className="form-input">
        <input
          type="text"
          name="text"
          placeholder="Your email address"
          id="text"
        />
        <button id="signup">Sign Up</button>
      </form>
    </section>
  );
};

export default New;
