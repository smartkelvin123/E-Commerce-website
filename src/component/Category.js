import React from "react";

const Category = ({ id, title , OnCategoryClick}) => {
  return (
    <div>
      <li key={id} onClick={() => OnCategoryClick(id)} >{title} </li>
    </div>
  );
};

export default Category;
