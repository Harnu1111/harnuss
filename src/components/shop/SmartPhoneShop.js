import React, {useState} from 'react';
import "../../App.css";
import Phones from "../../Phones.json";
import Product from "../../page/Product";

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
          Phones.map((phones) => {
            return (
              <div key={phones.id} phones={phones}>
                <div className="Shop_container">
                  <div className="Shop_wrapper">
                    <div className="Shop_image">
                      <img src={phones.itemInfo.itemImg[0]} alt="phone" />
                    </div>
                    <div className="Shop_text">
                      <h3>{phones.itemInfo.name}</h3>
                      <p>{phones.itemInfo.description1}</p>
                    </div>
                    <div className="Shop_price">
                      <h3>${phones.itemInfo.newItemPrice}</h3>
                    </div>
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