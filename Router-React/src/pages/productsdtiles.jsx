import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-details">
        <h1>Product not found</h1>

        <button onClick={() => navigate("/products")}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>

      <p>${product.price}</p>

      <p>{product.description}</p>

      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <button onClick={() => navigate("/checkout")}>
        Go to Checkout
      </button>
    </div>
  );
}
