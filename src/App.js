import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Product from "./page/Product";
import Cart from "./page/Cart";
import Navvy from "./components/Navvy";


function App() {

  return (
    <div className="App">
    
      <BrowserRouter>
      <Navvy/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
