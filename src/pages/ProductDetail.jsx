import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../store/CartContext";
import { useNavigate } from "react-router-dom";



export default function ProductDetail({ setCartOpen }) {
    const { id } = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    
    const product = products.find(p => p.id === Number(id));

    if (!product) return <div style={{ padding: 40 }}>Not found</div>;

    return (
        <div style={{ padding: 40, maxWidth: 900 }}>
            <button
        onClick={() => navigate("/")} // Always go back to home page
        style={{
          marginBottom: 20,
          padding: "8px 16px",
          backgroundColor: "#eee",
          border: "1px solid #ccc",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        ← Back
      </button>
            <h1>{product.name}</h1>

            <div style={{ display: "flex", gap: 20 }}>
                <div style={{ flex: 1 }}>
                    {product.images.map((img, i) => (
                        <img key={i} src={img} style={{ width: "100%", marginBottom: 10 }} />
                    ))}
                </div>

                <div style={{ flex: 1 }}>
                    <h2>${product.price}</h2>
                    <p>{product.description}</p>

                    <button
                        onClick={() => {
                            console.log("clicked");
                            addToCart(product);
                            setCartOpen(true);
                        }}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}