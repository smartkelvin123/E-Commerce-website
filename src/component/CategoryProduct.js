import React from "react";

const CategoryProduct = ({ title, image, specs, features, price, stock }) => {
  return (
    <article>
      <div className="category-product-title">{title}</div>
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
            <h3>capacity</h3>
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
          <label>stock level:{stock}</label>
          <label>FREE DELEVERY</label>
        </div>
        <div className="category-product-action">
          <button>View Products</button>
          <button>Add to cart</button>
        </div>
      </aside>
    </article>
  );
};

export default CategoryProduct;
