import{ createContext, useReducer } from "react";

// Initial State (Empty Cart)
const initialState = [];

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload]; // Add item to the cart
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id); // Remove item from the cart
    default:
      return state; // Return unchanged state if no matching action
  }
};

// Create Context
const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
