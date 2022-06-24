import React, { useState } from "react";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authantication from "./Component/Auth/Authantication";
import Cart from "./Component/Cart";
import LandingPage from "./Component/LandingPage";
import PlaceOdder from "./Component/PlaceOdder";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <div>
      <BrowserRouter>
    <CartContext.Provider value={[cart, setCart]}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/odder" element={<PlaceOdder/>} />
        <Route path="/login" element={<Authantication/>} />
      </Routes>
      </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
