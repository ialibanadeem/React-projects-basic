import React, { useState } from 'react';
import './styles.css';

export default function ProductList() {
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
    image: `https://picsum.photos/200?random=${index + 1}`,
  }));

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="product-wrapper">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.slice(0, visibleCount).map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
