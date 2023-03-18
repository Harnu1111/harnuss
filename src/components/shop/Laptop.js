import React from 'react';
import Computers from "../../Computers.json";
import "../../App.css";

const Laptop = () => {
  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>Laptops</h1>
        <button>
          <a href="/">See All Laptops </a>
        </button>
      </div>
      <div className="Shop">
        {Computers &&
          Computers.map((laptop) => {
            return (
              <div key={laptop.id}>
                <div className="Shop_container">
                  <div className="Shop_wrapper">
                    <a href="/">
                      <div className="Shop_image">
                        <img src={laptop.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Shop_text">
                        <h3>{laptop.itemInfo.name}</h3>
                        <p>{laptop.itemInfo.description1}</p>
                      </div>
                      <div className="Shop_price">
                        <h3>${laptop.itemInfo.newItemPrice}</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Laptop