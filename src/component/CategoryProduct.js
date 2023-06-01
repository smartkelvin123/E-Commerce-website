import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryProduct = ({
  id,
  title,
  image,
  specs,
  features,
  price,
  stock,
}) => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate(`products/${id}`);
  };

  return (
    <article>
      <div className="category-product-title">
        <Link to={`products/${id}`}>{title}</Link>
      </div>
      <figure>
        <div className="category-product-image-container">
          <img src={require(`../../public/asset/${image}`)} alt={title} />
        </div>
      </figure>
      <aside>
        <div className="category-product-info-dimension">
          <h3>Dimension</h3>
          <label>{specs.dimension}</label>
        </div>
        {specs.capacity && (
          <div className="category-product-info-capacity">
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
          </div>
        )}
        <div className="category-product-info-features">
          <h3>Features</h3>
          <ul>
            {features?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </aside>
      <aside className="category-product-finance">
        <div className="category-product-finance-price">&pound;{price}</div>
        <div className="category-product-info-stock">
          <p>Stock</p>
          <label>Stock level: {stock}</label>
        </div>
        <div className="category-product-action">
          <button onClick={handleViewProducts}>View Products</button>
          <button>Add to Basket</button>
        </div>
      </aside>
    </article>
  );
};

export default CategoryProduct;
