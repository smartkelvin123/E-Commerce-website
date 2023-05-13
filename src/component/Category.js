import React from "react";

const Category = ({ id, title }) => {
  return (
    <div>
      <li key={id}>{title} </li>
    </div>
  );
};

export default Category;
