import React from "react";
import "../App.css";

const Product = () => (
  <div className="Product_container">
    <div className="Product_main">
      <div className="Product_image">
        <div className="Product_main_image">
          <img src={require("../IMAGES/cell-big2.jpg")} alt="placeholder" />
        </div>
        <div className="Product_thumbmail">
          <button>
            <img src={require("../IMAGES/goleft.png")} alt="placeholder" />
          </button>
          <img src={require("../IMAGES/cell-big2.jpg")} alt="placeholder" />
          <img src={require("../IMAGES/cell-big2.jpg")} alt="placeholder" />
          <img src={require("../IMAGES/cell-big2.jpg")} alt="placeholder" />
          <button>
            <img src={require("../IMAGES/goright.png")} alt="placeholder" />
          </button>
        </div>
      </div>
      <div className="Product_spec">
        <div className="Product_roll">
          <div className="Product_title">
            <h1>iPhone 13 Pro Max</h1>
            <h2>Apple - iPhone 13 Pro Max 5G 256GB - Sierra Blue</h2>
          </div>
          <div className="specs">
            <div className="Specs_roll">
              <strong>Refurbished</strong>
              <p>
                <strong>Model : </strong>
                <span>MKLV3LL/A</span>
              </p>
            </div>
            <div className="Specs_roll">
              <p>
                <strong>SKU : </strong>
                <span>87294820</span>
              </p>
              <p>
                <strong>Color : </strong>
                <span>Sierra Blue</span>
              </p>
            </div>
          </div>
          <div className="Colors">
            <h1>Other available colors</h1>
            <div className="circles">
              <div className="circle" id="circle1"></div>
              <div className="circle" id="circle2"></div>
              <div className="circle" id="circle3"></div>
              <div className="circle" id="circle4"></div>
            </div>
            <div className="Picked_colors">
              <h2>Picked : </h2>
              <span>Midnight Black</span>
            </div>
          </div>
          <div className="Product_Quantity">
            <h2>Quantity</h2>
            <div className="Quantity">
              <button
                aria-label="button"
                aria-labelledby="button"
                type="button"
              >
                -
              </button>
              <input type="text" value="1"></input>
              <button
                aria-label="button"
                aria-labelledby="button"
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="shipping-pickup">
            <div className="Pickup">
              <h1 id="abt">About this item</h1>
              <ul>
                <li>
                  <div id="hr"></div>Unlocked
                </li>
                <li>
                  <div id="hr"></div>Tested for battery health and guaranteed to
                  come with a battery that exceeds 90% of original capacity.
                </li>
                <li>
                  <div id="hr"></div>Inspected and guaranteed to have minimal
                  cosmetic damage, which is not noticeable when the device is
                  held at arm’s length. Successfully passed a full diagnostic
                  test which ensures like-new functionality and removal of any
                  prior-user personal information.
                </li>
                <li>
                  <div id="hr"></div>Includes a brand new, generic charging
                  cable that is certified Mfi (Made for iPhone) and a brand new,
                  generic wall plug that is UL certified for performance and
                  safety. Also includes a SIM tray removal tool but does not
                  come with headphones or a SIM card.
                </li>
                <li>
                  <div id="hr"></div>Backed by the same one-year satisfaction
                  guarantee as brand new Apple products.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Product_pay">
          <div className="Total">
            <p>$1234</p>
          </div>
          <div className="Pay_text">
            <p>Delivery Friday, July 29. Order within 18 hrs 28 mins</p>
          </div>
          <button className="Add_cart">
            <img src={require("../IMAGES/add.png")} alt="" />{" "}
            <p>Add to Cart </p>
          </button>
          <button className="Buy_now">Buy Now</button>
        </div>
      </div>
    </div>
    <div className="Product_description"></div>
  </div>
);

export default Product;
