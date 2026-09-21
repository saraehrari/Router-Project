import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/protectedRoute";

import Home from "./pages/Home";
import Products from "./pages/products";
import ProductsDetails from "./pages/productsdtiles";
import Login from "./pages/login";
import Checkout from "./pages/Checkout";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function handleLogin() {
    setIsAuth(true);
  }

  function handleLogout() {
    setIsAuth(false);
  }

  return (
    <div>
      <Navbar
        isAuth={isAuth}
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductsDetails />}
        />

        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;