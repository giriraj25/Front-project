import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(""); // Track username
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    setIsAuthenticated(true);
    setUsername(user.name);
    navigate("/products"); // Redirect to ProductList after login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="App">
      <Navbar
        isAuthenticated={isAuthenticated}
        username={username}
        onLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={<Register onLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path="/products"
          element={
            isAuthenticated ? (
              <ProductList />
            ) : (
              <Register onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
