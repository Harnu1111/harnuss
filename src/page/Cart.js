import React from "react";
import "../App.css";

const Cart = () => {
  return (
    <div className="Cart_container">
      <div className="Cart_wrapper">
        <div className="Cart_product">
          <h1>Shopping Cart</h1>
          <div className="Cart_product_wrapper">
            <div className="Cart_detail">
              <div className="Cart_index">
                <div className="Index_line"></div>{" "}
                <div className="index">01</div>{" "}
              </div>
              <div className="Cart_image">
                <img
                  src={require("../IMAGES/5e90a856c7c8f9000434dd97.webp")}
                  alt=""
                />
              </div>
              <div className="Cart_product_title">
                <h3>iPhone 11 pro max</h3>
                <span className="Cart_product_description">
                  {" "}
                  <h3>iPhone 11 pro max - space gray</h3>
                </span>
                <span className="Cart_color">
                  <h4> Color :</h4>
                  <p>Space gray</p>
                </span>
                <div className="Cart_unit">
                  <h4> Quantity</h4>
                  <span className="Cart_quantity">
                    - <p>1</p> +
                  </span>
                </div>
              </div>
            </div>
            <div className="Cart_price">
              <span className="Cart_total_price">$565</span>
              <span className="Cart_amount">1 x 565</span>
            </div>
            <div className="Cart_pay">Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
