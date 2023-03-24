import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Product from "./page/Product";
import Cart from "./page/Cart";
import Navvy from "./components/Navvy";
import SmartPhoneShop from "./components/shop/SmartPhoneShop";
import Laptop from "./components/shop/Laptop";
import Speaker from "./components/shop/Speakers";
import Games from "./components/shop/Games";
import Televison from "./components/shop/Televison";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navvy />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/smartPhoneShop" element={<SmartPhoneShop />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/games" element={<Games />} />
          <Route path="/televison" element={<Televison />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
