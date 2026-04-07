import { useState } from "react";
import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import CartDrawer from "../components/CartDrawer";
import NavBar from "../components/NavBar";

export default function Home() {
  const [sort, setSort] = useState("default");

  let sorted = [...products];

  if (sort === "price-low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ padding: 16 }}>
        <CartDrawer />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="default">Sort</option>
        <option value="price-low">Price ↑</option>
        <option value="price-high">Price ↓</option>
      </select>

      <ProductGrid products={sorted} />
      <NavBar />
    </div>
  );
}