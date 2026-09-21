import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Home</h1>

      <p>Welcome to Amazon</p>

      <Link to="/products">
        Go to Products
      </Link>
    </div>
  );
}