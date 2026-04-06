export default function FilterBar({ setSort }) {
  return (
    <select onChange={(e) => setSort(e.target.value)}>
      <option value="price-low">Price ↑</option>
      <option value="price-high">Price ↓</option>
    </select>
  );
}