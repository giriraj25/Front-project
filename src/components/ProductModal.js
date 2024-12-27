import React from "react";
import "../App.css"; // You can style it here

function ProductModal({ product, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} />
        <p>{product.description}</p>
        <p>
          <strong>${product.price}</strong>
        </p>
      </div>
    </div>
  );
}

export default ProductModal;
