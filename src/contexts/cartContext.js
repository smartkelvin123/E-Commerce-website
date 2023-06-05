import React, { createContext } from "react";

export const CartContext = createContext();
const initialState = { cartItem: [] };

const cartContextProvider = ({ children }) => {
  return (
    <CartContext.Provider value={initialState}>{children}</CartContext.Provider>
  );
};

export default cartContextProvider;
