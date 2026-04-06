import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../store/CartContext";




export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div style={{ padding: 40 }}>Not found</div>;

  return (
    <div style={{ padding: 40, maxWidth: 900 }}>
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

          <button>Buy Now</button>
          <button onClick={() => addToCart(product)}>
  Add to Cart
</button>
        </div>
      </div>
    </div>
  );
}