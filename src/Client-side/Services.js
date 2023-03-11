import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Services() {
 const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://example.com/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Services;
