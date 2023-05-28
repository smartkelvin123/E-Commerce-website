import React from "react";

const Category = ({ id, title, onCategoryClick }) => {
  return (
    <div>
      <li key={id} onClick={() => onCategoryClick(id)}>
        {title}{" "}
      </li>
    </div>
  );
};

export default Category;
