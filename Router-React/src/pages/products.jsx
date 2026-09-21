import { Link } from "react-router-dom";
import products from "../data/products";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <b>{product.name}</b> - ${product.price}{" "}

            <Link to={`/products/${product.id}`}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}