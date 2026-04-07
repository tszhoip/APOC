import { useState } from "react";
import Menu from "./Menu";

export default function Navbar({ setCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        
        {/* Left: Menu */}
        <button onClick={() => setMenuOpen(true)}>
          <img src="/icons/menubar.png" alt="menu" className="icon" />
        </button>

        {/* Center: Logo */}
        <div className="text-sm tracking-[0.2em] font-bold">
          <h2>1OFF</h2>
        </div>

        {/* Right: Cart */}
        <button onClick={() => {setCartOpen(true);}}>
          <img src="/icons/cart.png" alt="cart" className="w-5 h-5 opacity-80 hover:opacity-100" />
        </button>
      </nav>

      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}