import React, { useEffect } from "react";
import { getProductsByQuery } from "../fetcher";
import { useSearchParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";

const SearchResult = () => {
  const [products, setProducts] = React.useState({
    errorMessage: "",
    data: [],
  });

  let [searchParam] = useSearchParams();
  const query = searchParam.get("s");

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsByQuery(query);
      setProducts(responseObject);
    };
    fetchData();
  }, [query]);

  const renderProducts = () => {
    if (products.data.length > 0) {
      return products.data.map((p) => (
        <CategoryProduct key={p.id} {...p}>
          {p.title}
        </CategoryProduct>
      ));
    } else {
      return <div>No results found</div>;
    }
  };

  return (
    <div>
      {products.errorMessage && <div>Error: {products.errorMessage}</div>}

      {renderProducts()}
    </div>
  );
};

export default SearchResult;
