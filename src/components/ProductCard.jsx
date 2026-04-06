import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div>
        <img src={product.images[0]} style={{ width: "100%" }} />
        <div h1>{product.name}</div>
        <div h1>${product.price}</div>
      </div>
    </Link>
  );
}