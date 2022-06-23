import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import LandingPage from "./Component/LandingPage";
import PlaceOdder from "./Component/PlaceOdder";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <BrowserRouter>
    <CartContext.Provider value={[cart, setCart]}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/odder" element={<PlaceOdder/>} />
      </Routes>
      </CartContext.Provider>
      </BrowserRouter>
  );
}

export default App;
