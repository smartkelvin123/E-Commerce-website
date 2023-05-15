import React, { useState, useEffect } from "react";
import Category from "./component/Category";
import { fetcher } from "./fetcher";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("/categories");
      setCategories(data);
    };
    fetchData();
  }, []);

  const handleleClick = (id) => {
    fetch("http://localhost:3001/products?catid=" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  const renderCategory = () => {
    return categories.map((categories) => {
      return (
        <Category
          key={categories.id}
          title={categories.title}
          OnCategoryClick={() => handleleClick(categories.id)}
        />
      );
    });
  };

  const renderProduct = () => {
    return products.map((product) => {
      return (
        <p>
          {/* {product.id} */}
          {product.title}
        </p>
      );
    });
  };

  return (
    <>
      <header>My Store</header>
      <section>
        <nav>
          <ul>{categories && renderCategory()}</ul>
        </nav>
        <article>
          <h1>
            <span>Products</span>
            <ul>{products && renderProduct()}</ul>
          </h1>
        </article>
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
