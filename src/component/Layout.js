import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = ({ categories }) => {
  const renderCategories = () => {
    return categories.data.map((category) => (
      <li key={category.id}>
        <Link to={`/categories/${category.id}`}>{category.title}</Link>
      </li>
    ));
  };

  return (
    <div>
      <header>Our Store</header>
      <section>
        <nav>
          {categories.errorMessage && (
            <div>Error: {categories.errorMessage}</div>
          )}
          <ul>{categories.data && renderCategories()}</ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </section>
      <footer>
        <Link to="/">Home</Link> | <Link to="/basket">basket</Link>
      </footer>
    </div>
  );
};

export default Layout;
