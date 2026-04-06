import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Success from "./pages/Success";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      {/* Global UI (like navbar / cart button) */}
      <button onClick={() => setCartOpen(true)}>
        Open Cart
      </button>

      {/* Your pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail setOpen={setCartOpen} />}/>
        <Route path="/success" element={<Success />} />
        
      </Routes>

      {/* Cart Drawer (always mounted) */}
      <ProductDetail setOpen={setCartOpen} />
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </>
  );
}