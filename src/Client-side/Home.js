import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './main.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Shop Now</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
