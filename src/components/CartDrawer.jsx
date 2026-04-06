import { useCart } from "../store/CartContext";
import "../cart.css";

export default function CartDrawer({ open, setOpen }) {
  const { cart, removeFromCart, total } = useCart();

async function handleCheckout() {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart }),
  });

  const data = await res.json();
  window.location.href = data.url;
}


  return (
    <>
    
      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <div className={`cart ${open ? "open" : ""}`}>
        <h2>Cart</h2>

        {cart.map((item, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <div>{item.name}</div>
            <div>${item.price}</div>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}

        <hr />
        <div>Total: ${total}</div>

<button
  style={{ marginTop: 20 }}
  onClick={handleCheckout}
  disabled={cart.length === 0}
>
  Checkout
</button>

        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    </>
  );
}