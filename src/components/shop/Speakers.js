import React from 'react';
import Sspeakers from "../../Sspeakers.json";
import "../../App.css";

const Speakers = () => {
  return (
    <div className="Shopping">
      <div className="Shop_title">
        <h1>Speakers</h1>
        <button>
          <a href="/">See All Speakers </a>
        </button>
      </div>
      <div className="Shop">
        {Sspeakers &&
          Sspeakers.map((speaker) => {
            return (
              <div key={speaker.id}>
                <div className="Shop_container">
                  <div className="Shop_wrapper">
                    <a href="/">
                      <div className="Shop_image">
                        <img src={speaker.itemInfo.itemImg[0]} alt="phone" />
                      </div>
                      <div className="Shop_text">
                        <h3>{speaker.itemInfo.name}</h3>
                        <p>{speaker.itemInfo.description1}</p>
                      </div>
                      <div className="Shop_price">
                        <h3>${speaker.itemInfo.newItemPrice}</h3>
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

export default Speakers