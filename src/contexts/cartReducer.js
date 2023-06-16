const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const cartReducer = (state, action) => {
  let index = -1;

  if (action.payload)
    index = state.cartItems.findIndex((x) => x.id === action.payload.id);

  let newItems = [...state.cartItems];

  switch (action.type) {
    case "ADD":
    case "INQTY":
      if (index === -1) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        // newItems.push({ ...action.payload, quantity: 1 });
      } else {
        // newItems[index].quantity++;
        state.cartItems[index].quantity++;
      }
      break;

    case "REMOVE":
      if (index !== -1) {
        state.cartItems.splice(index, 1);
        // newItems = state.cartItems.filter((x) => x.id !== action.payload.id);
      }
      break;

    case "DECQTY":
      if (index > -1) {
        if (state.cartItems[index].quantity > 1)
          state.cartItems[index].quantity--;
        // newItems[index].quantity--;
      }
      break;

    case "CLEAR":
      // state.cartItems = [];
      newItems = [];
      break;

    default:
  }

  state.cartItems = newItems;
  Storage(newItems);

  return state;
};
