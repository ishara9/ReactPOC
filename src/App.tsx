import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);

  return (
    <>
      <div>app</div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
    </>
  );
}

export default App;
