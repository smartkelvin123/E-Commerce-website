import React from "react";
import styled from "styled-components";

const RelatedProducts = () => {
  // Dummy data for related products (replace with your own data)
  const relatedProducts = [
    {
      id: 1,
      title: "Related Product 1",
      price: "$19.99",
      image: "product1.jpg",
    },
    {
      id: 2,
      title: "Related Product 2",
      price: "$24.99",
      image: "product2.jpg",
    },
    {
      id: 3,
      title: "Related Product 3",
      price: "$14.99",
      image: "product3.jpg",
    },
  ];

  return (
    <RelatedProductsContainer>
      <RelatedProductsTitle>Related Products</RelatedProductsTitle>
      <RelatedProductsList>
        {relatedProducts.map((product) => (
          <RelatedProductItem key={product.id}>
            <RelatedProductImage src={product.image} alt={product.title} />
            <RelatedProductTitle>{product.title}</RelatedProductTitle>
            <RelatedProductPrice>{product.price}</RelatedProductPrice>
          </RelatedProductItem>
        ))}
      </RelatedProductsList>
    </RelatedProductsContainer>
  );
};

export default RelatedProducts;

const RelatedProductsContainer = styled.div`
  margin-top: 20px;
`;

const RelatedProductsTitle = styled.h3`
  margin-bottom: 10px;
`;

const RelatedProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RelatedProductItem = styled.div`
  width: 25%;
  padding: 10px;
`;

const RelatedProductImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 5px;
`;

const RelatedProductTitle = styled.h4`
  margin-bottom: 5px;
`;

const RelatedProductPrice = styled.span`
  font-weight: bold;
`;
