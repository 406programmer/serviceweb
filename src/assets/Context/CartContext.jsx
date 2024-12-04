// CartContext.jsx
import React, { createContext, useReducer, useContext } from "react";

// Initial State (Empty Cart)
const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Add null/undefined check for payload
      if (!action.payload || !action.payload.id || !action.payload.price) {
        console.warn("Invalid item: Missing required properties", action.payload);
        return state;
      }

      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        // Item exists, increase quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        
        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice + action.payload.price,
          totalQuantity: state.totalQuantity + 1
        };
      } else {
        // New item
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalPrice: state.totalPrice + action.payload.price,
          totalQuantity: state.totalQuantity + 1
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
        totalQuantity: state.totalQuantity - itemToRemove.quantity
      };

    case "UPDATE_QUANTITY":
      const updatedCartItems = state.items.map(item => 
        item.id === action.payload.id 
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      const newTotalPrice = updatedCartItems.reduce(
        (total, item) => total + (item.price * item.quantity), 
        0
      );

      return {
        ...state,
        items: updatedCartItems,
        totalPrice: newTotalPrice,
        totalQuantity: updatedCartItems.reduce((total, item) => total + item.quantity, 0)
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

// Create Context
const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext;