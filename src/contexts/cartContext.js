import React, { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";

export const CartContext = createContext();

const Storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = { cartItems: Storage };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({ type: "ADD", payload });
    return state.cartItems;
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE", payload });
    return state.cartItems;
  };

  const increaseQuantity = (payload) => {
    dispatch({ type: "INCQTY", payload });
    return state.cartItems;
  };

  const decreaseQuantity = (payload) => {
    dispatch({ type: "DECQTY", payload });
    return state.cartItems;
  };

  const clearBasket = () => {
    dispatch({ type: "CLEAR", payload: undefined });
    return state.cartItems;
  };

  const getCartItems = () => {
    return state.cartItems;
  };

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getCartItems,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
