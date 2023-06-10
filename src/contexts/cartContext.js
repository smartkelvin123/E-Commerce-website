import React, { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

export const CartContext = createContext();
const initialState = { cartItem: [] };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({
      type: "ADD",
      payload,
    });
  };

  const removeProduct = (payload) => {
    dispatch({
      type: "REMOVE",
      payload,
    });
  };

  const increaseQuantity = (payload) => {
    dispatch({
      type: "INQTY",
      payload,
    });
  };
  const decreaseQuantity = (payload) => {
    dispatch({
      type: "DECQTY",
      payload,
    });
  };

  const ClearBasket = () => {
    dispatch({
      type: "CLEAR",
      payload: undefined,
    });
  };
  const getItem = () => {
    return state.cartItem;
  };

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    getItem,
    ClearBasket,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
