import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductModal from "./ProductModal"; // Import ProductModal component

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Store the selected product
  const [showModal, setShowModal] = useState(false); // Control the modal visibility

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:8000/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id} // Ensure this is unique
            className="product-item"
            onClick={() => handleProductClick(product)}
          >
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {showModal && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default ProductList;
