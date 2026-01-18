import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "./Products.css";
import assets from "../../assets/assets.js"; // make sure extension is .js

const Products = () => {
  return (
    <section className="products" id="products">
      <h2 className="products-title">Product Categories</h2>

      <div className="products-grid">
        {assets.products.map((item, index) => (
          <Link
            to={`/category/${item.slug}`} // ✅ navigate to Category page
            key={index}
            className="product-card"
          >
            <div className="product-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p className="product-name">{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;