import React from 'react';
import Gamings from "../../Gamings.json";
import "../../App.css";

const Games = () => {
  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>Games</h1>
        <button>
          <a href="/">See All Games</a>
        </button>
      </div>
      <div className="Shop">
        {Gamings &&
          Gamings.map((game) => {
            return (
              <div key={game.id}>
                <div className="Shop_container">
                  <div className="Shop_wrapper">
                    <a href="/">
                      <div className="Shop_image">
                        <img src={game.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Shop_text">
                        <h3>{game.itemInfo.name}</h3>
                        <p>{game.itemInfo.description1}</p>
                      </div>
                      <div className="Recently_price">
                        <h3>${game.itemInfo.newItemPrice}</h3>
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

export default Games