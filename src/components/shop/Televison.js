import React from 'react';
import Tvs from "../../Tvs.json";
import "../../App.css";

const Televison = () => {
  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>Games</h1>
        <button><a href='/'>See All Tvs</a></button>
      </div>
      <div className="Shop">
        {Tvs &&
          Tvs.map((tv) => {
            return (
              <div key={tv.id}>
                <div className="Shop_container">
                  <div className="Shop_wrapper">
                    <a href="/">
                      <div className="Shop_image">
                        <img src={tv.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Shop_text">
                        <h3>{tv.itemInfo.name}</h3>
                        <p>{tv.itemInfo.description1}</p>
                      </div>
                      <div className="Shop_price">
                        <h3>${tv.itemInfo.newItemPrice}</h3>
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
};

export default Televison;
