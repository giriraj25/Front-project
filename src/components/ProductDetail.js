import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductDetail({ match }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/products/${match.params.id}`
      );
      setProduct(res.data);
    };
    fetchProduct();
  }, [match.params.id]);

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductDetail;
