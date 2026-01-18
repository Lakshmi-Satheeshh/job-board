import React from "react";
import assets from "../../assets/assets"; // make sure the path & extension are correct
import "./Category.css";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams(); // dynamic route param
  const category = assets.categories[categoryName]; // access the object

  if (!category) return <div>Category not found</div>;

  return (
    <div className="category">
      <h2 className="category-title">{category.title}</h2>
      <div className="category-grid">
        {category.images.map((imgObj, index) => (
          <div key={index} className="category-card">

            <img src={imgObj.src} alt={`${category.title} ${index}`} />
            <p className="image-title">{imgObj.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;