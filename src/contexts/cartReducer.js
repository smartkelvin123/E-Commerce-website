export const cartReducer = (state, action) => {
  let index = -1;

  if (action.payload) {
    index = state.cartItem.findIndex((x) => x.id === action.payload.id);
  }

  switch (action.type) {
    case "ADD":
    case "INQTY":
      if (index === -1) {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      } else {
        state.cartItem[index].quantity++;
      }
      return { ...state };

    case "REMOVE":
      if (index !== -1) {
        state.cartItem.splice(index, 1);
      }
      return { ...state };

    case "DEQTY":
      if (index !== -1 && state.cartItem[index].quantity > 1) {
        state.cartItem[index].quantity--;
      }
      return { ...state };

    case "CLEAR":
      return { ...state, cartItem: [] };

    default:
      return state;
  }
};
