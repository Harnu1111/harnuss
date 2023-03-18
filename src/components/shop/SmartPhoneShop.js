import React from 'react';
import "../../App.css";
import Phones from "../../Phones.json";

const SmartPhoneShop = () => {
  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>SmartPhones</h1>
        <button>
          <a href="/">See All SmartPhones</a>
        </button>
      </div>
      <div className="Shop">
        {Phones &&
          Phones.map((phone) => {
            return (
              <div key={phone.id}>
                <div className="Shop_container">
                  <div className="Shop_wrapper">
                    <a href="/">
                      <div className="Shop_image">
                        <img src={phone.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Shop_text">
                        <h3>{phone.itemInfo.name}</h3>
                        <p>{phone.itemInfo.description1}</p>
                      </div>
                      <div className="Shop_price">
                        <h3>${phone.itemInfo.newItemPrice}</h3>
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

export default SmartPhoneShop