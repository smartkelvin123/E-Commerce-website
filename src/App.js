import React, { useState, useEffect } from "react";

import { getCategories } from "./fetcher";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";
import CheckOut from "./component/checkOut";
import Basket from "./component/basket";
import Category from "./component/Category";
import Layout from "./component/Layout";
import Home from "./component/Home";

function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/categories/:categoryId" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
