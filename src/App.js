import React, { useState, useEffect } from "react";
import { getCategories } from "./fetcher";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import CheckOut from "./components/checkOut";
import Basket from "./components/basket";
import Category from "./components/Category";
import Layout from "./components/Layout";
import Home from "./components/Home";
import OrderConfirmation from "./components/OrderConfirmation";
import SearchResult from "./components/SearchResult";

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
            <Route path="categories/:categoryId" element={<Category />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="orderconfirmation" element={<OrderConfirmation />} />
            <Route path="/search" element={<SearchResult />} />
            {""}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
