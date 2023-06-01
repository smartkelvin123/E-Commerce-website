import React, { useState, useEffect } from "react";
import Category from "./component/Category";
import { getCategories, getProducts, fetcher } from "./fetcher";
import "./App.css";

import CategoryProduct from "./component/CategoryProduct";

function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });
  const [products, setProducts] = useState({ errorMessage: "", data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);

  const handleClick = async (id) => {
    const responseObject = await getProducts(id);
    setProducts(responseObject);
  };

  const renderCategories = () => {
    return categories.data.map((category) => (
      <Category
        key={category.id}
        title={category.title}
        onCategoryClick={() => handleClick(category.id)}
      />
    ));
  };

  const renderProducts = () => {
    return products.data.map((product) => (
      <CategoryProduct key={product.id} {...product}>
        {product.title}
      </CategoryProduct>
    ));
  };

  return (
    <>
      <header>Our Store</header>
      <section>
        <nav>
          {categories.errorMessage && (
            <div>Error: {categories.errorMessage}</div>
          )}
          <ul>{categories.data && renderCategories()}</ul>
        </nav>
        <main>
          <h1>Products</h1>
          {products.errorMessage && <div>Error: {products.errorMessage}</div>}
          {products.data && renderProducts()}
        </main>
      </section>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}

export default App;

// using for loop rather than a map function
// const renderCategory = () => {
//   const categories = [];
//   for (let i = 0; i < results.length; i++) {
//     categories.push(<Category key={results.id} title={results[i].title} />);
//   }
//   return categories;
// };
